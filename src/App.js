import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import StockPage from "./StockPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/stocks" replace />
            ) : (
              <LoginPage setAuth={setIsAuthenticated} />
            )
          }
        />
        <Route
          path="/stocks"
          element={
            isAuthenticated ? <StockPage /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
