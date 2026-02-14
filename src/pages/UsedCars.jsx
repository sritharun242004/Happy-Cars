import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PLPSearchBar from '../components/plp/PLPSearchBar'
import FilterSidebar from '../components/plp/FilterSidebar'
import CarCard from '../components/plp/CarCard'
import SponsoredCard from '../components/plp/SponsoredCard'
import SortBar from '../components/plp/SortBar'

import car1 from '../assets/images/plp/car-1-2676dd.png'
import car2 from '../assets/images/plp/car-2-2676dd.png'
import car3 from '../assets/images/plp/car-3-2676dd.png'
import car4 from '../assets/images/plp/car-4.png'
import car5 from '../assets/images/plp/car-5.png'
import car6 from '../assets/images/plp/car-6-2eb62a.png'

const carData = [
  {
    id: 1,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '14k km',
    price: '₹12,40,000',
    savings: '₹65,000 below market average',
    location: 'Madurai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car1,
  },
  {
    id: 2,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '14k km',
    price: '₹12,40,000',
    savings: '₹65,000 below market average',
    location: 'Chennai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car2,
  },
  {
    id: 3,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Diesel',
    transmission: 'Manual',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '22k km',
    price: '₹11,80,000',
    savings: '₹45,000 below market average',
    location: 'Coimbatore, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car3,
  },
  {
    id: 4,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '18k km',
    price: '₹13,20,000',
    savings: '₹52,000 below market average',
    location: 'Salem, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car4,
  },
  {
    id: 5,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '11k km',
    price: '₹14,10,000',
    savings: '₹38,000 below market average',
    location: 'Trichy, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car5,
  },
  {
    id: 6,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Manual',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '25k km',
    price: '₹10,90,000',
    savings: '₹72,000 below market average',
    location: 'Erode, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car6,
  },
  {
    id: 7,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '16k km',
    price: '₹12,80,000',
    savings: '₹58,000 below market average',
    location: 'Madurai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car1,
  },
  {
    id: 8,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '19k km',
    price: '₹11,50,000',
    savings: '₹48,000 below market average',
    location: 'Chennai, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car4,
  },
  {
    id: 9,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Manual',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '21k km',
    price: '₹13,60,000',
    savings: '₹42,000 below market average',
    location: 'Coimbatore, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car3,
  },
  {
    id: 10,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '9k km',
    price: '₹14,50,000',
    savings: '₹35,000 below market average',
    location: 'Salem, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car2,
  },
  {
    id: 11,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '28k km',
    price: '₹10,20,000',
    savings: '₹82,000 below market average',
    location: 'Trichy, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car5,
  },
  {
    id: 12,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    recommendation: 'Best for city use · Single owner · Recently serviced',
    mileage: '13k km',
    price: '₹12,10,000',
    savings: '₹55,000 below market average',
    location: 'Erode, Tamil Nadu',
    badges: ['Fully Inspected', 'Service History Available'],
    image: car6,
  },
]

const steps = [
  { number: 1, label: 'Search' },
  { number: 2, label: 'Compare' },
  { number: 3, label: 'Inspect' },
  { number: 4, label: 'Buy' },
]

export default function UsedCars() {
  return (
    <div className="min-h-screen bg-[#F6F6F6]">
      {/* Step Indicators */}
      <div className="bg-white border-b border-[#EEEEEE]">
        <div className="max-w-[1440px] mx-auto px-7 py-2.5">
          <div className="flex items-center justify-center gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-2">
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold ${
                    index === 0
                      ? 'bg-[#452CFF] text-white'
                      : 'bg-[#F0F0F0] text-[#9B9B9B]'
                  }`}
                >
                  {step.number}
                </div>
                <span
                  className={`text-[13px] font-medium ${
                    index === 0 ? 'text-[#452CFF]' : 'text-[#9B9B9B]'
                  }`}
                >
                  {step.label}
                </span>
                {index < steps.length - 1 && (
                  <div className="w-8 h-px bg-[#E0E0E0] ml-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Search Bar */}
      <div className="bg-[#F6F6F6] py-5 px-7">
        <PLPSearchBar />
      </div>

      {/* Location text */}
      <div className="max-w-[1440px] mx-auto px-7 pb-4">
        <p className="text-[14px] text-[#6E6E6E] font-display">
          Showing <span className="font-semibold text-[#141414]">48</span> certified cars in{' '}
          <span className="font-semibold text-[#141414]">Chennai</span>
        </p>
      </div>

      {/* Main content: Sidebar + Car Grid */}
      <div className="max-w-[1440px] mx-auto px-7 pb-10">
        <div className="flex gap-6">
          {/* Left sidebar */}
          <FilterSidebar />

          {/* Right content */}
          <div className="flex-1 min-w-0">
            {/* Sponsored ad */}
            <SponsoredCard />

            {/* Sort bar */}
            <SortBar />

            {/* Car cards grid - 3 columns */}
            <div className="grid grid-cols-3 gap-4">
              {carData.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
