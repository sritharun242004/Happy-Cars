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
    <section className="bg-[#FBFBFB] py-[86px]">
      <div className="max-w-[1292px] mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-bold text-black leading-[1.22]">Why Buy a Pre-Owned Car?</h2>
          <p className="text-[#494949] text-lg mt-3 max-w-[700px] mx-auto leading-[1.89]">
            Smarter value, lower depreciation, and verified quality—without compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-2xl p-7 shadow-[0px_4px_20px_rgba(171,171,171,0.08)] hover:shadow-[0px_8px_30px_rgba(171,171,171,0.12)] transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: reason.bgColor }}
              >
                <img src={reason.icon} alt="" className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#141414] mb-2">{reason.title}</h3>
              <p className="text-sm text-[#555555] leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
