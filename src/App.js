import { Routes, Route } from "react-router-dom";

import AllCardsPage from "./pages/AllCardsPage";
import CollectionsPage from "./pages/CollectionsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<AllCardsPage />} />
      <Route path="/collection" element={<CollectionsPage />} />
    </Routes>
  );
};

export default App;
