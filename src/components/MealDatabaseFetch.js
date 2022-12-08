import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";

import MealDatabaseList from "./MealDatabaseList";

const MealDatabaseFetch = () => {
  let mealIdList = [];
  let meals = [];
  const [meal, setMeals] = useState();

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

  const fetchMeals = async () => {
    mealIdList.map((item) => {
      let address = process.env.REACT_APP_MEALDB_ID + item;
      fetchh(address);
    });
  };
  const fetchh = async (address) => {
    const response = await fetch(address);
    const data = await response.json();
    if (data.meals != null) {
      meals.push(data.meals);
    }
    console.log(meals);
    setMeals(meals);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
      <Button onClick={getList}>testi</Button>
      {meal ? <MealDatabaseList meals={meal}></MealDatabaseList> : ""}
    </div>
  );
};
export default MealDatabaseFetch;
