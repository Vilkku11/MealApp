import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className="header">
      <h2>MainNavigation</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/meal">Meal</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
