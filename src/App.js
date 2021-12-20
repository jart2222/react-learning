import Dish, { Flag } from './components/dish';
import Header from './components/header';
import BasicTextFields from './components/NewDish';
import './styles/App.css';

function App() {
  let dish ="tacos de canasta"
  let dishes=["Tacos","Pescado","Pastel","Guisado","Agua simple"]
  
  return (
    <div className="App">
      
      <p>Hola mundo</p>
      <p>Odio a linux</p>
      {dishes.map((platillos,index)=>
      <li key={index}>{platillos}</li>
      )}
      <BasicTextFields></BasicTextFields>

      <Header></Header>
      <Dish platillo={dish} numero={4} platillos={dishes}></Dish>
    </div>
  );
}

export default App;
