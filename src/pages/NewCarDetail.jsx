import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronRight, ChevronDown, Star } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import punchHero from '../assets/images/new-car-detail/punch-hero.png'
import verifiedBadge from '../assets/images/new-car-detail/verified-badge.svg'
import tickCheck from '../assets/images/new-car-detail/tick-check.svg'
import arrowDown from '../assets/images/new-car-detail/arrow-down.svg'
import variantArrow from '../assets/images/new-car-detail/variant-arrow.svg'
import arrowRight from '../assets/images/new-car-detail/arrow-right.svg'

import color1 from '../assets/images/new-car-detail/color-1-7796e3.png'
import color2 from '../assets/images/new-car-detail/color-2.png'
import color3 from '../assets/images/new-car-detail/color-3.png'
import color4 from '../assets/images/new-car-detail/color-4.png'
import color5 from '../assets/images/new-car-detail/color-5.png'
import color6 from '../assets/images/new-car-detail/color-6.png'
import color7 from '../assets/images/new-car-detail/color-7.png'

import galleryMain from '../assets/images/new-car-detail/gallery-main.png'
import galleryThumb2 from '../assets/images/new-car-detail/gallery-thumb-2.png'
import galleryThumb3 from '../assets/images/new-car-detail/gallery-thumb-3.png'
import galleryThumb4 from '../assets/images/new-car-detail/gallery-thumb-4.png'
import galleryThumb5 from '../assets/images/new-car-detail/gallery-thumb-5.png'

import similarCar1 from '../assets/images/new-car-detail/similar-car-1.png'

import sponsoredBg from '../assets/images/new-car-detail/sponsored-bg.png'

import reviewPhoto1 from '../assets/images/new-car-detail/review-photo-1.png'
import reviewPhoto2 from '../assets/images/new-car-detail/review-photo-2.png'
import reviewPhoto3 from '../assets/images/new-car-detail/review-photo-3.png'
import reviewPhoto4 from '../assets/images/new-car-detail/review-photo-4.png'
import reviewPhoto5 from '../assets/images/new-car-detail/review-photo-5.png'
import reviewPhoto6 from '../assets/images/new-car-detail/review-photo-6.png'
import reviewPhoto7 from '../assets/images/new-car-detail/review-photo-7.png'
import reviewPhoto8 from '../assets/images/new-car-detail/review-photo-8.png'
import reviewPhoto9 from '../assets/images/new-car-detail/review-photo-9.png'

import avatarRohan from '../assets/images/car-detail/avatar-rohan.png'
import avatarAnita from '../assets/images/car-detail/avatar-anita.png'
import avatarPreet from '../assets/images/car-detail/avatar-preet.png'
import avatarSiddharth from '../assets/images/car-detail/avatar-siddharth.png'
import avatarMeera from '../assets/images/car-detail/avatar-meera.png'
import avatarVikram from '../assets/images/car-detail/avatar-vikram.png'
import avatarJason from '../assets/images/car-detail/avatar-jason.png'
import avatarMaya from '../assets/images/car-detail/avatar-maya.png'
import avatarPreet2 from '../assets/images/car-detail/avatar-preet2.png'

const badgePills = ['Best for Money', 'HC Approved', 'Dealer discounts']

const colorImages = [color1, color2, color3, color4, color5, color6, color7]

const variants = [
  { name: 'Tata Punch Smart Petrol 5 Speed Manual', specs: 'Petrol, 1199 cc, Manual', price: 'Rs. 6.26 - 12.36 Lakh', features: '6 Airbags, Rear AC, LED Headlights, Front Only Power Windows' },
  { name: 'Tata Punch Smart Petrol 5 Speed Manual', specs: 'Petrol, 1199 cc, Manual', price: 'Rs. 6.26 - 12.36 Lakh', features: '6 Airbags, Rear AC, LED Headlights, Front Only Power Windows' },
  { name: 'Tata Punch Smart Petrol 5 Speed Manual', specs: 'Petrol, 1199 cc, Manual', price: 'Rs. 6.26 - 12.36 Lakh', features: '6 Airbags, Rear AC, LED Headlights, Front Only Power Windows' },
  { name: 'Tata Punch Smart Petrol 5 Speed Manual', specs: 'Petrol, 1199 cc, Manual', price: 'Rs. 6.26 - 12.36 Lakh', features: '6 Airbags, Rear AC, LED Headlights, Front Only Power Windows' },
  { name: 'Tata Punch Smart Petrol 5 Speed Manual', specs: 'Petrol, 1199 cc, Manual', price: 'Rs. 6.26 - 12.36 Lakh', features: '6 Airbags, Rear AC, LED Headlights, Front Only Power Windows' },
]

const compareHeaders = ['', 'Tata Punch', 'Maruti Suzuki Fronx', 'Tata Nexon']
const compareRows = [
  { label: 'Price', values: ['Rs. 9.04 Lakh', 'Rs. 9.04 Lakh', 'Rs. 9.04 Lakh'] },
  { label: 'Fuel Type', values: ['Petrol', 'Petrol', 'Petrol'] },
  { label: 'Engine Size', values: ['1199 cc', '1199 cc', '1199 cc'] },
  { label: 'Transmission', values: ['Manual', 'Manual', 'Manual'] },
  { label: 'Power', values: ['118 bhp @ 5500 rpm', '118 bhp @ 5500 rpm', '118 bhp @ 5500 rpm'] },
  { label: 'Torque', values: ['170 Nm @ 1750-4000 rpm', '170 Nm @ 1750-4000 rpm', '170 Nm @ 1750-4000 rpm'] },
  { label: 'Safety Rating', values: ['5 Star (Bharat NCAP)', '5 Star (Bharat NCAP)', '5 Star (Bharat NCAP)'] },
  { label: 'Boot Space', values: ['382 litres', '382 litres', '382 litres'] },
  { label: 'Ground Clearance', values: ['208 mm', '208 mm', '208 mm'] },
  { label: 'Size', values: ['3995 mm L X 1804 mm W X 1620 mm H', '3995 mm L X 1804 mm W X 1620 mm H', '3995 mm L X 1804 mm W X 1620 mm H'] },
]

const galleryThumbs = [galleryMain, galleryThumb2, galleryThumb3, galleryThumb4, galleryThumb5]

const similarCars = [
  { image: similarCar1, title: '2021 Volkswagen T-Roc 1.5 TSI\nRs. 65 Lakh', km: '38000km', date: 'Aug 15 2025' },
  { image: similarCar1, title: '2021 Volkswagen T-Roc 1.5 TSI\nRs. 65 Lakh', km: '38000km', date: 'Aug 15 2025' },
]

const innerFaqItems = [
  'How does the car certification process work?',
  'What documents are required to buy a car?',
  'Are all cars fully inspected before listing?',
  'Do you offer test drives or home delivery?',
  'How does the financing/EMI process work?',
]

const faqItems = [
  'How does the car certification process work?',
  'What documents are required to buy a car?',
  'Are all cars fully inspected before listing?',
  'Do you offer test drives or home delivery?',
  'How does the financing/EMI process work?',
]

const reviewPhotos = [
  reviewPhoto1, reviewPhoto2, reviewPhoto3,
  reviewPhoto4, reviewPhoto5, reviewPhoto6,
  reviewPhoto7, reviewPhoto8, reviewPhoto9,
]

const ratingBars = [
  { label: 5, percent: 85 },
  { label: 4, percent: 65 },
  { label: 3, percent: 40 },
  { label: 2, percent: 20 },
  { label: 1, percent: 10 },
]

const reviewComments = [
  { name: 'Rohan Mehta', role: 'Manager', avatar: avatarRohan, text: 'The entire car-selling journey was engineered for clarity and speed. From listing to final payment, every step felt streamlined.' },
  { name: 'Anita', role: 'HR Business Partner', avatar: avatarAnita, text: 'I was expecting complexity. Instead, I got simplicity backed by professionalism. The team handled everything with precision.' },
  { name: 'Preet Singh', role: 'NA', avatar: avatarPreet, text: 'What impressed me most was process maturity. Every touchpoint was well thought out and executed flawlessly.' },
  { name: 'Siddharth', role: 'Corporate Trainer', avatar: avatarSiddharth, text: 'Everything was data-driven and transparent. I knew exactly what my car was worth and why. No guesswork involved.' },
  { name: 'Meera', role: 'IT Project Manager', avatar: avatarMeera, text: 'Speed and trust are non-negotiables for me. This platform delivered both without compromise.' },
  { name: 'Vikram', role: 'Finance Analyst', avatar: avatarVikram, text: 'Selling my car here felt less like a transaction and more like a partnership. Great experience overall.' },
  { name: 'Jason Jacob', role: 'Supply Chain Consultant', avatar: avatarJason, text: 'The digital experience was smooth, intuitive, and surprisingly fast. Highly recommended for anyone selling a car.' },
  { name: 'Maya', role: 'Startup Founder', avatar: avatarMaya, text: 'I value professionalism above all. This team exceeded my expectations at every step of the process.' },
  { name: 'Preet Singh', role: 'Startup Founder', avatar: avatarPreet2, text: 'From first contact to final payment, the experience was seamless. Would definitely use this service again.' },
]

const worthBuyingRatings = [
  { label: 'Safety', percent: 97 },
  { label: 'Value for Money', percent: 90 },
  { label: 'Mileage', percent: 95 },
]

export default function NewCarDetail() {
  const navigate = useNavigate()
  const [selectedColor, setSelectedColor] = useState(0)

  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto flex items-center gap-[1px] px-4 sm:px-6 lg:px-[42px] pt-4 sm:pt-6 pb-3">
        <button
          onClick={() => navigate('/')}
          className="font-sans font-medium text-[14px] sm:text-[16px] text-[#373737] hover:underline"
          style={{ lineHeight: '1.21em' }}
        >
          Home
        </button>
        <ChevronRight size={18} className="text-[#373737]" />
        <button
          onClick={() => navigate('/new-cars')}
          className="font-sans font-medium text-[14px] sm:text-[16px] text-[#373737] hover:underline"
          style={{ lineHeight: '1.21em' }}
        >
          New Car
        </button>
        <ChevronRight size={18} className="text-[#373737]" />
        <span
          className="font-sans font-medium text-[14px] sm:text-[16px] text-[#9D9D9D]"
          style={{ lineHeight: '1.21em' }}
        >
          Tata Punch
        </span>
      </div>

      {/* ═══════ BLOCK A: Hero Section ═══════ */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[42px] pb-8">
        <div className="flex flex-col lg:flex-row items-stretch" style={{ minHeight: 674 }}>
          {/* Left: Car area with color picker & badges */}
          <div className="flex-1 relative" style={{ minHeight: 674 }}>
            {/* Color Picker - Left Side */}
            <div
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-[30px]"
              style={{
                padding: '27px 28px',
                borderRadius: 210,
                backgroundColor: 'rgba(255,255,255,0.16)',
                boxShadow: '8px 10px 89.8px rgba(0,0,0,0.16)',
              }}
            >
              {colorImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(i)}
                  className="overflow-hidden transition-transform hover:scale-110"
                  style={{
                    width: 58,
                    height: 57,
                    borderRadius: 1000,
                    border: selectedColor === i ? '2px solid #E8E8E8' : '2px solid transparent',
                  }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Badge Pills - Top Left (after color picker) */}
            <div className="absolute top-5 left-[140px] lg:left-[160px] flex flex-wrap gap-2 z-10">
              {badgePills.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center justify-center"
                  style={{
                    padding: '12px 16px',
                    borderRadius: 46.98,
                    backgroundColor: 'rgba(255,255,255,0.5)',
                    boxShadow: '6.96px 8.7px 78.13px rgba(0,0,0,0.16)',
                  }}
                >
                  <span className="font-medium text-[#1C1C1C]" style={{ fontFamily: 'Poppins, sans-serif', fontSize: 12.18, lineHeight: '1.02em' }}>
                    {badge}
                  </span>
                </div>
              ))}
            </div>

            {/* Car Image - Centered */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={punchHero}
                alt="Tata Punch"
                className="w-[60%] max-w-[732px] h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: "Is Tata Punch Worth Buying?" Panel */}
          <div className="w-full lg:w-[527px] shrink-0 flex flex-col" style={{ gap: 29 }}>
            <div
              className="bg-white/60 flex flex-col gap-5 flex-1"
              style={{
                padding: '27px 28px',
                borderRadius: 12,
                boxShadow: '0px 4px 7.1px rgba(73,73,73,0.1)',
                backdropFilter: 'blur(17.1px)',
              }}
            >
              <h2 className="font-sans font-semibold text-black" style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}>
                Is Tata Punch Worth Buying?
              </h2>

              {/* Star Rating */}
              <div className="flex items-center gap-[2.58px]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={21} className="text-[#E1B64C]" fill="#E1B64C" />
                ))}
              </div>
              <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 18.08, lineHeight: '1.43em', fontWeight: 400, color: '#000' }}>
                4.9/5 from 8,200+ customers
              </span>

              {/* Rating Percentages */}
              <div className="flex flex-col gap-4">
                {worthBuyingRatings.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-medium text-[#444444]" style={{ fontSize: 14, lineHeight: '1.02em' }}>
                        {item.label}
                      </span>
                      <span className="font-sans font-medium text-[#444444]" style={{ fontSize: 14 }}>
                        {item.percent}%
                      </span>
                    </div>
                    <div className="w-full h-[25px] bg-[#ECECEC]" style={{ borderRadius: 2 }}>
                      <div
                        className="h-full bg-[#5BB55F]"
                        style={{ width: `${item.percent}%`, borderRadius: 2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="font-sans text-[#373737]" style={{ fontSize: 16, lineHeight: '1.61em', fontWeight: 400 }}>
                Priced competitively within the compact SUV segment, Tata Punch offers a strong balance of safety, practicality, and ownership cost compared to rivals.
              </p>

              {/* Get Best Price Button */}
              <button
                className="w-full flex items-center justify-center text-white"
                style={{
                  padding: 10,
                  borderRadius: 6,
                  backgroundColor: '#000000',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: '1.5em',
                }}
              >
                Get Best Price
              </button>

              {/* Checkmarks Row */}
              <div className="flex items-center justify-center gap-[40px] flex-wrap">
                {['Dealer discounts', 'On-road price', 'No spam'].map((label) => (
                  <div key={label} className="flex items-center gap-1">
                    <img src={tickCheck} alt="" className="w-5 h-5" />
                    <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: 14, fontWeight: 500, lineHeight: '1.02em', color: '#1C1C1C' }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ Main Content: Left Column + Sidebar ═══════ */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[42px] pb-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-[21px] w-full lg:flex-1">
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

            {/* ═══════ Tata Punch Variants ═══════ */}
            <div
              className="w-full"
              style={{
                padding: '20px 14px',
                borderRadius: 12,
                backgroundColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0px 4px 7.1px rgba(73,73,73,0.1)',
                backdropFilter: 'blur(17.1px)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-sans font-semibold text-black" style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}>
                  Tata Punch Variants
                </h2>
                <img src={arrowDown} alt="" className="w-6 h-6" />
              </div>

              <div className="flex flex-col gap-[15px]">
                {variants.map((variant, i) => (
                  <div
                    key={i}
                    className="flex flex-col"
                    style={{
                      border: '1px solid #EFEFEF',
                      borderRadius: 8,
                      backgroundColor: '#FBFBFB',
                    }}
                  >
                    <div className="flex items-center justify-between" style={{ padding: '16px 10px' }}>
                      <div className="flex flex-col gap-[9px] flex-1">
                        <span className="font-sans font-medium text-[#1C1C1C]" style={{ fontSize: 14, lineHeight: '1.02em' }}>
                          {variant.name}
                        </span>
                        <span className="font-sans font-normal text-[#757575]" style={{ fontSize: 12, lineHeight: '1.19em' }}>
                          {variant.specs}
                        </span>
                        <span className="font-sans font-bold text-black" style={{ fontSize: 18, lineHeight: '0.79em' }}>
                          {variant.price}
                        </span>
                      </div>
                      <div
                        className="shrink-0 flex items-center justify-center"
                        style={{
                          width: 24,
                          height: 24,
                          borderRadius: 66,
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          boxShadow: '-2px 3px 4px rgba(0,0,0,0.09)',
                        }}
                      >
                        <ChevronRight size={14} className="text-[#333]" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3" style={{ padding: 8, backgroundColor: '#EFF8FF' }}>
                      <span className="font-sans font-medium text-[#757575]" style={{ fontSize: 12, lineHeight: '1.19em' }}>
                        Key Features :
                      </span>
                      <span className="font-sans font-medium text-[#757575]" style={{ fontSize: 12, lineHeight: '1.19em' }}>
                        {variant.features}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══════ Compare Punch with Alternatives ═══════ */}
            <div
              className="w-full"
              style={{
                padding: '16px 0',
                borderRadius: 12,
                backgroundColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0px 4px 7.1px rgba(73,73,73,0.1)',
                backdropFilter: 'blur(17.1px)',
              }}
            >
              <h2
                className="font-sans font-semibold text-black px-5 mb-4"
                style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}
              >
                Compare Punch with Alternatives
              </h2>

              <div className="overflow-x-auto px-4">
                <table className="w-full" style={{ border: '1px solid #F0F0F0', borderRadius: 12, borderCollapse: 'separate', borderSpacing: 0 }}>
                  <thead>
                    <tr>
                      {compareHeaders.map((header, i) => (
                        <th
                          key={i}
                          className="text-left font-sans font-medium"
                          style={{
                            padding: '12px 24px',
                            backgroundColor: '#EFF8FF',
                            fontSize: 12,
                            lineHeight: '1.5em',
                            color: '#526277',
                            borderBottom: '1px solid #EAECF0',
                            borderTopLeftRadius: i === 0 ? 12 : 0,
                            borderTopRightRadius: i === compareHeaders.length - 1 ? 12 : 0,
                          }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {compareRows.map((row, ri) => (
                      <tr key={ri}>
                        <td
                          className="font-sans font-medium"
                          style={{
                            padding: '20px 24px',
                            fontSize: 14,
                            lineHeight: '1.43em',
                            color: '#526277',
                            backgroundColor: '#EFF8FF',
                            borderBottom: ri < compareRows.length - 1 ? '1px solid #EAECF0' : 'none',
                            borderBottomLeftRadius: ri === compareRows.length - 1 ? 12 : 0,
                          }}
                        >
                          {row.label}
                        </td>
                        {row.values.map((val, vi) => (
                          <td
                            key={vi}
                            className="font-sans font-medium"
                            style={{
                              padding: '20px 24px',
                              fontSize: 14,
                              lineHeight: '1.43em',
                              color: '#526277',
                              borderBottom: ri < compareRows.length - 1 ? '1px solid #EAECF0' : 'none',
                              borderBottomRightRadius: ri === compareRows.length - 1 && vi === row.values.length - 1 ? 12 : 0,
                            }}
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* ═══════ Tata Punch Images Gallery ═══════ */}
            <div
              className="w-full"
              style={{
                padding: '16px 0',
                borderRadius: 12,
                backgroundColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0px 4px 7.1px rgba(73,73,73,0.1)',
                backdropFilter: 'blur(17.1px)',
              }}
            >
              <h2
                className="font-sans font-semibold text-black px-5 mb-4"
                style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}
              >
                Tata Punch Images
              </h2>

              {/* Main Image */}
              <div className="relative px-4 mb-3">
                <img
                  src={galleryMain}
                  alt="Tata Punch"
                  className="w-full h-auto rounded-md object-cover"
                />
                {/* Nav Arrow */}
                <button
                  className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  style={{
                    width: 25.49,
                    height: 25.49,
                    backgroundColor: '#404040',
                    borderRadius: 91,
                    opacity: 0.51,
                    backdropFilter: 'blur(79.28px)',
                  }}
                >
                  <ChevronRight size={14} className="text-white" />
                </button>
              </div>

              {/* Thumbnail Strip */}
              <div className="flex gap-2 px-4 overflow-x-auto">
                {galleryThumbs.map((thumb, i) => (
                  <div
                    key={i}
                    className="relative shrink-0 overflow-hidden"
                    style={{ width: 134.2, borderRadius: 3.64 }}
                  >
                    <img src={thumb} alt="" className="w-full h-[80px] object-cover" />
                    {i === galleryThumbs.length - 1 && (
                      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.71)' }}>
                        <span className="font-sans font-semibold text-white" style={{ fontSize: 40 }}>+10</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ═══════ Similar Cars ═══════ */}
            <div
              className="w-full flex flex-col gap-2.5"
              style={{ padding: 14, border: '1px solid #EBEBEB', borderRadius: 12 }}
            >
              <h2
                className="font-sans font-semibold text-black"
                style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}
              >
                Similar Cars To Tata Punch
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {similarCars.map((car, i) => (
                  <div
                    key={i}
                    className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
                    style={{ boxShadow: '0px 8.16px 24.47px rgba(0,0,0,0.1)' }}
                  >
                    <div className="p-4 sm:p-5">
                      <img src={car.image} alt={car.title} className="w-full object-cover rounded-md h-[160px] sm:h-[178px]" />
                    </div>
                    <div className="px-4 sm:px-5 pb-4">
                      <h3 className="font-sans font-semibold text-black whitespace-pre-line" style={{ fontSize: 18.35, lineHeight: '1.667em' }}>
                        {car.title}
                      </h3>
                      <div className="w-full h-px bg-[#BCBCBC] my-3" />
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-sans font-medium text-[#555555] text-sm">{car.km}</span>
                        <div className="w-px bg-[#8F8F8F] h-[19px]" />
                        <span className="font-sans font-medium text-[#555555] text-sm">{car.date}</span>
                        <div className="flex items-center ml-auto">
                          <span className="font-sans font-medium text-sm" style={{ color: 'rgba(59,33,255,0.95)' }}>View Car</span>
                          <ChevronRight size={18} style={{ color: 'rgba(59,33,255,0.95)' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ═══════ Know More About Punch (Inner FAQ) ═══════ */}
            <div
              className="w-full"
              style={{
                padding: '16px 20px',
                borderRadius: 12,
                backgroundColor: 'rgba(255,255,255,0.6)',
                boxShadow: '0px 4px 7.1px rgba(73,73,73,0.1)',
                backdropFilter: 'blur(17.1px)',
              }}
            >
              <h2
                className="font-sans font-semibold text-black mb-4"
                style={{ fontSize: 20, lineHeight: '1.5em', letterSpacing: '0.01em' }}
              >
                Know more about Punch
              </h2>
              <div className="flex flex-col">
                {innerFaqItems.map((q) => (
                  <div key={q} className="flex items-center justify-between py-3 border-b border-[#E0E0E0] last:border-b-0">
                    <span className="font-sans font-normal text-[#5D5D5D]" style={{ fontSize: 16, lineHeight: '2.05em' }}>
                      {q}
                    </span>
                    <ChevronDown size={24} className="text-[#5D5D5D] shrink-0 ml-4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Sponsored Ad */}
          <div className="shrink-0 lg:pt-[34px] w-full lg:w-[439px]">
            <div className="relative w-full h-[280px] sm:h-[357px] rounded-xl overflow-hidden">
              <img src={sponsoredBg} alt="Sponsored" className="absolute inset-0 w-full h-full object-cover" />
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

      {/* ═══════ FAQ + Reviews Section ═══════ */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[42px] pb-10 sm:pb-16 flex flex-col gap-12 sm:gap-16 lg:gap-[101px]">
        {/* Main FAQ */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          <div className="flex flex-col gap-2 w-full lg:max-w-[649px] lg:shrink-0">
            <h2 className="font-sans font-bold text-[#171717] text-[28px] sm:text-[36px] lg:text-[52px] leading-[1.192em]">
              We&apos;ve Got Answers for You
            </h2>
            <p className="font-sans font-medium text-[#242424] text-base sm:text-lg lg:text-xl leading-[1.64em]">
              Find quick answers to the most common questions buyers ask about certified cars, inspections, pricing, financing, and ownership.
            </p>
          </div>
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

        {/* ═══════ Reviews Section ═══════ */}
        <div className="flex flex-col items-center gap-8 sm:gap-[42px]">
          {/* Review Summary Row */}
          <div className="flex flex-col lg:flex-row items-start w-full gap-5">
            {/* Review Summary Card */}
            <div
              className="bg-white w-full lg:w-[781px] shrink-0 p-6 sm:p-8 lg:p-10"
              style={{ borderRadius: 11.2, border: '0.93px solid #E1E1E1' }}
            >
              <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                <h3 className="font-sans font-semibold text-[#2A2A2A] text-lg sm:text-xl">
                  Review Summery
                </h3>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} className="text-[#E1B64C]" fill="#E1B64C" />
                  ))}
                </div>
                <span className="font-normal text-black text-base sm:text-lg" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  4.9/5 from 8,200+ customers
                </span>
              </div>
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
              <span className="font-normal text-[#898989] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                User collected from google and direct review
              </span>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 flex-1 w-full">
              {reviewPhotos.map((photo, i) => (
                <div key={i} className="relative overflow-hidden rounded-xl aspect-square">
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                  {i === reviewPhotos.length - 1 && (
                    <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
                      <span className="font-sans font-semibold text-white" style={{ fontSize: 44 }}>+10</span>
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
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={13} className="text-[#E1B64C]" fill="#E1B64C" />
                    ))}
                  </div>
                  <p className="font-sans font-medium text-[#2A2A2A] line-clamp-4" style={{ fontSize: 15.73, lineHeight: '1.486em' }}>
                    {comment.text}
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={comment.avatar} alt={comment.name} className="rounded-full object-cover" style={{ width: 34.2, height: 34.2 }} />
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
    </div>
  )
}
