import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MapPage from "./pages/map-page";
import MapPageFilterLocation from "./pages/map-page-filter-location";
import MapPageFilter from "./pages/map-page-filter";
import MapPage1 from "./pages/map-page1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-filter-location":
        title = "";
        metaDescription = "";
        break;
      case "/map-page-filter":
        title = "";
        metaDescription = "";
        break;
      case "/map-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MapPage />} />
      <Route
        path="/map-page-filter-location"
        element={<MapPageFilterLocation />}
      />
      <Route path="/map-page-filter" element={<MapPageFilter />} />
      <Route path="/map-page" element={<MapPage1 />} />
    </Routes>
  );
}
export default App;
