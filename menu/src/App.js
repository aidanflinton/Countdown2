import './App.css';
import { useState } from "react"
import MealItems from "./MealItems.js"
import VegButton from "./VegButton"

function App() {
  let showVeg = useState(true);
  const menu = {
    "breakfast": [
      {"food": "pancakes", "price": 5.00, "vegetarian": true},
      {"food": "waffles", "price": 5.00, "vegetarian": true},
      {"food": "orange juice", "price": 2.00, "vegetarian": true}
    ],
    "lunch": [
      {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
      {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
      {"food": "hamburger", "price": 8.00, "vegetarian": false}
    ],
    "dinner": [
      {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
      {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
      {"food": "chili", "price": 8.00, "vegetarian": false}
    ]
  };

  console.log(menu);

  return (
    <div className="App">
      {Object.keys(menu).map((meal) => <MealItems name = {meal} meal={menu[meal]}/>)}
    </div>
  );
}

export default App;

//["breakfast", "lunch", "dinner"];