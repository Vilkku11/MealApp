import { useRef, useState } from "react";

import MealPreview from "./MealPreview";
import "./MealList.css";

const MealList = (props) => {
  console.log(props.mealList.meals);
  return (
    <ul className="mealMenu">
      {props.mealList.meals.map((item) => (
        <MealPreview strMeal={item.strMeal} />
      ))}
    </ul>
  );
};
export default MealList;
