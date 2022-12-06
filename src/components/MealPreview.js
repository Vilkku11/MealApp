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
    const imageObjectURL = URL.createObjectURL(imageBlob);
    //props.setImg(imageObjectURL);
    setImg(imageObjectURL);
  };

  useEffect(() => {
    fetchImage();
    console.log("RUNNING IN USEEFFECT");
  }, [props]);

  const clicked = () => {
    props.setMealId(props.idMeal);
    props.setImg(img);
    history.push("/meal");
  };
  return (
    <div className="mealPreview" onClick={clicked}>
      <h1>{props.strMeal}</h1>
      <img src={img} alt="Could not load :(" />
    </div>
  );
};
export default MealPreview;
