# SmarterOS

**SmarterOS** es la experiencia digital de SmarterBot Chile para ofrecer automatizaciones listas en 90 minutos y servicios operativos que combinan WhatsApp, Zapier/N8N y AppSheet. El sitio comunica la propuesta comercial (precio fijo $35.000 CLP por tarea) y los canales de contacto para que clientes agenden su sprint de implementación.

## Propuesta de valor

- Automatizamos tareas puntuales en máximo 90 minutos por $35.000 CLP.
- Conectamos formularios, Gmail, Sheets, agendas y disparadores de WhatsApp para que el flujo funcione sin intervención manual.
- Entregamos apps internas en AppSheet (inventario, clientes, pedidos) listas para instalar en Android sin pasar por Play Store.
- Ofrecemos asistencia humana por WhatsApp, cobranzas automatizadas y soporte por hora para mantener flujos Zapier/N8N/Make.
- Servicio pensado para PYMEs chilenas que necesitan resultados rápidos, sin contratos ni integraciones complejas.

## Casos de uso destacados

1. **Conectar herramientas** · Google Forms → Gmail → Sheets para captura y envío automático de la información.
2. **Agenda con confirmación en WhatsApp** · Link de agenda + seguimiento manual sin bots impersonales.
3. **App interna en AppSheet** · Control de inventario, clientes o pedidos con despliegue directo en teléfonos Android.
4. **Asistente virtual** · Secretaria digital que responde consultas y coordina agendas por WhatsApp o correo.
5. **Soporte técnico por hora** · Ajustes y monitoreo de automatizaciones existentes a $35.000 CLP/h.

## Beneficios clave

- Disponibilidad 24/7 y tiempos de respuesta en segundos.
- Cobros automáticos y flujos personalizables para ventas, reservas o pedidos.
- Compatibilidad total con WhatsApp Business (web y app) y APIs oficiales cuando se requiere.
- Implementación rápida (menos de un día para la mayoría de los casos) con foco en seguridad de datos.

## Cómo funciona

1. Nos cuentas la tarea a automatizar por WhatsApp (`https://wa.me/56979540471`).
2. Confirmamos si encaja en el formato 90 minutos / $35.000 CLP.
3. Construimos el flujo conectando las herramientas necesarias (Zapier, N8N, Google Workspace, AppSheet, OpenAI/Claude).
4. Entregamos, documentamos y pagas una sola vez.

## Stack del sitio

- **Next.js 15 (App Router) + React 19** para el front-end.
- **Tailwind CSS, Radix UI y shadcn/ui** para la interfaz.
- **Framer Motion y efectos personalizados** (Sparkles, FloatingPaper, RoboAnimation) para microinteracciones.
- **TypeScript, ESLint, PostCSS** para tipado y consistencia.
- Deploy continuo en **Vercel**.

## Desarrollo local

```bash
pnpm install     # instala dependencias
pnpm dev         # inicia el entorno local en http://localhost:3000
pnpm lint        # ejecuta las reglas de ESLint/Next
pnpm build       # genera la versión lista para producción
```

> Requisitos: Node.js 18+, pnpm y acceso local al proyecto `smarterbot.cl`.

## Despliegue

El proyecto está preparado para Vercel. Un `git push` al branch principal dispara el build y deja el marketing site público. Si necesitas montar otra instancia (por ejemplo, variantes de landing para campañas), crea un nuevo proyecto en Vercel y reutiliza las mismas variables de entorno (no se requieren secrets adicionales para el sitio estático).

## Contacto

- WhatsApp directo: **[https://wa.me/56979540471](https://wa.me/56979540471)**
- Solicitud de automatización: **[http://app.smarterbot.cl](http://app.smarterbot.cl)**
- Equipo: SmarterBot Chile · `hola@smarterbot.cl`

SmarterOS acompaña las operaciones diarias de tu negocio mientras tu equipo se concentra en vender.
