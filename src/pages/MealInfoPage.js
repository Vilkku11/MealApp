import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import MealInfo from "../components/MealInfo";
import "./MealInfoPage.css";

const MealInfoPage = (props) => {
  const history = useHistory();

  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [data, setData] = useState([]);
  //let data = "";

  /*const getIngredients = () => {
    console.log("ingetingredients");
    let ing = [];
    let mea = [];
    data.map((item) => {
      if (item.toString().includes("strIngredient") != true) {
        ing.push(item);
      }

      if (item.toString().includes("strMeasure") == true) {
        mea.push(item);
      }
    });
    setIngredients(ing);
    setMeasures(mea);
    console.log(ing);
  };*/

  const backToMain = () => {
    history.push("/");
  };
  const getMeal = () => {
    props.mealList.map((item) => {
      if (item.idMeal === props.mealId) {
        setData(item);
      }
    });
  };

  useEffect(() => {
    getMeal();
  }, []);
  return (
    <div>
      <button onClick={backToMain}>back to main</button>
      <div className="mealInfo">
        <MealInfo data={data}></MealInfo>
      </div>
    </div>
  );
};

export default MealInfoPage;
