import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";

const MealDatabaseList = () => {
  let mealIdList = [];

  const { currentUser } = useAuth();

  const getList = async () => {
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
        mealIdList.push(item[1]);
      });
    }
    console.log(mealIdList);
    fetchMeals();
  };

  const fetchMeals = async () => {
    let meals = [];

    mealIdList.map((item) => {
      let address = process.env.REACT_APP_MEALDB_ID + item;
      console.log(address);
    });
  };
  return (
    <div>
      <Button onClick={getList}>testi</Button>
    </div>
  );
};
export default MealDatabaseList;
