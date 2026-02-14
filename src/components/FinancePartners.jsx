import financePartnersSvg from '../assets/images/homepage/finance-partners.svg'

export default function FinancePartners() {
  return (
    <section className="bg-white py-[133px]">
      <div className="max-w-[1292px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-9">
          <h2 className="text-[32px] font-bold text-black leading-[1.22]">
            Our Trusted Finance Partners
          </h2>
          <p className="text-[18px] text-[#494949] font-medium mt-3 max-w-[1058px] mx-auto leading-[1.89]">
            We work with India's leading finance institutions to bring you flexible EMI plans, fast approvals, and transparent loan options making your car-buying journey simple and stress-free.
          </p>
        </div>

        {/* Partner logos */}
        <div className="flex items-center justify-center">
          <img
            src={financePartnersSvg}
            alt="Finance Partners - HDFC, ICICI, SBI, Axis, Bajaj Finance, Kotak"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
