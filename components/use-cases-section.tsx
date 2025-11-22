"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Headphones, FileText, Scan, Package } from "lucide-react"

export default function UseCasesSection() {
  const useCases = [
    {
      icon: ShoppingCart,
      title: "Vendedor digital automatizado",
      description: "Agente AI que consulta catálogo, genera carritos y procesa ventas vía WhatsApp",
      color: "text-green-400",
      bgColor: "bg-green-400/20",
      borderColor: "border-green-500/30",
      features: [
        "Catálogo automático desde Shopify/Odoo",
        "Generación de carritos con IA",
        "Procesamiento de pagos integrado",
        "Seguimiento de pedidos automatizado",
      ],
    },
    {
      icon: Headphones,
      title: "Soporte multi-canal con handoffs",
      description: "Triage inteligente que deriva a agentes especializados (billing, soporte, OCR)",
      color: "text-blue-400",
      bgColor: "bg-blue-400/20",
      borderColor: "border-blue-500/30",
      features: [
        "Clasificación inteligente de consultas",
        "Derivación automática a especialistas",
        "Soporte por WhatsApp, Email, Web",
        "Historial unificado de conversaciones",
      ],
    },
    {
      icon: FileText,
      title: "RAG sobre documentos empresariales",
      description: "Knowledge base per tenant con semantic search sobre facturas, políticas, manuales",
      color: "text-purple-400",
      bgColor: "bg-purple-400/20",
      borderColor: "border-purple-500/30",
      features: [
        "Base de conocimiento por tenant",
        "Búsqueda semántica con pgvector",
        "Respuestas contextualizadas",
        "Indexación automática de documentos",
      ],
    },
    {
      icon: Scan,
      title: "OCR + clasificación LLM",
      description: "Procesamiento automático de documentos PDF con extracción y análisis inteligente",
      color: "text-orange-400",
      bgColor: "bg-orange-400/20",
      borderColor: "border-orange-500/30",
      features: [
        "Extracción de texto con Vision API",
        "Clasificación inteligente con LLM",
        "Validación automática de datos",
        "Integración con workflows",
      ],
    },
    {
      icon: Package,
      title: "Integración Shopify/Odoo",
      description: "Sincronización bidireccional de productos, inventario, pedidos y clientes",
      color: "text-teal-400",
      bgColor: "bg-teal-400/20",
      borderColor: "border-teal-500/30",
      features: [
        "Sync automático de productos",
        "Actualización de inventario en tiempo real",
        "Gestión de pedidos integrada",
        "Base de datos unificada de clientes",
      ],
    },
  ]

  return (
    <section id="casos-de-uso" className="py-16 md:py-24 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Casos de uso destacados</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Soluciones reales para problemas reales. Implementadas y funcionando para PYMEs chilenas.
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${useCase.borderColor} hover:border-opacity-80 transition-all duration-300 h-full hover:transform hover:scale-105`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${useCase.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                  <useCase.icon className={`w-8 h-8 ${useCase.color}`} />
                </div>

                {/* Title & Description */}
                <h3 className="text-white text-xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{useCase.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {useCase.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start text-sm">
                      <span className={`${useCase.color} mr-2 mt-1 flex-shrink-0`}>•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg mb-4">
            ¿Tu negocio necesita una de estas soluciones?
          </p>
          <a
            href="https://wa.me/56979540471"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Agenda tu demo de 15 minutos
          </a>
        </motion.div>
      </div>
    </section>
  )
}
