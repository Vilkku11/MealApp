import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import MealInfo from "../components/MealInfo";
import "./MealInfoPage.css";
import { useAuth } from "../contexts/AuthContext";

const MealInfoPage = (props) => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const { currentUser } = useAuth();

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

  const addToList = async () => {
    const url =
      process.env.REACT_APP_FIREBASE_DATABASE +
      currentUser.email.replace(".", "_") +
      ".json";
    console.log(url);

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const answer = await response.json();
    console.log(answer);
  };

  useEffect(() => {
    getMeal();
  }, []);
  return (
    <div>
      <div>
        {currentUser ? <Button onClick={addToList}>Add to list</Button> : ""}
      </div>
      <Button onClick={backToMain}>back to main</Button>
      <div className="mealInfo">
        <MealInfo data={data} img={props.img}></MealInfo>
      </div>
    </div>
  );
};

export default MealInfoPage;
