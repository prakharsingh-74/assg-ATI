import { AlertTriangle } from "lucide-react"

export function AlertBanner() {
  return (
    <div className="w-full bg-neutral-100 border-y">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 py-2">
          <AlertTriangle className="h-5 w-5" style={{ color: "#d7000f" }} aria-hidden="true" />
          <p className="text-sm" style={{ color: "#d7000f" }}>
            Requests regarding the stowage and use of power banks onboard (Effective July 8, 2025)
          </p>
        </div>
      </div>
    </div>
  )
}
