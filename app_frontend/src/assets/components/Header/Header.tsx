import "./Header.styles.css";
const Header = () => {
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
        </ul>
      </nav>
    </div>
  );
};
export default Header;
