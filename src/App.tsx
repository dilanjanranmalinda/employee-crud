import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import RegistrationForm from "./pages/registration/RegistrationForm";
import "./index.scss";

function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/employee/list" element={<HomePage />} />
          <Route path="/employee/add" element={<RegistrationForm />} />
          <Route path="/employee/edit" element={<RegistrationForm />} />
          <Route path="*" element={<Navigate to="/employee/list" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
