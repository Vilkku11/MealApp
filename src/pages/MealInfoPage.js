const MealInfoPage = (props) => {
  console.log("IN MEAL INFO PAGE");
  console.log(props.mealId);

  let data = "";
  props.mealList.map((item) => {
    if (item.idMeal == props.mealId) {
      data = item;
    }
  });
  console.log("MEAL INFO PAGE DATAA:");
  console.log(data);

  return (
    <div>
      <h1>MealInfoPage</h1>
      <h2>yeah</h2>
      <h2>{props.mealId}</h2>
      <h2>{data.strMeal}</h2>
      <p>{data.strInstructions}</p>
    </div>
  );
};

export default MealInfoPage;
