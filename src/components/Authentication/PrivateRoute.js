import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function PrivateRoute({
  component: Component,
  exact,
  strict,
  path,
  ...rest
}) {
  const { currentUser } = useAuth();
  return (
    <Route
      exact={exact}
      strict={strict}
      path={path}
      render={(props) =>
        currentUser ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect to="/login" />
        )
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
