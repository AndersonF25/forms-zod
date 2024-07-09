import { Routes, Route } from "react-router-dom";
import Thanks from "../pages/Thanks";
import Form from "../pages/Form";

const RoutesProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  );
};

export default RoutesProvider;
