import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import manualTransmission from '../../assets/images/plp/manual-transmission.svg'
import automaticTransmission from '../../assets/images/plp/automatic-transmission.svg'
import checkboxUnchecked from '../../assets/images/plp/checkbox-unchecked.svg'

const filterSections = [
  {
    id: 'make-model',
    title: 'Make & Model',
    options: [
      { label: '2015+', count: 234 },
      { label: '2018+', count: 14 },
      { label: '2020+', count: 111 },
    ],
  },
  {
    id: 'year',
    title: 'Year',
    options: [
      { label: '2015+', count: 234 },
      { label: '2018+', count: 14 },
      { label: '2020+', count: 111 },
    ],
  },
  {
    id: 'transmission',
    title: 'Transmission',
    options: [
      { label: 'Manual', count: 14, icon: manualTransmission },
      { label: 'Automatic', count: 104, icon: automaticTransmission },
    ],
  },
  {
    id: 'fuel-type',
    title: 'Fuel Type',
    options: [
      { label: 'Petrol', count: 234 },
      { label: 'Diesel', count: 14 },
      { label: 'Hybrid', count: 111 },
      { label: 'EV Cars', count: 78 },
    ],
  },
  {
    id: 'body-type',
    title: 'Body Type',
    options: [
      { label: 'SUV', count: 234 },
      { label: 'Sedan', count: 14 },
      { label: 'Hatchback', count: 111 },
      { label: 'Coupe', count: 78 },
    ],
  },
  {
    id: 'km-driven',
    title: 'KM Driven',
    options: [
      { label: 'Under 20,000 km', count: 234 },
      { label: '20,000 – 50,000 km', count: 14 },
      { label: '50,000 – 80,000 km', count: 111 },
    ],
  },
  {
    id: 'owner-type',
    title: 'Owner Type',
    options: [
      { label: '1st Owner', count: 234 },
      { label: '2nd Owner', count: 14 },
      { label: '3rd Owner', count: 111 },
    ],
  },
  {
    id: 'certification',
    title: 'Certification Filters',
    options: [
      { label: 'HappyCars Certified', count: 234 },
      { label: '200+ Point Inspection', count: 14 },
      { label: 'Accident Free', count: 111 },
    ],
  },
]

function FilterSection({ section, isOpen, onToggle, isLast }) {
  return (
    <div className={!isLast ? 'border-b border-[#E5E5E5]' : ''}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-[18px] px-3"
      >
        <span className="text-[14px] font-semibold text-[#141414] leading-[1.71]">{section.title}</span>
        <ChevronDown
          size={20}
          className={`text-[#6E6E6E] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-3 pb-4 flex flex-col gap-4">
          {section.options.map((option) => (
            <label key={option.label} className="flex items-center gap-3 cursor-pointer">
              <img src={checkboxUnchecked} alt="" className="w-[22px] h-[22px]" />
              {option.icon && (
                <img src={option.icon} alt="" className="w-[34px] h-[34px]" />
              )}
              <span className="text-[16px] font-medium text-[#6E6E6E] flex-1 leading-[1.5]">{option.label}</span>
              <span className="text-[16px] font-medium text-[#2E86C1] leading-[1.5]">({option.count})</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

export default function NewCarFilterSidebar() {
  const [openSections, setOpenSections] = useState(
    Object.fromEntries(filterSections.map((s) => [s.id, true]))
  )
  const [budgetMax, setBudgetMax] = useState(166899)

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const sliderPercent = ((budgetMax - 139) / (166899 - 139)) * 100

  return (
    <div className="w-[309px] shrink-0">
      <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
        {/* Budget section - first */}
        <div className="px-3 py-[18px] border-b border-[#E5E5E5]">
          <h3 className="text-[14px] font-semibold text-[#141414] leading-[1.71] mb-4">Budget</h3>
          <div className="px-1">
            <input
              type="range"
              min="139"
              max="166899"
              value={budgetMax}
              onChange={(e) => setBudgetMax(Number(e.target.value))}
              className="w-full h-1 rounded-[3px] appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #FF6A00 0%, #FF6A00 ${sliderPercent}%, #E8E8E8 ${sliderPercent}%, #E8E8E8 100%)`,
                boxShadow: '0 0 0 1px #AAAAAA',
              }}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-[13px] font-medium text-[#6E6E6E] leading-[1.5]">$139</span>
              <span className="text-[13px] font-medium text-[#6E6E6E] leading-[1.5]">to</span>
              <span className="text-[13px] font-medium text-[#6E6E6E] leading-[1.5]">${budgetMax.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Filter sections */}
        {filterSections.map((section, index) => (
          <FilterSection
            key={section.id}
            section={section}
            isOpen={openSections[section.id]}
            onToggle={() => toggleSection(section.id)}
            isLast={index === filterSections.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
