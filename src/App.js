import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar copy/Nav';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Hero/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import SignIn from './components/Register copy/Register';
import Services from './components/services copy/Services';
import Login1 from './components/Sign_in/Signin';
import Blog from './components/blog/Blog';
import Themes3 from './components/Dark Light Theme/Dark   L btn/Main';
import Terms from './components/Support Terms/Terms';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/signin" element={<Login1 />} />
          <Route path="/services" element={<Services />} />
          <Route path="/support" element={<Terms/>}/>
         
        </Routes>
      </BrowserRouter>
      {/* <Themes3/> */}
    </>
  );
}

export default App;
