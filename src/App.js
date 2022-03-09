import './input.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs';
import Menu from './components/Menu/Menu'
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Header /> 
      <AboutUs />
      <Menu />
    </div>
  );
}