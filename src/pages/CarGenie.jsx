import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Pencil, MessageSquare, Plus } from 'lucide-react'
import citySkyline from '../assets/images/chatbot/city-skyline-b11219.png'
import carGenieAvatar from '../assets/images/chatbot/car-genie-avatar-899404.png'
import userAvatar from '../assets/images/chatbot/user-avatar.png'
import sidebarLogo from '../assets/images/chatbot/sidebar-logo.svg'
import sendIcon from '../assets/images/chatbot/send-icon.svg'

// Avatar rules:
// 1. Not logged in → greyscale avatar
// 2. Logged in, no photo → first letter of name
// 3. Logged in with photo → show profile picture
const MOCK_USER = {
  isLoggedIn: true,
  name: 'Tharun',
  photo: userAvatar, // set to null to test initial-letter mode
}

function UserAvatar({ size = 42, className = '' }) {
  if (!MOCK_USER.isLoggedIn) {
    return (
      <img
        src={userAvatar}
        alt="Guest"
        className={`rounded-full object-cover grayscale ${className}`}
        style={{ width: size, height: size }}
      />
    )
  }
  if (!MOCK_USER.photo) {
    return (
      <div
        className={`rounded-full bg-[#442FC2] text-white flex items-center justify-center font-semibold ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.45 }}
      >
        {MOCK_USER.name.charAt(0).toUpperCase()}
      </div>
    )
  }
  return (
    <img
      src={MOCK_USER.photo}
      alt={MOCK_USER.name}
      className={`rounded-full object-cover ${className}`}
      style={{ width: size, height: size }}
    />
  )
}

const AI_INTRO = "Hey, I'm HappyCars AI — your personal car advisor. Tell me what you're looking for today."

export default function CarGenie() {
  const [query, setQuery] = useState('')
  const [chatActive, setChatActive] = useState(false)
  const [messages, setMessages] = useState([])
  const navigate = useNavigate()
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (chatActive) inputRef.current?.focus()
  }, [chatActive])

  const startChat = (text) => {
    setChatActive(true)
    setMessages([
      { role: 'ai', text: AI_INTRO },
      { role: 'user', text },
    ])
    setQuery('')

    // Simulate AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: "I can help you find the perfect car! Could you tell me your budget range and whether you're looking for a new or pre-owned vehicle?",
        },
      ])
    }, 1200)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return

    if (!chatActive) {
      startChat(query.trim())
      return
    }

    const userMsg = query.trim()
    setMessages((prev) => [...prev, { role: 'user', text: userMsg }])
    setQuery('')

    // Simulate AI reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: "Thanks for sharing! Let me search our marketplace for the best options that match your preferences. I'll have some recommendations for you shortly.",
        },
      ])
    }, 1000)
  }

  const handleNewConversation = () => {
    setChatActive(false)
    setMessages([])
    setQuery('')
  }

  // ─── Landing View (before chat) ────────────────────────────
  if (!chatActive) {
    return (
      <div className="flex h-screen w-full overflow-hidden bg-white relative">
        {/* Background decorative ellipses */}
        <div
          className="absolute pointer-events-none"
          style={{
            width: 1306, height: 1342, left: -118, top: -26,
            borderRadius: '50%', background: 'rgba(192, 209, 255, 0.25)', filter: 'blur(400px)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: 294, height: 302, right: 0, top: 73,
            borderRadius: '50%', background: 'rgba(177, 198, 255, 0.25)', filter: 'blur(400px)',
          }}
        />

        {/* City skyline */}
        <img
          src={citySkyline}
          alt=""
          className="absolute bottom-0 left-0 right-0 w-full opacity-10 pointer-events-none object-cover"
          style={{ height: 324 }}
        />

        <Sidebar navigate={navigate} onNewConversation={handleNewConversation} />

        {/* Main Content */}
        <main className="relative z-10 flex-1 flex flex-col items-center">
          <div className="w-full px-5 pt-5">
            <span className="font-display font-semibold" style={{ fontSize: 16.57, color: '#442FC2' }}>
              CarGenie
            </span>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8 w-full max-w-[1244px] px-8">
            <div className="flex flex-col items-center gap-2">
              <h1
                className="font-sans font-bold text-center text-black leading-[1.36em]"
                style={{ fontSize: 56, maxWidth: 1021 }}
              >
                Find Your Perfect Car, the Smart Way
              </h1>
              <p
                className="mt-2 font-sans font-medium text-center"
                style={{ fontSize: 16, lineHeight: '1.625em', color: '#141414', maxWidth: 759 }}
              >
                HappyCars AI makes car searching effortless. Ask anything from model comparisons to
                EMI calculations and get instant, personalized answers powered by real marketplace data.
              </p>
            </div>

            <ChatInputBar
              query={query}
              setQuery={setQuery}
              onSubmit={handleSubmit}
              inputRef={inputRef}
            />
          </div>
        </main>
      </div>
    )
  }

  // ─── Chat View (active conversation) ───────────────────────
  return (
    <div
      className="flex h-screen w-full overflow-hidden relative"
      style={{
        background: 'linear-gradient(44deg, rgba(246,246,255,1) 0%, rgba(249,248,253,1) 50%, rgba(255,252,249,1) 100%)',
      }}
    >
      {/* City skyline */}
      <img
        src={citySkyline}
        alt=""
        className="absolute bottom-0 left-0 right-0 w-full opacity-10 pointer-events-none object-cover"
        style={{ height: 324 }}
      />

      <Sidebar navigate={navigate} onNewConversation={handleNewConversation} />

      {/* Main Chat Area */}
      <main className="relative z-10 flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="w-full px-5 pt-5 shrink-0">
          <span className="font-display font-semibold" style={{ fontSize: 16.57, color: '#442FC2' }}>
            CarGenie
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-14 pt-6 pb-4">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-6">
            {messages.map((msg, i) => (
              <ChatMessage key={i} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Bottom: Input + Footer */}
        <div className="shrink-0 flex flex-col items-center gap-4 px-14 pb-5">
          <ChatInputBar
            query={query}
            setQuery={setQuery}
            onSubmit={handleSubmit}
            inputRef={inputRef}
            wide
          />
          <div className="flex items-center gap-2.5 text-[#373737]" style={{ fontSize: 16 }}>
            <span className="font-sans font-medium">Terms & Conditions</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#373737]" />
            <span className="font-sans font-medium">Privacy Policy</span>
          </div>
        </div>
      </main>
    </div>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────
function Sidebar({ navigate, onNewConversation }) {
  return (
    <aside
      className="relative z-10 flex flex-col items-center bg-white h-full shrink-0"
      style={{
        width: 82,
        boxShadow:
          '37px 37px 114px 0px rgba(133,133,133,0.1), 146px 146px 207px 0px rgba(133,133,133,0.09), 329px 329px 250px 0px rgba(133,133,133,0.05)',
      }}
    >
      {/* Logo */}
      <div className="mt-6 mb-8">
        <div
          className="w-[38px] h-[38px] rounded flex items-center justify-center cursor-pointer"
          style={{ backgroundColor: '#DD2230' }}
          onClick={() => navigate('/')}
        >
          <img src={sidebarLogo} alt="Happy Cars" className="w-[26px] h-[24px]" />
        </div>
      </div>

      {/* Sidebar icons */}
      <div className="flex flex-col items-center gap-6">
        <button className="w-6 h-6 flex items-center justify-center text-[#7D7D7D] hover:text-[#442FC2] transition-colors">
          <Search size={18} strokeWidth={1.5} />
        </button>
        <button
          onClick={onNewConversation}
          className="w-6 h-6 flex items-center justify-center text-[#7D7D7D] hover:text-[#442FC2] transition-colors"
        >
          <Pencil size={18} strokeWidth={1.5} />
        </button>
        <button className="w-6 h-6 flex items-center justify-center text-[#7D7D7D] hover:text-[#442FC2] transition-colors">
          <MessageSquare size={18} strokeWidth={1.5} />
        </button>
      </div>

      {/* User avatar at bottom */}
      <div className="mt-auto mb-6">
        <UserAvatar size={42} />
      </div>
    </aside>
  )
}

// ─── Chat Input Bar ───────────────────────────────────────────
function ChatInputBar({ query, setQuery, onSubmit, inputRef, wide }) {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex items-center justify-between rounded-[210px] ${wide ? 'w-full max-w-[1238px]' : 'w-full max-w-[1000px]'}`}
      style={{
        padding: '27px 28px',
        height: 76,
        background: 'rgba(255, 255, 255, 0.16)',
        boxShadow: '8px 10px 89.8px 0px rgba(0,0,0,0.16)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <div className="flex items-center gap-2.5 flex-1">
        {/* Add button */}
        <button
          type="button"
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'rgba(210,210,210,0.6)' }}
        >
          <Plus size={14} className="text-[#8A8A8A]" />
        </button>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything...."
          className="bg-transparent outline-none font-sans font-medium text-lg text-[#141414] placeholder-[#515151] flex-1"
        />
      </div>
      <button
        type="submit"
        className="w-6 h-6 flex items-center justify-center text-[#8A8A8A] hover:text-[#442FC2] transition-colors shrink-0"
      >
        <img src={sendIcon} alt="Send" className="w-6 h-6" />
      </button>
    </form>
  )
}

// ─── Chat Message Bubble ──────────────────────────────────────
function ChatMessage({ message }) {
  const isAI = message.role === 'ai'

  if (isAI) {
    return (
      <div className="flex items-start gap-2.5">
        <img
          src={carGenieAvatar}
          alt="CarGenie"
          className="w-[62px] h-[68px] object-contain shrink-0"
          style={{ filter: 'drop-shadow(0px 3.86px 2.53px rgba(11,11,11,0.25))' }}
        />
        <div
          className="bg-white rounded-[65px] px-4 py-4 max-w-[863px]"
        >
          <p
            className="font-display font-medium text-[#363636]"
            style={{ fontSize: 18, lineHeight: '1.5em', letterSpacing: '0.036em' }}
          >
            {message.text}
          </p>
        </div>
      </div>
    )
  }

  // User message — right aligned
  return (
    <div className="flex items-start justify-end gap-2.5">
      <div
        className="rounded-[65px] px-5 py-4 max-w-[600px]"
        style={{
          background: 'linear-gradient(-13deg, rgba(37,19,73,1) 0%, rgba(33,33,130,1) 100%)',
        }}
      >
        <p
          className="font-display font-medium text-white"
          style={{ fontSize: 18, lineHeight: '1.5em', letterSpacing: '0.036em' }}
        >
          {message.text}
        </p>
      </div>
      <div className="shrink-0">
        <UserAvatar size={38} />
      </div>
    </div>
  )
}
