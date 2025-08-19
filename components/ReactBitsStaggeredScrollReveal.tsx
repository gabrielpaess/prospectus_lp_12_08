"use client"

import { useEffect, useRef, useState } from 'react'

interface ReactBitsStaggeredScrollRevealProps {
  children: React.ReactNode
  baseOpacity?: number
  enableBlur?: boolean
  baseRotation?: number
  blurStrength?: number
  className?: string
  threshold?: number
  rootMargin?: string
  duration?: number
  delay?: number
  easing?: string
  stagger?: number
  staggerChildren?: boolean
}

const ReactBitsStaggeredScrollReveal: React.FC<ReactBitsStaggeredScrollRevealProps> = ({
  children,
  baseOpacity = 0,
  enableBlur = true,
  baseRotation = 5,
  blurStrength = 10,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  duration = 1000,
  delay = 0,
  easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  stagger = 200,
  staggerChildren = true
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [threshold, rootMargin, hasAnimated, isMounted])

  const getAnimationStyles = (index: number = 0) => {
    const baseStyles = {
      transition: `all ${duration}ms ${easing}`,
      transitionDelay: `${delay + (staggerChildren ? index * stagger : 0)}ms`,
    }

    if (!isVisible) {
      return {
        ...baseStyles,
        opacity: baseOpacity,
        transform: `rotate(${baseRotation}deg)`,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'rotate(0deg)',
      filter: 'blur(0px)',
    }
  }

  // Renderização inicial sem animação para evitar hidratação
  if (!isMounted) {
    return (
      <div ref={elementRef} className={className}>
        {children}
      </div>
    )
  }

  // Se não for stagger children, renderiza normalmente
  if (!staggerChildren) {
    return (
      <div
        ref={elementRef}
        className={className}
        style={getAnimationStyles()}
      >
        {children}
      </div>
    )
  }

  // Para stagger children, divide o conteúdo em linhas
  const childrenArray = Array.isArray(children) ? children : [children]
  
  return (
    <div ref={elementRef} className={className}>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          style={getAnimationStyles(index)}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default ReactBitsStaggeredScrollReveal
