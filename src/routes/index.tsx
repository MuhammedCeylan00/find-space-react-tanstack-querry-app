import { Routes, Route } from "react-router";
import Home from '../pages/home';
import NewPlace from '../pages/newPlace';
import AddReview from '../pages/addReview';
import PlaceDetail from "../pages/placeDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/places/:placeId" element={<PlaceDetail />} />
      <Route path="/new" element={<NewPlace />} />
      <Route path="/places/:placeId/review" element={<AddReview />} />
    </Routes>
  );
};

export default AppRoutes;
