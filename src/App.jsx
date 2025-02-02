import Arc from "./components/Arc";
import Card from "./components/Card";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="netflix-clone overflow-hidden">
      <Navbar />
      <Home />
      <Arc />
      <div className="bottom-main">
        
        <List className="List"/>
        
        <Card />
        <FAQs />
      </div>
      <Footer className="footer"/>
    </div>
  );
}

export default App;
