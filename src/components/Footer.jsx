import LanguageIcon from "./LanguageIcon";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <p className="footer-questions">
            Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a>
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <a href="/faq">FAQ</a>
            <a href="/investor-relations">Investor Relations</a>
            <a href="/privacy">Privacy</a>
            <a href="/speed-test">Speed Test</a>
          </div>

          <div className="footer-column">
            <a href="/help">Help Centre</a>
            <a href="/jobs">Jobs</a>
            <a href="/cookie-preferences">Cookie Preferences</a>
            <a href="/legal-notices">Legal Notices</a>
          </div>

          <div className="footer-column">
            <a href="/account">Account</a>
            <a href="/ways-to-watch">Ways to Watch</a>
            <a href="/corporate-information">Corporate Information</a>
            <a href="/only-on-netflix">Only on Netflix</a>
          </div>

          <div className="footer-column">
            <a href="/media-centre">Media Centre</a>
            <a href="/terms">Terms of Use</a>
            <a href="/contact-us">Contact Us</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="language-selector">
          <LanguageIcon className="languageIcon" />
            <select defaultValue="en" className="language-select">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
          <p className="footer-country">Netflix India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;