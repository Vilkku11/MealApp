const MealDatabaseList = (props) => {
  console.log(props.meals[1]);
  const data = props.meals;
  console.log(data.length);

  const render = () => {
    for (let i = 0; i < data.length; i++) {
      console.log(i);
      return (
        <ul>
          <li>{data[i][0].strMeal}</li>
        </ul>
      );
    }

    /*return (
      <div>
        {props.meals.map((item, index) => (
          <p key={index}>item</p>
        ))}
      </div>
    );*/
  };

  return <div>{render()}</div>;
};

export default MealDatabaseList;
