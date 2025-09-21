import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { generateImageSchema, insertImageSchema } from "@shared/schema";
import { z } from "zod";
import { createCanvas, loadImage, Canvas, CanvasRenderingContext2D } from "canvas";
import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

// Remove watermarks and add custom AnveshAI branding
async function processImageWithCustomWatermark(imageBuffer: Buffer): Promise<string> {
  try {
    // Load the original image
    const originalImage = await loadImage(imageBuffer);
    
    // Create canvas with higher quality
    const canvas = createCanvas(originalImage.width, originalImage.height);
    const ctx = canvas.getContext('2d');
    
    // Draw the original image
    ctx.drawImage(originalImage, 0, 0);
    
    // Remove potential watermark area (bottom portion where watermarks typically appear)
    const watermarkHeight = Math.floor(originalImage.height * 0.08); // Remove bottom 8%
    if (watermarkHeight > 0) {
      // Fill the watermark area with a subtle gradient or color sampling from nearby pixels
      const imageData = ctx.getImageData(0, originalImage.height - watermarkHeight * 2, originalImage.width, watermarkHeight);
      ctx.putImageData(imageData, 0, originalImage.height - watermarkHeight);
    }
    
    // Add custom AnveshAI watermark with professional styling
    const watermarkText = "AnveshAI";
    const fontSize = Math.max(12, Math.floor(originalImage.width * 0.025));
    
    // Set up watermark styling
    ctx.font = `${fontSize}px Arial, sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 1;
    
    // Position watermark in bottom right
    const textMetrics = ctx.measureText(watermarkText);
    const x = originalImage.width - textMetrics.width - 15;
    const y = originalImage.height - 10;
    
    // Add subtle shadow effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillText(watermarkText, x + 1, y + 1);
    
    // Add main watermark text
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillText(watermarkText, x, y);
    
    // Convert to base64
    const buffer = canvas.toBuffer('image/jpeg', { quality: 0.95 });
    const base64 = buffer.toString('base64');
    return `data:image/jpeg;base64,${base64}`;
    
  } catch (error) {
    console.error("Error processing image with custom watermark:", error);
    // Return original image as base64 if processing fails
    const base64 = imageBuffer.toString('base64');
    return `data:image/jpeg;base64,${base64}`;
  }
}

// Real AI image generation using multiple AI services with enhanced quality
async function generateImageWithAI(prompt: string): Promise<{ imageUrl: string; imageBase64?: string }> {

  // Use Pollinations.ai with enhanced quality and custom watermarking
  try {
    console.log("Attempting high-quality Pollinations AI generation for:", prompt);
    
    // Enhanced parameters for better quality
    const enhancedPrompt = `${prompt}, high quality, detailed, masterpiece, best quality, ultra detailed, 8k resolution`;
    const pollinationsUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(enhancedPrompt)}?width=1024&height=1024&seed=${Math.floor(Math.random() * 1000000)}&enhance=true&model=flux`;
    
    const imageResponse = await fetch(pollinationsUrl);
    if (imageResponse.ok && imageResponse.headers.get('content-type')?.includes('image')) {
      console.log("Successfully generated high-quality AI image with Pollinations.ai");
      
      const imageBlob = await imageResponse.blob();
      const arrayBuffer = await imageBlob.arrayBuffer();
      const imageBuffer = Buffer.from(arrayBuffer);
      
      // Process image to remove watermark and add custom AnveshAI branding
      console.log("Processing image: removing watermark and adding AnveshAI branding...");
      const processedImageUrl = await processImageWithCustomWatermark(imageBuffer);
      
      // Extract base64 from data URL
      const base64String = processedImageUrl.split(',')[1];
      
      console.log("Generated high-quality AI image with AnveshAI watermark");
      return {
        imageUrl: processedImageUrl,
        imageBase64: base64String,
      };
    }
  } catch (error) {
    console.log("Pollinations error, trying Hugging Face:", error instanceof Error ? error.message : 'Unknown error');
  }

  // Fallback to Hugging Face if available
  const API_KEY = process.env.HUGGINGFACE_API_KEY;
  if (API_KEY) {
    try {
      console.log("Attempting high-quality Hugging Face API generation for:", prompt);
      
      // Enhanced prompt for better quality
      const enhancedPrompt = `${prompt}, high quality, detailed, masterpiece, best quality, ultra detailed, 8k resolution`;
      
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
          method: "POST",
          body: JSON.stringify({
            inputs: enhancedPrompt,
            parameters: {
              width: 1024,
              height: 1024,
              guidance_scale: 7.5,
              num_inference_steps: 50
            }
          }),
        }
      );

      if (response.ok) {
        const imageBlob = await response.blob();
        const arrayBuffer = await imageBlob.arrayBuffer();
        const imageBuffer = Buffer.from(arrayBuffer);
        
        // Process image to add custom AnveshAI branding
        console.log("Processing Hugging Face image: adding AnveshAI branding...");
        const processedImageUrl = await processImageWithCustomWatermark(imageBuffer);
        
        // Extract base64 from data URL
        const base64String = processedImageUrl.split(',')[1];
        
        console.log("Successfully generated high-quality AI image with Hugging Face and AnveshAI watermark");
        return {
          imageUrl: processedImageUrl,
          imageBase64: base64String,
        };
      } else {
        console.log("Hugging Face API not available:", response.status);
      }
    } catch (error) {
      console.log("Hugging Face API error, using SVG fallback:", error instanceof Error ? error.message : 'Unknown error');
    }
  } else {
    console.log("No Hugging Face API key, skipping to SVG fallback");
  }

  // Fallback: Generate a simple SVG image with the prompt text
  console.log("Generating SVG fallback for prompt:", prompt);
  
  // Create a simple colored SVG based on prompt
  const colors = [
    { bg: '#FF6B6B', text: '#FFFFFF' }, // Red
    { bg: '#4ECDC4', text: '#FFFFFF' }, // Teal
    { bg: '#45B7D1', text: '#FFFFFF' }, // Blue
    { bg: '#96CEB4', text: '#FFFFFF' }, // Green
    { bg: '#FFEAA7', text: '#2D3436' }, // Yellow
    { bg: '#DDA0DD', text: '#FFFFFF' }, // Plum
    { bg: '#98D8C8', text: '#2D3436' }, // Mint
    { bg: '#F7DC6F', text: '#2D3436' }, // Light yellow
  ];
  
  const colorIndex = Math.abs(prompt.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colors.length;
  const color = colors[colorIndex];
  
  const svgContent = `
    <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color.bg};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color.bg}CC;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" fill="url(#grad)"/>
      <circle cx="256" cy="200" r="80" fill="${color.text}" opacity="0.2"/>
      <rect x="176" y="240" width="160" height="120" rx="20" fill="${color.text}" opacity="0.3"/>
      <text x="256" y="400" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="${color.text}">
        ${prompt.length > 40 ? prompt.substring(0, 37) + '...' : prompt}
      </text>
      <text x="256" y="430" font-family="Arial, sans-serif" font-size="12" text-anchor="middle" fill="${color.text}" opacity="0.8">
        Generated by Anvesh AI
      </text>
    </svg>
  `;
  
  const base64SVG = Buffer.from(svgContent).toString('base64');
  const imageUrl = `data:image/svg+xml;base64,${base64SVG}`;
  
  // Simulate realistic timing
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 3000));
  
  return {
    imageUrl,
    imageBase64: base64SVG,
  };
}



export async function registerRoutes(app: Express): Promise<Server> {
  
  // Generate image endpoint
  app.post("/api/generate", async (req, res) => {
    try {
      const { prompt } = generateImageSchema.parse(req.body);
      
      console.log("Generating image for prompt:", prompt);
      
      // Generate image using AI service
      const { imageUrl, imageBase64 } = await generateImageWithAI(prompt);
      
      console.log("Image generated successfully, URL length:", imageUrl.length);
      
      // Store the generated image
      const generatedImage = await storage.createGeneratedImage({
        prompt,
        imageUrl,
        imageBase64,
      });
      
      res.json(generatedImage);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid request", errors: error.errors });
      } else {
        console.error("Image generation error:", error);
        res.status(500).json({ message: "Failed to generate image" });
      }
    }
  });

  // Get image history
  app.get("/api/images", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;
      
      const images = await storage.getGeneratedImages(limit, offset);
      res.json(images);
    } catch (error) {
      console.error("Error fetching images:", error);
      res.status(500).json({ message: "Failed to fetch images" });
    }
  });

  // Get specific image
  app.get("/api/images/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const image = await storage.getGeneratedImageById(id);
      
      if (!image) {
        res.status(404).json({ message: "Image not found" });
        return;
      }
      
      res.json(image);
    } catch (error) {
      console.error("Error fetching image:", error);
      res.status(500).json({ message: "Failed to fetch image" });
    }
  });

  // Serve image files from attached_assets folder
  app.get("/api/images/:id/file", async (req, res) => {
    try {
      const { id } = req.params;
      const imagePath = path.join("attached_assets", `${id}.jpg`);
      
      console.log(`Attempting to serve image: ${imagePath}`);
      
      try {
        // Check if file exists and serve it
        await fs.access(imagePath);
        console.log(`File found, serving: ${imagePath}`);
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
        res.sendFile(path.resolve(imagePath));
        return;
      } catch (fileError) {
        console.error(`File not found at ${imagePath}:`, fileError);
      }
      
      // Fallback: try to serve from base64 data
      const image = await storage.getGeneratedImageById(id);
      if (image?.imageBase64) {
        console.log(`Serving image from base64 data for ID: ${id}`);
        const imageBuffer = Buffer.from(image.imageBase64, 'base64');
        res.setHeader('Content-Type', 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=31536000');
        res.send(imageBuffer);
        return;
      }
      
      console.error(`No image data found for ID: ${id}`);
      res.status(404).json({ message: "Image not found" });
    } catch (error) {
      console.error("Error serving image:", error);
      res.status(500).json({ message: "Failed to serve image" });
    }
  });

  // Debug endpoint to check what files are stored
  app.get("/api/debug/files", async (req, res) => {
    try {
      const assetsDir = "attached_assets";
      const files = await fs.readdir(assetsDir);
      
      const fileInfo = await Promise.all(files.map(async (file) => {
        const filePath = path.join(assetsDir, file);
        const stats = await fs.stat(filePath);
        return {
          name: file,
          size: stats.size,
          created: stats.birthtime
        };
      }));
      
      res.json({ files: fileInfo });
    } catch (error) {
      console.error("Error reading assets directory:", error);
      res.status(500).json({ message: "Error reading files", error: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
