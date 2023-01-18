import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Books from "./routes/books/books";
import Login from "./routes/login/login";
import Signup from "./routes/signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/books" element={<Books />} />
        <Route path="/login" element={<Login />}>
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
