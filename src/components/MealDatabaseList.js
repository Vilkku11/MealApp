import { useEffect } from "react";

const MealDatabaseList = (props) => {
  console.log(props.meals);
  console.log(props.meals);
  const data = props.meals;
  console.log(Object.keys(props.meals).length);

  const render = () => {
    /* for (let i = 0; i < Object.keys(props.meals).length; i++) {
      console.log(data[i]);
    }*/
    return (
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item[0].strMeal}</li>
        ))}
      </ul>
    );
  };
  useEffect(() => {
    render();
  }, []);

  return <div>{render()}</div>;
};

export default MealDatabaseList;
