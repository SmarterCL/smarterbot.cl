"use client"

import type { MouseEvent } from "react"

import Link from "next/link"
import { Bot, Facebook, Linkedin, Mail, MessageCircle, Phone } from "lucide-react"

const QUICK_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Planes", href: "#planes" },
  { label: "Casos", href: "#casos" },
  { label: "Tienda", href: "https://odoo.smarterbot.cl/es/shop", external: true },
  { label: "Contacto", href: "#contacto" },
]

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61574783600255",
    icon: Facebook,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/56979540471",
    icon: MessageCircle,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pedrozaffuto-cl/",
    icon: Linkedin,
  },
]

const CONTACT_INFO = [
  {
    label: "Escríbenos",
    value: "smarterbotcl@gmail.com",
    href: "mailto:smarterbotcl@gmail.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+56 9 7954 0471",
    href: "https://wa.me/56979540471",
    icon: MessageCircle,
  },
  {
    label: "Teléfono",
    value: "+56 9 7954 0471",
    href: "tel:+56979540471",
    icon: Phone,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/70 border-t border-white/10 text-gray-300">
      <div className="px-4 md:px-6 py-12">
        <div className="container mx-auto max-w-6xl grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Bot className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-white text-lg font-semibold leading-tight">SmarterBot Chile</p>
                <p className="text-xs uppercase tracking-widest text-gray-400">SmarterOS</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              SmarterOS integra WhatsApp, CRM, tienda online y automatizaciones con IA para que las PYMEs chilenas
              operen con procesos simples y datos confiables en una sola plataforma.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Accesos rápidos</h3>
            <ul className="space-y-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <FooterLink {...link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Conversemos</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Conde del Maule 4364, Estación Central · Santiago</li>
              {CONTACT_INFO.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 hover:text-white transition-colors"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <item.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-wide text-gray-400">{item.label}</span>
                      <span className="text-sm text-white/90">{item.value}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-green-500 hover:text-green-500 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-xs text-gray-400">
          <span>© {currentYear} SmarterBot Chile. Todos los derechos reservados.</span>
          <span>Impulsado por SmarterOS · Automatización con WhatsApp + IA.</span>
        </div>
      </div>
    </footer>
  )
}

type FooterLinkProps = {
  label: string
  href: string
  external?: boolean
}

function FooterLink({ label, href, external }: FooterLinkProps) {
  const isAnchor = href.startsWith("#") && !external

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      event.preventDefault()
      if (typeof document !== "undefined") {
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  if (external) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        prefetch={false}
        className="text-gray-400 hover:text-white transition-colors"
      >
        {label}
      </Link>
    )
  }

  return (
    <Link href={href} prefetch={false} className="text-gray-400 hover:text-white transition-colors" onClick={handleClick}>
      {label}
    </Link>
  )
}
