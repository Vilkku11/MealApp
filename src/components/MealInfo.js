import { getValue } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

const MealInfo = (props) => {
  const [img, setImg] = useState([]);

  const data = props.data;
  let ingredients = [];
  let measures = [];

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

  const getIngredients = () => {
    let ingredient = "strIngredient1";
    console.log(data[ingredient]);
    for (var key in data) {
      if (key.includes("strIngredient") == true) {
        ingredients.push(key);
        //console.log(valueOf(key));
      }
    }
    console.log(ingredients);
  };

  useEffect(() => {
    fetchImage();
    getIngredients();
  }, [props]);
  return (
    <div>
      <h1>{data.strMeal}</h1>
      <img src={img} alt="Could not load"></img>
    </div>
  );
};
export default MealInfo;
