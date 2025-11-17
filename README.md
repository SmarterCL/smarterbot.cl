# SmarterOS

**SmarterOS** es una plataforma cognitiva multi-tenant para PYMEs chilenas que combina automatización inteligente, agentes conversacionales y capacidades RAG. El sitio comunica la propuesta tecnológica y los canales de contacto para empresas que buscan implementar soluciones de IA escalables.

## Propuesta de valor

- Plataforma multi-tenant con aislamiento completo por empresa (basado en RUT chileno)
- Agentes conversacionales especializados con handoffs automáticos (Botpress + RAG)
- Automatización de workflows empresariales (n8n + MCP + Vault)
- Integración nativa con Shopify, Odoo, WhatsApp Business, Email, Web
- Inbox omnicanal centralizado (Chatwoot)
- Servicio pensado para PYMEs chilenas que necesitan escalabilidad sin complejidad.

## Casos de uso destacados

1. **Vendedor digital automatizado** · Agente AI que consulta catálogo, genera carritos y procesa ventas vía WhatsApp
2. **Soporte multi-canal con handoffs** · Triage inteligente que deriva a agentes especializados (billing, soporte, OCR)
3. **RAG sobre documentos empresariales** · Knowledge base per tenant con semantic search sobre facturas, políticas, manuales
4. **OCR + clasificación LLM** · Procesamiento automático de documentos PDF con extracción y análisis inteligente
5. **Integración Shopify/Odoo** · Sincronización bidireccional de productos, inventario, pedidos y clientes

## Beneficios clave

- Disponibilidad 24/7 y tiempos de respuesta en segundos.
- Cobros automáticos y flujos personalizables para ventas, reservas o pedidos.
- Compatibilidad total con WhatsApp Business (web y app) y APIs oficiales cuando se requiere.
- Implementación rápida (menos de un día para la mayoría de los casos) con foco en seguridad de datos.

## Cómo funciona

1. Contactas al equipo por WhatsApp (`https://wa.me/56979540471`) para una demo de 15 minutos
2. Configuramos tu workspace multi-tenant (RUT → tenant_id → dominio rut.smarterbot.cl)
3. Desplegamos tu stack: Botpress (agentes), Chatwoot (inbox), n8n (workflows), MCP (seguridad)
4. Conectamos tus sistemas existentes (Shopify, Odoo, WhatsApp Business, Email)
5. Entrenamos tus agentes con tu knowledge base específica (RAG)

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
- Solicitud de automatización: **[https://app.smarterbot.cl](https://app.smarterbot.cl)**
- Equipo: SmarterBot Chile · `hola@smarterbot.cl`

SmarterOS acompaña las operaciones diarias de tu negocio mientras tu equipo se concentra en vender.
