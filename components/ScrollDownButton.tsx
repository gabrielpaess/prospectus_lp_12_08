"use client"

import { FC, useState, useEffect, useCallback } from 'react'

interface ScrollDownButtonProps {
  className?: string
  size?: number
  targetSection?: string
  iconType?: 'heroicon'
}

const ScrollDownButton: FC<ScrollDownButtonProps> = ({ 
  className = "", 
  size = 80,
  targetSection,
  iconType = 'heroicon'
}) => {
  const [isMounted, setIsMounted] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Improved smooth scroll function with better error handling
  const scrollToNextSection = useCallback(() => {
    if (!targetSection) {
      console.warn('No target section specified');
      return;
    }

    const element = document.getElementById(targetSection);
    if (!element) {
      console.warn(`Target section "${targetSection}" not found`);
      return;
    }

    // Set scrolling state
    setIsScrolling(true);

    // Calculate target position with offset for better centering
    const headerOffset = 0; // Adjust if you have a fixed header
    const elementPosition = element.offsetTop;
    const targetPosition = elementPosition - headerOffset;

    // Modern browsers with native smooth scrolling
    if ('scrollBehavior' in document.documentElement.style) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });

      // Use Intersection Observer for better scroll end detection
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setIsScrolling(false);
              observer.disconnect();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);

      // Fallback timeout
      setTimeout(() => {
        setIsScrolling(false);
        observer.disconnect();
      }, 2000);

    } else {
      // Fallback for older browsers with custom smooth scroll
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = Math.abs(distance) > 1000 ? 1500 : 1000;
      let start: number | null = null;

      const smoothScroll = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smoother animation
        const easeInOutCubic = (t: number) => {
          return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        const easedProgress = easeInOutCubic(progress);
        const currentPosition = startPosition + (distance * easedProgress);
        
        window.scrollTo(0, currentPosition);
        
        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        } else {
          setIsScrolling(false);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
  }, [targetSection]);

  // Icon rendering function
  const renderIcon = useCallback(() => {
    const iconSize = size * 0.7;
    const strokeColor = "#FF6B35";
    const strokeWidth = "2.5";
    
    switch (iconType) {
      
      case 'heroicon':
        return (
          <svg 
            width={iconSize} 
            height={iconSize} 
            viewBox="0 0 24 24" 
            fill="none" 
            className="icon-svg"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" 
              stroke={strokeColor} 
              strokeWidth={strokeWidth} 
            />
          </svg>
        );
      
      default:
        return (
          <svg 
            width={iconSize} 
            height={iconSize} 
            viewBox="0 0 24 24" 
            fill="none" 
            className="icon-svg"
            aria-hidden="true"
          >
            <path 
              d="M7 10L12 15L17 10" 
              stroke={strokeColor} 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        );
    }
  }, [iconType, size]);

  // Button styles
  const buttonStyles = {
    width: `${size * 1.4}px`,
    height: `${size * 1.9}px`,
    borderRadius: '30px',
    border: 'none',
    outline: 'none',
    cursor: isScrolling ? 'default' : 'pointer',
    position: 'relative' as const,
    overflow: 'visible',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: isScrolling ? 'scale(0.95)' : 'scale(1)',
    backgroundColor: 'transparent',
    opacity: isScrolling ? 0.7 : 1,
  };

  // Container styles with improved shadows
  const containerStyles = {
    position: 'absolute' as const,
    inset: '0',
    borderRadius: '30px',
    background: 'linear-gradient(145deg, #1A1A1A, #000000)',
    boxShadow: isScrolling 
      ? '0 4px 15px rgba(5, 94, 196, 0.3), 0 2px 8px rgba(5, 94, 196, 0.2)'
      : '0 6px 20px rgba(5, 94, 196, 0.4), 0 3px 12px rgba(5, 94, 196, 0.3)',
    transition: 'box-shadow 0.3s ease',
  };

  // Icon container styles
  const iconContainerStyles = {
    position: 'absolute' as const,
    inset: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isScrolling ? 'translateY(2px)' : 'translateY(0)',
    transition: 'transform 0.3s ease',
  };

  // Event handlers
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isScrolling) {
      e.currentTarget.style.transform = 'scale(1.05)';
      const container = e.currentTarget.querySelector('[data-container]') as HTMLElement;
      if (container) {
        container.style.boxShadow = '0 8px 25px rgba(5, 94, 196, 0.5), 0 4px 15px rgba(5, 94, 196, 0.4)';
      }
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isScrolling) {
      e.currentTarget.style.transform = 'scale(1)';
      const container = e.currentTarget.querySelector('[data-container]') as HTMLElement;
      if (container) {
        container.style.boxShadow = '0 6px 20px rgba(5, 94, 196, 0.4), 0 3px 12px rgba(5, 94, 196, 0.3)';
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isScrolling) {
      e.currentTarget.style.transform = 'scale(0.95)';
    }
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isScrolling) {
      e.currentTarget.style.transform = 'scale(1.05)';
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isScrolling) {
      scrollToNextSection();
    }
  };

  // Loading state
  if (!isMounted) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div 
          style={{
            width: `${size}px`,
            height: `${size * 1.4}px`,
            borderRadius: '30px',
            background: 'linear-gradient(145deg, #1A1A1A, #000000)',
          }}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className={`scroll-down-button ${isScrolling ? 'scrolling' : ''}`}
        style={buttonStyles}
        disabled={isScrolling}
        aria-label={`Scroll to ${targetSection || 'next section'}`}
        title={`Scroll to ${targetSection || 'next section'}`}
      >
        {/* Container with shadows */}
        <div data-container style={containerStyles} />
        
        {/* Icon container */}
        <div style={iconContainerStyles}>
          {renderIcon()}
        </div>

        {/* Loading indicator for scroll state */}
        {isScrolling && (
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              border: '2px solid rgba(255, 107, 53, 0.3)',
              borderTop: '2px solid #FF6B35',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
            }}
          />
        )}
      </button>

      {/* Add keyframe animation for spinner */}
      <style jsx>{`
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .scroll-down-button:not(.scrolling) {
          animation: float 3s ease-in-out infinite;
        }
        
        .scroll-down-button.scrolling {
          animation: none;
          pointer-events: none;
        }
        
        .icon-svg {
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
          transition: transform 0.3s ease;
        }
        
        .scroll-down-button:hover:not(.scrolling) .icon-svg {
          transform: translateY(2px);
        }
      `}</style>
    </div>
  );
};

export default ScrollDownButton;