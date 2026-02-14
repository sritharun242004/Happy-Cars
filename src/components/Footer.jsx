import navbarLogo from '../assets/images/navbar-logo.svg'
import socialMediaIcons from '../assets/images/social-media-icons.svg'

const supportLinks = ['FAQs', 'Contact Us', 'Chat with Support', 'Return Policy', 'Inspection Process', 'Buyer Guidelines']
const serviceLinks = ['Car Certification', 'Finance & EMI', 'Home Test Drive', 'Ownership Transfer', 'Delivery & Logistics', 'Inspection Report']

export default function Footer() {
  return (
    <footer className="bg-[#07071C] text-white relative overflow-hidden">
      {/* Radial gradient decorations */}
      <div className="absolute top-0 right-0 w-full h-full">
        <svg className="absolute right-0 top-0 w-full h-full" viewBox="0 0 1440 823" fill="none" preserveAspectRatio="none">
          <defs>
            <radialGradient id="footerGrad1" cx="99%" cy="39%" r="50%">
              <stop offset="0%" stopColor="rgba(189,20,81,0.2)" />
              <stop offset="100%" stopColor="rgba(17,25,40,0)" />
            </radialGradient>
            <radialGradient id="footerGrad2" cx="70%" cy="-7%" r="60%">
              <stop offset="0%" stopColor="rgba(68,47,194,1)" />
              <stop offset="100%" stopColor="rgba(7,7,28,0)" />
            </radialGradient>
          </defs>
          <rect width="1440" height="823" fill="url(#footerGrad2)" opacity="0.3" />
          <rect width="1440" height="823" fill="url(#footerGrad1)" opacity="0.5" />
        </svg>
      </div>

      {/* "Happy Cars" watermark text */}
      <div className="absolute bottom-[100px] left-[10px] w-[1432px] pointer-events-none select-none">
        <span
          className="text-[237px] font-bold font-display leading-[1.2] capitalize block"
          style={{
            background: 'linear-gradient(180deg, rgba(46,16,66,1) 22%, rgba(12,70,228,1) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.2,
          }}
        >
          Happy Cars
        </span>
      </div>

      <div className="relative max-w-[1440px] mx-auto px-[70px]">
        {/* Main footer content */}
        <div className="pt-[62px] pb-8">
          <div className="flex gap-16">
            {/* Brand */}
            <div className="max-w-[441px]">
              {/* Logo */}
              <div className="flex items-center gap-2.5 mb-4">
                <img src={navbarLogo} alt="Happy Cars" className="w-10 h-10" />
                <span className="text-xl font-bold">Happy Cars</span>
              </div>
              <p className="text-[#C9C9C9] text-base font-medium leading-[1.5] mb-6">
                Trusted. Transparent. Certified. Your smarter way to buy a car fully inspected, verified, and backed by 30 years of trust intelligence.
              </p>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-[15px]">Support</h4>
              <ul className="flex flex-col gap-[18px]">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-4 text-[15px]">Services</h4>
              <ul className="flex flex-col gap-[18px]">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter / Input fields */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="bg-white/8 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#FDBB1A]/50 transition-colors w-[276px]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-white/60">Date of Birth</label>
                <input
                  type="text"
                  placeholder="DD/MM/YYYY"
                  className="bg-white/8 border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[#FDBB1A]/50 transition-colors w-[142px]"
                />
              </div>
            </div>
          </div>

          {/* Social media */}
          <div className="mt-8">
            <p className="text-[18px] font-semibold text-[#E4E4E4] mb-3">Follow us on</p>
            <img src={socialMediaIcons} alt="Social media" className="h-10 opacity-80" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Terms & Conditions</a>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Privacy Policy</a>
          </div>
          <p className="text-white/30 text-sm">&copy;2025 HappyCars all rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
