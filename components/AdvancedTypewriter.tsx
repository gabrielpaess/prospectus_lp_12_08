"use client"

import { useState, useEffect } from 'react'

interface AdvancedTypewriterProps {
  lines: string[]
  speed?: number
  delay?: number
  className?: string
  onComplete?: () => void
  cursor?: boolean
  cursorBlink?: boolean
  lineDelay?: number
}

const AdvancedTypewriter: React.FC<AdvancedTypewriterProps> = ({
  lines,
  speed = 100,
  delay = 0,
  className = "",
  onComplete,
  cursor = true,
  cursorBlink = true,
  lineDelay = 500
}) => {
  const [displayLines, setDisplayLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Delay inicial
    const initialDelay = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(initialDelay)
  }, [delay, isMounted])

  useEffect(() => {
    if (!isMounted || !isTyping) return

    if (currentLineIndex < lines.length) {
      if (currentCharIndex < lines[currentLineIndex].length) {
        const timer = setTimeout(() => {
          setCurrentCharIndex(currentCharIndex + 1)
        }, speed)

        return () => clearTimeout(timer)
      } else {
        // Linha completa, passar para a próxima
        const lineTimer = setTimeout(() => {
          setDisplayLines(prev => [...prev, lines[currentLineIndex]])
          setCurrentLineIndex(currentLineIndex + 1)
          setCurrentCharIndex(0)
        }, lineDelay)

        return () => clearTimeout(lineTimer)
      }
    } else if (onComplete) {
      onComplete()
    }
  }, [currentLineIndex, currentCharIndex, lines, speed, lineDelay, onComplete, isTyping, isMounted])

  useEffect(() => {
    if (!isMounted || !cursorBlink) return

    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [cursorBlink, isMounted])

  // Renderização inicial sem animação para evitar hidratação
  if (!isMounted) {
    return (
      <div className={className}>
        {lines.map((line, index) => (
          <div key={index} className="block">
            {line}
          </div>
        ))}
      </div>
    )
  }

  const currentLineText = lines[currentLineIndex]?.slice(0, currentCharIndex) || ''

  return (
    <div className={className}>
      {/* Linhas já completadas */}
      {displayLines.map((line, index) => (
        <div key={index} className="block">
          {line}
        </div>
      ))}
      
      {/* Linha atual sendo digitada */}
      {currentLineIndex < lines.length && (
        <div className="block">
          {currentLineText}
          {cursor && showCursor && (
            <span className="inline-block w-0.5 h-6 bg-current animate-pulse ml-1" />
          )}
        </div>
      )}
    </div>
  )
}

export default AdvancedTypewriter
