import financePartnersSvg from '../assets/images/homepage/finance-partners.svg'

export default function FinancePartners() {
  return (
    <section className="bg-white py-10 sm:py-20 lg:py-[133px]">
      <div className="max-w-[1292px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-9">
          <h2 className="text-[20px] sm:text-[28px] lg:text-[32px] font-bold text-black leading-[1.25]">
            Our Trusted Finance Partners
          </h2>
          <p className="text-xs sm:text-base lg:text-[18px] text-[#494949] font-medium mt-2 sm:mt-3 max-w-[1058px] mx-auto leading-[1.6] sm:leading-[1.89] px-2 sm:px-0">
            We work with India's leading finance institutions to bring you flexible EMI plans, fast approvals, and transparent loan options.
          </p>
        </div>

        {/* Partner logos */}
        <div className="flex items-center justify-center overflow-x-auto px-0 sm:px-4 -mx-4 sm:mx-0">
          <img
            src={financePartnersSvg}
            alt="Finance Partners - HDFC, ICICI, SBI, Axis, Bajaj Finance, Kotak"
            className="max-w-none sm:max-w-full h-auto w-[600px] sm:w-auto"
          />
        </div>
      </div>
    </section>
  )
}
