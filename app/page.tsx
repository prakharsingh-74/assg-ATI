import { SiteHeader } from "@/components/site-header"
import { AlertBanner } from "@/components/alert-banner"
import { FlightSearchPanel } from "@/components/flight-search"
import { QuickActions } from "@/components/quick-actions"
import { Recommended } from "@/components/recommended"
import { FrequentlyUsed } from "@/components/frequently-used"
import { NoticesAdvisories } from "@/components/notices-advisories"
import { FAQ } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-white">
      <SiteHeader />
      <AlertBanner />
      <main>
        {/* Hero */}
        <section
          aria-label="Domestic Flights hero"
          className="relative h-[46vh] md:h-[56vh] lg:h-[64vh] w-full"
        >
          <div className="absolute inset-0">
            <img
              src="/images/hero-mt-fuji.png"
              alt="Mount Fuji scenic landscape"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
          </div>
          <div className="relative h-full container mx-auto px-4 md:px-6 flex items-start md:items-center">
            <h1 className="mt-8 md:mt-0 text-white text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow">
              Domestic Flights
            </h1>
          </div>
        </section>

        {/* Search Panel */}
        <section className="-mt-16 md:-mt-24 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <FlightSearchPanel />
          </div>
        </section>

        {/* Quick Actions */}
        <section className="container mx-auto px-4 md:px-6 mt-10 md:mt-14">
          <QuickActions />
        </section>

        {/* Recommended */}
        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <Recommended />
        </section>

        {/* New sections matching screenshots */}
        <FrequentlyUsed />
        <NoticesAdvisories />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  )
}
