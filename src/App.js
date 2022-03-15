import './input.css'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu'
import Chef from './components/Chef/Chef'
import Info from './components/Info/Info'
import Laurels from './components/Laurels/Laurels';
import Gallery from './components/Gallery/Gallery'
import FindUs from './components/FindUs/FindUs'
import Footer from './components/Footer/Footer'



export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header /> 
      <AboutUs />
      <Menu />
      <Chef />
      <Info />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
}