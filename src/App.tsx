import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegistrationForm from "./pages/registration/RegistrationForm";
import "./index.scss";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
