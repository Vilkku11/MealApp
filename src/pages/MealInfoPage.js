import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const MealInfoPage = (props) => {
  const history = useHistory();
  const [img, setImg] = useState([]);
  let data = "";

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
      <h1>MealInfoPage</h1>
      <button onClick={backToMain}>back to main</button>
      <h2>{props.mealId}</h2>
      <img src={img} alt="Could not load image :(" />
      <h2>{data.strMeal}</h2>
      <p>{data.strInstructions}</p>
    </div>
  );
};

export default MealInfoPage;
