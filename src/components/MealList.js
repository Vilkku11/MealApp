import { useRef } from "react";

import MealPreview from "./MealPreview";
import "./MealList.css";

const MealList = () => {
  const search = useRef("");

  const fetchMeals = async () => {
    console.log("fetchimg meals");
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
    </div>
  );
};
export default MealList;
