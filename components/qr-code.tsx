"use client"

import { useEffect, useRef } from "react"

interface QRCodeProps {
  value: string
  size?: number
  className?: string
}

export default function QRCode({ value, size = 200, className = "" }: QRCodeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Simple QR code pattern generator (for demo purposes)
    // In production, you'd use a proper QR code library
    const generateQRPattern = () => {
      const gridSize = 25
      const cellSize = size / gridSize

      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, size, size)

      ctx.fillStyle = "#FFFFFF"

      // Create a simple pattern that looks like a QR code
      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          // Create a pseudo-random pattern based on position
          const shouldFill = (i + j + Math.sin(i * j) * 10) % 3 > 1

          if (shouldFill) {
            ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize)
          }
        }
      }

      // Add corner squares (typical QR code feature)
      const cornerSize = cellSize * 7

      // Top-left corner
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, cornerSize, cornerSize)
      ctx.fillStyle = "#FFFFFF"
      ctx.fillRect(cellSize, cellSize, cornerSize - 2 * cellSize, cornerSize - 2 * cellSize)
      ctx.fillStyle = "#000000"
      ctx.fillRect(cellSize * 2, cellSize * 2, cornerSize - 4 * cellSize, cornerSize - 4 * cellSize)

      // Top-right corner
      ctx.fillStyle = "#000000"
      ctx.fillRect(size - cornerSize, 0, cornerSize, cornerSize)
      ctx.fillStyle = "#FFFFFF"
      ctx.fillRect(size - cornerSize + cellSize, cellSize, cornerSize - 2 * cellSize, cornerSize - 2 * cellSize)
      ctx.fillStyle = "#000000"
      ctx.fillRect(size - cornerSize + cellSize * 2, cellSize * 2, cornerSize - 4 * cellSize, cornerSize - 4 * cellSize)

      // Bottom-left corner
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, size - cornerSize, cornerSize, cornerSize)
      ctx.fillStyle = "#FFFFFF"
      ctx.fillRect(cellSize, size - cornerSize + cellSize, cornerSize - 2 * cellSize, cornerSize - 2 * cellSize)
      ctx.fillStyle = "#000000"
      ctx.fillRect(cellSize * 2, size - cornerSize + cellSize * 2, cornerSize - 4 * cellSize, cornerSize - 4 * cellSize)
    }

    generateQRPattern()
  }, [value, size])

  return (
    <div className={`inline-block ${className}`}>
      <canvas ref={canvasRef} width={size} height={size} className="border border-gray-300 rounded-lg" />
      <p className="text-center text-xs text-gray-500 mt-2">Escanea para abrir WhatsApp</p>
    </div>
  )
}
