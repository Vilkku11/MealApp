import { Container } from "react-bootstrap";
import MealPreview from "./MealPreview";
import "./MealList.css";

const MealList = (props) => {
  console.log(props.notFound);

  return (
    <ul className="mealMenu">
      {props.notFound ? (
        <h1>Not Found</h1>
      ) : (
        props.mealList.map((item, index) => (
          <MealPreview
            key={index}
            className="mealPreview"
            idMeal={item.idMeal}
            setMealId={props.setMealId}
            strMeal={item.strMeal}
            strMealThumb={item.strMealThumb}
            setImg={props.setImg}
          />
        ))
      )}
    </ul>
  );
};
export default MealList;
