
import Arc from './components/Arc';
import Home from './components/Home';
import List from './components/List';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="netflix-clone">
      <Navbar />
      <Home />
      <Arc/>
      <List/>

    </div>
  );
}

export default App;