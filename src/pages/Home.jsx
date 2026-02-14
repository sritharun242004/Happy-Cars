import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import CarListings from '../components/CarListings'
import SponsoredAd from '../components/SponsoredAd'
import WhyPreOwned from '../components/WhyPreOwned'
import TradeIn from '../components/TradeIn'
import Steps from '../components/Steps'
import FinancePartners from '../components/FinancePartners'
import BlogSection from '../components/BlogSection'
import WhyHappyCars from '../components/WhyHappyCars'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SearchBar />
      <CarListings />
      <SponsoredAd />
      <WhyPreOwned />
      <TradeIn />
      <Steps />
      <FinancePartners />
      <BlogSection />
      <WhyHappyCars />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}
