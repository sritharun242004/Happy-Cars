import { useState, useEffect } from 'react'
import blogImg1 from '../assets/images/homepage/blog-img-1.png'
import blogImg2 from '../assets/images/homepage/blog-img-2.png'
import blogImg3 from '../assets/images/homepage/blog-img-3.png'

const steps = [
  {
    number: '1',
    title: 'Shortlist & Inspect',
    description: 'Browse certified cars and review detailed inspection reports before deciding.',
    image: blogImg1,
  },
  {
    number: '2',
    title: 'Talk to the Dealer',
    description: 'Connect with verified dealers, clarify details, and lock the best deal.',
    image: blogImg2,
  },
  {
    number: '3',
    title: 'Book & Drive',
    description: 'Complete documentation, choose financing if needed, and drive away confidently.',
    image: blogImg3,
  },
]

export default function Steps() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#FEFEFE] py-8 sm:py-16 lg:py-[71px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[120px]">
        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-12">
          <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold text-black leading-[1.25]">
            Buy in 3 Simple Steps
          </h2>
        </div>

        {/* Steps layout */}
        <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-8 md:gap-12 lg:gap-16">
          {/* Left - Auto-cycling image */}
          <div className="w-full md:w-[380px] lg:w-[458px] h-[220px] sm:h-[380px] lg:h-[487px] rounded-xl sm:rounded-2xl shrink-0 overflow-hidden relative">
            {steps.map((step, index) => (
              <img
                key={index}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Right - Step cards */}
          <div className="flex-1 flex flex-col gap-3 sm:gap-[30px] pt-0 w-full">
            {steps.map((step, index) => (
              <button
                key={step.number}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col gap-1 sm:gap-1.5 p-3.5 sm:p-5 rounded-lg sm:rounded-[10px] text-left transition-colors duration-300 ${
                  activeIndex === index
                    ? 'bg-[#452CFF] text-white'
                    : 'bg-white text-[#141414] border border-[#F0F0F0] sm:border-0'
                }`}
              >
                <h3 className={`text-[14px] sm:text-base font-bold ${activeIndex === index ? 'text-white' : 'text-[#141414]'}`}>
                  {step.number}. {step.title}
                </h3>
                <p className={`text-[13px] sm:text-sm leading-relaxed ${activeIndex === index ? 'text-white/80' : 'text-[#555555]'}`}>
                  {step.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
