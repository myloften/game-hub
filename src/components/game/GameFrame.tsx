'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Maximize2, Minimize2 } from 'lucide-react';

interface GameFrameProps {
  gameUrl: string;
}

export default function GameFrame({ gameUrl }: GameFrameProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // 在全屏模式下阻止所有键盘事件
      if (isFullscreen && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }
    };

    // 监听全屏变化
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === container);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [isFullscreen]);

  const toggleFullscreen = async () => {
    const container = containerRef.current;
    if (!container) return;

    try {
      if (!isFullscreen) {
        await container.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`relative ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : 'aspect-[16/9] w-full'}`}
    >
      <iframe
        ref={iframeRef}
        src={gameUrl}
        className="w-full h-full rounded-lg"
        allowFullScreen
        allow="fullscreen"
        style={{ border: 'none' }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
      <div className="absolute top-4 right-4 flex gap-2">
        <Button
          variant="secondary"
          size="icon"
          className="bg-black/50 hover:bg-black/70"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4 text-white" />
          ) : (
            <Maximize2 className="h-4 w-4 text-white" />
          )}
        </Button>
      </div>
      {!isFullscreen && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/50 text-white px-4 py-2 rounded-lg">
            点击全屏按钮获得最佳游戏体验
          </div>
        </div>
      )}
    </div>
  );
} 