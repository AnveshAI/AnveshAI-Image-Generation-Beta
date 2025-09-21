import { type GeneratedImage, type InsertImage } from "@shared/schema";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import path from "path";

export interface IStorage {
  createGeneratedImage(image: InsertImage): Promise<GeneratedImage>;
  getGeneratedImages(limit?: number, offset?: number): Promise<GeneratedImage[]>;
  getGeneratedImageById(id: string): Promise<GeneratedImage | undefined>;
}

export class FileStorage implements IStorage {
  private assetsDir = "attached_assets";
  private metadataFile = path.join(this.assetsDir, "images-metadata.json");

  constructor() {
    this.ensureAssetsDir();
  }

  private async ensureAssetsDir(): Promise<void> {
    try {
      await fs.mkdir(this.assetsDir, { recursive: true });
    } catch (error) {
      // Directory might already exist, ignore error
    }
  }

  private async loadMetadata(): Promise<GeneratedImage[]> {
    try {
      const data = await fs.readFile(this.metadataFile, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      // File doesn't exist yet, return empty array
      return [];
    }
  }

  private async saveMetadata(images: GeneratedImage[]): Promise<void> {
    await fs.writeFile(this.metadataFile, JSON.stringify(images, null, 2), 'utf-8');
  }

  async createGeneratedImage(insertImage: InsertImage): Promise<GeneratedImage> {
    const id = randomUUID();
    
    // Ensure assets directory exists
    await this.ensureAssetsDir();
    
    const image: GeneratedImage = {
      ...insertImage,
      id,
      imageBase64: insertImage.imageBase64 || null,
      createdAt: new Date(),
    };

    // Store image file in attached_assets folder
    if (insertImage.imageBase64) {
      try {
        const imageBuffer = Buffer.from(insertImage.imageBase64, 'base64');
        const imagePath = path.join(this.assetsDir, `${id}.jpg`);
        
        console.log(`Saving image to: ${imagePath}`);
        await fs.writeFile(imagePath, imageBuffer);
        console.log(`Image saved successfully: ${imagePath}`);
        
        // Update image URL to use local file path
        image.imageUrl = `/api/images/${id}/file`;
      } catch (error) {
        console.error("Error saving image file:", error);
        // Keep the original data URL as fallback
      }
    }

    // Update metadata
    const images = await this.loadMetadata();
    images.unshift(image); // Add to beginning for newest first
    await this.saveMetadata(images);

    console.log(`Image metadata saved for ID: ${id}`);
    return image;
  }

  async getGeneratedImages(limit = 50, offset = 0): Promise<GeneratedImage[]> {
    const images = await this.loadMetadata();
    return images.slice(offset, offset + limit);
  }

  async getGeneratedImageById(id: string): Promise<GeneratedImage | undefined> {
    const images = await this.loadMetadata();
    return images.find(img => img.id === id);
  }
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

// Use File Storage for persistent storage, fallback to memory storage for development
export const storage = process.env.NODE_ENV === 'production' || process.env.USE_FILE_STORAGE === 'true' 
  ? new FileStorage() 
  : new MemStorage();
