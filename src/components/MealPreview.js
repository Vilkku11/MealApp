import { useState, useEffect } from "react";
import "./MealPreview.css";
const MealPreview = (props) => {
  console.log("MealPreview running...");
  const [img, setImg] = useState("");

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

  return (
    <div className="mealPreview">
      <h1>{props.strMeal}</h1>
      <img src={img} alt="Could not load :(" />
    </div>
  );
};
export default MealPreview;
