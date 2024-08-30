

import { Route, Routes } from "react-router-dom";
import Local from "../Components/Locale/Locale";
import App from "../App";
import Home from "../Views/Home";
import NotFound from "../Views/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Local />} />
      <Route path="/:lang/*" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
