import './Routing.css'
import Navbar from './Navbar'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
import SpecialPages from './pages/SpecialPages'
import Error404 from './pages/Error404';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


// + Fayli u fwunkciayi anwunnery piti nuyny lini misht
//BrowserRouter stex petq chi inqy index.js-wum miacaca arden - ?
function Routing() {

  return (
      <div className='center-align'>
      <Navbar />
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<SpecialPages/>}/>
        <Route path='/blog' element={<Blog />} />
        <Route path="*" element={<Error404 />}/>
      </Routes>
      </div>
    </div>

  )

}

export default Routing;
