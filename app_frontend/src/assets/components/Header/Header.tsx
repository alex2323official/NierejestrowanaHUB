import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./Header.styles.css";
const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(user !== null);
  }, []);

  // Use this handler to logout from app
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user"); // Remove stored user data
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home
  };
  return (
    <div className="header">
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li">
            <a href="/" className="header__a">
              Start
            </a>
          </li>
          <li className="header__li">
            <a href="/magazyn" className="header__a">
              Magazyn
            </a>
          </li>
          <li className="header__li">
            <a href="/statystyki" className="header__a">
              Statystyki
            </a>
          </li>
          <li className="header__li">
            <a href="/ustawienia" className="header__a">
              Ustawienia
            </a>
          </li>
          {/* Show logout button only if user is logged in */}
          {isLoggedIn && (
            <li className="header__li">
              <button onClick={handleLogout} className="header__btn-logout">
                Wyloguj
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Header;
