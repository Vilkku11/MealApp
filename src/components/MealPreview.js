import { useEffect } from "react";

const MealPreview = (props) => {
  console.log("MealPreview running...");
  console.log(props);
  const fetchImage = async () => {};

  // useEffect(() => {}, []);

  return (
    <div>
      <h1>MealPreviewlol</h1>
      <h2>{props.strMeal}</h2>
      <h2>{props.strArea}</h2>
    </div>
  );
};
export default MealPreview;
