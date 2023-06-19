import React, {useEffect, useState} from 'react';
import {fetchData} from "../../store/fetch";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function ListContainerResponsive() {

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
        const fallbackImageUrl = '/public/frame-2403@3x.png';

        const handleImageError = (event: any) => {
            event.target.src = fallbackImageUrl;
        };

        return (
            <div className="frame-container">
                <img
                    src={image}
                    onError={handleImageError}
                    alt=""
                />
            </div>
        );
    };

    useEffect(() => {
        setCurrentPage(1);
    }, []);



    return (
        <div className="rectangle-group">
            <div className="frame-child41" />
            <div className="results-found-parent">
                <div className="results-found2">{jsonData?.length} results found</div>
                {jsonData ? (
                        jsonData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((cardParent, index) => (
                            <div className="vecicle-card4" key={index}>
                                <div className="promoted-box">Promoted</div>
                                <ArrowForwardIosIcon className="arrow-button"/>
                                <div className="strikethrough-price">145.00</div>
                                <div className="discount-box">Discount 10%</div>
                    <div className="frame-parent29">
                        <div className="ellipse-parent2">
                            <div className="frame-child42" />
                            <div className="frame-child43" />
                            <div className="frame-child43" />
                            <div className="frame-child43" />
                        </div>
                        <img
                            className="mdicards-heart-outline-icon4"
                            alt=""
                            src="/mdicardsheartoutline.svg"
                        />
                        <div className="rivip-crown-line-parent2">
                            <img
                                className="iconoutlinesearch1"
                                alt=""
                                src="/rivipcrownline1.svg"
                            />
                            <div className="premium4">Premium</div>
                        </div>
                    </div>
                    <div className="frame-parent30">
                        <div className="peterbilt-579-parent2">
                            <div className="div11">{cardParent.name}</div>
                            <div className="frame-child46" />
                            <div className="input-text10">Flowers</div>
                        </div>
                        <div className="frame-parent31">
                            <div className="ohio-parent2">
                                <div className="ohio4">{cardParent.location}</div>
                                <div className="frame-child46" />
                                <div className="ohio4">1 km</div>
                                <div className="frame-child46" />
                            </div>
                            <div className="ohio4">Owner</div>
                            <div className="material-symbolsstar-parent2">
                                <img
                                    className="material-symbolsstar-icon4"
                                    alt=""
                                    src="/materialsymbolsstar1.svg"
                                />
                                <div className="ohio4">{cardParent.averageReviewNote} ({cardParent.numberOfReviews})</div>
                            </div>
                        </div>
                        <div className="frame-wrapper4">
                            <div className="day-wrapper2">
                                <div className="day4">{cardParent.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
                        ))
                ) : (
                    <div>Loading...</div>
                )}

                <div className="toast1">
                    <div className="iconoutlinetruck-group">
                        <img
                            className="iconoutlinetruck1"
                            alt=""
                            src="/iconoutlinetruck.svg"
                        />
                        <div className="more-distant-but-no-less-impo-group">
                            <div className="more-distant-but1">
                                More distant, but no less important
                            </div>
                            <div className="clear-the-filter1">
                                Clear the filter to view 458 flower options
                            </div>
                        </div>
                    </div>
                    <div className="button22">
                        <div className="text8">
                            <p className="clear-filters1">Clear filters</p>
                            <p className="more-458-transport1">
                                More 458 transport options
                            </p>
                        </div>
                    </div>
                    <div className="button23">
                        <div className="day4">Clear filters</div>
                    </div>
                </div>
            </div>
            <div className="top-border-parent">
                <div className="top-border10" />
                <div className="paginationstep-link-parent">
                    <div className="paginationstep-link2">
                        <div className="top-border11" />
                        <div className="content9">
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
                    <div className="paginationstep-link2">
                        <div className="top-border11" />
                        <div className="content10">
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
    );
}

export default ListContainerResponsive;