
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, ArrowLeft, Copy, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ApiDocs() {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Code snippet copied to clipboard",
    });
  };

  const baseUrl = window.location.origin;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="relative z-10 p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">AnveshAI API</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">REST API Documentation</p>
              </div>
            </div>
          </div>
          
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview */}
        <section className="mb-12">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-3xl gradient-text">API Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                AnveshAI provides a RESTful API for AI-powered image generation. Generate high-quality images from text prompts and manage your image history.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Base URL</Badge>
                  </div>
                  <code className="text-sm font-mono text-blue-800 dark:text-blue-200">{baseUrl}</code>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Authentication</Badge>
                  </div>
                  <span className="text-sm text-green-800 dark:text-green-200">None required - Completely free</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Endpoints */}
        <section className="space-y-8">
          {/* Generate Image */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Generate Image</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">POST</Badge>
                  <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/api/generate</code>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">Generate a new AI image from a text prompt.</p>
              
              <div>
                <h4 className="font-semibold mb-3">Request Body</h4>
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "prompt": "A beautiful sunset over a calm lake with mountains in the background, highly detailed, 4k, photorealistic"
}`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard('{\n  "prompt": "A beautiful sunset over a calm lake with mountains in the background, highly detailed, 4k, photorealistic"\n}')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Example Request</h4>
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
{`curl -X POST ${baseUrl}/api/generate \\
  -H "Content-Type: application/json" \\
  -d '{
    "prompt": "A majestic dragon flying over a medieval castle"
  }'`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`curl -X POST ${baseUrl}/api/generate \\\n  -H "Content-Type: application/json" \\\n  -d '{\n    "prompt": "A majestic dragon flying over a medieval castle"\n  }'`)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Response (200 OK)</h4>
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
{`{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "prompt": "A majestic dragon flying over a medieval castle",
  "imageUrl": "/api/images/550e8400-e29b-41d4-a716-446655440000/file",
  "imageBase64": "base64-encoded-image-data",
  "createdAt": "2025-01-08T12:34:56.789Z"
}`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard('{\n  "id": "550e8400-e29b-41d4-a716-446655440000",\n  "prompt": "A majestic dragon flying over a medieval castle",\n  "imageUrl": "/api/images/550e8400-e29b-41d4-a716-446655440000/file",\n  "imageBase64": "base64-encoded-image-data",\n  "createdAt": "2025-01-08T12:34:56.789Z"\n}')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Get Images */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Get Image History</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">GET</Badge>
                  <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/api/images</code>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">Retrieve a list of previously generated images.</p>
              
              <div>
                <h4 className="font-semibold mb-3">Query Parameters</h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">limit</code>
                    <span className="text-sm text-gray-600 dark:text-gray-400">(optional) Number of images to return (default: 50, max: 100)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">offset</code>
                    <span className="text-sm text-gray-600 dark:text-gray-400">(optional) Number of images to skip (default: 0)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Example Request</h4>
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
{`curl ${baseUrl}/api/images?limit=10&offset=0`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`curl ${baseUrl}/api/images?limit=10&offset=0`)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Get Image File */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">Get Image File</CardTitle>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">GET</Badge>
                  <code className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/api/images/:id/file</code>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300">Retrieve the actual image file (JPEG format).</p>
              
              <div>
                <h4 className="font-semibold mb-3">Example Request</h4>
                <div className="relative">
                  <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
{`curl ${baseUrl}/api/images/550e8400-e29b-41d4-a716-446655440000/file \\
  -o generated_image.jpg`}
                  </pre>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(`curl ${baseUrl}/api/images/550e8400-e29b-41d4-a716-446655440000/file \\\n  -o generated_image.jpg`)}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Response</h4>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="space-y-2">
                    <div><strong>Content-Type:</strong> <code>image/jpeg</code></div>
                    <div><strong>Cache-Control:</strong> <code>public, max-age=31536000</code></div>
                    <div><strong>Body:</strong> Binary image data</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* JavaScript Example */}
        <section className="mt-12">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">JavaScript Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg overflow-x-auto text-sm">
{`// Generate and download an image
async function generateImage() {
  // Generate image
  const response = await fetch('${baseUrl}/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: 'A majestic dragon flying over a medieval castle'
    })
  });

  const image = await response.json();
  console.log('Generated image:', image);

  // Download the image file
  const imageResponse = await fetch(image.imageUrl);
  const blob = await imageResponse.blob();
  const url = URL.createObjectURL(blob);

  // Create download link
  const a = document.createElement('a');
  a.href = url;
  a.download = \`anvesh-ai-\${image.id}.jpg\`;
  a.click();
}

// Get recent images
async function getRecentImages() {
  const response = await fetch('${baseUrl}/api/images?limit=5');
  const images = await response.json();
  
  images.forEach(image => {
    console.log(\`\${image.prompt} - \${image.createdAt}\`);
  });
}

generateImage();`}
                </pre>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-4 right-4"
                  onClick={() => copyToClipboard(`// Generate and download an image\nasync function generateImage() {\n  // Generate image\n  const response = await fetch('${baseUrl}/api/generate', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      prompt: 'A majestic dragon flying over a medieval castle'\n    })\n  });\n\n  const image = await response.json();\n  console.log('Generated image:', image);\n\n  // Download the image file\n  const imageResponse = await fetch(image.imageUrl);\n  const blob = await imageResponse.blob();\n  const url = URL.createObjectURL(blob);\n\n  // Create download link\n  const a = document.createElement('a');\n  a.href = url;\n  a.download = \`anvesh-ai-\${image.id}.jpg\`;\n  a.click();\n}\n\n// Get recent images\nasync function getRecentImages() {\n  const response = await fetch('${baseUrl}/api/images?limit=5');\n  const images = await response.json();\n  \n  images.forEach(image => {\n    console.log(\`\${image.prompt} - \${image.createdAt}\`);\n  });\n}\n\ngenerateImage();`)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mt-12">
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">AI Image Generation</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Multiple AI services with intelligent fallbacks</li>
                    <li>• Enhanced quality prompts (8k resolution, high detail)</li>
                    <li>• Custom watermarking with AnveshAI branding</li>
                    <li>• High resolution 1024x1024 pixel images</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Storage & Performance</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>• Persistent file system storage</li>
                    <li>• Base64 fallback for reliability</li>
                    <li>• Images cached for 1 year</li>
                    <li>• Comprehensive error handling</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
