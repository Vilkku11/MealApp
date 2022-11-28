import { useRef, useState } from "react";

import MealPreview from "./MealPreview";
import "./MealList.css";

const MealList = (props) => {
  console.log(props.notFound);

  return (
    <ul className="mealMenu">
      {props.notFound ? (
        <h1>Not Found</h1>
      ) : (
        props.mealList.map((item) => <MealPreview strMeal={item.strMeal} />)
      )}
    </ul>
  );
};
export default MealList;
