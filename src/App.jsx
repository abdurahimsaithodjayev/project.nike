import './App.css';
import HeaderBox from './components/HeaderBox';
import ExampleBox from './components/ExampleBox';
import Products from './components/Products';
import QualityBox from './components/QualityBox';
import AboutUs from './components/AboutUs';
import SpecialOffer from './components/SpecialOffer';
import CustomerSay from './components/CustomerSay';
import SingUp from './components/SingUp';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import HeaderNav from './components/HeaderNav';

function App() {
 

  return (
    <div className="App">
       
      <Layout />
     
    </div>
  );
}

export default App;