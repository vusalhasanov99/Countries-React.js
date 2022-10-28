
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CountryList from './components/CountryList';
import Country from './components/Country';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<CountryList/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} /> 
            <Route path='/:name' element={<Country/>} />
          </Routes>


        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
