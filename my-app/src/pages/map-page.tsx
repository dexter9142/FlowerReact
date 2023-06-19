import {FunctionComponent, useEffect} from "react";
import "./map-page.css";
import "./map-page-responsive.css";
import {useState} from "react";
import { fetchData } from "../store/fetch";
import TopNavbar from "../components/TopNavbar";
import LowerNavbar from "../components/LowerNavbar";
import ListContainer from "../components/ListContainer";
import MapContainer from "../components/MapContainer";
import HeaderResponsive from "../components/Responsive/HeaderResponsive";
import Searchbar from "../components/Responsive/Searchbar";
import MapContainerResponsive from "../components/Responsive/MapContainerResponsive";
import ListContainerResponsive from "../components/Responsive/ListContainerResponsive";
const MapPage: FunctionComponent = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);



    return (
    <div className="map-page">

        {windowWidth >= 820 ? (
            <>
            <TopNavbar />
            <LowerNavbar />
            </>
            ): (
                <>
            <HeaderResponsive />
            <Searchbar />
                </>
        )}
        {windowWidth >= 820 ? (
      <main>
        <ListContainer />
        <MapContainer />
      </main>): (
        <>
            <MapContainerResponsive />
            <ListContainerResponsive />
        </>
        )}
    </div>
  );
};

export default MapPage;
