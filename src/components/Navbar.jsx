import { Search, Phone, Heart, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import navbarLogo from '../assets/images/navbar-logo.svg'

const navItems = [
  { label: 'New Car', hasDropdown: true, path: '/new-cars' },
  { label: 'Old Car', hasDropdown: true, path: '/used-cars' },
  { label: 'Sell car', hasDropdown: false, path: null },
  { label: 'Blog', hasDropdown: false, path: null },
  { label: 'About Us', hasDropdown: false, path: null },
]

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#F0F0F0]">
      <div className="max-w-[1440px] mx-auto px-7 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-5">
            {/* Logo icon only */}
            <img
              src={navbarLogo}
              alt="Happy Cars"
              className="w-10 h-10 cursor-pointer"
              onClick={() => navigate('/')}
            />

            {/* Nav items in bordered container */}
            <div className="hidden md:flex items-center border border-[#E8E8E8] rounded-full px-2 py-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => item.path && navigate(item.path)}
                  className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-[#3D3D3D] hover:text-[#141414] transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={14} className="text-[#7A7A7A]" />}
                </button>
              ))}
              {/* Heart icon */}
              <button className="px-4 py-2 text-[#7A7A7A] hover:text-[#141414] transition-colors">
                <Heart size={18} />
              </button>
            </div>
          </div>

          {/* Right: Action icons */}
          <div className="flex items-center gap-2.5">
            {/* Search icon */}
            <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Search size={18} className="text-[#515151]" />
            </button>
            {/* Phone icon */}
            <button className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#333] transition-colors">
              <Phone size={16} className="text-white" />
            </button>
            {/* WhatsApp icon */}
            <button className="w-10 h-10 rounded-full border border-[#E8E8E8] flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M17.6 6.32A8.86 8.86 0 0 0 12.05 4c-4.91 0-8.9 3.98-8.9 8.88 0 1.57.41 3.1 1.19 4.45L3 22l4.84-1.27a8.89 8.89 0 0 0 4.21 1.07h.01c4.91 0 8.9-3.98 8.9-8.88 0-2.37-.93-4.6-2.61-6.28l.25-.32zM12.05 20.15a7.39 7.39 0 0 1-3.76-1.03l-.27-.16-2.8.73.75-2.73-.18-.28a7.36 7.36 0 0 1-1.13-3.93c0-4.08 3.32-7.4 7.41-7.4a7.36 7.36 0 0 1 5.24 2.17 7.36 7.36 0 0 1 2.17 5.24c-.01 4.07-3.33 7.39-7.43 7.39zm4.06-5.54c-.22-.11-1.31-.65-1.51-.72-.21-.08-.36-.11-.51.11-.15.22-.58.72-.72.87-.13.15-.27.17-.49.06-.22-.12-.94-.35-1.78-1.11-.66-.59-1.1-1.32-1.23-1.54-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.08-.15.04-.28-.02-.39-.06-.11-.51-1.23-.7-1.69-.18-.44-.37-.38-.51-.39h-.43c-.15 0-.39.06-.6.28-.21.22-.79.78-.79 1.89 0 1.11.81 2.19.92 2.34.12.15 1.6 2.44 3.87 3.42.54.23.96.37 1.29.48.54.17 1.03.15 1.42.09.43-.07 1.31-.54 1.5-1.06.19-.52.19-.96.13-1.06-.06-.09-.21-.14-.43-.25z" fill="#515151"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
