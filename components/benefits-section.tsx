"use client"

import { motion } from "framer-motion"
import { Clock, CreditCard, Workflow, MessageSquare, Zap, Shield } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Disponibilidad 24/7",
      description: "Respuesta en segundos, todos los días del año. Tu negocio nunca duerme.",
      color: "text-blue-400",
    },
    {
      icon: CreditCard,
      title: "Cobros Automáticos",
      description: "Cobros automáticos con tarjeta predeterminada. Simplifica el proceso de pago.",
      color: "text-green-400",
    },
    {
      icon: Workflow,
      title: "Flujos Personalizados",
      description: "Flujos personalizados para ventas, pedidos o reservas según tus necesidades.",
      color: "text-purple-400",
    },
    {
      icon: MessageSquare,
      title: "Compatible con WhatsApp",
      description: "Compatible con WhatsApp Business, web y app. Integración perfecta.",
      color: "text-emerald-400",
    },
    {
      icon: Zap,
      title: "Implementación Rápida",
      description: "Listo en menos de 1 día. Comienza a automatizar tu negocio de inmediato.",
      color: "text-yellow-400",
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Tus datos y los de tus clientes siempre protegidos con los más altos estándares.",
      color: "text-red-400",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">¿Por qué elegir SmarterBot?</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Beneficios que transformarán tu negocio</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 h-full hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
