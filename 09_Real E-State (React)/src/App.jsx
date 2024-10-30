import { Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import Home from './pages/Home'
import About from './pages/About'
import PropertiesPage from './pages/PropertiesPage'
import Services from './pages/Services'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/properties' element={<PropertiesPage/>}/>
    <Route path='/services' element={<Services/>}/>
    </Routes>
    </>
  )
}

export default App
