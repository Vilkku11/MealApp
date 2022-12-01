import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import MainNavigation from "./components/MainNavigation";
import MealSearch from "./components/MealSearch";
import MealInfoPage from "./pages/MealInfoPage";
import "./App.css";
function App() {
  const [mealList, setMealList] = useState([]);
  return (
    <div className="body">
      <MainNavigation></MainNavigation>

      <Switch>
        <Route path="/" exact>
          <MealSearch
            mealList={mealList}
            setMealList={setMealList}
          ></MealSearch>
        </Route>

        <Route path="/meal">
          <MealInfoPage></MealInfoPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
