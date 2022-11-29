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
        props.mealList.map((item) => (
          <MealPreview
            key={item.idMeal}
            strArea={item.strArea}
            strMeal={item.strMeal}
            strMealThumb={item.strMealThumb}
            strInstructions={item.strInstructions}
          />
        ))
      )}
    </ul>
  );
};
export default MealList;
