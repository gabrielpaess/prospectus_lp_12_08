"use client"

import { useState, useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'slide-up' | 'slide-down'
  duration?: number
  delay?: number
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'cubic-bezier'
  stagger?: number
  staggerChildren?: boolean
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  animation = "fade-up",
  duration = 800,
  delay = 0,
  easing = "ease-out",
  stagger = 0,
  staggerChildren = false
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
      switch (animation) {
        case 'fade-up':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(50px)',
          }
        case 'fade-down':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(-50px)',
          }
        case 'fade-left':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateX(50px)',
          }
        case 'fade-right':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateX(-50px)',
          }
        case 'zoom-in':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'scale(0.8)',
          }
        case 'slide-up':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(100%)',
          }
        case 'slide-down':
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(-100%)',
          }
        default:
          return {
            ...baseStyles,
            opacity: 0,
            transform: 'translateY(50px)',
          }
      }
    }

    return {
      ...baseStyles,
      opacity: 1,
      transform: 'translateY(0) translateX(0) scale(1)',
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

export default ScrollReveal
