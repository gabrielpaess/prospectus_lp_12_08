"use client"

import { FC, useState, useEffect } from 'react'

interface ScrollDownButtonProps {
  className?: string
  size?: number
  targetSection?: string
  iconType?: 'chevron' | 'arrow' | 'triangle' | 'caret' | 'heroicon' | 'custom'
}

const ScrollDownButton: FC<ScrollDownButtonProps> = ({ 
  className = "", 
  size = 80,
  targetSection,
  iconType = 'chevron'
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Função para scroll suave para a próxima seção
  const scrollToNextSection = () => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  // Função para renderizar o ícone baseado no tipo
  const renderIcon = () => {
    const iconSize = size * 0.7;
    
    switch (iconType) {
      case 'chevron':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" className="drop-shadow-lg group-hover:translate-y-1 transition-transform duration-300">
            <path d="M7 10L12 15L17 10" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      
      case 'arrow':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" className="drop-shadow-lg group-hover:translate-y-1 transition-transform duration-300">
            <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      
      case 'triangle':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" className="drop-shadow-lg group-hover:translate-y-1 transition-transform duration-300">
            <path d="M12 6L20 18H4L12 6Z" fill="#FF6B35" />
          </svg>
        );
      
      case 'caret':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" className="drop-shadow-lg group-hover:translate-y-1 transition-transform duration-300">
            <path d="M6 9L12 15L18 9" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      
      case 'heroicon':
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" className="drop-shadow-lg group-hover:translate-y-1 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" stroke="#FF6B35" strokeWidth="2.5" />
          </svg>
        );
      
      default:
        return (
          <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" className="drop-shadow-lg group-hover:translate-y-1 transition-transform duration-300">
            <path d="M7 10L12 15L12 15L17 10" stroke="#FF6B35" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  // Renderização inicial sem animação para evitar hidratação
  if (!isMounted) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <button
          onClick={scrollToNextSection}
          className="relative cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group"
          style={{ 
            width: size * 1.5, 
            height: size * 2.2 
          }}
        >
          {/* Container principal - formato pill alongado */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'linear-gradient(145deg, #1A1A1A, #000000)',
              boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          />
          
          {/* Glow azul ao redor */}
          <div 
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(60, 120, 255, 0.4) 0%, rgba(60, 120, 255, 0.3) 25%, rgba(60, 120, 255, 0.2) 50%, rgba(60, 120, 255, 0.1) 75%, transparent 90%)',
              filter: 'blur(4px)',
              transform: 'scale(1.3)'
            }}
          />
          
          {/* Ícone centralizado */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ padding: size * 0.2 }}>
            {renderIcon()}
          </div>
        </button>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <button
        onClick={scrollToNextSection}
        className="relative cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 group animate-pulse"
        style={{ 
          width: size * 2.5, 
          height: size * 1.2 
        }}
      >
        {/* Container principal - formato pill alongado */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(145deg, #1A1A1A, #000000)',
            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Glow azul ao redor - mais intenso no hover */}
        <div 
          className="absolute inset-0 rounded-full opacity-50 group-hover:opacity-70 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(60, 120, 255, 0.4) 0%, rgba(60, 120, 255, 0.3) 25%, rgba(60, 120, 255, 0.2) 50%, rgba(60, 120, 255, 0.1) 75%, transparent 90%)',
            filter: 'blur(4px)',
            transform: 'scale(1.3)'
          }}
        />
        
        {/* Ícone centralizado */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ padding: size * 0.2 }}>
          {renderIcon()}
        </div>
      </button>
    </div>
  )
}

export default ScrollDownButton