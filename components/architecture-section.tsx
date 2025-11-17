"use client"

import { motion } from "framer-motion"
import { MessageSquare, Brain, Cog, Database, Shield, Zap } from "lucide-react"

export default function ArchitectureSection() {
  const layers = [
    {
      name: "Layer 1: Inbox Omnicanal",
      icon: MessageSquare,
      color: "purple",
      tech: "Chatwoot",
      description: "Todos los canales en un solo lugar",
      features: [
        "WhatsApp, Email, Web, Instagram",
        "Multi-tenant: 1 inbox por RUT",
        "Historial completo de conversaciones",
        "Asignación automática de agentes",
      ],
      latency: "< 100ms",
    },
    {
      name: "Layer 2: Cognitive AI",
      icon: Brain,
      color: "blue",
      tech: "Botpress",
      description: "Multi-agent con RAG per tenant",
      features: [
        "Agentes especializados (ventas, soporte, OCR)",
        "RAG: Knowledge base por tenant (pgvector)",
        "Handoffs inteligentes (triage → specialist)",
        "Multi-turn conversations con contexto",
      ],
      latency: "2-5s",
    },
    {
      name: "Layer 3: Execution Engine",
      icon: Cog,
      color: "green",
      tech: "n8n",
      description: "Workflows y automatizaciones",
      features: [
        "OCR de documentos (Vision API, Document AI)",
        "Integraciones con Shopify, Odoo, Google",
        "Clasificación LLM (intent detection)",
        "Scheduled jobs y webhooks",
      ],
      latency: "< 2s",
    },
  ]

  const integrations = [
    {
      name: "MCP + Vault",
      icon: Shield,
      description: "Gobernanza y seguridad",
      features: ["HMAC signatures", "Secrets por tenant", "Audit logs (Redpanda)", "Rate limiting"],
    },
    {
      name: "Supabase RLS",
      icon: Database,
      description: "Base de datos multi-tenant",
      features: ["Row-level security", "Real-time subscriptions", "Auth con Clerk", "PostgreSQL 16"],
    },
    {
      name: "Shopify / Odoo",
      icon: Zap,
      description: "E-commerce integration",
      features: ["Catálogo automático", "Carritos por IA", "Checkout asistido", "Sync de inventario"],
    },
  ]

  return (
    <section id="arquitectura" className="py-16 md:py-24 px-4 md:px-6 bg-black/40">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Arquitectura de 3 Capas Cognitivas
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            No es un bot. Es una <strong className="text-white">plataforma cognitiva</strong> que combina inbox,
            inteligencia artificial y automatización en capas independientes.
          </p>
        </motion.div>

        {/* Layers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {layers.map((layer, index) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-${layer.color}-500/10 backdrop-blur-sm rounded-xl p-6 border border-${layer.color}-500/30 hover:border-${layer.color}-500/60 transition-colors`}
            >
              <div className="flex items-center justify-between mb-4">
                <layer.icon className={`w-12 h-12 text-${layer.color}-400`} />
                <span className={`text-xs text-${layer.color}-400 font-mono bg-${layer.color}-500/20 px-2 py-1 rounded`}>
                  {layer.latency}
                </span>
              </div>

              <h3 className="text-white text-xl font-bold mb-2">{layer.name}</h3>
              <div className={`text-${layer.color}-400 font-semibold text-sm mb-3`}>{layer.tech}</div>
              <p className="text-gray-400 text-sm mb-4">{layer.description}</p>

              <ul className="space-y-2">
                {layer.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-sm">
                    <span className={`text-${layer.color}-400 mr-2 mt-0.5`}>•</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Flujo típico de conversación</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
            <div className="flex flex-col items-center">
              <MessageSquare className="w-10 h-10 text-purple-400 mb-2" />
              <span className="text-white font-semibold">Cliente</span>
              <span className="text-gray-400 text-xs">WhatsApp/Email</span>
            </div>

            <span className="text-gray-600 text-2xl hidden md:block">→</span>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-purple-400 font-bold">1</span>
              </div>
              <span className="text-purple-400 font-semibold">Chatwoot</span>
              <span className="text-gray-400 text-xs">Inbox</span>
            </div>

            <span className="text-gray-600 text-2xl hidden md:block">→</span>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-blue-400 font-bold">2</span>
              </div>
              <span className="text-blue-400 font-semibold">Botpress</span>
              <span className="text-gray-400 text-xs">AI Agent</span>
            </div>

            <span className="text-gray-600 text-2xl hidden md:block">→</span>

            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                <span className="text-green-400 font-bold">3</span>
              </div>
              <span className="text-green-400 font-semibold">n8n</span>
              <span className="text-gray-400 text-xs">Execution</span>
            </div>

            <span className="text-gray-600 text-2xl hidden md:block">→</span>

            <div className="flex flex-col items-center">
              <Zap className="w-10 h-10 text-yellow-400 mb-2" />
              <span className="text-white font-semibold">Respuesta</span>
              <span className="text-gray-400 text-xs">Automática</span>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm mt-6">
            <strong className="text-white">Latencia total:</strong> 2-7 segundos end-to-end
          </p>
        </motion.div>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Capa de Integración y Seguridad</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <integration.icon className="w-10 h-10 text-purple-400 mb-3" />
                <h4 className="text-white font-bold text-lg mb-2">{integration.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{integration.description}</p>
                <ul className="space-y-1">
                  {integration.features.map((feature, fIndex) => (
                    <li key={fIndex} className="text-gray-300 text-xs flex items-center">
                      <span className="text-purple-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Multi-tenant Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            🏢 Multi-tenant Real: Aislamiento por RUT
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="text-white font-semibold mb-2">1 Infraestructura compartida:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 1 Botpress server</li>
                <li>• 1 n8n instance</li>
                <li>• 1 Chatwoot server</li>
                <li>• 1 Supabase project</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">∞ Tenants aislados:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 1 workspace por RUT</li>
                <li>• 1 knowledge base por empresa</li>
                <li>• Secrets separados en Vault</li>
                <li>• Row-level security en DB</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-purple-300 text-sm mt-6 font-semibold">
            Esto es exactamente lo que hace Intercom Enterprise, pero aplicado a RUT y multi-tenant a escala.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
