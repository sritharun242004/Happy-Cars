import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UsedCars from './pages/UsedCars'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/used-cars" element={<UsedCars />} />
      </Routes>
    </Router>
  )
}

export default App
