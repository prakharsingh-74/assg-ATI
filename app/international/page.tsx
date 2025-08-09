import { SiteHeader } from "@/components/site-header"
import { AlertBanner } from "@/components/alert-banner"
import { FlightSearchPanel } from "@/components/flight-search"
import { QuickActions } from "@/components/quick-actions"
import { FrequentlyUsed } from "@/components/frequently-used"
import { NoticesAdvisories } from "@/components/notices-advisories"
import { FAQ } from "@/components/faq"
import { SiteFooter } from "@/components/site-footer"
import { Recommended } from "@/components/recommended"

export default function InternationalPage() {
  return (
    <div className="min-h-[100dvh] bg-white">
      <SiteHeader />
      <AlertBanner />
      <main>
        <section aria-label="International Flights hero" className="relative h-[46vh] md:h-[56vh] lg:h-[64vh] w-full">
          <div className="absolute inset-0">
            <img
              src="/images/hero-international.png"
              alt="Paris skyline with Eiffel Tower"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent" />
          </div>
          <div className="relative h-full container mx-auto px-4 md:px-6 flex items-start md:items-center">
            <h1 className="mt-8 md:mt-0 text-white text-3xl sm:text-4xl md:text-5xl font-semibold drop-shadow">
              International Flights
            </h1>
          </div>
        </section>

        <section className="-mt-16 md:-mt-24 relative z-10">
          <div className="container mx-auto px-4 md:px-6">
            <FlightSearchPanel variant="international" />
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 mt-10 md:mt-14">
          <QuickActions />
        </section>

        <section className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <Recommended
            items={[
              {
                title: "A350-1000 Operating on select routes between Japan and America/Europe",
                subtitle: "International Flights",
                image: "/images/int-reco-1.png",
              },
              {
                title: "Customize your journey for greater comfort with optional services",
                subtitle: "International Flights",
                image: "/images/int-reco-2.png",
              },
              {
                title: "JAL’s Free inflight Wi‑Fi Service",
                subtitle: "International Flights",
                image: "/images/int-reco-3.png",
              },
              {
                title: "Check information on various routes for international flights",
                subtitle: "International Flights",
                image: "/images/int-reco-4.png",
              },
            ]}
          />
        </section>

        <FrequentlyUsed />
        <NoticesAdvisories />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  )
}
