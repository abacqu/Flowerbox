import logo from './logo.svg';
import './App.css';
import Flower from './components/Flower'
import flowerData from './flowerData'
import Header from './components/Header'
import Footer from './components/Footer'


export default function App() {

  // LOOP OVER THE ARRAY OF DATA AND CREATE A FLOWER FOR EACH OBJECT
  // ARRAY METHODS: .forEach, .filter, .reduce
  // .map( (element, indexPos))
  const flowers = flowerData.map( (ele, index) => {
    // return (
      return
      <Flower 
        // img={ele.img}
        // title={ele.title}
        // price={ele.price}
        // tags={ele.tags}
        {...ele}
        key={index}
      />;
    // )
  });

  // console.log('flowers are ', flowers.title)
  


  return (
    <div className="App">
      {Header}
    <section className="flowers">
      {/* {flowers} */}
      
    </section>
    {Footer}
    </div>
  );
}
