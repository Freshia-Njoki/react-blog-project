import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/about' element={ <About />}/>
      <Route path='/blogs' element={ <Blogs />}/>
      <Route path='*' element={ <NotFound />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
