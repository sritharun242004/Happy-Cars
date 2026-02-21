import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zap, ChevronLeft } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import blog1 from '../assets/images/blogs/blog-1.png'
import blog2 from '../assets/images/blogs/blog-2.png'
import blog3 from '../assets/images/blogs/blog-3.png'
import blog4 from '../assets/images/blogs/blog-4.png'
import blog5 from '../assets/images/blogs/blog-5.png'
import blog6 from '../assets/images/blogs/blog-6.png'
import blog7 from '../assets/images/blogs/blog-7.png'
import blogSponsored from '../assets/images/blogs/blog-sponsored.png'

import newsHero from '../assets/images/news/news-hero.png'
import newsCard1 from '../assets/images/news/news-card-1.png'
import newsCard2 from '../assets/images/news/news-card-2.png'
import newsCard3 from '../assets/images/news/news-card-3.png'
import newsCard4 from '../assets/images/news/news-card-4.png'
import newsCard5 from '../assets/images/news/news-card-5.png'
import newsCard6 from '../assets/images/news/news-card-6.png'
import newsTrending1 from '../assets/images/news/news-trending-1.png'
import newsTrending2 from '../assets/images/news/news-trending-2.png'

import reviewCar1 from '../assets/images/reviews/review-car-1.png'
import reviewCar2 from '../assets/images/reviews/review-car-2.png'
import reviewCar3 from '../assets/images/reviews/review-car-3.png'
import reviewCar4 from '../assets/images/reviews/review-car-4.png'
import playButton from '../assets/images/reviews/play-button.svg'

import videoCar1 from '../assets/images/video/video-car-1.png'
import videoCar2 from '../assets/images/video/video-car-2.png'
import videoCar3 from '../assets/images/video/video-car-3.png'
import videoCar4 from '../assets/images/video/video-car-4.png'
import videoCar5 from '../assets/images/video/video-car-5.png'
import videoCar6 from '../assets/images/video/video-car-6.png'
import videoCar7 from '../assets/images/video/video-car-7.png'
import videoCar8 from '../assets/images/video/video-car-8.png'

const categories = ['Blogs', 'News', 'Reviews', 'Compare Reviews', 'Photo', 'Video']

const blogPosts = [
  {
    id: 1,
    slug: '6-best-electric-cars-under-15-lakh',
    title: '6 Best Electric Cars You Can Buy Under Rs 15 Lakh',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog1,
  },
  {
    id: 2,
    title: 'Used Car Loan Myths vs Facts',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog2,
  },
  {
    id: 3,
    title: 'Hyundai vs Toyota: Which Used Car Gives Better Long-Term Value?',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog3,
  },
  {
    id: 4,
    title: 'EV vs Petrol: Maintenance Costs Compared',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog4,
  },
  {
    id: 5,
    title: 'Top 10 Cars Under ₹8 Lakhs in 2025',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog5,
  },
  {
    id: 6,
    title: '7 Hidden Factors That Affect Car Resale Value',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog6,
  },
  {
    id: 7,
    title: 'Best Cars for First-Time Buyers',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog7,
  },
  {
    id: 8,
    title: 'The Most Reliable Cars of 2025',
    description:
      'The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...',
    date: 'Jan 16, 2023',
    image: blog4,
  },
]

const newsPosts = [
  { id: 1, title: '7 Hidden Factors That Affect Car Resale Value', date: 'Jan 16, 2023', image: newsCard1 },
  { id: 2, title: '7 Hidden Factors That Affect Car Resale Value', date: 'Jan 16, 2023', image: newsCard2 },
  { id: 3, title: '7 Hidden Factors That Affect Car Resale Value', date: 'Jan 16, 2023', image: newsCard3 },
  { id: 4, title: '7 Hidden Factors That Affect Car Resale Value', date: 'Jan 16, 2023', image: newsCard4 },
  { id: 5, title: '7 Hidden Factors That Affect Car Resale Value', date: 'Jan 16, 2023', image: newsCard5 },
  { id: 6, title: '7 Hidden Factors That Affect Car Resale Value', date: 'Jan 16, 2023', image: newsCard6 },
]

const trendingCars = [
  { name: 'Tata Punch', price: 'Rs.9.89 Lakh', verified: true, image: newsCard3 },
  { name: 'Tata Punch', price: 'Rs.9.89 Lakh', verified: false, image: newsCard3 },
  { name: 'Tata Punch', price: 'Rs.9.89 Lakh', verified: true, image: newsCard3 },
  { name: 'Tata Punch', price: 'Rs.9.89 Lakh', verified: false, image: newsCard3 },
  { name: 'Tata Punch', price: 'Rs.9.89 Lakh', verified: false, image: newsCard3 },
  { name: 'Tata Punch', price: 'Rs.9.89 Lakh', verified: false, image: newsCard3 },
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

const reviewPosts = [
  {
    id: 1,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar1,
  },
  {
    id: 2,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar2,
  },
  {
    id: 3,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar3,
  },
  {
    id: 4,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar4,
  },
  {
    id: 5,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar1,
  },
  {
    id: 6,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar2,
  },
  {
    id: 7,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar3,
  },
  {
    id: 8,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    author: 'By Blog Team',
    date: 'Aug 15 2025',
    image: reviewCar4,
  },
]

const videoPosts = [
  {
    id: 1,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar1,
  },
  {
    id: 2,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar2,
  },
  {
    id: 3,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar3,
  },
  {
    id: 4,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar4,
  },
  {
    id: 5,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar5,
  },
  {
    id: 6,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar6,
  },
  {
    id: 7,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar7,
  },
  {
    id: 8,
    title: 'Mahindra XUV 7XO Petrol Automatic First Drive Review',
    description: 'Along with the new name comes a series of meaningful updates, ...',
    date: 'Aug 15 2025',
    image: videoCar8,
  },
]

export default function Blogs() {
  const [activeTab, setActiveTab] = useState('Blogs')
  const [activePage, setActivePage] = useState(1)

  return (
    <div className={`min-h-screen flex flex-col ${activeTab === 'News' || activeTab === 'Reviews' || activeTab === 'Compare Reviews' || activeTab === 'Video' ? 'bg-[#FCFCFC]' : 'bg-white'}`}>
      <Navbar />

      <main className="max-w-[1440px] w-full mx-auto pt-6 sm:pt-10 pb-10 sm:pb-16 flex-1">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 px-4 sm:px-10">
          <h1 className="font-display font-semibold text-[24px] sm:text-[30px] lg:text-[36px] text-[#1F1F1F] leading-[1.2em] text-center">
            Drive Smarter With Expert Insights
          </h1>
          <p
            className="font-display font-medium text-sm sm:text-base lg:text-[18px] text-[#414141] text-center max-w-[800px]"
            style={{ lineHeight: '2em', letterSpacing: '0.02em' }}
          >
            Actionable guides, market trends, ownership tips, and real stories to help you make
            confident car-buying decisions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-6 sm:mt-10 px-4 sm:px-[42px] overflow-x-auto">
          <div
            className="flex items-center gap-2 sm:gap-3 w-max sm:w-auto"
            style={{
              borderBottom: '1px solid transparent',
              borderImage: 'linear-gradient(112deg, rgba(210,210,210,0) 0%, rgba(108,108,108,1) 100%) 1',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveTab(cat); setActivePage(1) }}
                className={`px-2 sm:px-2.5 py-2.5 font-display font-medium text-sm sm:text-[16px] leading-[1.2em] transition-colors whitespace-nowrap ${
                  activeTab === cat
                    ? 'text-[#272727] border-b-[4px] border-[#0B2A6B]'
                    : 'text-[#787878] border-b border-[#D9D9D9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'News' ? (
          <NewsTabContent activePage={activePage} setActivePage={setActivePage} />
        ) : activeTab === 'Reviews' || activeTab === 'Compare Reviews' ? (
          <ReviewsTabContent activePage={activePage} setActivePage={setActivePage} />
        ) : activeTab === 'Video' ? (
          <VideoTabContent activePage={activePage} setActivePage={setActivePage} />
        ) : (
          <BlogsTabContent activePage={activePage} setActivePage={setActivePage} />
        )}
      </main>

      <Footer />
    </div>
  )
}

// ─── Blogs Tab ────────────────────────────────────────────────
function BlogsTabContent({ activePage, setActivePage }) {
  const row1 = blogPosts.slice(0, 2)
  const row2 = blogPosts.slice(2, 5)
  const row3 = blogPosts.slice(5, 8)

  return (
    <>
      <div className="mt-6 sm:mt-10 flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-[42px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {row1.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          <SponsoredCard />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {row2.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {row3.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </>
  )
}

// ─── News Tab ─────────────────────────────────────────────────
function NewsTabContent({ activePage, setActivePage }) {
  const navigate = useNavigate()
  const newsRow1 = newsPosts.slice(0, 2)
  const newsRow2 = newsPosts.slice(2, 4)
  const newsRow3 = newsPosts.slice(4, 6)

  return (
    <div className="mt-6 sm:mt-10 px-4 sm:px-[42px]">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[42px]">
        {/* Left: Hero + Card Rows */}
        <div className="flex flex-col gap-6 sm:gap-8 flex-1">
          {/* Hero News Card */}
          <div
            className="relative w-full h-[300px] sm:h-[450px] lg:h-[602px] rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate('/news/drive-smarter-with-expert-insights')}
          >
            <img src={newsHero} alt="Featured news" className="absolute inset-0 w-full h-full object-cover" />
            <div
              className="absolute bottom-0 left-0 right-0 h-[280px] rounded-b-xl"
              style={{ background: 'linear-gradient(180deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 100%)' }}
            />
            {/* Tags */}
            <div className="absolute top-6 left-6 flex items-center gap-1.5">
              <span className="flex items-center gap-1 bg-white rounded-full px-4 py-1.5">
                <Zap size={14} className="text-[#FF1D2C]" fill="#FF1D2C" />
                <span className="font-sans font-medium text-[14px] text-[#FF1D2C]">Trending News</span>
              </span>
              <span className="bg-white rounded-full px-4 py-1.5 font-sans font-medium text-[14px] text-[#3F3F3F]">SUV</span>
              <span className="bg-white rounded-full px-4 py-1.5 font-sans font-medium text-[14px] text-[#3F3F3F]">Petrol</span>
            </div>
            {/* Content */}
            <div className="absolute bottom-8 left-6 right-6 max-w-[661px] flex flex-col gap-2">
              <h2 className="font-display font-semibold text-[24px] text-white leading-[1.2em]">
                Drive Smarter With Expert Insights
              </h2>
              <p className="font-sans font-medium text-[14px] text-[#BCBCBC] leading-[1.43em]">
                The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for ..
              </p>
            </div>
          </div>

          {/* News Card Rows (2 per row) */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {[newsRow1, newsRow2, newsRow3].map((row, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {row.map((post) => (
                  <NewsCard key={post.id} post={post} />
                ))}
              </div>
            ))}
          </div>

          <Pagination activePage={activePage} setActivePage={setActivePage} />
        </div>

        {/* Right Sidebar */}
        <div className="flex flex-col gap-5 w-full lg:w-[439px] lg:shrink-0">
          {/* Sponsored Ad */}
          <SponsoredCard />

          {/* Trending Cars */}
          <TrendingCarsCard />

          {/* Trending News */}
          <TrendingNewsCard />
        </div>
      </div>
    </div>
  )
}

// ─── News Card (2-col layout) ─────────────────────────────────
function NewsCard({ post }) {
  return (
    <div
      className="bg-white overflow-hidden flex flex-col"
      style={{ borderRadius: 16.3, boxShadow: '0px 8px 24.5px rgba(0,0,0,0.1)' }}
    >
      <div className="px-[22px] pt-[18px] flex flex-col flex-1">
        <img src={post.image} alt={post.title} className="w-full h-[178px] rounded-md object-cover" />
        <div className="mt-6 flex flex-col gap-3.5 flex-1">
          <h3 className="font-sans font-semibold text-[18px] text-black leading-[1.67em] line-clamp-2">
            {post.title}
          </h3>
          <p className="font-sans font-medium text-[14px] text-[#5D5D5D] leading-[1.57em] line-clamp-4">
            The electric car segment in the Indian market has seen a lot of growth with multiple models launching in different price ranges. For those looking for an EV under Rs 15 lakh, there are seven models wh...
          </p>
        </div>
        <div className="py-3">
          <span className="font-sans font-medium text-[14px] text-[#555555]">{post.date}</span>
        </div>
      </div>
    </div>
  )
}

// ─── Trending Cars Sidebar Card ───────────────────────────────
function TrendingCarsCard() {
  const [activeSubTab, setActiveSubTab] = useState('Popular')
  const subTabs = ['Popular', 'HC Approved', 'Trending']

  return (
    <div className="bg-white rounded-xl border border-[#DCDCDC] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h3 className="font-sans font-bold text-[18px] text-black">Trending Cars</h3>
        <ChevronLeft size={18} className="text-[#7D7D7D]" />
      </div>

      {/* Sub-tabs */}
      <div className="flex items-center px-5 border-b border-[#E8E8E8]">
        {subTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveSubTab(tab)}
            className={`px-3 pb-2.5 font-sans font-medium text-[14px] transition-colors ${
              activeSubTab === tab
                ? 'text-[#272727] border-b-[3px] border-[#0B2A6B]'
                : 'text-[#787878]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Car list */}
      <div className="flex flex-col px-5 py-4 gap-3">
        {trendingCars.map((car, i) => (
          <div key={i} className="flex items-center gap-3">
            <img src={car.image} alt={car.name} className="w-[72px] h-[68px] rounded object-cover shrink-0" />
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="font-sans font-medium text-[14px] text-[#555555]">{car.name}</span>
              {car.verified && (
                <span className="flex items-center gap-1 font-sans font-medium text-[14px] text-[#2D7A30]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 0C3.13 0 0 3.13 0 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.15 5.46l-3.77 3.77a.5.5 0 01-.71 0L3.85 7.41a.5.5 0 01.71-.71l1.46 1.46 3.42-3.42a.5.5 0 01.71.71z" fill="#2D7A30"/></svg>
                  HC Approved
                </span>
              )}
              <span className="font-sans font-medium text-[20px] text-[#272727]">{car.price}</span>
              <span className="font-sans font-medium text-[12px] text-[#9B9B9B]">Avg Ex showroom price</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Trending News Sidebar Card ───────────────────────────────
function TrendingNewsCard() {
  return (
    <div className="bg-white rounded-xl border border-[#DCDCDC] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-[#E3E3E3]">
        <h3 className="font-sans font-bold text-[18px] text-black">Trending News</h3>
        <ChevronLeft size={18} className="text-[#7D7D7D]" />
      </div>

      {/* News list */}
      <div className="flex flex-col px-5 py-4 gap-3">
        {trendingNews.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <img src={item.image} alt={item.title} className="w-[72px] h-[68px] rounded object-cover shrink-0" />
            <div className="flex flex-col gap-1.5 flex-1">
              <span className="font-sans font-medium text-[16px] text-[#272727] leading-tight line-clamp-2">
                {item.title}
              </span>
              <span className="font-sans font-medium text-[12px] text-[#555555]">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Reviews Tab ─────────────────────────────────────────────
function ReviewsTabContent({ activePage, setActivePage }) {
  const row1 = reviewPosts.slice(0, 2)
  const row2 = reviewPosts.slice(2, 4)
  const row3 = reviewPosts.slice(4, 6)
  const row4 = reviewPosts.slice(6, 8)

  return (
    <div className="mt-6 sm:mt-10 px-4 sm:px-[42px]">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left: Review Cards */}
        <div className="flex flex-col gap-6 sm:gap-8 flex-1">
          {[row1, row2, row3, row4].map((row, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {row.map((post) => (
                <ReviewCard key={post.id} post={post} />
              ))}
            </div>
          ))}

          <Pagination activePage={activePage} setActivePage={setActivePage} />
        </div>

        {/* Right: Sidebar */}
        <div className="flex flex-col gap-5 w-full lg:w-[439px] lg:shrink-0">
          <SponsoredCard />
          <TrendingCarsCard />
          <TrendingNewsCard />
        </div>
      </div>
    </div>
  )
}

// ─── Review Card ─────────────────────────────────────────────
function ReviewCard({ post }) {
  return (
    <div
      className="bg-white overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
      style={{
        boxShadow: '0px 8px 24.5px rgba(0,0,0,0.1)',
      }}
    >
      <div className="flex flex-col items-center gap-4 px-[23px] pt-6">
        {/* Car Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full rounded-md object-cover"
          style={{ height: 178 }}
        />

        {/* Text Content */}
        <div className="flex flex-col gap-[7px] w-full">
          <h3
            className="font-sans font-semibold text-black line-clamp-2"
            style={{ fontSize: 18, lineHeight: '1.67em' }}
          >
            {post.title}
          </h3>
          <p
            className="font-sans font-medium text-[#555555] line-clamp-2"
            style={{ fontSize: 14, lineHeight: '1.29em' }}
          >
            {post.description}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#BCBCBC]" />

        {/* Footer */}
        <div className="flex items-center gap-2 w-full">
          <span
            className="font-sans font-medium text-[14px] text-[#555555]"
            style={{ lineHeight: '1.31em' }}
          >
            {post.author}
          </span>
          <div className="w-px bg-[#8F8F8F]" style={{ height: 19 }} />
          <span
            className="font-sans font-medium text-[14px] text-[#555555]"
            style={{ lineHeight: '1.31em' }}
          >
            {post.date}
          </span>
          <div className="flex items-center gap-[-3px] ml-auto">
            <span
              className="font-sans font-medium text-[14px]"
              style={{ color: 'rgba(59,33,255,0.95)', lineHeight: '1.29em' }}
            >
              View Car
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="rotate-180">
              <path d="M6.68 3.06L12 9l-5.32 5.94" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Video Tab ──────────────────────────────────────────────
function VideoTabContent({ activePage, setActivePage }) {
  const row1 = videoPosts.slice(0, 2)
  const row2 = videoPosts.slice(2, 4)
  const row3 = videoPosts.slice(4, 6)
  const row4 = videoPosts.slice(6, 8)

  return (
    <div className="mt-6 sm:mt-10 px-4 sm:px-[42px]">
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Left: Video Cards */}
        <div className="flex flex-col flex-1 gap-6 sm:gap-8">
          {[row1, row2, row3, row4].map((row, i) => (
            <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {row.map((post) => (
                <VideoCard key={post.id} post={post} />
              ))}
            </div>
          ))}

          <Pagination activePage={activePage} setActivePage={setActivePage} />
        </div>

        {/* Right: Sidebar */}
        <div className="flex flex-col w-full lg:w-[439px] lg:shrink-0 gap-5">
          <SponsoredCard />
          <TrendingCarsCard />
          <TrendingNewsCard />
        </div>
      </div>
    </div>
  )
}

// ─── Video Card ──────────────────────────────────────────────
function VideoCard({ post }) {
  return (
    <div
      className="bg-white overflow-hidden cursor-pointer hover:shadow-lg transition-shadow rounded-2xl"
      style={{ boxShadow: '0px 8.16px 24.47px rgba(0,0,0,0.1)' }}
    >
      <div className="p-4 sm:p-5">
        {/* Car Image */}
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full object-cover rounded-md h-[160px] sm:h-[178px]"
          />
          {/* Play Button */}
          <div
            className="absolute bottom-2 right-2 w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center"
            style={{ boxShadow: '0px 1px 2px rgba(0,0,0,0.1), 0px 3px 3px rgba(0,0,0,0.09)' }}
          >
            <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
              <path d="M0.800781 1.82388V9.40006C0.800781 10.9518 2.48698 11.9256 3.83291 11.1497L7.11831 9.25764L10.4037 7.35764C11.7496 6.58181 11.7496 4.64222 10.4037 3.86639L7.11831 1.96639L3.83291 0.0743423C2.48698 -0.701449 0.800781 0.264343 0.800781 1.82388Z" fill="#FF1D2C"/>
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="mt-4 flex flex-col gap-2">
          <h3 className="font-sans font-semibold text-black line-clamp-2 text-base sm:text-lg leading-[1.667em]">
            {post.title}
          </h3>
          <p className="font-sans font-medium text-[#555555] line-clamp-2 text-sm leading-[1.286em]">
            {post.description}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#BCBCBC] my-3" />

        {/* Footer: Youtube badge + date */}
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center font-sans font-semibold text-white shrink-0 text-xs px-3 py-1 bg-[#FF1A1A] rounded">
            Youtube
          </span>
          <span className="font-sans font-medium text-[#555555] ml-auto text-sm">
            {post.date}
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Shared Components ────────────────────────────────────────
function Pagination({ activePage, setActivePage }) {
  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          onClick={() => setActivePage(page)}
          className={`w-9 h-9 rounded-full flex items-center justify-center font-display text-[18px] transition-colors ${
            activePage === page
              ? 'bg-[#452CFF] text-white font-medium'
              : 'bg-[#E2E2E2] text-[#686868] font-normal hover:bg-[#D0D0D0]'
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  )
}

function BlogCard({ post }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/blogs/${post.slug || post.id}`)}
      className="bg-white rounded-2xl overflow-hidden flex flex-col cursor-pointer hover:shadow-lg transition-shadow"
      style={{ boxShadow: '0px 8px 24.5px rgba(0,0,0,0.1)' }}
    >
      <div className="px-[22px] pt-[18px] flex flex-col flex-1">
        <img src={post.image} alt={post.title} className="w-full h-[178px] rounded-lg object-cover" />
        <div className="mt-6 flex flex-col gap-3.5 flex-1">
          <h3 className="font-sans font-bold text-[18px] text-black leading-[1.67em] line-clamp-2">
            {post.title}
          </h3>
          <p className="font-sans font-medium text-[14px] text-[#5D5D5D] leading-[1.57em] line-clamp-4">
            {post.description}
          </p>
        </div>
        <div className="py-3">
          <span className="font-sans font-medium text-[14px] text-[#555555]">{post.date}</span>
        </div>
      </div>
    </div>
  )
}

function SponsoredCard() {
  return (
    <div className="relative w-full h-[280px] sm:h-[357px] rounded-xl overflow-hidden self-start shrink-0">
      <img src={blogSponsored} alt="Sponsored" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute top-0 left-0 right-0 h-[123px] rounded-b-xl"
        style={{ background: 'linear-gradient(0deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-[184px]"
        style={{ background: 'linear-gradient(180deg, rgba(66,66,66,0) 0%, rgba(9,9,9,1) 86%)' }}
      />
      <div className="absolute top-[25px] left-[19px] flex items-center gap-1">
        <span className="text-white text-[12px] font-normal leading-[2em]">Sponsored</span>
        <span className="text-[#BDBDBD] text-[12px]">.</span>
        <span className="text-white text-[12px] font-normal leading-[2em]">Ad</span>
      </div>
      <div className="absolute bottom-[23px] left-5 right-5 flex flex-col gap-2">
        <h3 className="font-sans font-medium text-[20px] text-[#F5F5F5] leading-[1em]">
          Get Housing loan in 5 days
        </h3>
        <p className="font-sans font-medium text-[14px] text-[#9E9E9E] leading-[1.43em]">
          Get Housing loan in 5 daysGet Housing loan in 5 ...
        </p>
      </div>
    </div>
  )
}
