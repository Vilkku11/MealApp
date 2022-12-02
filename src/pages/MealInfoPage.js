import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import "./MealInfoPage.css";

const MealInfoPage = (props) => {
  const history = useHistory();
  const [img, setImg] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  let data = "";

  const getIngredients = () => {};

  const backToMain = () => {
    history.push("/");
  };

  props.mealList.map((item) => {
    if (item.idMeal === props.mealId) {
      data = item;
    }
  });

  const fetchImage = async () => {
    const res = await fetch(data.strMealThumb);
    console.log(data.strMealThumb);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
    console.log("in useffect");
  }, []);
  return (
    <div>
      <button onClick={backToMain}>back to main</button>
      <div className="mealInfo">
        <h1>{data.strMeal}</h1>
        <img src={img} alt="Could not load :(" />
        <h3>Needed ingredients:</h3>
        <h3>How to make:</h3>
        <p>{data.strInstructions}</p>
      </div>
    </div>
  );
};

export default MealInfoPage;
