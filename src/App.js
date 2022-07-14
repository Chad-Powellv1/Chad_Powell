import { HashRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Home />
      </div>
    </Router>
  );
};
