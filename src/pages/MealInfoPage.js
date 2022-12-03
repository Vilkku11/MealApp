import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import MealInfo from "../components/MealInfo";
import "./MealInfoPage.css";

const MealInfoPage = (props) => {
  const history = useHistory();

  const [data, setData] = useState([]);
  //let data = "";

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
