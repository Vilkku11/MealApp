import { useRef, useState } from "react";
import { Container} from "react-bootstrap";
import "./MealSearch.css";
import MealList from "./MealList";

const MealSearch = (props) => {
  const [error, setError] = useState(null);
  const search = useRef("");
  const [notFound, setNotFound] = useState(false);

  const fetchMeals = async (event) => {
    event.preventDefault();
    let meals = [];
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

      // Check if response contains any meal, if not set notFound
      if (data.meals != null) {
        meals = data.meals;
        setNotFound(false);
      } else {
        setNotFound(true);
      }

      props.setMealList(meals);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <Container>
      <form className="mealSearch" onSubmit={fetchMeals}>
        <div>
          <input
            rows="1"
            id="search"
            ref={search}
            placeholder="Search here!"
          ></input>
        </div>
        <button>Search!</button>
      </form>
      <MealList
        mealList={props.mealList}
        notFound={notFound}
        setMealId={props.setMealId}
        setImg={props.setImg}
      ></MealList>
    </Container>
  );
};
export default MealSearch;
