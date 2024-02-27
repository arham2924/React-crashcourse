import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/home'
import About from "./pages/about";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import Users from "./pages/users";

function App() {
  return (
    <div>
      <Router>
      <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/:id" element={<Users />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
