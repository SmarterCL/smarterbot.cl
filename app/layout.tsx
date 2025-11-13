import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SmarterBot Chile - Automatización con IA para WhatsApp Business",
  description:
    "Automatiza ventas, gestiona inventario y atiende clientes 24/7 con inteligencia artificial en WhatsApp Business. Implementación en menos de 24 horas.",
  keywords: "chatbot, whatsapp business, automatización, IA, ventas, chile",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
