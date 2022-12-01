import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./MealPreview.css";
const MealPreview = (props) => {
  console.log("MealPreview running...");
  const [img, setImg] = useState("");
  const history = useHistory();

  const fetchImage = async () => {
    const res = await fetch(props.strMealThumb);
    const imageBlob = await res.blob();
    const imgaeObjectURL = URL.createObjectURL(imageBlob);
    setImg(imgaeObjectURL);
  };

  useEffect(() => {
    fetchImage();
    console.log("RUNNING IN USEEFFECT");
  }, []);

  const clicked = () => {
    props.setMealId(props.idMeal);
    history.push("/meal");
  };
  return (
    <div className="mealPreview">
      <h1>{props.strMeal}</h1>
      <img src={img} alt="Could not load :(" />
      <button onClick={clicked}>change pagee</button>
    </div>
  );
};
export default MealPreview;
