import './App.css';
import Restaurants from './components/Restaurants';
import {useState, useEffect} from 'react';

function App() {

  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
   const results = await fetch("http://localhost:3000/api/v1/restaurants");
   const response = await results.json();
      console.log(response);
      setRestaurants(response);
  }

  useEffect(() => {
    getRestaurants()
  }, [])

  return (
    <div className = 'App'>
      <Restaurants restaurants = {restaurants} />
    </div>
  );
}

export default App;
