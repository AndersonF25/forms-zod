import { Routes, Route } from "react-router-dom";
import Thanks from "../pages/Thanks";
import Home from "../pages/Home";

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
};

export default RoutesProvider;
