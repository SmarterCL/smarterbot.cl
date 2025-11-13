"use client"

import { motion } from "framer-motion"
import { QrCode, MessageCircle, CreditCard, Settings } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      icon: QrCode,
      title: "Conexión",
      description: "El cliente escanea un QR o inicia un chat por WhatsApp.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
    },
    {
      icon: MessageCircle,
      title: "Interacción",
      description: "El bot responde con IA y recomienda productos o servicios.",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
    },
    {
      icon: CreditCard,
      title: "Pago",
      description: "Se genera un link de pago automático (Mercado Pago, Stripe, u otro).",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
    },
    {
      icon: Settings,
      title: "Automatización",
      description: "Se activa el flujo N8N: pedidos, alertas y dashboards.",
      color: "text-orange-400",
      bgColor: "bg-orange-400/20",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">¿Cómo funciona SmarterBot?</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Un proceso simple y efectivo para automatizar tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className={`w-16 h-16 ${step.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} />
                </div>

                <div className="mb-4">
                  <span className="text-purple-400 text-sm font-medium">Paso {index + 1}</span>
                  <h3 className="text-white text-xl font-semibold mt-1">{step.title}</h3>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
