import { getValue } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

import "./MealInfo.css";

const MealInfo = (props) => {
  const [img, setImg] = useState([]);

  const data = props.data;
  //let ingredients = [];
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  console.log(data.strMealThumb);

  const fetchImage = async () => {
    console.log("in fetchImage");
    console.log(data.strMealThumb);
    console.log(data.strMealThumb);
    const res = await fetch(data.strMealThumb);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  // Extract ingredients and measurements
  const getIngredients = () => {
    let ingredients = [];
    let measures = [];

    for (let i = 1; i < 21; i++) {
      let ingredient = "strIngredient" + i;
      let measure = "strMeasure" + i;
      if (data[ingredient] && data[ingredient] !== " ") {
        ingredients.push(data[ingredient]);
      }
      if (data[measure] && data[measure] !== " ") {
        measures.push(data[measure]);
      }
    }
    setIngredients(ingredients);
    setMeasures(measures);
  };

  // Renders given array
  const renderArray = (array) => {
    console.log(array);
    return (
      <ul>
        {array.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    fetchImage();
    getIngredients();
  }, [props]);

  return (
    <div className="mealInfo">
      <h1>{data.strMeal}</h1>
      <img src={img} alt="Could not load"></img>
      <div>{renderArray(ingredients)}</div>
      <div>{renderArray(measures)}</div>
    </div>
  );
};
export default MealInfo;
