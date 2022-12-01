import MealPreview from "./MealPreview";
import "./MealList.css";

const MealList = (props) => {
  console.log(props.notFound);

  return (
    <ul className="mealMenu">
      {props.notFound ? (
        <h1>Not Found</h1>
      ) : (
        props.mealList.map((item) => (
          <MealPreview
            idMeal={item.idMeal}
            setMealId={props.setMealId}
            strMeal={item.strMeal}
            strMealThumb={item.strMealThumb}
          />
        ))
      )}
    </ul>
  );
};
export default MealList;
