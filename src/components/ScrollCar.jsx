import { useState, useEffect, useRef } from 'react'
import scrollCarImg from '../assets/images/scroll anime.png'

export default function ScrollCar() {
  const [scrollPercent, setScrollPercent] = useState(0)
  const [visible, setVisible] = useState(false)
  const hideTimer = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? scrollTop / docHeight : 0
      setScrollPercent(percent)
      setVisible(true)

      clearTimeout(hideTimer.current)
      hideTimer.current = setTimeout(() => setVisible(false), 1500)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(hideTimer.current)
    }
  }, [])

  const trackHeight = typeof window !== 'undefined' ? window.innerHeight - 140 : 600
  const topPos = 100 + scrollPercent * trackHeight

  return (
    <div
      className="fixed right-1 sm:right-3 z-[9999] pointer-events-none"
      style={{
        top: `${topPos}px`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.4s ease, top 0.15s ease-out',
      }}
    >
      <img
        src={scrollCarImg}
        alt=""
        className="w-8 h-8 sm:w-12 sm:h-12 drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))' }}
      />
    </div>
  )
}
