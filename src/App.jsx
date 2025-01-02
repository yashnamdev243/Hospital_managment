import "./App.css";
import LoginPage from "./Auth/login";
import SignInPage from "./Auth/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/login" element={<LoginPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
