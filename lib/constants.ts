const AUTOMATION_DASHBOARD_BASE_URL = "https://app.smarterbot.cl/dashboard"

const BASE_TRACKING_PARAMS = {
  utm_source: "landing",
  utm_medium: "cta",
  utm_campaign: "automatizar_mi_tarea",
}

export function getAutomationDashboardUrl(utmContent: string) {
  const params = new URLSearchParams(BASE_TRACKING_PARAMS)
  params.set("utm_content", utmContent)
  return `${AUTOMATION_DASHBOARD_BASE_URL}?${params.toString()}`
}

export { AUTOMATION_DASHBOARD_BASE_URL }
