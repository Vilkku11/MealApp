import { useRef, useState } from "react";

import MealList from "./MealList";

const MealSearch = () => {
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
      console.log(mealList.meal);
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
      <MealList mealList={mealList}></MealList>
    </div>
  );
};
export default MealSearch;
