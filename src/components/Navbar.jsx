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
            
            <select className="language-select" style={{padding:"0"}}>
              <option> <LanguageIcon className="languageIcon" /> English</option>
              <option>हिन्दी</option>
            </select>
          </div>
          <button className="sign-in-btn">Sign In</button>
        </div>
      </header>
    </>
  );
}
