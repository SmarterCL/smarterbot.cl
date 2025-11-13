"use client"

import { Bot } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-white/10 py-8 md:py-12 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-8 h-8 text-purple-500" />
              <span className="text-white font-medium text-xl">SmarterBot Chile</span>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Vende sin parar con WhatsApp Business. Chatbot preconfigurado, inventario con Excel/Sheet y autenticación
              24x7.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#como-funciona" className="hover:text-white transition-colors">
                  Cómo Funciona
                </Link>
              </li>
              <li>
                <Link href="#planes" className="hover:text-white transition-colors">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-400 text-sm md:text-base">
              <p>Conde del Maule 4364, Estación Central</p>
              <p>smarterbotcl@gmail.com</p>
              <p>+56 979 540 471</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 SmarterBot Chile. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
