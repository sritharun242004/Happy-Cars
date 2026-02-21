import { useState, useEffect } from 'react'
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react'
import verifiedShield from '../../assets/images/plp/verified-shield.svg'
import dealerShield from '../../assets/images/plp/dealer-shield.svg'
import sellerShield from '../../assets/images/plp/seller-shield.svg'
import manualTransmission from '../../assets/images/plp/manual-transmission.svg'
import automaticTransmission from '../../assets/images/plp/automatic-transmission.svg'
import checkboxUnchecked from '../../assets/images/plp/checkbox-unchecked.svg'

const certificationOptions = [
  { label: 'Happy Cars Verified', count: 234, icon: verifiedShield },
  { label: 'Private Dealer', count: 234, icon: dealerShield },
  { label: 'Private Seller', count: 234, icon: sellerShield },
]

const filterSections = [
  {
    id: 'make-model',
    title: 'Make & Model',
    options: [
      { label: '2015+', count: 3421 },
      { label: '2018+', count: 2189 },
      { label: '2020+', count: 1457 },
    ],
  },
  {
    id: 'year',
    title: 'Year',
    options: [
      { label: '2015+', count: 3421 },
      { label: '2018+', count: 2189 },
      { label: '2020+', count: 1457 },
    ],
  },
  {
    id: 'transmission',
    title: 'Transmission',
    options: [
      { label: 'Manual', count: 1890, icon: manualTransmission },
      { label: 'Automatic', count: 2341, icon: automaticTransmission },
    ],
  },
  {
    id: 'fuel-type',
    title: 'Fuel Type',
    options: [
      { label: 'Petrol', count: 2341 },
      { label: 'Diesel', count: 1567 },
      { label: 'Hybrid', count: 432 },
      { label: 'EV Cars', count: 189 },
    ],
  },
  {
    id: 'body-type',
    title: 'Body Type',
    options: [
      { label: 'SUV', count: 1890 },
      { label: 'Sedan', count: 2341 },
      { label: 'Hatchback', count: 1567 },
      { label: 'Coupe', count: 432 },
    ],
  },
  {
    id: 'km-driven',
    title: 'KM Driven',
    options: [
      { label: 'Under 20k', count: 1234 },
      { label: '20k - 50k', count: 2567 },
      { label: '50k - 80k', count: 1890 },
    ],
  },
  {
    id: 'owner-type',
    title: 'Owner Type',
    options: [
      { label: '1st Owner', count: 2341 },
      { label: '2nd Owner', count: 1567 },
      { label: '3rd Owner', count: 432 },
    ],
  },
  {
    id: 'certification',
    title: 'Certification Filters',
    options: [
      { label: 'HappyCars Certified', count: 2341 },
      { label: '200+ Point Inspection', count: 1567 },
      { label: 'Accident Free', count: 2890 },
    ],
  },
]

function FilterSection({ section, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#EEEEEE] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-5"
      >
        <span className="text-[14px] font-semibold text-[#141414]">{section.title}</span>
        <ChevronDown
          size={16}
          className={`text-[#6E6E6E] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 pb-4 flex flex-col gap-3">
          {section.options.map((option) => (
            <label key={option.label} className="flex items-center gap-3 cursor-pointer group">
              <img src={checkboxUnchecked} alt="" className="w-[22px] h-[22px]" />
              {option.icon && (
                <img src={option.icon} alt="" className="w-[34px] h-[34px]" />
              )}
              <span className="text-[16px] font-medium text-[#3D3D3D] flex-1">{option.label}</span>
              <span className="text-[16px] font-medium text-[#2E86C1]">({option.count})</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default function FilterSidebar() {
  const [selectedCertification, setSelectedCertification] = useState(0)
  const [openSections, setOpenSections] = useState(
    Object.fromEntries(filterSections.map((s) => [s.id, true]))
  )
  const [budgetRange, setBudgetRange] = useState([139, 166899])
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const filterContent = (
    <>
      {/* Certification filter - top card */}
      <div className="bg-white rounded-xl border border-[#EEEEEE] mb-4 overflow-hidden">
        <div className="px-5 py-4">
          <h3 className="text-[14px] font-semibold text-[#141414] mb-3">Certification Filters</h3>
          <div className="flex flex-col gap-2">
            {certificationOptions.map((option, index) => (
              <button
                key={option.label}
                onClick={() => setSelectedCertification(index)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors ${
                  selectedCertification === index
                    ? 'border-[#452CFF] bg-[#F8F7FF]'
                    : 'border-[#EEEEEE] bg-white hover:bg-gray-50'
                }`}
              >
                <img src={option.icon} alt="" className="w-[22px] h-[22px]" />
                <span
                  className={`text-[14px] font-medium flex-1 text-left ${
                    selectedCertification === index ? 'text-[#452CFF]' : 'text-[#3D3D3D]'
                  }`}
                >
                  {option.label}
                </span>
                <span className="text-[14px] font-medium text-[#2E86C1]">({option.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Budget slider */}
      <div className="bg-white rounded-xl border border-[#EEEEEE] mb-4 overflow-hidden">
        <div className="px-5 py-4">
          <h3 className="text-[14px] font-semibold text-[#141414] mb-3">Budget</h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] text-[#6E6E6E]">${budgetRange[0].toLocaleString()}</span>
            <span className="text-[13px] text-[#6E6E6E]">${budgetRange[1].toLocaleString()}</span>
          </div>
          <input
            type="range"
            min="139"
            max="166899"
            value={budgetRange[1]}
            onChange={(e) => setBudgetRange([budgetRange[0], Number(e.target.value)])}
            className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #FF6A00 0%, #FF6A00 ${((budgetRange[1] - 139) / (166899 - 139)) * 100}%, #E8E8E8 ${((budgetRange[1] - 139) / (166899 - 139)) * 100}%, #E8E8E8 100%)`,
            }}
          />
        </div>
      </div>

      {/* Filter sections */}
      <div className="bg-white rounded-xl border border-[#EEEEEE] overflow-hidden">
        {filterSections.map((section) => (
          <FilterSection
            key={section.id}
            section={section}
            isOpen={openSections[section.id]}
            onToggle={() => toggleSection(section.id)}
          />
        ))}
      </div>
    </>
  )

  return (
    <>
      {/* Mobile filter toggle button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center gap-2 bg-white border border-[#E8E8E8] rounded-lg px-4 py-2.5 text-sm font-medium text-[#3D3D3D] mb-4"
      >
        <SlidersHorizontal size={16} />
        Filters
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-[300px] max-w-[85vw] bg-[#F6F6F6] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 px-5 py-4 border-b border-[#EEEEEE] flex items-center justify-between">
              <h3 className="text-base font-semibold text-[#141414]">Filters</h3>
              <button onClick={() => setMobileOpen(false)}>
                <X size={20} className="text-[#6E6E6E]" />
              </button>
            </div>
            <div className="p-4">
              {filterContent}
            </div>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-[300px] shrink-0">
        {filterContent}
      </div>
    </>
  )
}
