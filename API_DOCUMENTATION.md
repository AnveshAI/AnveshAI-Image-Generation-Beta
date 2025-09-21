
# AnveshAI API Documentation

## Overview

AnveshAI provides a RESTful API for AI-powered image generation. The API allows users to generate high-quality images from text prompts and manage their image history.

**Base URL:** `https://your-repl-name.your-username.repl.co` (or `http://localhost:5000` for development)

## Authentication

Currently, no authentication is required. The API is completely free and open to use.

## Endpoints

### 1. Generate Image

Generate a new AI image from a text prompt.

**Endpoint:** `POST /api/generate`

**Request Body:**
```json
{
  "prompt": "string (required, 1-1000 characters)"
}
```

**Example Request:**
```bash
curl -X POST https://your-repl-name.your-username.repl.co/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "prompt": "A beautiful sunset over a calm lake with mountains in the background, highly detailed, 4k, photorealistic"
  }'
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "prompt": "A beautiful sunset over a calm lake with mountains in the background, highly detailed, 4k, photorealistic",
  "imageUrl": "/api/images/550e8400-e29b-41d4-a716-446655440000/file",
  "imageBase64": "base64-encoded-image-data",
  "createdAt": "2025-01-08T12:34:56.789Z"
}
```

**Error Responses:**
- `400 Bad Request`: Invalid prompt (empty, too long, or missing)
- `500 Internal Server Error`: Image generation failed

### 2. Get Image History

Retrieve a list of previously generated images.

**Endpoint:** `GET /api/images`

**Query Parameters:**
- `limit` (optional): Number of images to return (default: 50, max: 100)
- `offset` (optional): Number of images to skip (default: 0)

**Example Request:**
```bash
curl https://your-repl-name.your-username.repl.co/api/images?limit=10&offset=0
```

**Response (200 OK):**
```json
[
  {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "prompt": "A beautiful sunset over a calm lake",
    "imageUrl": "/api/images/550e8400-e29b-41d4-a716-446655440000/file",
    "imageBase64": "base64-encoded-image-data",
    "createdAt": "2025-01-08T12:34:56.789Z"
  },
  {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "prompt": "A futuristic cityscape at night",
    "imageUrl": "/api/images/550e8400-e29b-41d4-a716-446655440001/file",
    "imageBase64": "base64-encoded-image-data",
    "createdAt": "2025-01-08T12:30:45.123Z"
  }
]
```

### 3. Get Specific Image

Retrieve details for a specific image by ID.

**Endpoint:** `GET /api/images/:id`

**Path Parameters:**
- `id`: The unique identifier of the image

**Example Request:**
```bash
curl https://your-repl-name.your-username.repl.co/api/images/550e8400-e29b-41d4-a716-446655440000
```

**Response (200 OK):**
```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "prompt": "A beautiful sunset over a calm lake",
  "imageUrl": "/api/images/550e8400-e29b-41d4-a716-446655440000/file",
  "imageBase64": "base64-encoded-image-data",
  "createdAt": "2025-01-08T12:34:56.789Z"
}
```

**Error Responses:**
- `404 Not Found`: Image with specified ID does not exist

### 4. Get Image File

Retrieve the actual image file (JPEG format).

**Endpoint:** `GET /api/images/:id/file`

**Path Parameters:**
- `id`: The unique identifier of the image

**Example Request:**
```bash
curl https://your-repl-name.your-username.repl.co/api/images/550e8400-e29b-41d4-a716-446655440000/file \
  -o generated_image.jpg
```

**Response (200 OK):**
- Content-Type: `image/jpeg`
- Cache-Control: `public, max-age=31536000`
- Body: Binary image data

**Error Responses:**
- `404 Not Found`: Image file not found

### 5. Debug Files (Development Only)

List all stored image files for debugging purposes.

**Endpoint:** `GET /api/debug/files`

**Example Request:**
```bash
curl https://your-repl-name.your-username.repl.co/api/debug/files
```

**Response (200 OK):**
```json
{
  "files": [
    {
      "name": "550e8400-e29b-41d4-a716-446655440000.jpg",
      "size": 245760,
      "created": "2025-01-08T12:34:56.789Z"
    }
  ]
}
```

## Data Models

### GeneratedImage

```typescript
{
  id: string;                    // UUID v4
  prompt: string;                // User's text prompt (1-1000 chars)
  imageUrl: string;              // URL to access the image file
  imageBase64: string | null;    // Base64 encoded image data
  createdAt: Date;               // ISO 8601 timestamp
}
```

### InsertImage

```typescript
{
  prompt: string;                // User's text prompt
  imageUrl: string;              // URL to access the image
  imageBase64?: string;          // Optional base64 data
}
```

## Features

### AI Image Generation
- **Multiple AI Services**: Uses Pollinations.ai and Hugging Face APIs with fallback to SVG generation
- **Enhanced Quality**: Automatically enhances prompts for better results (8k resolution, high detail)
- **Custom Watermarking**: Removes original watermarks and applies AnveshAI branding
- **High Resolution**: Generates 1024x1024 pixel images

### Storage
- **Persistent Storage**: Images are saved to the file system
- **Base64 Fallback**: Includes base64 data for reliability
- **Metadata Management**: JSON-based metadata storage

### Performance
- **Caching**: Images cached for 1 year with proper headers
- **Error Handling**: Graceful fallbacks when AI services are unavailable
- **Logging**: Comprehensive request logging for monitoring

## Rate Limits

Currently, there are no rate limits implemented. The service is completely free to use.

## Error Handling

All endpoints return appropriate HTTP status codes:
- `200`: Success
- `400`: Bad Request (invalid input)
- `404`: Not Found (resource doesn't exist)
- `500`: Internal Server Error (server-side error)

Error responses include a descriptive message:
```json
{
  "message": "Error description",
  "errors": [/* validation errors if applicable */]
}
```

## Usage Examples

### Generate and Download Image

```javascript
// Generate image
const response = await fetch('/api/generate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'A majestic dragon flying over a medieval castle'
  })
});

const image = await response.json();

// Download the image file
const imageResponse = await fetch(image.imageUrl);
const blob = await imageResponse.blob();
const url = URL.createObjectURL(blob);

// Create download link
const a = document.createElement('a');
a.href = url;
a.download = `anvesh-ai-${image.id}.jpg`;
a.click();
```

### Get Recent Images

```javascript
const response = await fetch('/api/images?limit=5');
const recentImages = await response.json();

recentImages.forEach(image => {
  console.log(`${image.prompt} - ${image.createdAt}`);
});
```

## Development Notes

- The API uses Express.js with TypeScript
- Validation is handled using Zod schemas
- File storage is implemented with fallback to memory storage
- CORS is enabled for cross-origin requests
- The API serves both the web application and REST endpoints on port 5000

## Support

For issues or questions about the API, please check the application logs or contact the development team.
