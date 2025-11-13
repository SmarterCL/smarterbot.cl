"use client"

import type { MouseEvent } from "react"
import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Bot, Menu, Phone, X } from "lucide-react"

import { Button } from "@/components/ui/button"

type NavItem = {
  label: string
  href: string
  external?: boolean
}

const NAV_LINKS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Casos reales", href: "#casos" },
  { label: "Planes", href: "#planes" },
  { label: "Tienda", href: "https://odoo.smarterbot.cl/es/shop", external: true },
]

const LOGIN_URL = "https://app.smarterbot.cl"
const CONTACT_HASH = "#contacto"
const PHONE_LINK = "tel:+56979540471"
const PHONE_LABEL = "+56 9 7954 0471"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleContactNavigation = () => {
    scrollToHash(CONTACT_HASH)
    setIsMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md"
    >
      <div className="flex items-center justify-between px-4 md:px-6 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <Bot className="w-8 h-8 text-green-500" />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-lg">SmarterBot Chile</span>
            <span className="text-xs text-gray-400 uppercase tracking-wide">SmarterOS</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((item) => (
            <NavigationLink key={item.label} item={item} />
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={PHONE_LINK}
            className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
            aria-label="Llamar a SmarterBot Chile"
          >
            <Phone className="w-4 h-4 mr-2 text-green-400" />
            {PHONE_LABEL}
          </a>

          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            asChild
          >
            <Link href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
              Inicia sesión
            </Link>
          </Button>

          <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleContactNavigation}>
            Contáctanos
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/10 bg-black/90"
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            {NAV_LINKS.map((item) => (
              <NavigationLink key={item.label} item={item} onNavigate={() => setIsMenuOpen(false)} mobile />
            ))}

            <a
              href={PHONE_LINK}
              className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-green-400" />
              {PHONE_LABEL}
            </a>

            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href={LOGIN_URL} target="_blank" rel="noopener noreferrer">
                Inicia sesión
              </Link>
            </Button>

            <Button className="bg-green-600 hover:bg-green-700 text-white" onClick={handleContactNavigation}>
              Contáctanos
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavigationLink({
  item,
  onNavigate,
  mobile = false,
}: {
  item: NavItem
  onNavigate?: () => void
  mobile?: boolean
}) {
  const isAnchor = item.href.startsWith("#") && !item.external
  const linkProps = item.external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (isAnchor) {
      event.preventDefault()
      scrollToHash(item.href)
    }
    onNavigate?.()
  }

  return (
    <Link
      href={item.href}
      prefetch={false}
      {...linkProps}
      className={`group text-sm font-medium text-gray-300 hover:text-white transition-colors relative inline-flex flex-col ${
        mobile ? "text-base w-full" : ""
      }`}
      onClick={handleClick}
    >
      <span>{item.label}</span>
      <span
        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"
        aria-hidden="true"
      />
    </Link>
  )
}

function scrollToHash(hash: string) {
  if (typeof document === "undefined") return
  const element = document.querySelector(hash)
  element?.scrollIntoView({ behavior: "smooth", block: "start" })
}
