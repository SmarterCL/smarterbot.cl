"use client"

import { motion } from "framer-motion"
import { Wrench, Calendar, Smartphone, Bot, Code, Clock } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Wrench,
      title: "Automatización por tarea",
      description:
        "Conectamos y automatizamos procesos con Zapier o N8N, desde una tarea simple hasta flujos complejos",
      price: "desde $35.000 CLP",
    },
    {
      icon: Smartphone,
      title: "App para Android con AppSheet",
      description: "Apps internas para gestión, inventario, clientes o pedidos. APK directo sin Play Store",
      price: "desde $45.000 CLP",
    },
    {
      icon: Calendar,
      title: "Calendario + WhatsApp (sin bot)",
      description: "Sistema de agenda desde link con confirmación por WhatsApp con atención real",
      price: "desde $35.000 CLP",
    },
    {
      icon: Bot,
      title: "Asistente virtual digital",
      description: "Servicio tipo secretaria virtual digital conectada a WhatsApp o correo",
      price: "desde $60.000 CLP/semana",
    },
    {
      icon: Code,
      title: "Soporte por hora programador",
      description: "Ayuda directa con Zapier, N8N, Make o AppSheet pagando por hora técnica",
      price: "$35.000 CLP/hora",
    },
    {
      icon: Clock,
      title: "Implementación rápida",
      description: "Máximo 90 minutos para tareas simples. Todo funcionando y entregado",
      price: "Incluido",
    },
  ]

  return (
    <section id="como-funciona" className="py-12 md:py-20 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Servicios principales</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Basado en experiencia real. Herramientas que funcionan sin humo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-purple-500 mb-3 md:mb-4" />
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm md:text-base mb-3">{feature.description}</p>
              <div className="text-purple-400 font-semibold text-sm">{feature.price}</div>
            </motion.div>
          ))}
        </div>

        {/* Technology Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Tecnología usada (sin humo)</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Zapier / N8N para conectar herramientas
              </p>
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Google Calendar, Sheets, Gmail
              </p>
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> AppSheet para apps móviles internas
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> WhatsApp API / Manual con automatización mínima
              </p>
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> OpenAI GPT para redactar, resumir o ayudar a vender
              </p>
              <p className="flex items-center">
                <span className="text-green-400 mr-2">✅</span> Claude AI (cuando se requiere un agente contextual)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
