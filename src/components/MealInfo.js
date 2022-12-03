import { useState, useEffect } from "react";

const MealInfo = (props) => {
  const [img, setImg] = useState([]);
  const data = props.data;
  console.log("IN MEALINFO PASKAA");
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
  useEffect(() => {
    fetchImage();
  }, [props]);
  return (
    <div>
      <h1>{data.strMeal}</h1>
      <img src={img} alt="Could not load"></img>
    </div>
  );
};
export default MealInfo;
