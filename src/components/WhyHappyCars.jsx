import { Check } from 'lucide-react'
import whyBuyKeyImage from '../assets/images/homepage/why-buy-key-image.png'

const features = [
  '200+ Point Inspection on Every Car',
  'Transparent History Reports',
  'Fair & Market-Aligned Pricing',
  'Trusted Dealer Network',
  'Easy EMI & Finance Options',
]

export default function WhyHappyCars() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-[98px]">
        <div className="flex items-center gap-14">
          {/* Left - Text content */}
          <div className="flex-1 max-w-[648px]">
            <div className="flex flex-col gap-[14px]">
              <div>
                <h2 className="text-[32px] font-bold text-black leading-[1.22]">
                  Why Buy from HappyCars?
                </h2>
                <p className="text-[16px] text-[#494949] font-medium mt-3 leading-[1.5]">
                  A trusted, transparent, and certified way to own a car that fits your lifestyle fully inspected, verified, and backed by 30 years of trust intelligence.
                </p>
              </div>

              {/* Feature list */}
              <div className="flex flex-col gap-4 mt-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#E8F5E9] rounded-full flex items-center justify-center shrink-0">
                      <Check size={14} className="text-[#0E9845]" />
                    </div>
                    <span className="text-[15px] font-medium text-[#242424]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Key image */}
          <div className="flex-1">
            <img
              src={whyBuyKeyImage}
              alt="Car key"
              className="w-[540px] h-[459px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
