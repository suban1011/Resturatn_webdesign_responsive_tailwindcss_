
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Menupage from './components/pages/Menupage'
import Offerspage from './components/pages/Offerspage'
import Servicespage from './components/pages/Servicespage'
const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/menu' element={<Menupage />} />
        <Route path='/services' element={<Servicespage />} />
        <Route path='/offers' element={<Offerspage />} />

      </Routes>
    </>
  )
}

export default App

