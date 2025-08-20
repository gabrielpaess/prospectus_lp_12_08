"use client"

import { FC, useState, useEffect } from 'react'

interface CustomChevronIconProps {
  className?: string
  size?: number
  animate?: boolean
  targetSection?: string
}

const CustomChevronIcon: FC<CustomChevronIconProps> = ({ 
  className = "", 
  size = 32,
  animate = true,
  targetSection
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

  // Renderização inicial sem animação para evitar hidratação
  if (!isMounted) {
    return (
      <div 
        className={`relative cursor-pointer transition-transform hover:scale-110 ${className}`}
        style={{ width: size, height: size * 1.4 }}
        onClick={scrollToNextSection}
      >
        {/* Oval preto de fundo */}
        <div 
          className="absolute inset-0 rounded-full bg-black"
          style={{
            borderRadius: '50%',
            background: 'linear-gradient(145deg, #1a1a1a, #000000)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        />
        
        {/* Seta laranja apontando para baixo */}
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: size * 0.15 }}
        >
          <svg 
            width={size * 0.6} 
            height={size * 0.4} 
            viewBox="0 0 24 16" 
            fill="none"
            className="drop-shadow-sm"
          >
            {/* Seta principal laranja apontando para baixo */}
            <path 
              d="M2 14L12 4L22 14" 
              stroke="#f97316" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Seta interna para dar profundidade */}
            <path 
              d="M4 12L12 6L20 12" 
              stroke="#ea580c" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        
        {/* Brilho azul sutil no topo */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/6 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(1px)'
          }}
        />
      </div>
    )
  }

  return (
    <div 
      className={`relative cursor-pointer transition-transform hover:scale-110 ${animate ? 'animate-bounce' : ''} ${className}`}
      style={{ width: size, height: size * 1.4 }}
      onClick={scrollToNextSection}
    >
      {/* Oval preto de fundo */}
      <div 
        className="absolute inset-0 rounded-full bg-black"
        style={{
          borderRadius: '50%',
          background: 'linear-gradient(145deg, #1a1a1a, #000000)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      />
      
      {/* Seta laranja apontando para baixo */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ padding: size * 0.15 }}
      >
        <svg 
          width={size * 0.6} 
          height={size * 0.4} 
          viewBox="0 0 24 16" 
          fill="none"
          className="drop-shadow-sm"
        >
          {/* Seta principal laranja apontando para baixo */}
          <path 
            d="M2 14L12 4L22 14" 
            stroke="#f97316" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Seta interna para dar profundidade */}
          <path 
            d="M4 12L12 6L20 12" 
            stroke="#ea580c" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      
      {/* Brilho azul sutil no topo */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/6 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
          filter: 'blur(1px)'
        }}
      />
    </div>
  )
}

export default CustomChevronIcon
