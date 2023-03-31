import "./App.css";
import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import MainCompo from "./components/Main/MainCompo";

function App() {
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <LeftBar />
          </div>
          <div className="col-md-8">
            <MainCompo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
