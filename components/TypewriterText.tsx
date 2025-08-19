"use client"

import { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
  cursor?: boolean
  cursorBlink?: boolean
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delay = 0,
  className = "",
  onComplete,
  cursor = true,
  cursorBlink = true
}) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Delay inicial
    const initialDelay = setTimeout(() => {
      setCurrentIndex(0)
    }, delay)

    return () => clearTimeout(initialDelay)
  }, [delay, isMounted])

  useEffect(() => {
    if (!isMounted) return

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, speed, onComplete, isMounted])

  useEffect(() => {
    if (!isMounted || !cursorBlink) return

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [cursorBlink, isMounted])

  // Renderização inicial sem animação para evitar hidratação
  if (!isMounted) {
    return <span className={className}>{text}</span>
  }

  return (
    <span className={className}>
      {displayText}
      {cursor && showCursor && (
        <span className="inline-block w-0.5 h-6 bg-current animate-pulse ml-1" />
      )}
    </span>
  )
}

export default TypewriterText
