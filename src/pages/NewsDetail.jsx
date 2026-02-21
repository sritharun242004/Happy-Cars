import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, ChevronLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import newsHero from '../assets/images/news/news-hero.png'
import articleCar1 from '../assets/images/blogs/article-car-1.png'
import articleCar2 from '../assets/images/blogs/article-car-2.png'
import blogSponsored from '../assets/images/blogs/blog-sponsored.png'
import newsCard2 from '../assets/images/news/news-card-2.png'
import newsCard3 from '../assets/images/news/news-card-3.png'
import newsCard4 from '../assets/images/news/news-card-4.png'
import newsCard5 from '../assets/images/news/news-card-5.png'
import newsCard6 from '../assets/images/news/news-card-6.png'
import newsTrending1 from '../assets/images/news/news-trending-1.png'
import newsTrending2 from '../assets/images/news/news-trending-2.png'

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
]

const trendingCars = [
  { name: 'Tata Punch', price: '₹9.89 Lakh', verified: true, image: newsCard3 },
  { name: 'Tata Punch', price: '₹9.89 Lakh', verified: false, image: newsCard3 },
  { name: 'Tata Punch', price: '₹9.89 Lakh', verified: true, image: newsCard3 },
  { name: 'Tata Punch', price: '₹9.89 Lakh', verified: false, image: newsCard3 },
  { name: 'Tata Punch', price: '₹9.89 Lakh', verified: false, image: newsCard3 },
  { name: 'Tata Punch', price: '₹9.89 Lakh', verified: false, image: newsCard3 },
]

const trendingNews = [
  { title: 'Kia Launches New Syros HTK EX Variant at Rs.9.89 Lakh', date: 'Jan 16, 2023', image: newsTrending1 },
  { title: 'Kia Launches New Syros HTK EX Variant at Rs.9.89 Lakh', date: 'Jan 16, 2023', image: newsCard2 },
  { title: 'Kia Launches New Syros HTK EX Variant at Rs.9.89 Lakh', date: 'Jan 16, 2023', image: newsCard3 },
  { title: 'Kia Launches New Syros HTK EX Variant at Rs.9.89 Lakh', date: 'Jan 16, 2023', image: newsCard4 },
  { title: 'Kia Launches New Syros HTK EX Variant at Rs.9.89 Lakh', date: 'Jan 16, 2023', image: newsCard5 },
  { title: 'Kia Launches New Syros HTK EX Variant at Rs.9.89 Lakh', date: 'Jan 16, 2023', image: newsTrending2 },
  { title: 'Kia Launches New Syros HTK EX Variant at Rs.9.89 Lakh', date: 'Jan 16, 2023', image: newsCard6 },
]

export default function NewsDetail() {
  const navigate = useNavigate()
  const [activePage, setActivePage] = useState(1)
  const [activeSubTab, setActiveSubTab] = useState('Popular')
  const subTabs = ['Popular', 'HC Approved', 'Trending']

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFCFC]">
      <Navbar />

      <main className="max-w-[1440px] w-full mx-auto pt-4 pb-10 sm:pb-16 flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-[1px] px-4 sm:px-6 lg:px-[42px] mb-6 sm:mb-[42px] flex-wrap">
          <button
            onClick={() => navigate('/')}
            className="font-sans font-medium text-[16px] text-[#373737] hover:underline"
            style={{ lineHeight: '1.21em' }}
          >
            Home
          </button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-1">
            <path d="M6.68 3.06L12 9l-5.32 5.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <button
            onClick={() => navigate('/blogs')}
            className="font-sans font-medium text-[16px] text-[#373737] hover:underline"
            style={{ lineHeight: '1.21em' }}
          >
            Blog
          </button>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-1">
            <path d="M6.68 3.06L12 9l-5.32 5.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
          <span
            className="font-sans font-medium text-[16px] text-[#9D9D9D]"
            style={{ lineHeight: '1.21em' }}
          >
            Hyundai vs Toyota: Which Used Car Gives Better Long-Term Value?
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-5 px-4 sm:px-6 lg:px-0">
          {/* Left: Article Content */}
          <div className="flex flex-col gap-8 lg:ml-[42px] flex-1 min-w-0">
            {/* Hero Image with Tags */}
            <div className="relative w-full rounded-xl overflow-hidden" style={{ height: 'clamp(300px, 50vw, 602px)' }}>
              <img
                src={newsHero}
                alt="Hyundai vs Toyota"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Bottom gradient */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: 483,
                  background: 'linear-gradient(180deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 86%)',
                }}
              />
              {/* Top gradient */}
              <div
                className="absolute top-0 left-0 right-0 rounded-b-xl"
                style={{
                  height: 123,
                  background: 'linear-gradient(0deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 100%)',
                }}
              />
              {/* Tags */}
              <div className="absolute top-6 left-6 flex items-center gap-1.5">
                <span className="flex items-center gap-[5px] bg-white rounded-full px-4 font-sans font-medium text-[14px] text-[#FF1D2C]" style={{ height: 32 }}>
                  <Zap size={14} className="text-[#FF1D2C]" fill="#FF1D2C" />
                  Trending News
                </span>
                <span className="bg-white rounded-full px-4 font-sans font-medium text-[14px] text-[#3F3F3F] flex items-center" style={{ height: 32 }}>
                  SUV
                </span>
                <span className="bg-white rounded-full px-4 font-sans font-medium text-[14px] text-[#3F3F3F] flex items-center" style={{ height: 32 }}>
                  Petrol
                </span>
              </div>
            </div>

            {/* Title + Description */}
            <div className="flex flex-col gap-2">
              <h1
                className="font-sans font-semibold text-[24px] sm:text-[30px] lg:text-[36px] text-[#1F1F1F]"
                style={{ lineHeight: '1.56em' }}
              >
                Hyundai vs Toyota: Which Used Car Gives Better Long-Term Value?
              </h1>
              <p
                className="font-sans font-normal text-[18px] text-[#414141]"
                style={{ lineHeight: '1.56em', letterSpacing: '0.02em' }}
              >
                If you&apos;re planning to switch to an electric car without breaking the bank,
                you&apos;re stepping into the smartest category of the Indian auto market. With
                rising fuel prices and EV infrastructure expanding rapidly, electric cars under
                ₹15 lakh now offer exceptional range, premium features, and long-term savings.
              </p>
            </div>

            {/* Car Sections */}
            <div className="flex flex-col gap-8">
              {carSections.map((car, index) => (
                <CarSection key={car.number} car={car} isFirst={index === 0} isLast={index === carSections.length - 1} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => setActivePage(page)}
                  className={`flex items-center justify-center font-display transition-colors ${
                    activePage === page
                      ? 'bg-[#452CFF] text-white font-medium'
                      : 'bg-[#E2E2E2] text-[#686868] font-normal hover:bg-[#D0D0D0]'
                  }`}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 12903,
                    fontSize: 18,
                    lineHeight: '1.2em',
                  }}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="flex flex-col gap-5 w-full lg:w-[439px] lg:shrink-0">
            {/* Sponsored Ad */}
            <div className="relative w-full h-[280px] sm:h-[357px] rounded-xl overflow-hidden">
              <img src={blogSponsored} alt="Sponsored" className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute top-0 left-0 right-0 rounded-b-xl"
                style={{
                  height: 123,
                  background: 'linear-gradient(0deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 100%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  height: 184,
                  background: 'linear-gradient(180deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 86%)',
                }}
              />
              <div className="absolute flex items-center gap-[3px]" style={{ top: 25, left: 19 }}>
                <span className="text-white text-[12px] font-normal" style={{ lineHeight: '2em' }}>Sponsored</span>
                <span className="text-[#BDBDBD] text-[16px] font-semibold">&bull;</span>
                <span className="text-white text-[12px] font-normal" style={{ lineHeight: '2em' }}>Ad</span>
              </div>
              <div className="absolute flex flex-col gap-2" style={{ bottom: 23, left: 20, right: 20 }}>
                <h3 className="font-sans font-medium text-[20px] text-[#F5F5F5]" style={{ lineHeight: '1em' }}>
                  Get Housing loan in 5 days
                </h3>
                <p className="font-sans font-medium text-[14px] text-[#9E9E9E]" style={{ lineHeight: '1.43em' }}>
                  Get Housing loan in 5 daysGet Housing loan in 5 ...
                </p>
              </div>
            </div>

            {/* Trending Cars */}
            <div
              className="bg-white rounded-xl overflow-hidden"
              style={{
                border: '1px solid #DCDCDC',
                boxShadow: '-26px 240px 145px 0px rgba(0,0,0,0.05)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-[18px] pt-6 pb-[18px]">
                <h3 className="font-sans font-bold text-[18px] text-black" style={{ lineHeight: '1.67em' }}>
                  Trending Cars
                </h3>
                <ChevronLeft size={24} className="text-[#292D32]" />
              </div>

              {/* Sub-tabs */}
              <div className="flex items-center px-[18px]" style={{ borderBottom: '1px solid #E8E8E8' }}>
                {subTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSubTab(tab)}
                    className={`flex-1 text-center py-2.5 font-display font-medium text-[16px] transition-colors ${
                      activeSubTab === tab
                        ? 'text-[#3A3A3A] border-b-[3px] border-[#0B2A6B]'
                        : 'text-[#787878]'
                    }`}
                    style={{ lineHeight: '1.2em' }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Car list */}
              <div className="flex flex-col px-[18px] py-4 gap-3">
                {trendingCars.map((car, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-[72px] h-[68px] rounded object-cover shrink-0"
                    />
                    <div className="flex flex-col gap-[6px] flex-1" style={{ height: 68, justifyContent: 'space-between' }}>
                      <div className="flex flex-col gap-[5px]">
                        <div className="flex items-center gap-2">
                          <span className="font-sans font-medium text-[14px] text-[#555555]" style={{ lineHeight: '1.21em' }}>
                            {car.name}
                          </span>
                        </div>
                        {car.verified && (
                          <span className="flex items-center gap-[2px] font-sans font-medium text-[14px] text-[#3B21FF]" style={{ lineHeight: '1.21em' }}>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                              <path d="M8.5 1C4.36 1 1 4.36 1 8.5S4.36 16 8.5 16 16 12.64 16 8.5 12.64 1 8.5 1zm3.68 6.07l-4.4 4.4a.58.58 0 01-.83 0L5.07 9.59a.58.58 0 01.83-.83l1.54 1.54 3.99-3.99a.58.58 0 01.83.83l-.08-.07z" fill="rgba(59,33,255,0.95)"/>
                            </svg>
                            HC Approved
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-[1px]">
                        <span className="font-sans font-medium text-[20px] text-[#272727]" style={{ lineHeight: '1.1em' }}>
                          {car.price}
                        </span>
                        <span className="font-sans font-medium text-[12px] text-[#8F8F8F]" style={{ lineHeight: '1.21em' }}>
                          Avg Ex showroom price
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending News */}
            <div
              className="bg-white rounded-xl overflow-hidden"
              style={{
                border: '1px solid #DCDCDC',
                boxShadow: '-26px 240px 145px 0px rgba(0,0,0,0.05)',
              }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-[18px] pt-6 pb-[18px]"
                style={{ borderBottom: '1px solid #E3E3E3' }}
              >
                <h3 className="font-sans font-bold text-[18px] text-black" style={{ lineHeight: '1.67em' }}>
                  Trending News
                </h3>
                <ChevronLeft size={24} className="text-[#292D32]" />
              </div>

              {/* News list */}
              <div className="flex flex-col px-[18px] py-4 gap-3">
                {trendingNews.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[72px] h-[68px] rounded object-cover shrink-0"
                    />
                    <div className="flex flex-col gap-1.5 flex-1">
                      <span
                        className="font-sans font-medium text-[16px] text-[#272727] leading-tight line-clamp-2"
                        style={{ lineHeight: '1.375em' }}
                      >
                        {item.title}
                      </span>
                      <span className="font-sans font-medium text-[12px] text-[#555555]">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function CarSection({ car, isFirst, isLast }) {
  return (
    <div
      className="flex flex-col gap-6"
      style={{
        paddingTop: isFirst ? 0 : isLast ? 32 : 10,
        paddingBottom: 0,
      }}
    >
      {/* Car name */}
      <div className="flex flex-col gap-3">
        <h2
          className="font-sans font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-[#1F1F1F]"
          style={{ lineHeight: '1.2em' }}
        >
          {car.number}. {car.name}
        </h2>

        {/* Specs row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-[18px]">
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
        <h3
          className={`font-semibold text-[24px] text-[#1F1F1F] ${car.number === 1 ? 'font-sans' : 'font-display'}`}
          style={{ lineHeight: '1.2em' }}
        >
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
      <p
        className="font-display font-semibold text-[18px] text-[#1F1F1F]"
        style={{ lineHeight: '1.2em' }}
      >
        {car.bestFor}
      </p>
    </div>
  )
}
