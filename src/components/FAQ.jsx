import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How does the car certification process work?',
    answer: 'Each car goes through a comprehensive 200+ point inspection covering engine, transmission, electrical systems, body, interior, and more. Only cars meeting our strict standards get certified.',
  },
  {
    question: 'What documents are required to buy a car?',
    answer: 'You will need a valid ID proof (Aadhaar/PAN), address proof, income proof for financing, and passport-size photographs. Our team will guide you through the entire documentation process.',
  },
  {
    question: 'Are all cars fully inspected before listing?',
    answer: 'Yes, every car listed on HappyCars undergoes a thorough multi-point inspection by our certified mechanics. We provide a detailed inspection report with each listing.',
  },
  {
    question: 'Do you offer test drives or home delivery?',
    answer: 'Yes! You can schedule a test drive at the dealer location or opt for a home test drive in select cities. We also offer doorstep delivery for added convenience.',
  },
  {
    question: 'How does the financing/EMI process work?',
    answer: 'We partner with leading banks and NBFCs to offer competitive EMI options. You can get pre-approved loans with minimal documentation and flexible tenure options from 12 to 60 months.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-8 sm:py-16">
      <div className="max-w-[1304px] mx-auto px-4 sm:px-8 lg:px-[69px]">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-8 lg:gap-16 xl:gap-[186px] justify-between">
          {/* Left - Heading */}
          <div className="max-w-full lg:max-w-[649px] lg:shrink-0">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold text-black leading-[1.25]">
                We've Got Answers for You
              </h2>
              <p className="text-[13px] sm:text-[16px] text-[#494949] font-medium leading-[1.5]">
                Find quick answers to the most common questions buyers ask about certified cars, inspections, pricing, financing, and ownership.
              </p>
            </div>
          </div>

          {/* Right - FAQ accordion */}
          <div className="flex-1 flex flex-col gap-0 sm:gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-3 sm:gap-4 py-3 sm:py-2.5 border-b border-[#E8E8E8]"
              >
                <div className="flex-1">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left"
                  >
                    <span className="font-semibold text-[13px] sm:text-[15px] text-[#141414]">{faq.question}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-[300px] mt-2' : 'max-h-0'
                    }`}
                  >
                    <p className="text-[13px] sm:text-sm text-[#555555] leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="shrink-0 mt-0.5 sm:mt-1"
                >
                  <ChevronDown
                    size={18}
                    className={`text-[#555555] transition-transform duration-300 sm:w-5 sm:h-5 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
