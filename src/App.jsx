import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UsedCars from './pages/UsedCars'
import NewCars from './pages/NewCars'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/used-cars" element={<UsedCars />} />
        <Route path="/new-cars" element={<NewCars />} />
      </Routes>
    </Router>
  )
}

export default App
