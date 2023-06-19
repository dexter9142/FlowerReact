import {FunctionComponent, useEffect, useState} from "react";
import styles from "./map-page1.module.css";
import {fetchData} from "../store/fetch";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const ListContainer: FunctionComponent = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [jsonData, setJsonData] = useState<Flower[] | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;


    interface Flower {
        name: string;
        price: number;
        location: string;
        averageReviewNote?: number;
        numberOfReviews?: number;
        image?: string;
        isPromoted?: boolean;
    }


    useEffect(() => {
        fetchData()
            .then(data => {
                return setJsonData(data);
            });
    }, []);

    const handleButtonClick = (): void => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string): void => {
        setSelectedOption(option);
        setIsOpen(false);

    };



    // @ts-ignore
    const FrameContainer = ({ image }) => {
        const fallbackImageUrl = "/public/frame-2403@3x.png";
        const [imageUrl, setImageUrl] = useState(image);
        const [imageError, setImageError] = useState(false);
        const [isEmptyBackgroundImage, setIsEmptyBackgroundImage] = useState(false);

        const handleImageError = () => {
            setImageError(true);
        };

        useEffect(() => {
            setImageUrl(image);
            setImageError(false); // Reset the image error state when a new image is provided
        }, [image]);

        const style = {
            backgroundImage: imageError ? "" : `url(${imageUrl})`,
        };

        useEffect(() => {
            if (imageUrl) {
                fetch(imageUrl)
                    .then(response => {
                        if (!response.ok) {
                            // Image URL returns a 404 status, set the image error state
                            setImageError(true);
                        }
                    })
                    .catch(error => {
                        console.error("Failed to fetch image:", error);
                        // Set the image error state on fetch error as well
                        setImageError(true);
                    });
            } else {
                // Set the image error state if the image URL is empty
                setImageError(true);
            }
        }, [imageUrl]);

        useEffect(() => {
            setIsEmptyBackgroundImage(style.backgroundImage === "");
        }, [style.backgroundImage]);

        return (
            <div className="frame-container" style={style} onError={handleImageError}>
                {isEmptyBackgroundImage && <span>No background image</span>}
            </div>
        );
    };



    useEffect(() => {
        setCurrentPage(1);
    }, []);

    return (
        <div className="list-container">
            <div className="list-upper">
                <div className="results-found">{jsonData?.length} results found</div>
                <div className="list-buttons">
                    <div className="button8">
                        <img className="iconoutlinesearch" alt="" src="/iconoutlinebell1.svg" />
                        <div className="day">Follow the filter</div>
                    </div>
                    <div className="button7">
                        <div className="day" onClick={handleButtonClick}>
                            Sort by
                        </div>
                        <img
                            className="iconoutlinesearch"
                            alt=""
                            src="/iconsolidchevrondown.svg"
                            onClick={handleButtonClick}
                        />

                        {isOpen && (
                            <div className="dropdown-menu">
                                <div
                                    className="dropdown-option"
                                    onClick={() => handleOptionClick('by date')}
                                >
                                    by date
                                </div>
                                <div
                                    className="dropdown-option"
                                    onClick={() => handleOptionClick('by price')}
                                >
                                    by price
                                </div>
                            </div>
                        )}
                    </div>
                </div>


            </div>
            <div className="frame-group">
                <div className="vecicle-card-parent">
                    {jsonData ? (
                        jsonData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((cardParent, index) => (

                            <div className="vecicle-card" key={index}>

                                {cardParent.isPromoted && <div className="promoted-box">Promoted</div>}

                                    <ArrowForwardIosIcon className="arrow-button"/>


                                <FrameContainer image={cardParent.image}></FrameContainer>
                                <div className="frame-div">
                                    <div className="peterbilt-579-parent">
                                        <div className="text">{cardParent.name}</div>
                                        <div className="rectangle-div" />
                                        <div className="tandem-tractor">flower</div>
                                    </div>
                                    <div className="frame-parent1">
                                        <div className="ohio-parent">
                                            <div className="ohio">{cardParent.location}</div>
                                            <div className="rectangle-div" />
                                            <div className="ohio">1 km</div>
                                            <div className="rectangle-div" />
                                        </div>
                                        <div className="ohio">Owner</div>
                                        <div className="material-symbolsstar-parent">
                                            <img
                                                className="material-symbolsstar-icon"
                                                alt=""
                                                src="/materialsymbolsstar.svg"
                                            />
                                            <div className="ohio">{cardParent.averageReviewNote} ({cardParent.numberOfReviews})</div>
                                        </div>
                                    </div>
                                    <div className="frame-wrapper">
                                        <div className="day-wrapper">
                                            <div className="day">{cardParent.price}</div>
                                            <div className="strikethrough-price">145.00</div>
                                            <div className="discount-box">Discount 10%</div>
                                        </div>
                                    </div>
                                </div>
                            </div >



                        ))
                    ) : (
                        <div>Loading...</div>
                    )}
                </div>

                <div className="toast">
                    <div className="iconoutlinetruck-parent">
                        <img
                            className="iconsolidchevron-left"
                            alt=""
                            src="/iconoutlinetruck.svg"
                        />
                        <div className="more-distant-but-no-less-impo-parent">
                            <div className="tandem-tractor">
                                More distant, but no less important
                            </div>
                            <div className="clear-the-filter">
                                Clear the filter to view 458 flower options
                            </div>
                        </div>
                    </div>
                    <div className="button9">
                        <div className="text4" onClick={()=> alert("Clear Filters")}>
                            <p className="clear-filters">Clear filters</p>
                            <p className="more-458-transport">More 458 transport options</p>
                        </div>
                    </div>
                    <div className="button10" onClick={()=> alert("Clear filters")}>
                        <div className="day">Clear filters</div>
                    </div>
                </div>
                <div className="results-found1">20 results found</div>
                <div className="centered-page-numbersdesktop">
                    <div className="top-border" />
                    <div className="links">
                        <div className="more-distant-but-no-less-impo-parent">
                            <div className="top-border1" />
                            <div className="content">

                                <button style={{display: "flex", alignItems: "center"}}
                                        className="previous"
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        disabled={currentPage === 1}
                                ><img style={{display: "flex"}}
                                      className="iconoutlinesearch"
                                      alt=""
                                      src="/arrow-narrow-left.svg"
                                />
                                    <span style={{display: "flex"}}>
                      Previous
                      </span>

                                </button>
                            </div>
                        </div>
                        {jsonData && (
                            <>
                                {Array.from({ length: Math.ceil((jsonData.length || 0) / itemsPerPage) }).map((_, index) => (
                                    <div className={`${currentPage === index + 1 ? 'paginationnumber-link1' : 'more-distant-but-no-less-impo-parent'}`}>
                                        <div
                                            className={`number-links ${currentPage === index + 1 ? 'active top-border3' : ''}`}
                                            key={index}
                                            onClick={() => setCurrentPage(index + 1)}
                                        >
                                            {index + 1}
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                        <div className="more-distant-but-no-less-impo-parent">
                            <div className="top-border1" />
                            <div className="content8">
                                <button style={{display: "flex", alignItems: "center"}}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        disabled={jsonData ? currentPage === Math.ceil((jsonData.length || 0) / itemsPerPage) : true}
                                >
                      <span style={{display: 'flex'}}>
                      Next
                      </span>
                                    <img
                                        style={{display: 'flex'}}
                                        className="iconoutlinesearch"
                                        alt=""
                                        src="/arrow-narrow-right.svg"
                                    />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListContainer;
