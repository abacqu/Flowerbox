import './App.css';
import Banner from "./components/Banner";
import Flower from './components/Flower'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="main-container" >
      <Header />
      <Banner />
      <Flower />
      <Footer />
    </div>
  );
}

export default App;