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
  const [isMounted, setIsMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasTriedPlayRef = useRef(false);

  // Ensure we're on the client side (Next.js hydration)
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update volume when it changes
  useEffect(() => {
    if (audioRef.current && isMounted) {
      audioRef.current.volume = volume;
    }
  }, [volume, isMounted]);

  // Main auto-play logic - only runs after component is mounted on client
  useEffect(() => {
    // Don't run on server side
    if (typeof window === 'undefined' || !isMounted) return;
    
    const audio = audioRef.current;
    if (!audio) {
      console.log('Audio element not found, retrying...');
      // Retry after a short delay if audio element isn't ready
      const retryTimer = setTimeout(() => {
        if (audioRef.current) {
          console.log('Audio element found on retry');
        }
      }, 100);
      return () => clearTimeout(retryTimer);
    }

    const tryPlay = async () => {
      // Don't try if already playing
      if (isPlaying) {
        console.log('Audio already playing, skipping...');
        return;
      }
      
      try {
        console.log('Attempting to play audio...', {
          readyState: audio.readyState,
          paused: audio.paused,
          src: audio.src
        });
        
        // Ensure volume is set
        audio.volume = volume;
        
        // Try to play
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          await playPromise;
          console.log('✅ Audio playing successfully!');
          setIsPlaying(true);
          hasTriedPlayRef.current = true;
        } else {
          // If play() returns undefined, check if it's actually playing
          if (!audio.paused) {
            console.log('✅ Audio is playing (paused check)');
            setIsPlaying(true);
            hasTriedPlayRef.current = true;
          }
        }
      } catch (error: any) {
        console.log('❌ Auto-play prevented or failed:', error?.message || error);
        setIsPlaying(false);
        // Don't set hasTriedPlayRef to false so we can retry
      }
    };

    // Try to play when audio can play
    const handleCanPlay = () => {
      console.log('Audio can play - attempting to start');
      tryPlay();
    };

    // Try to play when audio data is loaded
    const handleLoadedData = () => {
      console.log('Audio data loaded - attempting to start');
      tryPlay();
    };

    // Try to play when audio metadata is loaded
    const handleLoadedMetadata = () => {
      console.log('Audio metadata loaded');
      tryPlay();
    };

    // Handle errors
    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      const audioEl = e.target as HTMLAudioElement;
      if (audioEl.error) {
        console.error('Audio error code:', audioEl.error.code);
        console.error('Audio error message:', audioEl.error.message);
      }
    };

    // Try immediately
    if (audio.readyState >= 2) {
      // HAVE_CURRENT_DATA or higher
      tryPlay();
    }

    // Add event listeners
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('error', handleError);

    // Try after delays as fallback (multiple attempts)
    const timer1 = setTimeout(() => {
      if (!isPlaying) {
        console.log('Fallback 1s: attempting to play after delay');
        tryPlay();
      }
    }, 1000);

    const timer2 = setTimeout(() => {
      if (!isPlaying) {
        console.log('Fallback 2s: attempting to play after delay');
        tryPlay();
      }
    }, 2000);

    const timer3 = setTimeout(() => {
      if (!isPlaying) {
        console.log('Fallback 3s: attempting to play after delay');
        tryPlay();
      }
    }, 3000);

    // Try when window is fully loaded
    const handleWindowLoad = () => {
      if (!isPlaying) {
        console.log('Window loaded - attempting to play');
        tryPlay();
      }
    };

    if (document.readyState === 'complete') {
      handleWindowLoad();
    } else {
      window.addEventListener('load', handleWindowLoad);
    }

    // Try when document is ready
    const handleDOMContentLoaded = () => {
      if (!isPlaying) {
        console.log('DOM content loaded - attempting to play');
        tryPlay();
      }
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    } else {
      // DOM already loaded
      setTimeout(() => {
        if (!isPlaying) {
          handleDOMContentLoaded();
        }
      }, 100);
    }

    // Try when page becomes visible (Page Visibility API)
    const handleVisibilityChange = () => {
      if (!document.hidden && !isPlaying) {
        console.log('Page became visible - attempting to play');
        tryPlay();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Handle user interaction for autoplay policy
    const handleUserInteraction = async () => {
      if (!isPlaying && audio) {
        console.log('User interaction detected - attempting to play');
        await tryPlay();
        // Remove listeners after successful play
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('mousemove', handleUserInteraction);
      }
    };

    // Add user interaction listeners if not playing
    if (!isPlaying) {
      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('keydown', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { once: true });
      document.addEventListener('mousemove', handleUserInteraction, { once: true });
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      if (audio) {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('canplaythrough', handleCanPlay);
        audio.removeEventListener('loadeddata', handleLoadedData);
        audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audio.removeEventListener('error', handleError);
      }
      window.removeEventListener('load', handleWindowLoad);
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      document.removeEventListener('mousemove', handleUserInteraction);
    };
  }, [audioSrc, volume, isPlaying, isMounted]);

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

  // Don't render audio on server side
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Audio element - Always rendered, even if widget is hidden */}
      <audio 
        ref={audioRef} 
        src={audioSrc} 
        loop 
        autoPlay
        preload="auto"
        playsInline
        onLoadStart={() => {
          console.log('Audio load started');
        }}
        onCanPlay={() => {
          console.log('Audio can play event fired');
        }}
        onLoadedMetadata={() => {
          console.log('Audio metadata loaded event fired');
        }}
      />
      
      {/* Widget UI - Only shown if visible */}
      {isVisible && (
        <div className={`fixed bottom-6 left-6 z-50 ${className}`}>
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
      )}
    </>
  );
}
