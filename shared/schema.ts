import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const generatedImages = pgTable("generated_images", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  prompt: text("prompt").notNull(),
  imageUrl: text("image_url").notNull(),
  imageBase64: text("image_base64"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertImageSchema = createInsertSchema(generatedImages).pick({
  prompt: true,
  imageUrl: true,
  imageBase64: true,
});

export const generateImageSchema = z.object({
  prompt: z.string().min(1, "Prompt is required").max(1000, "Prompt too long"),
});

export type InsertImage = z.infer<typeof insertImageSchema>;
export type GeneratedImage = typeof generatedImages.$inferSelect;
export type GenerateImageRequest = z.infer<typeof generateImageSchema>;
