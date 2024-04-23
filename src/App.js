import { Route, HashRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Layout from './Layout';
import Description from "./pages/Description";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/description/:productId" element={<Description />}></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
