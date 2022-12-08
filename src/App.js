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
import PrivateRoute from "./components/Authentication/PrivateRoute";
import ForgotPassword from "./components/Authentication/ForgotPassword";

function App() {
  const [mealList, setMealList] = useState([]);
  const [mealId, setMealId] = useState([]);
  const [img, setImg] = useState([]);
  const testi = "testi";

  return (
    <AuthProvider>
      <div className="body">
        <MainNavigation></MainNavigation>
        <Container>
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
        </Container>
        <Container
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "0px" }}></div>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <PrivateRoute
              path="/dashboard"
              component={Dashboard}
              setMealList={setMealList}
              testi={testi}
            />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </Container>
      </div>
    </AuthProvider>
  );
}

export default App;
