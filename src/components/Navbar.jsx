import LanguageIcon from "./LanguageIcon";
import NetflixLogo from "./NetflixLogo";
export default function Navbar() {
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          <NetflixLogo />
        </a>
        <div className="nav-links">
          <div className="language-select-container">
            <LanguageIcon className="languageIcon" />
            <select className="language-select">
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </header>
    </>
  );
}
