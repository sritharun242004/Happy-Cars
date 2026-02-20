import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UsedCars from './pages/UsedCars'
import NewCars from './pages/NewCars'
import CarGenie from './pages/CarGenie'
import Favorites from './pages/Favorites'
import Blogs from './pages/Blogs'
import BlogDetail from './pages/BlogDetail'
import NewsDetail from './pages/NewsDetail'
import UsedCarDetail from './pages/UsedCarDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/used-cars" element={<UsedCars />} />
        <Route path="/used-cars/:id" element={<UsedCarDetail />} />
        <Route path="/new-cars" element={<NewCars />} />
        <Route path="/car-genie" element={<CarGenie />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
        <Route path="/news/:slug" element={<NewsDetail />} />
      </Routes>
    </Router>
  )
}

export default App
