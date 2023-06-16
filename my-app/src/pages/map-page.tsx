import { FunctionComponent } from "react";
import "./map-page.css";
import {useState} from "react";
import Draggable from 'react-draggable';
const MapPage: FunctionComponent = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonClick = (): void => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
    // Perform sorting based on the selected option
    // Add your logic here
  };

  const vecicleCardParentData = [
    {
      id: 1,
      text: 'Tulips',
      country: 'China',
      distance: '1 km',
      rating: '5,0 (12)',
      price: '$1',
    },
    {
      id: 2,
      text: 'Roses',
      country: 'USA',
      distance: '2 km',
      rating: '4,5 (8)',
      price: '$2',
    },
  ];



  return (
    <div className="map-page">
      <div className="component-11">
        <div className="frame-parent">
          <div className="basic-input-parent">
            <div className="basic-input">
              <div className="input-text">Location</div>
            </div>
            <div className="basic-input1">
              <div className="input-left-content">
                <img
                  className="iconoutlinesearch"
                  alt=""
                  src="/iconoutlinesearch.svg"
                />
                <div className="tandem-tractor">Search by flowers</div>
              </div>
            </div>
          </div>
          <div className="button-parent">
            <button onClick={() => {alert("Give Five")}} className="button">

              <div className="text">
                Give five</div>
            </button>
            <button onClick={() => {alert("Notification Bell")}} className="button1">
              <img
                className="iconoutlinebell"
                alt=""
                src="/iconoutlinebell.svg"
              />
            </button>
            <div className="button-group">
              <button onClick={() => {alert("Profile")}}className="button2">
                <div className="photo">
                  <img className="face-37-icon" alt="" src="/face-37@2x.png" />
                </div>
                <div className="text">Profile</div>
              </button>
              <div className="button3">
                <img
                  className="iconoutlinebell"
                  alt=""
                  src="/iconsolidmenu.svg"
                />
              </div>
            </div>
            <div className="frame-child" />
          </div>
          <button onClick={() => {alert("Home")}} className="the-logo-maker-built-for-1000" />
        </div>
      </div>
      <div className="rectangle-parent">
        <div className="frame-child25" />
        <div className="choice-parent">
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-75" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconoutlinesearch"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="choice-child" />
          </div>
          <div className="rectangle-div" />
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
          <div className="choice">
            <div className="frame-parent11">
              <div className="image-75-parent">
                <div className="image-751" />
                <div className="day">flower</div>
              </div>
              <img
                  className="iconsolidchevron-down2"
                  alt=""
                  src="/iconsolidchevrondown.svg"
              />
            </div>
            <div className="instance-child" />
          </div>
        </div>
        <div className="frame-child27" />
        <div className="button11">
          <img
              className="iconoutlinesearch"
              alt=""
              src="/iconoutlinefilter.svg"
          />
          <div className="day">Filter</div>
        </div>
      </div>
      <main>
        <div className="list-container">
          <div className="list-upper">
            <div className="results-found">20 results found</div>
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
            {vecicleCardParentData.map((cardParent) => (
                <div className="vecicle-card-parent" key={cardParent.id}>
                  <div className="vecicle-card">
                    <div className="frame-container">
                      {/* Rest of the code */}
                    </div>
                    <div className="frame-div">
                      <div className="peterbilt-579-parent">
                        <div className="text">{cardParent.text}</div>
                        <div className="rectangle-div" />
                        <div className="tandem-tractor">flower</div>
                      </div>
                      <div className="frame-parent1">
                        <div className="ohio-parent">
                          <div className="ohio">{cardParent.country}</div>
                          <div className="rectangle-div" />
                          <div className="ohio">{cardParent.distance}</div>
                          <div className="rectangle-div" />
                        </div>
                        <div className="ohio">Owner</div>
                        <div className="material-symbolsstar-parent">
                          <img
                              className="material-symbolsstar-icon"
                              alt=""
                              src="/materialsymbolsstar.svg"
                          />
                          <div className="ohio">{cardParent.rating}</div>
                        </div>
                      </div>
                      <div className="frame-wrapper">
                        <div className="day-wrapper">
                          <div className="day">{cardParent.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="vecicle-card">
                    <div className="frame-container">
                      {/* Rest of the code */}
                    </div>
                    <div className="frame-div">
                      <div className="peterbilt-579-parent">
                        <div className="text">{cardParent.text}</div>
                        <div className="rectangle-div" />
                        <div className="tandem-tractor">flower</div>
                      </div>
                      <div className="frame-parent1">
                        <div className="ohio-parent">
                          <div className="ohio">{cardParent.country}</div>
                          <div className="rectangle-div" />
                          <div className="ohio">{cardParent.distance}</div>
                          <div className="rectangle-div" />
                        </div>
                        <div className="ohio">Owner</div>
                        <div className="material-symbolsstar-parent">
                          <img
                              className="material-symbolsstar-icon"
                              alt=""
                              src="/materialsymbolsstar.svg"
                          />
                          <div className="ohio">{cardParent.rating}</div>
                        </div>
                      </div>
                      <div className="frame-wrapper">
                        <div className="day-wrapper">
                          <div className="day">{cardParent.price}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            ))}
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
                    <img
                        className="iconoutlinesearch"
                        alt=""
                        src="/arrow-narrow-left.svg"
                    />
                    <div className="previous">Previous</div>
                  </div>
                </div>
                <div className="number-links">
                  <div className="more-distant-but-no-less-impo-parent">
                    <div className="top-border1" />
                    <div className="content1">
                      <div className="previous">1</div>
                    </div>
                  </div>
                  <div className="paginationnumber-link1">
                    <div className="top-border3" />
                    <div className="content1">
                      <div className="previous">2</div>
                    </div>
                  </div>
                  <div className="more-distant-but-no-less-impo-parent">
                    <div className="top-border1" />
                    <div className="content1">
                      <div className="previous">3</div>
                    </div>
                  </div>
                  <div className="more-distant-but-no-less-impo-parent">
                    <div className="top-border1" />
                    <div className="content1">
                      <div className="previous">...</div>
                    </div>
                  </div>
                  <div className="more-distant-but-no-less-impo-parent">
                    <div className="top-border1" />
                    <div className="content1">
                      <div className="previous">8</div>
                    </div>
                  </div>
                  <div className="more-distant-but-no-less-impo-parent">
                    <div className="top-border1" />
                    <div className="content1">
                      <div className="previous">9</div>
                    </div>
                  </div>
                  <div className="more-distant-but-no-less-impo-parent">
                    <div className="top-border1" />
                    <div className="content1">
                      <div className="previous">10</div>
                    </div>
                  </div>
                </div>
                <div className="more-distant-but-no-less-impo-parent">
                  <div className="top-border1" />
                  <div className="content8">
                    <div className="previous">Next</div>
                    <img
                        className="iconoutlinesearch"
                        alt=""
                        src="/arrow-narrow-right.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="map-container">
        <div className="button4">
          <img
            className="iconsolidchevron-left"
            alt=""
            src="/iconsolidchevronleft.svg"
          />
        </div>
        <div className="group-div">
          <div className="button5">
            <img
              className="iconsolidchevron-left"
              alt=""
              src="/iconoutlineplus.svg"
            />
          </div>
          <div className="button6">
            <img
              className="iconsolidchevron-left"
              alt=""
              src="/iconsolidminus.svg"
            />
          </div>
        </div>
        <img className="image-76-icon" alt="" src="/image-76@2x.png" />
        <div className="component-13" id="priceButton" onClick={()=> alert("Price button")}>
          <div className="text">10$</div>
        </div>
        <div className="component-14" id="priceButton" onClick={()=> alert("Price button")}>
          <div className="text">10$</div>
        </div>
        <div className="component-15" id="priceButton" onClick={()=> alert("Price button")}>
          <div className="text">10$</div>
        </div>
        <div className="component-16" id="priceButton" onClick={()=> alert("Price button")}>
          <div className="text">5$</div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default MapPage;
