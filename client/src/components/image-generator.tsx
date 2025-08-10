import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";
import type { GeneratedImage } from "@shared/schema";

interface ImageGeneratorProps {
  onImageGenerated: (image: GeneratedImage) => void;
  isGenerating: boolean;
  setIsGenerating: (generating: boolean) => void;
}

export function ImageGenerator({ onImageGenerated, isGenerating, setIsGenerating }: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const generateMutation = useMutation({
    mutationFn: async (prompt: string) => {
      const response = await apiRequest("POST", "/api/generate", { prompt });
      return response.json() as Promise<GeneratedImage>;
    },
    onMutate: () => {
      setIsGenerating(true);
    },
    onSuccess: (data) => {
      onImageGenerated(data);
      queryClient.invalidateQueries({ queryKey: ["/api/images"] });
      toast({
        title: "Success!",
        description: "Image generated successfully!",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate image",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsGenerating(false);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to generate an image",
        variant: "destructive",
      });
      return;
    }

    generateMutation.mutate(prompt.trim());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Prompt Input */}
            <div className="space-y-3">
              <Label htmlFor="prompt" className="text-lg font-semibold text-gray-900 dark:text-white">
                Describe your image
              </Label>
              <Textarea 
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="A beautiful sunset over a calm lake with mountains in the background, highly detailed, 4k, photorealistic..."
                className="min-h-[120px] p-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-200"
                disabled={isGenerating}
              />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Be descriptive for better results. Include style, quality, and detail preferences.
              </p>
              <div className="text-xs text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-2 rounded-lg border border-green-200 dark:border-green-800">
                High-quality AI image generation powered by advanced models - completely free unlimited usage
              </div>
            </div>

            {/* Generate Button */}
            <Button 
              type="submit" 
              disabled={isGenerating || !prompt.trim()}
              className="w-full gradient-bg hover:shadow-2xl hover:-translate-y-1 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 text-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Image
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
