"use client"

import { FC, useState, useEffect } from 'react'

interface CustomChevronIconProps {
  className?: string
  size?: number
  animate?: boolean
}

const CustomChevronIcon: FC<CustomChevronIconProps> = ({ 
  className = "", 
  size = 32,
  animate = true 
}) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Renderização inicial sem animação para evitar hidratação
  if (!isMounted) {
    return (
      <div 
        className={`relative ${className}`}
        style={{ width: size, height: size * 1.4 }}
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
        
        {/* Seta laranja */}
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
            {/* Seta principal laranja */}
            <path 
              d="M2 2L12 12L22 2" 
              stroke="#ff6b35" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            
            {/* Seta interna para dar profundidade */}
            <path 
              d="M4 4L12 10L20 4" 
              stroke="#ff8c42" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
        
        {/* Brilho sutil no topo */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/6 rounded-full"
          style={{
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
            filter: 'blur(1px)'
          }}
        />
      </div>
    )
  }

  return (
    <div 
      className={`relative ${animate ? 'animate-bounce' : ''} ${className}`}
      style={{ width: size, height: size * 1.4 }}
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
      
      {/* Seta laranja */}
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
          {/* Seta principal laranja */}
          <path 
            d="M2 2L12 12L22 2" 
            stroke="#ff6b35" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Seta interna para dar profundidade */}
          <path 
            d="M4 4L12 10L20 4" 
            stroke="#ff8c42" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      
      {/* Brilho sutil no topo */}
      <div 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/6 rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(1px)'
        }}
      />
    </div>
  )
}

export default CustomChevronIcon
