import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";

import MealDatabaseList from "./MealDatabaseList";

const MealDatabaseFetch = () => {
  let mealIdList = [];
  let meals = [];
  const [meal, setMeals] = useState();
  const [listReady, setListReady] = useState(false);

  const { currentUser } = useAuth();

  // Get list from firebase database and fetch meals
  const getList = async () => {
    const url =
      process.env.REACT_APP_FIREBASE_DATABASE +
      currentUser.email.replace(".", "_") +
      ".json";

    const response = await fetch(url);

    const answer = await response.json();
    if (answer !== null) {
      Object.entries(answer).map((item) => {
        mealIdList.push(item[1]);
      });
    }
    console.log(mealIdList);
    fetchMeals();
  };

  const fetchMeals = () => {
    mealIdList.map((item, index) => {
      let address = process.env.REACT_APP_MEALDB_ID + item;
      fetchh(address);
    });
    setMeals(meals);
  };
  const fetchh = async (address) => {
    const response = await fetch(address);
    const data = await response.json();
    if (data.meals != null) {
      meals.push(data.meals);
      console.log(data.meals);
      console.log("pushing");
    }
    console.log(meals);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <Button onClick={getList}>testi</Button>
      {listReady ? <MealDatabaseList meals={meal}></MealDatabaseList> : ""}
    </div>
  );
};
export default MealDatabaseFetch;
