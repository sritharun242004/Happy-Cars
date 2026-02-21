import shieldCheck from '../assets/images/shield-check.svg'
import verifiedIcon from '../assets/images/verified-icon.svg'
import maintenanceWarning from '../assets/images/maintenance-warning.svg'

const reasons = [
  {
    icon: shieldCheck,
    title: 'Risk Reduction',
    description: 'Every car undergoes a rigorous multi-point inspection ensuring you get a vehicle that meets the highest quality standards.',
    color: '#0E9845',
    bgColor: '#E8F5E9',
  },
  {
    icon: verifiedIcon,
    title: 'Rational Ownership',
    description: "Pre-owned cars have already absorbed the steepest depreciation, giving you more value for your investment over time.",
    color: '#452DFF',
    bgColor: '#EDE7F6',
  },
  {
    icon: maintenanceWarning,
    title: 'Financial Logic',
    description: 'Lower insurance premiums, affordable EMIs, and better overall cost of ownership make pre-owned cars the smarter financial choice.',
    color: '#FF6A00',
    bgColor: '#FFF3E0',
  },
]

export default function WhyPreOwned() {
  return (
    <section className="bg-[#FBFBFB] py-8 sm:py-16 lg:py-[86px]">
      <div className="max-w-[1292px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold text-black leading-[1.25]">Why Buy a Pre-Owned Car?</h2>
          <p className="text-[#494949] text-sm sm:text-lg mt-2 sm:mt-3 max-w-[700px] mx-auto leading-[1.6] sm:leading-[1.89]">
            Smarter value, lower depreciation, and verified quality—without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-4 sm:mt-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-[0px_4px_20px_rgba(171,171,171,0.08)] hover:shadow-[0px_8px_30px_rgba(171,171,171,0.12)] transition-shadow"
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-5"
                style={{ backgroundColor: reason.bgColor }}
              >
                <img src={reason.icon} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#141414] mb-1.5 sm:mb-2">{reason.title}</h3>
              <p className="text-[13px] sm:text-sm text-[#555555] leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
