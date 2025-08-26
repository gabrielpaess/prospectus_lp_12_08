'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Volume1 } from 'lucide-react';

interface MusicWidgetProps {
  audioSrc: string;
  className?: string;
}

export default function MusicWidget({ audioSrc, className = '' }: MusicWidgetProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.10);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Auto-play when component mounts
  useEffect(() => {
    const initAudio = async () => {
      if (audioRef.current) {
        try {
          // Set initial volume
          audioRef.current.volume = volume;
          
          // Try to play automatically
          await audioRef.current.play();
          setIsPlaying(true);
        } catch (error) {
          // Auto-play was prevented, user needs to interact first
          console.log('Auto-play prevented:', error);
          setIsPlaying(false);
          
          // Add event listener for user interaction
          const handleUserInteraction = async () => {
            try {
              await audioRef.current?.play();
              setIsPlaying(true);
              // Remove listeners after successful play
              document.removeEventListener('click', handleUserInteraction);
              document.removeEventListener('keydown', handleUserInteraction);
              document.removeEventListener('touchstart', handleUserInteraction);
            } catch (err) {
              console.log('Play failed after user interaction:', err);
            }
          };
          
          // Listen for user interactions
          document.addEventListener('click', handleUserInteraction);
          document.addEventListener('keydown', handleUserInteraction);
          document.addEventListener('touchstart', handleUserInteraction);
        }
      }
    };
    
    // Small delay to ensure DOM is ready
    const timer = setTimeout(initAudio, 100);
    
    return () => {
      clearTimeout(timer);
      // Cleanup event listeners
      document.removeEventListener('click', initAudio);
      document.removeEventListener('keydown', initAudio);
      document.removeEventListener('touchstart', initAudio);
    };
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const decreaseVolume = () => {
    const newVolume = Math.max(0, volume - 0.1);
    setVolume(newVolume);
  };

  const increaseVolume = () => {
    const newVolume = Math.min(1, volume + 0.1);
    setVolume(newVolume);
  };

  const closeWidget = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-6 left-6 z-50 ${className}`}>
      {/* Audio element */}
      <audio ref={audioRef} src={audioSrc} loop />
      
      {/* Main widget container */}
      <div className="relative group">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#055ec4] to-orange-500 rounded-xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
        
        {/* Widget body */}
        <div className="relative bg-black/80 backdrop-blur-sm border border-[#055ec4]/20 rounded-lg p-3 shadow-md">
          {/* Control buttons */}
          <div className="flex items-center justify-center space-x-2 mb-2">
            {/* Decrease volume button */}
            <button
              onClick={decreaseVolume}
              className="group/btn relative p-2 rounded-md bg-gradient-to-br from-[#055ec4]/20 to-[#055ec4]/10 border border-[#055ec4]/30 hover:border-[#055ec4]/60 transition-all duration-300 hover:scale-105"
            >
              <Volume1 className="w-4 h-4 text-[#055ec4] group-hover/btn:text-[#055ec4]/80" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#055ec4]/10 to-transparent rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Play/Pause button */}
            <button
              onClick={togglePlay}
              className="group/btn relative p-2.5 rounded-md bg-gradient-to-br from-orange-500/20 to-orange-500/10 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-orange-500 group-hover/btn:text-orange-400" />
              ) : (
                <Play className="w-5 h-5 text-orange-500 group-hover/btn:text-orange-400 ml-0.5" />
              )}
              <div className="absolute inset-0 bg-gradient-to-br from-[#055ec4]/10 to-transparent rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Increase volume button */}
            <button
              onClick={increaseVolume}
              className="group/btn relative p-2 rounded-md bg-gradient-to-br from-[#055ec4]/20 to-[#055ec4]/10 border border-[#055ec4]/30 hover:border-[#055ec4]/60 transition-all duration-300 hover:scale-105"
            >
              <Volume2 className="w-4 h-4 text-[#055ec4] group-hover/btn:text-[#055ec4]/80" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#055ec4]/10 to-transparent rounded-md opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Volume display */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#055ec4] to-orange-500 rounded-full transition-all duration-300"
                style={{ width: `${volume * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={closeWidget}
          className="absolute -top-2 -right-2 w-5 h-5 bg-gradient-to-r from-[#055ec4] to-orange-500 rounded-full hover:scale-110 transition-all duration-300 flex items-center justify-center group"
        >
          <div className="w-3 h-3 text-white font-bold text-xs leading-none flex items-center justify-center">
            ×
          </div>
        </button>
      </div>
    </div>
  );
}
