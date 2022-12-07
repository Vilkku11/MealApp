import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

/*
const PrivateRoute = ({ children }) => {
  const currentuser = useAuth();
  return currentuser ? children : <Redirect to="/" exact></Redirect>;
};
export default PrivateRoute;
*/
