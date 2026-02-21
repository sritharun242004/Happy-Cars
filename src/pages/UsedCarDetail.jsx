import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronDown, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import carHero from '../assets/images/car-detail/car-hero.png'
import thumbnailStrip from '../assets/images/car-detail/thumbnail-strip.png'
import verifiedBadge from '../assets/images/car-detail/verified-badge.svg'
import tickOrange from '../assets/images/car-detail/tick-orange.svg'
import iconMoneys from '../assets/images/car-detail/icon-moneys.svg'
import iconFuel from '../assets/images/car-detail/icon-fuel.svg'
import iconTransmission from '../assets/images/car-detail/icon-transmission.svg'
import iconSpeed from '../assets/images/car-detail/icon-speed.svg'
import iconAcceleration from '../assets/images/car-detail/icon-acceleration.svg'
import iconOwnership from '../assets/images/car-detail/icon-ownership.svg'
import iconLocation from '../assets/images/car-detail/icon-location.svg'
import iconRegistration from '../assets/images/car-detail/icon-registration.svg'

import similarCar1 from '../assets/images/car-detail/similar-car-1.png'
import similarCar2 from '../assets/images/car-detail/similar-car-2.png'
import dealerCar1 from '../assets/images/car-detail/dealer-car-1.png'
import dealerCar2 from '../assets/images/car-detail/dealer-car-2.png'

import reviewPhoto1 from '../assets/images/car-detail/review-photo-1.png'
import reviewPhoto2 from '../assets/images/car-detail/review-photo-2.png'
import reviewPhoto3 from '../assets/images/car-detail/review-photo-3.png'
import reviewPhoto4 from '../assets/images/car-detail/review-photo-4.png'
import reviewPhoto5 from '../assets/images/car-detail/review-photo-5.png'
import reviewPhoto6 from '../assets/images/car-detail/review-photo-6.png'
import reviewPhoto7 from '../assets/images/car-detail/review-photo-7.png'
import reviewPhoto8 from '../assets/images/car-detail/review-photo-8.png'
import reviewPhoto9 from '../assets/images/car-detail/review-photo-9.png'
import reviewPhoto10 from '../assets/images/car-detail/review-photo-10.png'
import reviewPhoto11 from '../assets/images/car-detail/review-photo-11.png'
import reviewPhoto12 from '../assets/images/car-detail/review-photo-12.png'

import avatarRohan from '../assets/images/car-detail/avatar-rohan.png'
import avatarAnita from '../assets/images/car-detail/avatar-anita.png'
import avatarPreet from '../assets/images/car-detail/avatar-preet.png'
import avatarSiddharth from '../assets/images/car-detail/avatar-siddharth.png'
import avatarMeera from '../assets/images/car-detail/avatar-meera.png'
import avatarVikram from '../assets/images/car-detail/avatar-vikram.png'
import avatarJason from '../assets/images/car-detail/avatar-jason.png'
import avatarMaya from '../assets/images/car-detail/avatar-maya.png'
import avatarPreet2 from '../assets/images/car-detail/avatar-preet2.png'

import blogSponsored from '../assets/images/blogs/blog-sponsored.png'

const carDetails = [
  { icon: iconMoneys, label: 'Price', value: 'Rs. 6.26 - 12.36 Lakh' },
  { icon: iconFuel, label: 'Fuel Type', value: 'Petrol, CNG' },
  { icon: iconTransmission, label: 'Transmission', value: 'Manual, Automatic (AMT)' },
  { icon: iconSpeed, label: 'Top Speed', value: '200 km/h' },
  { icon: iconAcceleration, label: 'Acceleration', value: '0-100 km/h in X sec' },
  { icon: iconOwnership, label: 'Ownership', value: '1st Owner' },
  { icon: iconLocation, label: 'Location', value: 'Chennai' },
  { icon: iconRegistration, label: 'Registration Year', value: '2021' },
]

const safetyFeatures = ['Multiple airbags', 'ABS with EBD', 'Traction control', 'Stability control', 'NCAP Rating']
const comfortFeatures = ['Automatic climate control', 'Power seats', 'Keyless entry', 'Cruise control']
const infotainmentFeatures = ['Touchscreen display', 'Touchscreen display', 'Premium sound system']

const specRows = [
  { icon: iconMoneys, label: 'Price', value: 'Rs. 6.26 - 12.36 Lakh' },
  { icon: iconMoneys, label: 'Price', value: 'Rs. 6.26 - 12.36 Lakh' },
  { icon: iconMoneys, label: 'Price', value: 'Rs. 6.26 - 12.36 Lakh' },
  { icon: iconSpeed, label: 'Top Speed', value: '200 km/h' },
  { icon: iconAcceleration, label: 'Acceleration', value: '0-100 km/h in X sec' },
  { icon: iconOwnership, label: 'Ownership', value: '1st Owner' },
  { icon: iconLocation, label: 'Location', value: 'Chennai' },
  { icon: iconMoneys, label: 'Price', value: 'Rs. 6.26 - 12.36 Lakh' },
]

const similarCars = [
  { image: similarCar1, title: '2021 Volkswagen T-Roc 1.5 TSI\nRs. 65 Lakh', km: '38000km', date: 'Aug 15 2025' },
  { image: similarCar2, title: '2021 Volkswagen T-Roc 1.5 TSI\nRs. 65 Lakh', km: '38000km', date: 'Aug 15 2025' },
]

const dealerCars = [
  { image: dealerCar1, title: '2021 Volkswagen T-Roc 1.5 TSI\nRs. 65 Lakh', km: '38000km', date: 'Aug 15 2025' },
  { image: dealerCar2, title: '2021 Volkswagen T-Roc 1.5 TSI\nRs. 65 Lakh', km: '38000km', date: 'Aug 15 2025' },
]

const reviewPhotos = [
  reviewPhoto1, reviewPhoto2, reviewPhoto3, reviewPhoto4,
  reviewPhoto5, reviewPhoto6, reviewPhoto7, reviewPhoto8,
  reviewPhoto9, reviewPhoto10, reviewPhoto11, reviewPhoto12,
]

const faqItems = [
  'How does the car certification process work?',
  'What documents are required to buy a car?',
  'Are all cars fully inspected before listing?',
  'Do you offer test drives or home delivery?',
  'How does the financing/EMI process work?',
]

const reviewComments = [
  { name: 'Rohan Mehta', role: 'Manager', avatar: avatarRohan, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Anita', role: 'HR Business Partner', avatar: avatarAnita, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Preet Singh', role: 'NA', avatar: avatarPreet, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Siddharth', role: 'Corporate Trainer', avatar: avatarSiddharth, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Meera', role: 'IT Project Manager', avatar: avatarMeera, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Vikram', role: 'Finance Analyst', avatar: avatarVikram, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Jason Jacob', role: 'Supply Chain Consultant', avatar: avatarJason, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Maya', role: 'Startup Founder', avatar: avatarMaya, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
  { name: 'Preet Singh', role: 'Startup Founder', avatar: avatarPreet2, text: 'Absolutely seamless experience from start to finish. The team was transparent about the car\'s history and condition. I felt confident in my purchase, and the post-sale support has been excellent. Highly recommend!' },
]

const ratingBars = [
  { label: 5, percent: 85 },
  { label: 4, percent: 65 },
  { label: 3, percent: 40 },
  { label: 2, percent: 20 },
  { label: 1, percent: 10 },
]

export default function UsedCarDetail() {
  const navigate = useNavigate()
  const [activeSpecTab, setActiveSpecTab] = useState('Engine & Performance')
  const specTabs = ['Engine & Performance', 'Battery capacity', 'Size, Weight, & Dimensions']

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto flex items-center gap-[1px] px-4 sm:px-6 lg:px-[42px] pt-4 sm:pt-6 pb-3">
        <button
          onClick={() => navigate('/')}
          className="font-sans font-medium text-[14px] text-[#373737] hover:underline"
          style={{ lineHeight: '1.21em' }}
        >
          Home
        </button>
        <ChevronRight size={18} className="text-[#373737]" />
        <button
          onClick={() => navigate('/used-cars')}
          className="font-sans font-medium text-[14px] text-[#373737] hover:underline"
          style={{ lineHeight: '1.21em' }}
        >
          Old Car
        </button>
        <ChevronRight size={18} className="text-[#373737]" />
        <span
          className="font-sans font-medium text-[14px] text-[#9D9D9D] text-center"
          style={{ lineHeight: '1.21em' }}
        >
          2021 Jaguar I-Pace HSE
        </span>
      </div>

      {/* Block A: Car Gallery + Details */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[42px] py-5">
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          {/* Car Gallery */}
          <div className="flex flex-col gap-3 w-full lg:w-[780px]">
              {/* Main Image */}
              <div
                className="w-full flex items-center justify-center rounded-xl overflow-hidden relative"
                style={{ paddingTop: 18.85, paddingBottom: 18.85 }}
              >
                <img src={carHero} alt="2021 Jaguar I-Pace HSE" className="w-full h-full object-cover rounded-xl" />
                {/* Best Seller Badge */}
                <div
                  className="absolute top-6 left-6 flex items-center justify-center"
                  style={{ padding: '8.48px 18.85px', backgroundColor: '#000716', borderRadius: 4 }}
                >
                  <span className="font-sans font-bold text-white" style={{ fontSize: 18.85, lineHeight: '1.3em' }}>
                    Best Seller
                  </span>
                </div>
              </div>
              {/* Thumbnail Strip */}
              <div className="flex justify-center">
                <img src={thumbnailStrip} alt="Car thumbnails" className="h-[65px] object-contain" />
              </div>
            </div>

          {/* Car Details Panel */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-col gap-[10px]">
            {/* Title + Verified */}
              <div className="flex gap-4 pb-2 w-full">
                <div className="flex flex-col gap-1.5 flex-1">
                  <h1
                    className="font-sans font-semibold text-black text-[24px] sm:text-[30px] lg:text-[36px]"
                    style={{ lineHeight: '1.333em', letterSpacing: '0.01em' }}
                  >
                    2021 Jaguar I-Pace HSE
                  </h1>
                  <p className="font-medium text-[#454545]" style={{ fontFamily: 'SF Pro, Inter, sans-serif', fontSize: 12, lineHeight: '1.5em' }}>
                    Petrol . Automatic . 34,200 km
                  </p>
                </div>
                <img src={verifiedBadge} alt="Verified" className="w-[33px] h-[32px] mt-1" />
              </div>

              {/* Price */}
              <div className="flex flex-col gap-3 w-full">
                <div className="flex items-center gap-1.5">
                  <span
                    className="font-sans font-semibold text-black"
                    style={{ fontSize: 30, lineHeight: '1.267em' }}
                  >
                    Rs. 65 Lakh
                  </span>
                </div>
                <div
                  className="flex items-center w-full px-3 py-1 rounded-sm"
                  style={{ background: 'linear-gradient(90deg, rgba(181,255,201,1) 0%, rgba(255,255,255,1) 95%)' }}
                >
                  <span
                    className="font-sans font-medium text-[#262626] uppercase"
                    style={{ fontSize: 12, lineHeight: '1.333em' }}
                  >
                    Fair price . 8% below market average
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="flex flex-col gap-[5px] py-2 w-full">
                {['Fuel Type : Electric', 'Automatic - 1 Gears, Sport Mode', 'Top Speed : 200 kmph'].map((feat) => (
                  <div key={feat} className="flex items-center gap-1">
                    <img src={tickOrange} alt="" className="w-6 h-6" />
                    <span className="font-display font-medium text-[#1C1C1C]" style={{ fontSize: 14, lineHeight: '1.02em' }}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact Dealer Button */}
              <button
                className="flex items-center justify-center w-full font-display font-semibold text-white"
                style={{
                  height: 52,
                  backgroundColor: 'rgba(59, 33, 255, 0.95)',
                  borderRadius: 2,
                  fontSize: 16,
                  lineHeight: '1.5em',
                }}
              >
                Contact Dealer
              </button>
            </div>

            {/* Car Details Accordion */}
            <div
              className="bg-white flex flex-col"
              style={{
                borderRadius: 12,
                padding: 12,
                boxShadow: '13px -2px 30px rgba(224,224,224,0.1), 54px -8px 54px rgba(224,224,224,0.09), 121px -19px 74px rgba(224,224,224,0.05), 215px -34px 87px rgba(224,224,224,0.01)',
              }}
            >
              <div className="font-sans font-bold text-black px-2 py-2" style={{ fontSize: 16, lineHeight: '1.5em' }}>
                CAR DETAILS
              </div>
              <div className="flex flex-col px-2 py-2.5 flex-1 overflow-y-auto">
                {carDetails.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center py-3 gap-2 sm:gap-3">
                      <img src={item.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      <span className="font-sans font-medium text-[#444444] shrink-0 text-xs sm:text-sm w-[100px] sm:w-[180px]">
                        {item.label}
                      </span>
                      <span className="font-sans font-medium text-[#444444] ml-auto text-right text-xs sm:text-sm">
                        {item.value}
                      </span>
                    </div>
                    {i < carDetails.length - 1 && <div className="w-full h-px bg-[#DFDFDF]" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Left Column + Right Sidebar */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[42px] pb-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[21px] w-full lg:w-[780px]">
            {/* Happy Approved Card */}
            <div
              className="relative w-full overflow-hidden px-5 sm:px-8 py-6 sm:py-8"
              style={{
                borderRadius: 16,
                border: '1.91px solid #EFE7FF',
                background: 'linear-gradient(219deg, rgba(255,255,255,1) 0%, rgba(231,218,255,1) 100%)',
              }}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-sans font-bold text-black text-lg sm:text-xl" style={{ letterSpacing: '0.01em' }}>
                  Happy Approved
                </span>
                <img src={verifiedBadge} alt="" className="w-7 h-7" />
              </div>
              <p className="font-sans font-medium text-[#4B4B4B] text-sm sm:text-base mt-2" style={{ letterSpacing: '0.01em' }}>
                Quality & documents verified by HappyCars.
              </p>
            </div>

            {/* All Features Card */}
            <div
              className="w-full flex flex-col gap-[29px]"
              style={{
                padding: '16px 20px',
                borderRadius: 12,
                backgroundColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0px 4px 7.1px rgba(73,73,73,0.1)',
                backdropFilter: 'blur(17.1px)',
              }}
            >
              <h2
                className="font-sans font-semibold text-black"
                style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}
              >
                All Features
              </h2>

              {/* Safety */}
              <div className="flex flex-col gap-3">
                <span className="font-sans font-semibold text-[#1C1C1C]" style={{ fontSize: 14, lineHeight: '1em' }}>
                  Safety
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  {safetyFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-1">
                      <img src={tickOrange} alt="" className="w-6 h-6" />
                      <span className="font-sans font-normal text-[#1C1C1C]" style={{ fontSize: 12, lineHeight: '1.19em' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comfort & Convenience */}
              <div className="flex flex-col gap-3">
                <span className="font-sans font-semibold text-[#1C1C1C]" style={{ fontSize: 14, lineHeight: '1em' }}>
                  Comfort & Convenience
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  {comfortFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-1">
                      <img src={tickOrange} alt="" className="w-6 h-6" />
                      <span className="font-sans font-normal text-[#1C1C1C]" style={{ fontSize: 12, lineHeight: '1.19em' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Infotainment */}
              <div className="flex flex-col gap-3">
                <span className="font-sans font-semibold text-[#1C1C1C]" style={{ fontSize: 14, lineHeight: '1em' }}>
                  Infotainment
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  {infotainmentFeatures.map((f) => (
                    <div key={f} className="flex items-center gap-1">
                      <img src={tickOrange} alt="" className="w-6 h-6" />
                      <span className="font-sans font-normal text-[#1C1C1C]" style={{ fontSize: 12, lineHeight: '1.19em' }}>
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specifications Card */}
            <div
              className="w-full flex flex-col gap-[29px]"
              style={{
                padding: '16px 0',
                borderRadius: 12,
                backgroundColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0px 4px 7.1px rgba(73,73,73,0.1)',
                backdropFilter: 'blur(17.1px)',
              }}
            >
              <h2
                className="font-sans font-semibold text-black px-5"
                style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}
              >
                Specifications
              </h2>

              {/* Spec Tabs */}
              <div className="px-4 sm:px-5 overflow-x-auto">
                <div
                  className="flex items-center w-full gap-2 sm:gap-3"
                  style={{ borderBottom: '1px solid #D9D9D9' }}
                >
                  {specTabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveSpecTab(tab)}
                      className={`flex-1 flex items-center justify-center py-2.5 font-display font-medium whitespace-nowrap transition-colors text-sm sm:text-base ${
                        activeSpecTab === tab
                          ? 'text-[#272727] border-b-[4px] border-[#0B2A6B]'
                          : 'text-[#787878]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spec Rows */}
              <div className="flex flex-col px-4 sm:px-5">
                {specRows.map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center py-3 gap-2 sm:gap-3">
                      <img src={item.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                      <span className="font-sans font-medium text-[#444444] shrink-0 text-xs sm:text-sm w-[100px] sm:w-[180px]">
                        {item.label}
                      </span>
                      <span className="font-sans font-medium text-[#444444] ml-auto text-right text-xs sm:text-sm">
                        {item.value}
                      </span>
                    </div>
                    {i < specRows.length - 1 && <div className="w-full h-px bg-[#DFDFDF]" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Cars */}
            <CarCardsSection title="Similar Cars" cars={similarCars} />

            {/* More Cars From Same Dealer */}
            <CarCardsSection title="More Cars From Same Dealer" cars={dealerCars} />
          </div>

          {/* Right Sidebar */}
          <div className="shrink-0 lg:pt-[34px] w-full lg:w-[439px]">
            <div className="relative w-full h-[280px] sm:h-[357px] rounded-xl overflow-hidden">
              <img src={blogSponsored} alt="Sponsored" className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute top-0 left-0 right-0 rounded-b-xl"
                style={{ height: 123, background: 'linear-gradient(0deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 100%)' }}
              />
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{ height: 184, background: 'linear-gradient(180deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 86%)' }}
              />
              <div className="absolute flex items-center gap-1" style={{ top: 25, left: 19 }}>
                <span className="text-white font-normal" style={{ fontSize: 12, lineHeight: '2em' }}>Sponsored</span>
                <span className="text-[#BDBDBD]" style={{ fontSize: 12 }}>.</span>
                <span className="text-white font-normal" style={{ fontSize: 12, lineHeight: '2em' }}>Ad</span>
              </div>
              <div className="absolute flex flex-col gap-2" style={{ bottom: 23, left: 20, right: 20 }}>
                <h3 className="font-sans font-medium text-[#F5F5F5]" style={{ fontSize: 20, lineHeight: '1em' }}>
                  Get Housing loan in 5 days
                </h3>
                <p className="font-sans font-medium text-[#9E9E9E]" style={{ fontSize: 14, lineHeight: '1.43em' }}>
                  Get Housing loan in 5 daysGet Housing loan in 5 ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ + Reviews Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[42px] pb-10 sm:pb-16 flex flex-col gap-12 sm:gap-16 lg:gap-[101px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          {/* Left: Title */}
          <div className="flex flex-col gap-2 w-full lg:max-w-[649px] lg:shrink-0">
            <h2 className="font-sans font-bold text-[#171717] text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.192em]">
              We&apos;ve Got Answers for You
            </h2>
            <p className="font-sans font-medium text-[#242424] text-base sm:text-lg lg:text-xl leading-[1.64em]">
              Find quick answers to the most common questions buyers ask about certified cars, inspections, pricing, financing, and ownership.
            </p>
          </div>

          {/* Right: FAQ Items */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1 w-full lg:max-w-[589px]">
            {faqItems.map((q) => (
              <div key={q} className="flex items-center justify-between w-full py-2.5 border-b border-[#E0E0E0]">
                <span className="font-sans font-medium text-[#242424] text-sm sm:text-base lg:text-xl leading-[1.64em]">
                  {q}
                </span>
                <ChevronDown size={24} className="text-[#242424] shrink-0 ml-4" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-[42px]">
          {/* Review Summary Row: Card + Photo Grid */}
          <div className="flex flex-col lg:flex-row items-start w-full gap-5">
            {/* Review Summary Card */}
            <div
              className="bg-white w-full lg:w-[781px] shrink-0 p-6 sm:p-8 lg:p-10"
              style={{
                borderRadius: 11.2,
                border: '0.93px solid #E1E1E1',
              }}
            >
              {/* Review Text Section */}
              <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                <h3 className="font-sans font-semibold text-[#2A2A2A] text-lg sm:text-xl">
                  Review Summery
                </h3>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} className="text-[#E1B64C]" fill="#E1B64C" />
                  ))}
                </div>
                <span className="font-display font-normal text-black text-base sm:text-lg">
                  4.9/5 from 8,200+ customers
                </span>
              </div>

              {/* Rating Bars */}
              <div className="flex flex-col gap-6 sm:gap-8 mb-6">
                {ratingBars.map((bar) => (
                  <div key={bar.label} className="flex items-center gap-3">
                    <span className="font-sans font-semibold text-[#2A2A2A] text-sm w-4">{bar.label}</span>
                    <div className="relative flex-1 h-1.5 bg-[#EBEBEB] rounded-full">
                      <div className="absolute top-0 left-0 h-full bg-[#DCAC34] rounded-full" style={{ width: `${bar.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Subtitle */}
              <span className="font-display font-normal text-[#898989] text-sm">
                User collected from google and direct review
              </span>
            </div>

            {/* Photo Grid (3 rows × 4 cols) */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3 flex-1 w-full">
              {reviewPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl aspect-square"
                >
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                  {i === 11 && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                      <span className="font-sans font-semibold text-white text-2xl sm:text-4xl">+10</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comments from Customer */}
          <div className="flex flex-col w-full gap-6 sm:gap-[29px]">
            <h3 className="font-sans font-semibold text-[#2A2A2A] text-xl sm:text-2xl">
              Comments from Customer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-[15.73px]">
              {reviewComments.map((comment, i) => (
                <div
                  key={i}
                  className="bg-white flex flex-col gap-3"
                  style={{
                    padding: '22.47px 26.96px',
                    borderRadius: 20.29,
                    border: '1.09px solid rgba(56,189,248,0.06)',
                  }}
                >
                  {/* Stars */}
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} className="text-[#E1B64C]" fill="#E1B64C" />
                    ))}
                  </div>
                  {/* Review Text */}
                  <p
                    className="font-sans font-medium text-[#2A2A2A] line-clamp-4"
                    style={{ fontSize: 15.73, lineHeight: '1.486em' }}
                  >
                    {comment.text}
                  </p>
                  {/* Author */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={comment.avatar}
                      alt={comment.name}
                      className="rounded-full object-cover"
                      style={{ width: 34.2, height: 34.2 }}
                    />
                    <div className="flex flex-col">
                      <span className="font-sans font-semibold text-[#252525]" style={{ fontSize: 15.2, lineHeight: '1.375em' }}>
                        {comment.name}
                      </span>
                      <span className="font-sans font-medium text-[#676767]" style={{ fontSize: 13.3, lineHeight: '1.486em' }}>
                        {comment.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Sticky Bottom Bar */}
      <div
        className="fixed bottom-0 left-0 right-0 bg-white z-50"
        style={{
          boxShadow: '19px 5px 43px rgba(0,0,0,0.1), 77px 18px 79px rgba(0,0,0,0.09), 173px 41px 107px rgba(0,0,0,0.05)',
        }}
      >
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-[33px] py-3 sm:py-4">
          {/* Left Side - hidden on mobile */}
          <div className="hidden md:flex items-center gap-[14px]">
            <span className="font-sans font-semibold text-black text-base lg:text-xl" style={{ letterSpacing: '0.01em' }}>
              2021 Jaguar I-Pace HSE
            </span>
            <div className="w-px bg-[#7A7A7A] h-6" />
            <span className="font-sans font-semibold text-black text-base lg:text-xl" style={{ letterSpacing: '0.01em' }}>
              Rs. 65 Lakh
            </span>
            <div className="hidden lg:block w-px bg-[#7A7A7A] h-6" />
            <div className="hidden lg:flex items-center gap-1.5">
              <span className="font-sans font-semibold text-black text-xl">
                Happy Approved
              </span>
              <img src={verifiedBadge} alt="" className="w-5 h-5" />
            </div>
          </div>

          {/* Right Side: CTA */}
          <button
            className="flex items-center justify-center font-display font-semibold text-white w-full md:w-auto px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-xl"
            style={{
              backgroundColor: 'rgba(59,33,255,0.95)',
              borderRadius: 2,
            }}
          >
            Rs. 65 Lakh - Contact Dealer
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Similar / Dealer Car Cards Section ─────────────────────
function CarCardsSection({ title, cars }) {
  return (
    <div
      className="w-full flex flex-col gap-2.5"
      style={{ padding: 14, border: '1px solid #EBEBEB', borderRadius: 12 }}
    >
      <h2
        className="font-sans font-semibold text-black"
        style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cars.map((car, i) => (
          <div
            key={i}
            className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
            style={{
              boxShadow: '0px 8.16px 24.47px rgba(0,0,0,0.1)',
            }}
          >
            <div className="p-4 sm:p-5">
              <img
                src={car.image}
                alt={car.title}
                className="w-full object-cover rounded-md h-[160px] sm:h-[178px]"
              />
            </div>
            <div className="px-4 sm:px-5 pb-4">
              <h3 className="font-sans font-semibold text-black whitespace-pre-line text-base sm:text-lg leading-[1.667em]">
                {car.title}
              </h3>
              <div className="w-full h-px bg-[#BCBCBC] my-3" />
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-sans font-medium text-[#555555] text-sm">
                  {car.km}
                </span>
                <div className="w-px bg-[#8F8F8F] h-[19px]" />
                <span className="font-sans font-medium text-[#555555] text-sm">
                  {car.date}
                </span>
                <div className="flex items-center ml-auto">
                  <span className="font-sans font-medium text-sm" style={{ color: 'rgba(59,33,255,0.95)' }}>
                    View Car
                  </span>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="rotate-180">
                    <path d="M6.68 3.06L12 9l-5.32 5.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
