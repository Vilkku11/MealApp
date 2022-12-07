import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import "./MainNavigation.css";
const MainNavigation = () => {
  const { currentUser } = useAuth();
  return (
    <header className="header">
      <h2>MainNavigation</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            {currentUser ? (
              <Link to="/dashboard">Profile</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
