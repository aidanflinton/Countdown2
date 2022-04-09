import React from "react";


const Foods = (props) => {
  return (
    <>
      <p>{props.option} (${props.cost}) veg: {props.veggie+""}</p>
    </>
  )
}

export default Foods

