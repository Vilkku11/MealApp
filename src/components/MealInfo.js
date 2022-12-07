import { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";

import "./MealInfo.css";

const MealInfo = (props) => {
  //const [img, setImg] = useState([]);

  const data = props.data;
  //let ingredients = [];
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  const [videoLink, setVideoLink] = useState("");

  console.log(data.strMealThumb);

  // Extract ingredients and measurements
  const getIngredients = () => {
    let ingredients = [];
    let measures = [];

    for (let i = 1; i < 21; i++) {
      let ingredient = "strIngredient" + i;
      let measure = "strMeasure" + i;
      if (data[ingredient] && data[ingredient] !== " ") {
        ingredients.push(data[ingredient]);
      }
      if (data[measure] && data[measure] !== " ") {
        measures.push(data[measure]);
      }
    }
    setIngredients(ingredients);
    setMeasures(measures);
  };
  console.log(data.strYoutube);
  const parseVideoLink = () => {
    if (data.strYoutube) {
      setVideoLink(data.strYoutube.replace("watch?v=", "embed/"));
      console.log(data.strYoutube.replace("watch?v=", "embed/"));
    }
  };

  // Renders given array
  const renderArray = (array) => {
    console.log(array);
    return (
      <ul>
        {array.map((item, index) => (
          <li className="ingredients" key={index}>
            {item}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    getIngredients();
    parseVideoLink();
  }, [props]);

  return (
    <div className="mealInfo">
      <h1>{data.strMeal}</h1>
      <img src={props.img} alt="Could not load"></img>
      <h2>Ingredients:</h2>
      <Container className="d-flex align-items-center justify-content-center">
        <Card>
          <Card.Body>
            <p>{renderArray(ingredients)}</p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <p>{renderArray(measures)}</p>
          </Card.Body>
        </Card>
      </Container>
      <h2>Instructions:</h2>
      <p>{data.strInstructions}</p>
      <Container>
        <div className="ratio ratio-16x9">
          <iframe
            src={videoLink}
            title="Youtube video"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};
export default MealInfo;
