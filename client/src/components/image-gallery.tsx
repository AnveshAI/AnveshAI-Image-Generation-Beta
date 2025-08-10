import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Download } from "lucide-react";
import type { GeneratedImage } from "@shared/schema";

interface ImageGalleryProps {
  images: GeneratedImage[];
  isLoading: boolean;
}

export function ImageGallery({ images, isLoading }: ImageGalleryProps) {
  const [visibleImages, setVisibleImages] = useState(6);

  const loadMore = () => {
    setVisibleImages(prev => prev + 6);
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
    
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  };

  const downloadImage = (image: GeneratedImage) => {
    const link = document.createElement('a');
    link.href = image.imageUrl;
    link.download = `anvesh-ai-${image.id}.jpg`;
    link.click();
  };

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Your Creations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <CardContent className="p-4">
                <Skeleton className="w-full h-48 rounded-xl mb-3" />
                <Skeleton className="h-4 w-3/4 mb-1" />
                <Skeleton className="h-3 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Your Creations</h3>
        <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 gradient-bg rounded-full mx-auto flex items-center justify-center mb-4 opacity-50">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No images yet</h4>
            <p className="text-gray-600 dark:text-gray-300">Start creating your first AI-generated image above!</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Your Creations</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.slice(0, visibleImages).map((image) => (
          <Card key={image.id} className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-4">
              <div className="relative">
                <img 
                  src={image.imageUrl} 
                  alt="AI generated image" 
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Anvesh AI
                </div>
                <Button 
                  size="icon"
                  variant="secondary"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-200"
                  onClick={() => downloadImage(image)}
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2" title={image.prompt}>
                  {image.prompt}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  {formatTimeAgo(image.createdAt)}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Load More Button */}
      {visibleImages < images.length && (
        <div className="text-center mt-12">
          <Button 
            onClick={loadMore}
            variant="outline"
            className="bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-gray-700 dark:text-gray-300 font-semibold py-3 px-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-200 backdrop-blur-sm"
          >
            Load More Images
          </Button>
        </div>
      )}
    </div>
  );
}
