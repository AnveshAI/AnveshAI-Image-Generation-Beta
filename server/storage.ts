import { type GeneratedImage, type InsertImage } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createGeneratedImage(image: InsertImage): Promise<GeneratedImage>;
  getGeneratedImages(limit?: number, offset?: number): Promise<GeneratedImage[]>;
  getGeneratedImageById(id: string): Promise<GeneratedImage | undefined>;
}

export class MemStorage implements IStorage {
  private generatedImages: Map<string, GeneratedImage>;

  constructor() {
    this.generatedImages = new Map();
  }

  async createGeneratedImage(insertImage: InsertImage): Promise<GeneratedImage> {
    const id = randomUUID();
    const image: GeneratedImage = {
      ...insertImage,
      id,
      imageBase64: insertImage.imageBase64 || null,
      createdAt: new Date(),
    };
    this.generatedImages.set(id, image);
    return image;
  }

  async getGeneratedImages(limit = 50, offset = 0): Promise<GeneratedImage[]> {
    const images = Array.from(this.generatedImages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(offset, offset + limit);
    return images;
  }

  async getGeneratedImageById(id: string): Promise<GeneratedImage | undefined> {
    return this.generatedImages.get(id);
  }
}

export const storage = new MemStorage();
