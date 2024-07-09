import { Routes, Route } from "react-router-dom";
import Thanks from "../pages/Thanks";

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
};

export default RoutesProvider;
