import { SiteHeader } from "@/components/site-header"
import { AlertBanner } from "@/components/alert-banner"
import { SiteFooter } from "@/components/site-footer"

export default function MileagePage() {
  return (
    <div className="min-h-[100dvh] bg-white">
      <SiteHeader />
      <AlertBanner />
      <main className="container mx-auto px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-4xl font-semibold">Mileage</h1>
        <p className="mt-4 text-neutral-600">Placeholder page for navigation parity.</p>
      </main>
      <SiteFooter />
    </div>
  )
}
