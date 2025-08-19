"use client"

import { useEffect, useState, useRef } from 'react'

interface Cursor3DLensProps {
  scale?: number
  color?: string
  blur?: number
  fluidEffect?: boolean
  splashEffect?: boolean
}

export default function Cursor3DLens({ 
  scale = 1, 
  color = '#ffffff', 
  blur = 0,
  fluidEffect = true,
  splashEffect = true
}: Cursor3DLensProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 })
  const [splashPoints, setSplashPoints] = useState<Array<{x: number, y: number, life: number, velocity: {x: number, y: number}}>>([])
  const [isMounted, setIsMounted] = useState(false)
  const lastPosition = useRef({ x: 0, y: 0 })
  const lastTime = useRef(Date.now())

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now()
      const deltaTime = currentTime - lastTime.current
      
      if (deltaTime > 0) {
        const velocityX = (e.clientX - lastPosition.current.x) / deltaTime
        const velocityY = (e.clientY - lastPosition.current.y) / deltaTime
        
        setMouseVelocity({ x: velocityX, y: velocityY })
        
        // Criar splash points baseado na velocidade
        if (splashEffect && (Math.abs(velocityX) > 0.5 || Math.abs(velocityY) > 0.5)) {
          const newSplash = {
            x: e.clientX,
            y: e.clientY,
            life: 1,
            velocity: { x: velocityX * 0.1, y: velocityY * 0.1 }
          }
          setSplashPoints(prev => [...prev, newSplash])
        }
      }
      
      setPosition({ x: e.clientX, y: e.clientY })
      lastPosition.current = { x: e.clientX, y: e.clientY }
      lastTime.current = currentTime
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [splashEffect, isMounted])

  // Animar splash points
  useEffect(() => {
    if (!isMounted || !splashEffect) return

    const interval = setInterval(() => {
      setSplashPoints(prev => 
        prev
          .map(point => ({
            ...point,
            x: point.x + point.velocity.x,
            y: point.y + point.velocity.y,
            life: point.life - 0.02,
            velocity: {
              x: point.velocity.x * 0.98,
              y: point.velocity.y * 0.98
            }
          }))
          .filter(point => point.life > 0)
      )
    }, 16)

    return () => clearInterval(interval)
  }, [splashEffect, isMounted])

  // Não renderizar nada até o componente estar montado
  if (!isMounted) {
    return null
  }

  // Calcular intensidade do efeito fluido baseado na velocidade
  const fluidIntensity = Math.min(Math.abs(mouseVelocity.x) + Math.abs(mouseVelocity.y), 2)
  const dynamicScale = scale * (1 + fluidIntensity * 0.1)

  return (
    <>
      {/* Splash Points Effect */}
      {splashEffect && splashPoints.map((point, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-40"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            width: 4,
            height: 4,
            opacity: point.life,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${color}80, ${color}40, transparent)`,
            transform: `scale(${point.life})`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      {/* Main cursor - enhanced glass lens 3D */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-150 ease-out"
        style={{
          left: position.x - 25 * dynamicScale,
          top: position.y - 25 * dynamicScale,
          width: 50 * dynamicScale,
          height: 50 * dynamicScale,
          opacity: isVisible ? 1 : 0,
          transform: `translateZ(0) scale(${1 + fluidIntensity * 0.05})`,
        }}
      >
        {/* Outer glass layer with dynamic frosted effect */}
        <div
          className="absolute inset-0 rounded-full border border-white/20"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.1) 0%, 
              rgba(255, 255, 255, 0.05) 50%, 
              rgba(255, 255, 255, 0.02) 100%)`,
            backdropFilter: `blur(${10 + fluidIntensity * 2}px) saturate(${180 + fluidIntensity * 10}%)`,
            WebkitBackdropFilter: `blur(${10 + fluidIntensity * 2}px) saturate(${180 + fluidIntensity * 10}%)`,
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              inset 0 -1px 0 rgba(255, 255, 255, 0.1),
              0 0 20px ${color}${20 + Math.floor(fluidIntensity * 10)}
            `,
            filter: `blur(${blur}px)`,
          }}
        />
        
        {/* Inner glass layer with dynamic refraction */}
        <div
          className="absolute inset-2 rounded-full border border-white/10"
          style={{
            background: `radial-gradient(circle at 30% 30%, 
              rgba(255, 255, 255, 0.15) 0%, 
              rgba(255, 255, 255, 0.08) 40%, 
              rgba(255, 255, 255, 0.02) 100%)`,
            backdropFilter: `blur(${8 + fluidIntensity}px) brightness(${1.1 + fluidIntensity * 0.05})`,
            WebkitBackdropFilter: `blur(${8 + fluidIntensity}px) brightness(${1.1 + fluidIntensity * 0.05})`,
            boxShadow: `
              inset 0 2px 8px rgba(255, 255, 255, 0.15),
              inset 0 -2px 8px rgba(0, 0, 0, 0.05),
              0 0 15px ${color}${30 + Math.floor(fluidIntensity * 15)}
            `,
          }}
        />
        
        {/* Glass center with dynamic highlight */}
        <div
          className="absolute inset-4 rounded-full"
          style={{
            background: `radial-gradient(circle at 40% 30%, 
              rgba(255, 255, 255, 0.25) 0%, 
              rgba(255, 255, 255, 0.10) 30%, 
              rgba(255, 255, 255, 0.05) 70%, 
              transparent 100%)`,
            backdropFilter: `blur(${4 + fluidIntensity}px) contrast(${1.1 + fluidIntensity * 0.1})`,
            WebkitBackdropFilter: `blur(${4 + fluidIntensity}px) contrast(${1.1 + fluidIntensity * 0.1})`,
            boxShadow: `
              inset 0 1px 4px rgba(255, 255, 255, 0.3),
              0 0 10px ${color}${40 + Math.floor(fluidIntensity * 20)}
            `,
          }}
        />

        {/* Dynamic glass reflection highlight */}
        <div
          className="absolute top-1 left-2 w-3 h-3 rounded-full"
          style={{
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.6) 0%, 
              rgba(255, 255, 255, 0.3) 50%, 
              transparent 100%)`,
            filter: `blur(${0.5 + fluidIntensity * 0.2}px)`,
            transform: `scale(${1 + fluidIntensity * 0.1})`,
          }}
        />

        {/* Fluid distortion effect */}
        {fluidEffect && (
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at ${50 + mouseVelocity.x * 10}% ${50 + mouseVelocity.y * 10}%, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 70%)`,
              filter: `blur(${1 + fluidIntensity}px)`,
              transform: `rotate(${fluidIntensity * 5}deg)`,
            }}
          />
        )}
      </div>

      {/* Enhanced focus point with glass effect */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: position.x - 3,
          top: position.y - 3,
          width: 6,
          height: 6,
          opacity: isVisible ? 0.9 : 0,
          borderRadius: '50%',
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, 0.8) 0%, 
            rgba(255, 255, 255, 0.4) 50%, 
            transparent 100%)`,
          backdropFilter: 'blur(2px)',
          WebkitBackdropFilter: 'blur(2px)',
          boxShadow: `
            0 0 8px ${color}60,
            0 2px 4px rgba(0, 0, 0, 0.1),
            inset 0 0.5px 1px rgba(255, 255, 255, 0.5)
          `,
          transform: `scale(${1 + fluidIntensity * 0.2})`,
        }}
      />

      {/* Enhanced glass trail effect */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          left: position.x - 20 * dynamicScale,
          top: position.y - 20 * dynamicScale,
          width: 40 * dynamicScale,
          height: 40 * dynamicScale,
          opacity: isVisible ? (0.4 + fluidIntensity * 0.1) : 0,
          borderRadius: '50%',
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, 0.08) 0%, 
            rgba(255, 255, 255, 0.03) 50%, 
            transparent 100%)`,
          backdropFilter: `blur(${12 + fluidIntensity * 2}px) saturate(${150 + fluidIntensity * 10}%)`,
          WebkitBackdropFilter: `blur(${12 + fluidIntensity * 2}px) saturate(${150 + fluidIntensity * 10}%)`,
          boxShadow: `0 0 20px ${color}${20 + Math.floor(fluidIntensity * 10)}`,
          filter: `blur(${blur + 2}px)`,
        }}
      />

      {/* Dynamic ambient glass glow */}
      <div
        className="fixed pointer-events-none z-30 transition-all duration-500 ease-out"
        style={{
          left: position.x - 35 * dynamicScale,
          top: position.y - 35 * dynamicScale,
          width: 70 * dynamicScale,
          height: 70 * dynamicScale,
          opacity: isVisible ? (0.2 + fluidIntensity * 0.05) : 0,
          borderRadius: '50%',
          background: `radial-gradient(circle, 
            rgba(255, 255, 255, 0.05) 0%, 
            rgba(255, 255, 255, 0.02) 30%, 
            transparent 70%)`,
          backdropFilter: `blur(${20 + fluidIntensity * 3}px) hue-rotate(${10 + fluidIntensity * 5}deg)`,
          WebkitBackdropFilter: `blur(${20 + fluidIntensity * 3}px) hue-rotate(${10 + fluidIntensity * 5}deg)`,
          filter: `blur(${blur + 4}px)`,
        }}
      />

      {/* Velocity-based particle trail */}
      {fluidEffect && Math.abs(mouseVelocity.x) + Math.abs(mouseVelocity.y) > 1 && (
        <div
          className="fixed pointer-events-none z-35 transition-all duration-200 ease-out"
          style={{
            left: position.x - 10,
            top: position.y - 10,
            width: 20,
            height: 20,
            opacity: 0.6,
            borderRadius: '50%',
            background: `radial-gradient(circle, 
              rgba(255, 255, 255, 0.1) 0%, 
              transparent 100%)`,
            filter: 'blur(1px)',
            transform: `scale(${1 + fluidIntensity * 0.3})`,
          }}
        />
      )}
    </>
  )
}