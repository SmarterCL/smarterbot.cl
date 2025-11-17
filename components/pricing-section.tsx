"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Check, Star, Wrench, Clock, Bot, Crown, Rocket } from "lucide-react"

export default function PricingSection() {
  const handlePlanClick = () => {
    window.open("https://app.smarterbot.cl", "_blank")
  }

  const handleDemoClick = () => {
    window.open("https://wa.me/56979540471", "_blank")
  }

  const services = [
    {
      name: "Tier 0: Sandbox",
      subtitle: "Ambiente de desarrollo y pruebas",
      icon: Wrench,
      features: [
        "1 tenant (tu RUT)",
        "Botpress sandbox local",
        "n8n workflows básicos",
        "Chatwoot inbox (100 mensajes/mes)",
        "Documentación completa",
      ],
      popular: false,
      example: "Perfecto para testing",
    },
    {
      name: "Tier 1: Startup",
      subtitle: "Para PYMEs con hasta 1,000 conversaciones/mes",
      icon: Clock,
      features: [
        "Multi-agent AI (3 agentes)",
        "RAG per tenant (1GB knowledge base)",
        "Shopify / Odoo integration",
        "Chatwoot omnicanal (WhatsApp, Email, Web)",
        "n8n workflows ilimitados",
        "Soporte prioritario",
      ],
      popular: true,
      example: "Recomendado para eCommerce",
    },
    {
      name: "Tier 2: Growth",
      subtitle: "Para empresas con alto volumen",
      icon: Bot,
      features: [
        "Multi-agent AI ilimitado",
        "RAG per tenant (10GB)",
        "Azure Container Apps (n8n dedicado)",
        "Postgres dedicado",
        "SSO con Azure AD",
        "Audit logs completos (Redpanda)",
        "SLA 99.9%",
      ],
      popular: false,
      example: "Enterprise ready",
    },
  ]

  return (
    <section id="planes" className="py-16 md:py-24 px-4 md:px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Planes Multi-Tenant</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Empieza con el sandbox. Escala cuando lo necesites. Soluciones adaptadas a tu negocio.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${service.popular ? "border-purple-500 border-2 scale-105" : "border-white/10"} bg-black/50 backdrop-blur-sm`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <service.icon className="w-12 h-12 text-purple-500" />
                  </div>
                  <CardTitle className="text-white text-xl mb-1">{service.name}</CardTitle>
                  <p className="text-gray-400 text-sm">{service.subtitle}</p>
                  <p className="text-purple-400 text-xs italic mt-2">{service.example}</p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${
                      service.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                    onClick={handlePlanClick}
                  >
                    Contratar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Crown className="w-6 h-6 text-yellow-400 mr-2" />
              Enterprise Custom
            </h3>
            <p className="text-gray-400 mb-4">
              Botpress dedicado, Azure private, SSO, audit completo, SLA 99.95%
            </p>
            <p className="text-purple-400 text-sm">Contáctanos para más información</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Rocket className="w-6 h-6 text-blue-400 mr-2" />
              Migración desde otra plataforma
            </h3>
            <p className="text-gray-400 mb-4">
              Migramos tus conversaciones, datos y workflows desde Intercom, Zendesk, etc.
            </p>
            <p className="text-purple-400 text-sm">Servicio de migración disponible</p>
          </div>
        </motion.div>

        {/* How we work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-6">¿Cómo funciona el onboarding?</h3>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">1</span>
              </div>
              <p className="text-gray-300 text-sm">Crea tu cuenta con RUT chileno</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">2</span>
              </div>
              <p className="text-gray-300 text-sm">Configura tu workspace (Botpress + Chatwoot)</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">3</span>
              </div>
              <p className="text-gray-300 text-sm">Conecta Shopify/Odoo (opcional)</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-400 font-bold">4</span>
              </div>
              <p className="text-gray-300 text-sm">Activa tu dominio rut.smarterbot.cl</p>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 mt-8"
            onClick={handleDemoClick}
          >
            Agenda una llamada de 15 minutos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
