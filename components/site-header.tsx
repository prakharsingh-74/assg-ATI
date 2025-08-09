"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Globe, UserRound, Search, Menu, SquareArrowOutUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const JAL_RED = "#d7000f"

export function SiteHeader() {
  const pathname = usePathname()
  const isDomestic = pathname === "/" || pathname?.startsWith("/domestic")
  const isInternational = pathname?.startsWith("/international")
  const isMileage = pathname?.startsWith("/mileage")

  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white jal-header">
      {/* Top row */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 h-[56px] flex items-center">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" aria-label="Japan Airlines Home">
            <img src="/brand/jal-roundel.png" alt="JAL logo" className="h-7 w-7" />
            <span
              className="hidden xs:inline-block jal-wordmark-text text-white leading-none"
              aria-label="JAPAN AIRLINES"
            >
              JAPAN AIRLINES
            </span>
            <span className="mx-3 hidden sm:inline-block h-6 w-px bg-white/30" aria-hidden="true" />
            <img src="/brand/oneworld.png" alt="oneworld" className="hidden sm:inline-block h-7 w-7" />
          </Link>

          {/* Right controls */}
          <div className="ml-auto flex items-center gap-2 text-sm">
            {/* Locale */}
            <div className="hidden md:inline-flex items-center h-8 px-3 rounded-full text-white/85 hover:bg-white/10">
              <Globe className="h-4 w-4 mr-2" />
              <span>Japan - English</span>
            </div>

            {/* LOGIN pill */}
            <button
              aria-label="Login"
              className="inline-flex items-center h-[32px] rounded-full px-4 text-[13px] font-semibold"
              style={{ backgroundColor: JAL_RED }}
            >
              <UserRound className="h-4 w-4 mr-2" />
              LOGIN
            </button>

            {/* Insite Search pill */}
            <div
              role="button"
              aria-label="Insite Search"
              className="hidden sm:inline-flex items-center h-[32px] rounded-full pl-4 pr-2 text-[13px] border hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              <span className="mr-3">Insite Search</span>
              <div
                className="h-[26px] w-[26px] rounded-full border flex items-center justify-center"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                <Search className="h-4 w-4" />
              </div>
            </div>

            {/* Divider */}
            <span className="mx-2 hidden md:inline-block h-5 w-px bg-white/30" aria-hidden="true" />

            {/* MENU */}
            <div className="inline-flex items-center h-8 px-3 rounded-full text-[13px] hover:bg-white/10">
              <Menu className="h-5 w-5 mr-2" />
              <span className="uppercase tracking-wide">Menu</span>
            </div>
          </div>
        </div>

        {/* Nav row */}
        <div className="border-b border-white/10">
          <div className="container mx-auto px-4 md:px-6 h-[44px] flex items-center">
            <nav className="flex items-center gap-10">
              <Link
                href="/"
                className={cn(
                  "relative text-[15px] font-medium text-white/90 hover:text-white px-2 pb-1",
                  isDomestic && "active-link"
                )}
              >
                Domestic
                {isDomestic && (
                  <span
                    className="pointer-events-none absolute left-1 right-1"
                    style={{
                      bottom: -10,
                      height: 2,
                      backgroundColor: JAL_RED,
                      borderRadius: 9999,
                    }}
                  />
                )}
              </Link>
              <Link
                href="/international"
                className={cn(
                  "relative text-[15px] font-medium text-white/90 hover:text-white px-2 pb-1",
                  isInternational && "active-link"
                )}
              >
                International
                {isInternational && (
                  <span
                    className="pointer-events-none absolute left-1 right-1"
                    style={{
                      bottom: -10,
                      height: 2,
                      backgroundColor: JAL_RED,
                      borderRadius: 9999,
                    }}
                  />
                )}
              </Link>
              <Link
                href="/mileage"
                className={cn(
                  "relative text-[15px] font-medium text-white/90 hover:text-white px-2 pb-1",
                  isMileage && "active-link"
                )}
              >
                Mileage
                {isMileage && (
                  <span
                    className="pointer-events-none absolute left-1 right-1"
                    style={{
                      bottom: -10,
                      height: 2,
                      backgroundColor: JAL_RED,
                      borderRadius: 9999,
                    }}
                  />
                )}
              </Link>
            </nav>

            {/* Right utility links */}
            <div className="ml-auto hidden sm:flex items-center gap-6 text-[13px] text-white/85">
              <Link href="#" className="hover:text-white inline-flex items-center gap-2">
                <span>Special Assistance</span>
                <SquareArrowOutUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="#" className="hover:text-white">
                Help &amp; Contacts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
