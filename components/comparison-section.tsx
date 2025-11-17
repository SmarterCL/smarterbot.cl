"use client"

import { motion } from "framer-motion"
import { Check, X, Crown, Building2, Rocket } from "lucide-react"

export default function ComparisonSection() {
  const competitors = [
    {
      name: "Intercom",
      logo: "💬",
      target: "Global, SaaS",
    },
    {
      name: "Zendesk",
      logo: "🎫",
      target: "Enterprise",
    },
    {
      name: "WhatsApp Business API",
      logo: "📱",
      target: "Todos",
    },
    {
      name: "SmarterOS",
      logo: "🧠",
      target: "PYMEs Chile",
      highlight: true,
    },
  ]

  const features = [
    {
      name: "Multi-tenant real (aislamiento por empresa)",
      intercom: true,
      zendesk: true,
      whatsapp: false,
      smarteros: true,
    },
    {
      name: "Multi-agent AI con handoffs automáticos",
      intercom: false,
      zendesk: false,
      whatsapp: false,
      smarteros: true,
    },
    {
      name: "RAG (Knowledge base) per tenant",
      intercom: true,
      zendesk: false,
      whatsapp: false,
      smarteros: true,
    },
    {
      name: "Integración nativa con RUT chileno",
      intercom: false,
      zendesk: false,
      whatsapp: false,
      smarteros: true,
    },
    {
      name: "Shopify / Odoo integration out-of-the-box",
      intercom: false,
      zendesk: false,
      whatsapp: false,
      smarteros: true,
    },
    {
      name: "Inbox omnicanal (WhatsApp, Email, Web, IG)",
      intercom: true,
      zendesk: true,
      whatsapp: false,
      smarteros: true,
    },
    {
      name: "OCR de documentos con clasificación LLM",
      intercom: false,
      zendesk: false,
      whatsapp: false,
      smarteros: true,
    },

    {
      name: "Soporte en español (horario Chile)",
      intercom: false,
      zendesk: true,
      whatsapp: false,
      smarteros: true,
    },
    {
      name: "Self-hosted option (Hostinger Chile)",
      intercom: false,
      zendesk: false,
      whatsapp: false,
      smarteros: true,
    },
  ]

  return (
    <section id="comparacion" className="py-16 md:py-24 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            ¿Por qué elegir SmarterOS?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Comparativa objetiva con las principales plataformas de customer engagement
          </p>
        </motion.div>

        {/* Competitors Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {competitors.map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${
                competitor.highlight
                  ? "bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-500/50 scale-105"
                  : "bg-white/5 border-white/10"
              }`}
            >
              {competitor.highlight && (
                <div className="flex justify-center mb-2">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
              )}
              <div className="text-4xl text-center mb-3">{competitor.logo}</div>
              <h3 className="text-white font-bold text-lg text-center mb-2">{competitor.name}</h3>
              <p className="text-gray-400 text-sm text-center">{competitor.target}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-white font-semibold pb-4 pr-4">Funcionalidad</th>
                <th className="text-center text-gray-400 font-medium pb-4 px-2">Intercom</th>
                <th className="text-center text-gray-400 font-medium pb-4 px-2">Zendesk</th>
                <th className="text-center text-gray-400 font-medium pb-4 px-2">WhatsApp</th>
                <th className="text-center text-purple-400 font-semibold pb-4 px-2">
                  SmarterOS
                  <Crown className="w-4 h-4 inline ml-1 text-yellow-400" />
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-300 text-sm">{feature.name}</td>
                  <td className="py-3 px-2 text-center">
                    {feature.intercom ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-2 text-center">
                    {feature.zendesk ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-2 text-center">
                    {feature.whatsapp ? (
                      <Check className="w-5 h-5 text-green-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                  <td className="py-3 px-2 text-center">
                    {feature.smarteros ? (
                      <Check className="w-5 h-5 text-purple-400 mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-gray-600 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-purple-500/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
            <Building2 className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Pensado para Chile</h3>
            <p className="text-gray-400 text-sm">
              Integración nativa con RUT, hosting en Chile, soporte en español en horario local.
            </p>
          </div>

          <div className="bg-blue-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
            <Rocket className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Multi-Agent AI Real</h3>
            <p className="text-gray-400 text-sm">
              No son bots simples. Son agentes especializados con RAG, handoffs automáticos y contexto persistente.
            </p>
          </div>

          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30">
            <Check className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Shopify Ready</h3>
            <p className="text-gray-400 text-sm">
              Conecta tu tienda Shopify u Odoo y deja que la IA venda por ti. Catálogo automático, carritos asistidos.
            </p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg mb-4">
            ¿Necesitas más información? Agenda una demo de 15 minutos.
          </p>
          <a
            href="https://wa.me/56979540471"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
          >
            Agendar demo gratuita
          </a>
        </motion.div>
      </div>
    </section>
  )
}
