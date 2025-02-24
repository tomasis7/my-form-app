import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormPage from "./pages/FormPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
    </Routes>
  );
};

export default App;
