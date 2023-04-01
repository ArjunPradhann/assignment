import LeftBar from "./components/LeftBar";
import Navbar from "./components/Navbar";
import MainCompo from "./components/Main/MainCompo";
function App() {
  return (
    <div className="container-fluid m-0 p-0">
      <Navbar />
      <div className="container pt-2">
        <div className="row ">
          <div className="col-md-3 pt-3">
            <LeftBar />
          </div>

          <div className="col-md-9 border rounded mt-3">
            <MainCompo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// const styles = {
//   main: {
//     boxShadow: "1px 1px 1px 1px grey",
//     // border: "1solid",
//     borderRadius: "5px",
//   },
// };
