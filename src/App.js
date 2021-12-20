import Dish, { Flag } from './components/dish';
import Header from './components/header';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <p>Hola mundo</p>
      <p>Odio a linux</p>
      <Flag></Flag>
      <Header></Header>
      <Dish></Dish>
    </div>
  );
}

export default App;
