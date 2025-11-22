"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone, MessageCircle, Clock, CheckCircle, Workflow } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { getAutomationDashboardUrl } from "@/lib/constants"

type WorkflowStatus = {
  id: string
  name: string
  flow: string
  metric: string
  active: boolean
}

export default function ContactSection() {
  const [workflows, setWorkflows] = useState<WorkflowStatus[]>([
    {
      id: "workflow-whatsapp",
      name: "WhatsApp Leads → CRM",
      flow: "N8N #431 · 14 ejecuciones hoy",
      metric: "Último disparo hace 2 min",
      active: true,
    },
    {
      id: "workflow-agenda",
      name: "Agenda confirmaciones",
      flow: "N8N #219 · Google Calendar",
      metric: "Sincronizado hace 8 min",
      active: true,
    },
    {
      id: "workflow-reportes",
      name: "Reporte diario a Sheets",
      flow: "N8N #102 · Control inventario",
      metric: "Último envío 09:00",
      active: false,
    },
  ])

  const automationPrimaryUrl = getAutomationDashboardUrl("contact-primary")
  const automationDashboardUrl = getAutomationDashboardUrl("contact-dashboard-link")

  const handleToggleWorkflow = (workflowId: string) => {
    setWorkflows((prev) =>
      prev.map((workflow) => (workflow.id === workflowId ? { ...workflow, active: !workflow.active } : workflow))
    )
  }

  return (
    <section id="contacto" className="py-12 md:py-20 px-4 md:px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Automatizo tu tarea en 90 minutos
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            <strong className="text-green-400">$35.000 CLP.</strong> Contanos qué querés automatizar y lo hacemos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left Column - Map + Info (info below map) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col h-full"
          >
            {/* Interactive Map */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.8234567890123!2d-70.6891234567890!3d-33.4567890123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a1234567890%3A0x1234567890abcdef!2sConde%20del%20Maule%204364%2C%20Estaci%C3%B3n%20Central%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl"
                width="100%"
                height="360"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[360px]"
              />
            </div>

            {/* Contact Info below map */}
            <div className="space-y-4 mt-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Información de contacto</h3>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Dirección</p>
                  <p className="text-gray-400">Conde del Maule 4364, Estación Central</p>
                  <p className="text-gray-400">Depto #26, Santiago, Chile</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">smarterbotcl@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <p className="text-gray-400">+56 979 540 471</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form (full height) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/10 h-full flex flex-col"
          >
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Automatizar mi tarea en 90 minutos, $35.000
            </h3>
            <p className="text-gray-400 mb-6">
              Contanos qué querés automatizar. Te decimos si se puede hacer y lo hacemos.
            </p>

            {/* Contact Form → api.smarterbot.cl/contact (FastAPI) + equal height content */}
            <ContactForm />

            <div className="mb-6">
              <AutomationDashboardPreview
                workflows={workflows}
                dashboardUrl={automationDashboardUrl}
                onToggle={handleToggleWorkflow}
              />
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Respuesta en menos de 2 horas</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Precio fijo $35.000 CLP</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Máximo 90 minutos de trabajo</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-sm">Te explico cómo funciona</span>
              </div>
            </div>

            <div className="bg-green-500/10 rounded-lg border border-green-500/20 p-4 mb-6">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Horarios de atención
              </h4>
              <div className="text-gray-400 text-sm space-y-1">
                <p>Lunes a Viernes: 9:00 - 18:00</p>
                <p>Sábados: 9:00 - 14:00</p>
                <p className="text-green-400 font-medium mt-2">WhatsApp: Respuesta en máximo 2 horas</p>
              </div>
            </div>

            <div className="bg-blue-500/10 rounded-lg border border-blue-500/20 p-4">
              <h4 className="text-white font-semibold mb-2">Ejemplos de tareas que automatizamos:</h4>
              <ul className="text-gray-400 text-sm space-y-1">
                <li>• Formulario → Email → Planilla</li>
                <li>• Agenda → Confirmación WhatsApp</li>
                <li>• Pedidos → Notificación automática</li>
                <li>• Contactos → Base de datos</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<null | boolean>(null)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setOk(null)
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      phone: formData.get("phone") || null,
      source: "smarterbot.cl",
    }
    try {
      const res = await fetch("https://api.smarterbot.cl/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      setOk(res.ok)
      if (!res.ok) {
        const t = await res.text()
        setError(t || "Error al enviar el formulario")
      } else {
        form.reset()
      }
    } catch (err: any) {
      setOk(false)
      setError(err?.message || "Error de red")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Tu nombre"
          className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Tu email"
          className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      </div>
      <input
        name="phone"
        placeholder="WhatsApp (opcional)"
        className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <textarea
        name="message"
        required
        placeholder="Contanos qué querés automatizar"
        rows={4}
        className="w-full rounded-md bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <div className="flex gap-3">
        <Button size="lg" disabled={loading} className="bg-green-600 hover:bg-green-700 text-white">
          {loading ? "Enviando…" : "Enviar"}
        </Button>
        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
          <Link href={getAutomationDashboardUrl("contact-whatsapp-cta")} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp
          </Link>
        </Button>
      </div>
      {ok === true && <p className="text-green-400 text-sm">Gracias. Te escribimos en breve.</p>}
      {ok === false && <p className="text-red-400 text-sm">{error || "No se pudo enviar."}</p>}
    </form>
  )
}

function AutomationDashboardPreview({
  workflows,
  onToggle,
  dashboardUrl,
}: {
  workflows: WorkflowStatus[]
  onToggle: (workflowId: string) => void
  dashboardUrl: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <p className="text-white font-semibold flex items-center gap-2">
            <Workflow className="w-4 h-4 text-green-400" />
            Automatizaciones en SmarterOS
          </p>
          <p className="text-xs text-gray-400">Controla tus flujos de N8N desde el dashboard</p>
        </div>
        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10" asChild>
          <Link href={dashboardUrl} target="_blank" rel="noopener noreferrer">
            Ver dashboard
          </Link>
        </Button>
      </div>

      <div className="space-y-3">
        {workflows.map((workflow) => (
          <div
            key={workflow.id}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-black/30 px-3 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-white">{workflow.name}</p>
              <p className="text-xs text-gray-400">{workflow.flow}</p>
              <p className="text-xs text-gray-500">{workflow.metric}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold ${workflow.active ? "text-green-400" : "text-gray-400"}`}>
                {workflow.active ? "ON" : "OFF"}
              </span>
              <Switch
                checked={workflow.active}
                onCheckedChange={() => onToggle(workflow.id)}
                aria-label={`Cambiar estado de ${workflow.name}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
