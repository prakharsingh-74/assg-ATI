import { Instagram, Facebook, Twitter, Youtube, ExternalLink } from 'lucide-react'

const groupLinks = [
  'Top page',
  'About Us',
  'Vision',
  'Our Businesses',
  'Safety',
  'Sustainability',
  'Investor Relations',
  'Press Releases',
]
const travelLinks = ['JAL Guide to Japan', 'Inflight health tips']
const social = [
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Twitter, label: 'X' },
  { Icon: Youtube, label: 'YouTube' },
]

function LinkLine({ text }: { text: string }) {
  return (
    <a href="#" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white py-2">
      <span>{text}</span>
      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
    </a>
  )
}

// Renamed to SiteFooter so existing imports work
export function SiteFooter() {
  return (
    <footer className="bg-black text-white pt-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-10 pb-10">
          <div>
            <h4 className="text-xs tracking-widest text-neutral-400 mb-4">JAL GROUP</h4>
            <ul>
              {groupLinks.map((g) => (
                <li key={g}>
                  <LinkLine text={g} />
                </li>
              ))}
            </ul>
          </div>

            <div>
              <h4 className="text-xs tracking-widest text-neutral-400 mb-4">TRAVEL TIPS AND EXTRA</h4>
              <ul>
                {travelLinks.map((g) => (
                  <li key={g}>
                    <LinkLine text={g} />
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-widest text-neutral-400 mb-4">JAL SOCIAL MEDIA</h4>
              <div className="flex items-center gap-5 mb-6">
                {social.map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="hover:opacity-100 opacity-80">
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>

              <h4 className="text-xs tracking-widest text-neutral-400 mb-4 mt-8">JAL MOBILE APP</h4>
              <div className="flex items-center gap-4">
                <img
                  src="/images/app-store-badge.png"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                />
                <img
                  src="/images/google-play-badge.png"
                  alt="Get it on Google Play"
                  className="h-10 w-auto"
                />
              </div>
              <a href="#" className="block mt-3 text-sm text-neutral-300 hover:text-white">
                About JAL app
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6 py-6 text-xs text-neutral-400 flex justify-center items-center flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="hover:text-white">System Maintenance</a>
            <a href="#" className="hover:text-white">Website Policy</a>
            <a href="#" className="hover:text-white">About Trademarks</a>
            <a href="#" className="hover:text-white">Web Accessibility</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Conditions of Carriage</a>
            <span className="md:ml-auto text-neutral-500">
              Copyright © Japan Airlines. All rights reserved.
            </span>
          </div>
        </div>
    </footer>
  )
}

// Backwards compatibility alias
export { SiteFooter as SiteFooterReplica }
