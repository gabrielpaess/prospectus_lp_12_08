"use client"

import { useState, useEffect } from 'react'

interface TypingLine {
  text: string
  speed?: number
  pauseAfter?: number
}

interface EliteTypewriterProps {
  lines: TypingLine[]
  className?: string
  onComplete?: () => void
  cursor?: boolean
  cursorBlink?: boolean
  initialDelay?: number
  soundEffect?: boolean
}

const EliteTypewriter: React.FC<EliteTypewriterProps> = ({
  lines,
  className = "",
  onComplete,
  cursor = true,
  cursorBlink = true,
  initialDelay = 0,
  soundEffect = false
}) => {
  const [displayLines, setDisplayLines] = useState<string[]>([])
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Delay inicial
    const initialDelayTimer = setTimeout(() => {
      setIsTyping(true)
    }, initialDelay)

    return () => clearTimeout(initialDelayTimer)
  }, [initialDelay, isMounted])

  useEffect(() => {
    if (!isMounted || !isTyping || isPaused) return

    const currentLine = lines[currentLineIndex]
    if (!currentLine) return

    if (currentCharIndex < currentLine.text.length) {
      const speed = currentLine.speed || 80
      const timer = setTimeout(() => {
        setCurrentCharIndex(currentCharIndex + 1)
        
        // Efeito sonoro (opcional)
        if (soundEffect) {
          // Aqui você pode adicionar um som de typing
          // playTypingSound()
        }
      }, speed)

      return () => clearTimeout(timer)
    } else {
      // Linha completa
      const pauseAfter = currentLine.pauseAfter || 200
      
      if (pauseAfter > 0) {
        setIsPaused(true)
        const pauseTimer = setTimeout(() => {
          setIsPaused(false)
          setDisplayLines(prev => [...prev, currentLine.text])
          setCurrentLineIndex(currentLineIndex + 1)
          setCurrentCharIndex(0)
        }, pauseAfter)

        return () => clearTimeout(pauseTimer)
      } else {
        setDisplayLines(prev => [...prev, currentLine.text])
        setCurrentLineIndex(currentLineIndex + 1)
        setCurrentCharIndex(0)
      }
    }
  }, [currentLineIndex, currentCharIndex, lines, isTyping, isPaused, soundEffect, isMounted])

  useEffect(() => {
    if (currentLineIndex >= lines.length && onComplete) {
      onComplete()
    }
  }, [currentLineIndex, lines.length, onComplete])

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
            {line.text}
          </div>
        ))}
      </div>
    )
  }

  const currentLineText = lines[currentLineIndex]?.text?.slice(0, currentCharIndex) || ''

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

export default EliteTypewriter
