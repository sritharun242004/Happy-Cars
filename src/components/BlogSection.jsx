import { ArrowLeft } from 'lucide-react'
import blogImg1 from '../assets/images/homepage/blog-img-1.png'
import blogImg2 from '../assets/images/homepage/blog-img-2.png'
import blogImg3 from '../assets/images/homepage/blog-img-3.png'
import blogImg4 from '../assets/images/homepage/blog-img-4.png'

const posts = [
  {
    id: 1,
    tag: 'Safety',
    tagColor: '#FF6A00',
    tagBg: '#FFF3E0',
    description: 'Safety is no longer optional. We break down crash ratings, airbags, and real-world safety performance of the ...',
    image: blogImg1,
  },
  {
    id: 2,
    tag: 'EV vs ICE',
    tagColor: '#452DFF',
    tagBg: '#EDE7F6',
    description: 'Fuel costs, maintenance, resale value, and future regulations \u2014 this guide helps you choose the right ...',
    image: blogImg2,
  },
  {
    id: 3,
    tag: 'Ownership Cost',
    tagColor: '#0E9845',
    tagBg: '#E8F5E9',
    description: 'Beyond the ex-showroom price \u2014 understand insurance, servicing, fuel, depreciation, and hidden ...',
    image: blogImg3,
  },
  {
    id: 4,
    tag: 'SUV Trends',
    tagColor: '#C62828',
    tagBg: '#FFEBEE',
    description: "We analyze sales data, road conditions, comfort, and practicality to explain India's growing SUV obsession.",
    image: blogImg4,
  },
]

export default function BlogSection() {
  return (
    <section className="bg-[#F8F8F8] py-[67px]">
      <div className="max-w-[1292px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-bold text-black leading-[1.22]">
            Smarter Car Decisions Start Here
          </h2>
          <p className="text-[18px] text-[#494949] font-medium mt-3 max-w-[1058px] mx-auto leading-[1.89]">
            From expert reviews to real-world buying advice, explore everything you need to choose the right car with confidence.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="flex gap-[21px] justify-center mt-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[20px] overflow-hidden flex-1 min-w-0 flex flex-col p-4 pb-4"
            >
              {/* Image */}
              <div className="h-[162px] rounded-lg overflow-hidden mb-3">
                <img
                  src={post.image}
                  alt={post.tag}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tag + date row */}
              <div className="flex items-center gap-1 mb-1">
                <span
                  className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                  style={{ color: post.tagColor, backgroundColor: post.tagBg }}
                >
                  {post.tag}
                </span>
                <span className="text-xs text-[#9B9B9B]">&bull; 4 min read</span>
              </div>

              {/* Description */}
              <p className="text-[14px] text-[#747474] font-medium leading-[1.57] mb-3 flex-1">
                {post.description}
              </p>

              {/* Read Post link */}
              <div className="flex items-center gap-1">
                <span className="text-[14px] font-medium text-[#0B2A6B]">Read Post</span>
                <ArrowLeft size={14} className="text-[#0B2A6B] rotate-180" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
