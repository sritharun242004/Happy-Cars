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
    <section className="bg-white py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[98px]">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-14">
          {/* Left - Text content */}
          <div className="flex-1 max-w-full md:max-w-[648px]">
            <div className="flex flex-col gap-3 sm:gap-[14px]">
              <div>
                <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold text-black leading-[1.25]">
                  Why Buy from HappyCars?
                </h2>
                <p className="text-[13px] sm:text-[16px] text-[#494949] font-medium mt-2 sm:mt-3 leading-[1.5]">
                  A trusted, transparent, and certified way to own a car that fits your lifestyle fully inspected, verified, and backed by 30 years of trust intelligence.
                </p>
              </div>

              {/* Feature list */}
              <div className="flex flex-col gap-2.5 sm:gap-4 mt-1 sm:mt-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#E8F5E9] rounded-full flex items-center justify-center shrink-0">
                      <Check size={12} className="text-[#0E9845] sm:w-[14px] sm:h-[14px]" />
                    </div>
                    <span className="text-[13px] sm:text-[15px] font-medium text-[#242424]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Key image */}
          <div className="flex-1 flex justify-center">
            <img
              src={whyBuyKeyImage}
              alt="Car key"
              className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[540px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
