import "./App.css";
import LeftBar from "./components/LeftBar";

function App() {
  return (
    <div>
      <div style={{height: 150, backgroundColor: "#dcedf9"}}>
        <nav>
          <div className="d-flex justify-content-end">
            <div className="p-2 bd-highlight">Post A Job</div>
            <div className="p-2 bd-highlight">Inbox</div>
            <div className="p-2 bd-highlight">Jobs</div>
            <div className="p-2 bd-highlight">Invoice</div>
            <div className="p-2 bd-highlight">Customer</div>
          </div>
        </nav>
        <div>
          <h1 className="row justify-content-center">TECHNOLOGY & STAFFING SOLUTIONS</h1>
        </div>
      </div>
      <LeftBar />
    </div>
  );
}

export default App;
