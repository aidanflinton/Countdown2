import React from 'react';
import { useState } from "react"
import MealItems from "./MealItems.js"

const VegButton = (props) => {
    const [showVeg, setShowVeg] = useState(false);

    return(
        <>
            <h1>Menu</h1>
            {showVeg && <button onClick={() => setShowVeg(false)} > Show All </button>}
            {!showVeg && <button onClick={() => setShowVeg(true)} > Show Only Vegetarian </button>}
            {Object.keys(props.theMenu).map((meal) => <MealItems name={meal} food={props.theMenu[meal]} onlyVeg={showVeg}/>)}
        </>
    );
}

export default VegButton;

//<button onClick={() => props.showVeg(!veg)}> Show Veg</button>