import { useRef, useState } from "react";

import MealPreview from "./MealPreview";
import "./MealList.css";

const MealList = () => {
  const [error, setError] = useState(null);
  const search = useRef("");
  const [mealList, setMealList] = useState([]);

  const fetchMeals = async (event) => {
    event.preventDefault();
    // Fetch meals
    let address =
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" +
      search.current.value;

    console.log(address);

    try {
      const response = await fetch(address);

      if (!response.ok) {
        throw new Error("Something went wrong :(");
      }
      console.log(response);

      const data = await response.json();
      console.log(data);

      setMealList(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={fetchMeals}>
        <div>
          <textarea
            rows="1"
            id="search"
            ref={search}
            placeholder="Search here!"
          ></textarea>
        </div>
        <button>Search!</button>
      </form>
      <MealPreview mealList={mealList}></MealPreview>
    </div>
  );
};
export default MealList;
