import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import MealInfo from "../components/MealInfo";
import "./MealInfoPage.css";
import { useAuth } from "../contexts/AuthContext";
const MealInfoPage = (props) => {
  const history = useHistory();

  const [data, setData] = useState([]);
  const [favourite, setFavourite] = useState(false);
  const { currentUser } = useAuth();
  let mealDatabaseKey = "";

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

  const checkList = async () => {
    // Check if logged in and if meal added to favourite list
    if (currentUser) {
      const url =
        process.env.REACT_APP_FIREBASE_DATABASE +
        currentUser.email.replace(".", "_") +
        ".json";

      const response = await fetch(url, {
        method: "GET",
      });

      const answer = await response.json();
      if (answer !== null) {
        Object.entries(answer).map((item) => {
          if (item[1] === props.mealId) {
            setFavourite(true);
            mealDatabaseKey = item[0];
          }
        });
        console.log(mealDatabaseKey);
      }
    }
  };

  const addToList = async () => {
    const url =
      process.env.REACT_APP_FIREBASE_DATABASE +
      currentUser.email.replace(".", "_") +
      ".json";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data.idMeal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const answer = await response.json();
    console.log(answer);
    setFavourite(true);
  };

  const removeFromList = async () => {
    const url =
      process.env.REACT_APP_FIREBASE_DATABASE +
      currentUser.email.replace(".", "_") +
      "/" +
      mealDatabaseKey +
      ".json";

    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(data.idMeal),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    setFavourite(false);
  };

  useEffect(() => {
    getMeal();
    checkList();
  }, []);
  return (
    <div>
      <div>
        {currentUser && !favourite ? (
          <Button onClick={addToList}>Add to Favourite!</Button>
        ) : (
          ""
        )}
        {favourite ? (
          <Button onClick={removeFromList}>Remove from favourites</Button>
        ) : (
          ""
        )}
      </div>
      <Button onClick={backToMain}>back to main</Button>
      <div className="mealInfo">
        <MealInfo data={data} img={props.img}></MealInfo>
      </div>
    </div>
  );
};

export default MealInfoPage;
