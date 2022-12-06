import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainNavigation from "./components/MainNavigation";
import MealSearch from "./components/MealSearch";
import MealInfoPage from "./pages/MealInfoPage";
import Signup from "./components/Authentication/Signup";
import Dashboard from "./components/Authentication/Dashboard";
import Login from "./components/Authentication/Login";

function App() {
  const [mealList, setMealList] = useState([]);
  const [mealId, setMealId] = useState([]);
  const [img, setImg] = useState([]);

  return (
    <AuthProvider>
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

        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "0px" }}></div>
          <Switch>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
          </Switch>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
