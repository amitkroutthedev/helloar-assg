import "./App.css";
import Navbar from "./components/Navbar";
import VertNavbar from "./components/VertNavbar";
import Home from "./page/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <VertNavbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
