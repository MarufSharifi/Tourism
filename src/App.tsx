import {Route, Routes} from "react-router-dom";
import {Root} from "./root/root";
import {Home} from "./home/home";
import {Destination} from "./destination/destination";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Root />}>
          <Route path="" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<div />} />
          <Route path="technology" element={<div />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
