import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Image } from "lucide-react";

export function LoadingAnimation() {
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("Initializing...");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 8;
        if (newProgress > 95) return 95;
        
        // Update progress text based on progress
        if (newProgress < 25) {
          setProgressText("Connecting to AI model...");
        } else if (newProgress < 45) {
          setProgressText("Analyzing your prompt...");
        } else if (newProgress < 70) {
          setProgressText("Generating image with Stable Diffusion...");
        } else if (newProgress < 90) {
          setProgressText("Applying final touches...");
        } else {
          setProgressText("Almost ready...");
        }
        
        return newProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
        <CardContent className="p-8">
          <div className="mb-6">
            <div className="w-16 h-16 gradient-bg rounded-full mx-auto flex items-center justify-center mb-4 pulse-slow">
              <Image className="w-8 h-8 text-white bounce-light" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Creating your masterpiece...</h3>
            <p className="text-gray-600 dark:text-gray-300">AI is working its magic ✨</p>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-4">
            <Progress value={progress} className="h-3" />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{progressText}</p>
        </CardContent>
      </Card>
    </div>
  );
}
