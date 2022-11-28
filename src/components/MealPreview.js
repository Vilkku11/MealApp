const MealPreview = (props) => {
  console.log("MealPreview running...");
  /* console.log(props.mealList);
  let mealInfo = props.mealList.meals.map((meal) => {
    <h1>{meal.strMeal}</h1>;
  });*/
  return (
    <div>
      <h1>MealPreviewlol</h1>
      <h2>{props.strMeal}</h2>
    </div>
  );
};
export default MealPreview;
