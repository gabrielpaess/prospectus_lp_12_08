"use client"

import { useEffect, useRef, useState } from 'react'

interface ReactBitsScrollRevealProps {
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
}

const ReactBitsScrollReveal: React.FC<ReactBitsScrollRevealProps> = ({
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
  easing = "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
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

  const getAnimationStyles = () => {
    const baseStyles = {
      transition: `all ${duration}ms ${easing}`,
      transitionDelay: `${delay}ms`,
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

export default ReactBitsScrollReveal
