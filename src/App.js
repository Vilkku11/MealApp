import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainNavigation from "./components/MainNavigation";
import MealSearch from "./components/MealSearch";
import MealInfoPage from "./pages/MealInfoPage";

function App() {
  const [mealList, setMealList] = useState([]);
  const [mealId, setMealId] = useState([]);
  const [img, setImg] = useState([]);

  return (
    <div className="body">
      <MainNavigation></MainNavigation>

      <Switch>
        <Route path="/" exact>
          <MealSearch
            mealList={mealList}
            setMealList={setMealList}
            setMealId={setMealId}
            setImg={setImg}
          ></MealSearch>
        </Route>

        <Route path="/meal">
          <MealInfoPage
            mealId={mealId}
            mealList={mealList}
            img={img}
          ></MealInfoPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
