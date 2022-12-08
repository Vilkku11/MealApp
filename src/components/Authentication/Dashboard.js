import { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import MealDatabaseList from "../MealDatabaseList";

const Dashboard = (props) => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const history = useHistory();

  const logOut = async () => {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert varitant="danger">{error}</Alert>}
          <strong>User: </strong>
          {currentUser.email}
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={logOut}>
          Log Out
        </Button>
        <MealDatabaseList setMealList={props.setMealList}></MealDatabaseList>
        <h2>{props.testi}</h2>
      </div>
    </div>
  );
};
export default Dashboard;
