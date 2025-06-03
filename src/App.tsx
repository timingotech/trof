import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TeamsPage from './components/TeamPage'
import DonatePage from './components/DonatePage'
import JoinUs from './components/JoinUs'
function App() { 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/team' element={<TeamsPage/>} />
        <Route path='/donate' element={<DonatePage/>} />
        <Route path='/join-us' element={<JoinUs/>} /> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
