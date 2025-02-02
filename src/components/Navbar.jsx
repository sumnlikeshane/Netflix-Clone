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
          <div className="language-container">
            <div className="select-wrapper">
              <select className="language-select">
                <option value="en">English</option>
                <option value="hi">हिन्दी</option>
              </select>
             <span className="languageicon" ><LanguageIcon /></span> 
            </div>
          </div>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </header>
    </>
  );
}
