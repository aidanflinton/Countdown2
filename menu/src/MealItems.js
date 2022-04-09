import React from "react";
import FoodItems from "./FoodItems.js"

const Meals = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
      <div className="App">
        {props.meal.map((item) => <FoodItems option ={item.food} cost = {item.price} veggie = {item.vegetarian}/>)}
    </div>
    </>
  )
}

export default Meals

/*
{
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
}



    <div className="App">
      {props.map((food) => <FoodItems food ={props.food} price = {props.price}/>)};
    </div>
*/