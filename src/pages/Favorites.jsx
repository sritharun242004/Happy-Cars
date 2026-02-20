import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FavoriteCarCard from '../components/plp/FavoriteCarCard'

import favCar1 from '../assets/images/favorites/fav-car-1-2676dd.png'
import favCar2 from '../assets/images/favorites/fav-car-2-2676dd.png'
import favCar3 from '../assets/images/favorites/fav-car-3-2676dd.png'

const initialFavorites = [
  {
    id: 1,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    badges: ['Fully Inspected', 'Service History Available'],
    smartTag: 'Best for city use . Single owner . Recently serviced',
    image: favCar1,
    mileage: '14k km',
    price: '12,40,000',
    savings: '65,000 below market average',
    location: 'Madurai, Tamil Nadu',
  },
  {
    id: 2,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    badges: ['Fully Inspected', 'Service History Available'],
    smartTag: 'Best for city use . Single owner . Recently serviced',
    image: favCar2,
    mileage: '14k km',
    price: '12,40,000',
    savings: '65,000 below market average',
    location: 'Madurai, Tamil Nadu',
  },
  {
    id: 3,
    brand: 'Ford Kuga',
    title: '2021 Ford Kuga - ST-Line Edition',
    fuel: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    badges: ['Fully Inspected', 'Service History Available'],
    smartTag: 'Best for city use . Single owner . Recently serviced',
    image: favCar3,
    mileage: '14k km',
    price: '12,40,000',
    savings: '65,000 below market average',
    location: 'Madurai, Tamil Nadu',
  },
]

export default function Favorites() {
  const [favorites, setFavorites] = useState(initialFavorites)

  const handleRemoveFavorite = (id) => {
    setFavorites((prev) => prev.filter((car) => car.id !== id))
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* Content */}
      <main className="max-w-[1357px] w-full mx-auto px-10 pt-8 pb-20 flex-1">
        {/* Title row */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-display font-semibold text-[32px] text-[#1F1F1F] leading-[1.2em]">
            Favorite car
          </h1>

          {/* Sort dropdown */}
          <button className="flex items-center gap-2 border border-[#E6E6E6] rounded-[5px] px-4 h-10">
            <span className="text-[15px] font-medium text-[#6E6E6E]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Sort by:
            </span>
            <span className="text-[15px] font-semibold text-[#494949] capitalize" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Price
            </span>
            <ChevronDown size={16} className="text-[#494949]" />
          </button>
        </div>

        {/* Cards grid */}
        {favorites.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {favorites.map((car) => (
              <FavoriteCarCard
                key={car.id}
                car={car}
                onRemoveFavorite={handleRemoveFavorite}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <p className="text-[#9B9B9B] text-lg font-medium">No favorite cars yet</p>
            <p className="text-[#C0C0C0] text-sm mt-2">
              Browse cars and tap the heart icon to save your favorites here.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
