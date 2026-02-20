import { useNavigate } from 'react-router-dom'
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import articleHero from '../assets/images/blogs/article-hero.png'
import articleCar1 from '../assets/images/blogs/article-car-1.png'
import articleCar2 from '../assets/images/blogs/article-car-2.png'

const carSections = [
  {
    number: 1,
    name: 'Tata Punch EV',
    image: articleCar1,
    specs: [
      { label: 'Price', value: '₹10.99 – ₹14.49 lakh' },
      { label: 'Range', value: 'Up to 421 km' },
      { label: 'Battery', value: '25–35 kWh' },
    ],
    whyTitle: "Why it\u2019s a winner:",
    whyText:
      "Punch EV hits the sweet spot\u2014compact proportions, long range, spacious cabin, 5-star safety, and Tata\u2019s proven EV tech. The larger LR variant makes it ideal for both city and occasional highway drives.",
    bestFor: 'Best For: Families and professionals who want comfort + space.',
  },
  {
    number: 2,
    name: 'Tata Tiago EV',
    image: articleCar2,
    specs: [
      { label: 'Price', value: '₹8.99 – ₹12.49 lakh' },
      { label: 'Range', value: 'Up to 315 km' },
      { label: 'Battery', value: '19–24 kWh' },
    ],
    whyTitle: 'Why it stands out:',
    whyText:
      "India\u2019s most affordable quality EV. Tiago EV brings unbeatable affordability, fast charging, and reliable performance \u2014 making it the perfect entry-level EV for new adopters.",
    bestFor: 'Best For: Families and professionals who want comfort + space.',
  },
  {
    number: 3,
    name: 'Citro\u00ebn eC3',
    image: articleCar1,
    specs: [
      { label: 'Price', value: '₹11.61 – ₹13.41 lakh' },
      { label: 'Range', value: 'Up to 320 km' },
      { label: 'Battery', value: '29.2 kWh' },
    ],
    whyTitle: 'Why it stands out:',
    whyText:
      'A spacious cabin, fantastic ride comfort, and stylish European design. The eC3 offers practicality with a slightly more premium feel, although it lacks fast charging in earlier variants.',
    bestFor: 'Best For: Families and professionals who want comfort + space.',
  },
  {
    number: 4,
    name: 'Citro\u00ebn eC3',
    image: articleCar2,
    specs: [
      { label: 'Price', value: '₹11.61 – ₹13.41 lakh' },
      { label: 'Range', value: 'Up to 320 km' },
      { label: 'Battery', value: '29.2 kWh' },
    ],
    whyTitle: 'Why it stands out:',
    whyText:
      'A spacious cabin, fantastic ride comfort, and stylish European design. The eC3 offers practicality with a slightly more premium feel, although it lacks fast charging in earlier variants.',
    bestFor: 'Best For: Families and professionals who want comfort + space.',
  },
]

export default function BlogDetail() {
  const navigate = useNavigate()

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-[1440px] w-full mx-auto pt-8 pb-16 flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1 px-[42px] mb-8">
          <button
            onClick={() => navigate('/')}
            className="font-sans font-medium text-[16px] text-[#373737] hover:underline"
          >
            Home
          </button>
          <ChevronRight size={18} className="text-[#373737]" />
          <button
            onClick={() => navigate('/blogs')}
            className="font-sans font-medium text-[16px] text-[#373737] hover:underline"
          >
            Blog
          </button>
          <ChevronRight size={18} className="text-[#373737]" />
          <span className="font-sans font-medium text-[16px] text-[#9D9D9D]">
            6 Best Electric Cars You Can Buy Under Rs 15 Lakh
          </span>
        </div>

        {/* Article Content */}
        <article className="flex flex-col gap-[42px]">
          {/* Title + Intro */}
          <div className="flex flex-col gap-2 px-[44px]">
            <h1 className="font-display font-semibold text-[36px] leading-[1.2em] text-[#1F1F1F]">
              6 Best Electric Cars You Can Buy Under Rs 15 Lakh
            </h1>
            <p
              className="font-display font-medium text-[18px] text-[#414141]"
              style={{ lineHeight: '2em', letterSpacing: '0.02em' }}
            >
              If you&apos;re planning to switch to an electric car without breaking the bank,
              you&apos;re stepping into the smartest category of the Indian auto market. With rising
              fuel prices and EV infrastructure expanding rapidly, electric cars under ₹15 lakh now
              offer exceptional range, premium features, and long-term savings.
            </p>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <img
              src={articleHero}
              alt="Electric cars under 15 lakh"
              className="w-[1352px] rounded-xl object-cover"
              style={{ maxHeight: 500 }}
            />
          </div>

          {/* Sub-heading + text */}
          <div className="flex flex-col gap-2 px-[44px]">
            <p
              className="font-display font-medium text-[18px] text-[#1C1C1C]"
              style={{ lineHeight: '2em', letterSpacing: '0.02em' }}
            >
              <br />
              But the challenge?
              <br />
              Choosing the right one.
            </p>
            <p
              className="font-display font-medium text-[18px] text-[#414141]"
              style={{ lineHeight: '2em', letterSpacing: '0.02em' }}
            >
              <br />
              So here&apos;s a carefully curated, expert-backed list of the 6 best electric cars you
              can buy under ₹15 lakh in India&mdash;each handpicked for range, performance,
              reliability, and value for money.
            </p>
          </div>

          {/* Divider */}
          <div className="mx-[44px]">
            <div className="w-full h-px bg-[#C3C3C3]" />
          </div>

          {/* Car Sections */}
          {carSections.map((car, index) => (
            <CarSection key={car.number} car={car} showSponsored={index === 0} />
          ))}
        </article>

        {/* Previous / Next Navigation */}
        <div className="flex items-center justify-between px-[44px] mt-16">
          <button className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full bg-[#E2E2E2] flex items-center justify-center">
              <ArrowLeft size={18} className="text-[#292D32]" />
            </span>
            <span
              className="font-display font-medium text-[20px] text-[#414141]"
              style={{ letterSpacing: '0.02em' }}
            >
              Previous
            </span>
          </button>

          <button className="flex items-center gap-2.5">
            <span
              className="font-display font-semibold text-[20px] text-[#452CFF]"
              style={{ letterSpacing: '0.02em' }}
            >
              Next
            </span>
            <span className="w-9 h-9 rounded-full bg-[#452CFF] flex items-center justify-center">
              <ArrowRight size={18} className="text-white" />
            </span>
          </button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function CarSection({ car, showSponsored }) {
  return (
    <div className="flex flex-col gap-[42px]">
      {/* Full-width car image */}
      <div className="flex justify-center">
        <img
          src={car.image}
          alt={car.name}
          className="w-[1352px] rounded-xl object-cover"
          style={{ maxHeight: 500 }}
        />
      </div>

      {/* Sponsored ad (only on first car section) */}
      {showSponsored && (
        <div className="flex justify-center">
          <div className="w-[1032px] h-[121px] bg-[#D9D9D9] rounded-xl relative">
            <div className="absolute top-5 left-5 flex items-center gap-1">
              <span className="text-[12px] font-normal text-[#2F2F2F] leading-[2em]">
                Sponsored
              </span>
              <span className="text-[16px] font-semibold text-[#5E5E5E]">&bull;</span>
              <span className="text-[12px] font-normal text-[#2F2F2F] leading-[2em]">Ad</span>
            </div>
          </div>
        </div>
      )}

      {/* Car content */}
      <div className="flex flex-col gap-6 px-[44px]">
        {/* Car name */}
        <div className="flex flex-col gap-3">
          <h2 className="font-sans font-semibold text-[32px] leading-[1.2em] text-[#1F1F1F]">
            {car.number}. {car.name}
          </h2>

          {/* Specs row */}
          <div className="flex items-center gap-[18px]">
            {car.specs.map((spec, i) => (
              <div key={spec.label} className="flex items-center gap-[18px]">
                <span
                  className="font-sans font-medium text-[18px] text-[#414141]"
                  style={{ lineHeight: '2em', letterSpacing: '0.02em' }}
                >
                  {spec.label}: {spec.value}
                </span>
                {i < car.specs.length - 1 && (
                  <div className="w-px h-7 bg-[#BBBBBB]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Why section */}
        <div className="flex flex-col gap-3">
          <h3 className="font-sans font-semibold text-[24px] leading-[1.2em] text-[#1F1F1F]">
            {car.whyTitle}
          </h3>
          <p
            className="font-sans font-normal text-[18px] text-[#414141]"
            style={{ lineHeight: '1.56em', letterSpacing: '0.02em' }}
          >
            {car.whyText}
          </p>
        </div>

        {/* Best For */}
        <p className="font-display font-semibold text-[18px] leading-[1.2em] text-[#1F1F1F]">
          {car.bestFor}
        </p>
      </div>
    </div>
  )
}
