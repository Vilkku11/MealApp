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
    <div>
      <h1>MealPreviewlol</h1>
      <img src={img} />
      <h2>{props.strMeal}</h2>
    </div>
  );
};
export default MealPreview;
