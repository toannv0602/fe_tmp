import { Col, Container, Row } from "react-bootstrap";
import toursListPage from "@/data/toursListPage";
import Link from "next/link";
import { Image } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Slider from "react-rangeslider";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { getListTour,getStyles,getThemes } from "@/hooks/apis/tour";
import { Pagination } from "@mui/material";
import { useRouter } from 'next/router';

const { styles, categories, durations } = toursListPage;
const { toursList } = toursListPage;

const typeOptions = [{ name: "Relevance", type: 0 }, { name: "Price(lowest to highest)", type: 1 }, { name: "Duration(lowest to highest)", type: 2 }].map((it) => ({
  value: it.type,
  label: it.name,
}));

const ImageWithFallback = ({ src, fallbackSrc, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} onError={handleImageError} alt={alt} />;
};

const customStyle = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#787780",
    fontSize: 13,
    fontWeight: 500,
  }),
  singleValue: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 5,
    border: "none",
    boxShadow: "none",
    zIndex: 10,
  }),
  option: (provided, state) => ({
    ...provided,
    color: "white",
    padding: "4px 20px",
    backgroundColor: state.isSelected ? "#d25e4a" : "#313041",
    transition: "all 0.4s ease",
    cursor: "pointer",
    borderBottom:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "none"
        : "0.5px solid #ffffff33",
    "&:hover": {
      backgroundColor: "#d25e4a",
    },
    borderRadius:
      state.label === typeOptions[typeOptions.length - 1].label
        ? "0 0 8px 8px"
        : 0,
    fontSize: 16,
    fontWeight: 500,
  }),
  control: (base) => ({
    ...base,
    borderColor: "transparent",
    boxShadow: "none",
    borderRadius: "8px",
    "&:hover": {
      borderColor: "transparent",
    },
    padding: 14,
  }),
};

const ToursListPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const defaultImageUrl = require(`@/images/resources/tours-list-img-1.jpg`).default.src;
  const [startDate, setStartDate] = useState(new Date());
  const [showReview, setShowReview] = useState(true);
  const [showCategory, setShowCategory] = useState(true);
  const [showStyles, setShowStyles] = useState(true);
  const [showDuration, setShowDuration] = useState(true);
  const [showPrice, setShowPrice] = useState(true);
  const [selected, setSelected] = useState(0);
  const [priceRange, setPriceRange] = useState(10);
  const [tours, setTours] = useState(null);
  const [dataCallListTours, setDataCallListTours] = useState({
    keySearch: query != undefined ? query : "",
    sortType: 0,
    // rateList: [-1],
    themeIds: [-1],
    styleIds: [-1],
    durationMin: 1,
    durationMax: 100,
    page: 1,
    size: 5
  })

  const [stylesApi,setStylesApi] = useState([]);
  const [themesApi,setThemesApi] = useState([]);

  useEffect(() => {
    const fetchStylesApi = async () => {
      try {
        const responseStyles = await getStyles();
        setStylesApi(responseStyles.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchStylesApi();

  },[]);

  useEffect(() => {
    const fetchThemesApi = async () => {
      try {
        const responseThemes = await getThemes();
        setThemesApi(responseThemes.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchThemesApi();

  },[]);

  let count = 6;

  const handleCheckboxChange = (event) => {
    const value = Number(event.target.value);
    if (event.target.checked) {
      setDataCallListTours(prev => {
        return {
          ...prev,
          rateList: [...prev.rateList.filter((star) => star != -1), value]
        }
      });
    } else {
      setDataCallListTours(prev => {
        return {
          ...prev,
          rateList: prev.rateList.filter((star) => star !== value).length == 0 ? [-1] : prev.rateList.filter((star) => star !== value)
        }
      });
    }
  };

  const handleCheckboxCategory = (event) => {
    const value = Number(event.target.value);
    if (event.target.checked) {
      setDataCallListTours(prev => {
        return {
          ...prev,
          themeIds: [...prev.themeIds.filter((star) => star != -1), value]
        }
      });
    } else {
      setDataCallListTours(prev => {
        return {
          ...prev,
          themeIds: prev.themeIds.filter((star) => star !== value).length == 0 ? [-1] : prev.themeIds.filter((star) => star !== value)
        }
      });
    }
  };

  const handleCheckboxStyles = (event) => {
    const value = Number(event.target.value);
    console.log(value);
    if (event.target.checked) {
      setDataCallListTours(prev => {
        return {
          ...prev,
          styleIds: [...prev.styleIds.filter((star) => star != -1), value]
        }
      });
    } else {
      setDataCallListTours(prev => {
        return {
          ...prev,
          styleIds: prev.styleIds.filter((star) => star !== value).length == 0 ? [-1] : prev.styleIds.filter((star) => star !== value)
        }
      });
    }
  };

  const handleCheckboxDuration = (event) => {
    const value = event.target.value;
    let [numA, numB] = [null, null];
    if (value.includes(' - ')) {
      [numA, numB] = value.split(' - ').map(num => parseInt(num, 10));
    } else if (value.includes('>')) {
      numB = parseInt(value.split('>')[1], 10);
    }
    setDataCallListTours(prev => {
      return {
        ...prev,
        durationMin: numA != null ? numA : 0 ,
        durationMax: numB
      }
    });

  };

  const handleSelect = ({ value }) => {
    setSelected(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setDataCallListTours(prev => {
      return {
        ...prev,
        type: selected,
        keySearch: formData.get("place")
      }
    });
    // const data = {
    //   date: startDate,
    //   place: formData.get("place"),
    //   type: selected
    // };
  };

  const onPageClick = (data, value) => {

    setDataCallListTours({ ...dataCallListTours, page: value });
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  useEffect(() => {
    const fetchListTour = async () => {
      try {
        console.log(dataCallListTours);
        const responseListTours = await getListTour(dataCallListTours);
        setTours(responseListTours.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchListTour();

  }, [dataCallListTours]);

  useEffect(() => {
    console.log(tours);
  }, [tours]);

  return (
    <section className="tours-list">
      <Container>
        <Row>
          <Col xl={4} lg={5}>
            <div className="tours-list__left">
              <div className="tours-list__sidebar">
                <div className="tours-list__sidebar-search">
                  <h3 className="tours-list__sidebar-search-title">Search Tours</h3>
                  <form onSubmit={handleSubmit} className="tours-list__sidebar-form">
                    <div className="tours-list__sidebar-input">
                      <input type="text" placeholder="Where to" name="place"/>
                    </div>
                    {/* <div className="tours-list__sidebar-input">
                      <input type="text" placeholder="Number of participants" name="totalPeople" />
                    </div>
                    <div className="tours-list__sidebar-input">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="hasDatepicker"
                        placeholderText="September"
                      />
                    </div> */}
                    <div className="tours-list__sidebar-input">
                      <Select
                        name="type"
                        options={typeOptions}
                        onChange={handleSelect}
                        styles={customStyle}
                        isSearchable={false}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        placeholder="Short by"
                        instanceId="tourTypeSelect4"
                      />
                    </div>
                    <button type="submit" className="thm-btn tours-list__sidebar-btn">
                      search
                    </button>
                  </form>
                </div>
                <div className="tour-sidebar__sorter-wrap">
                  <div className="tour-sidebar__sorter-single">
                    <div className="tour-sidebar__sorter-top">
                      <h3>Price</h3>
                      <button
                        onClick={() => setShowPrice((preShow) => !preShow)}
                        className="tour-sidebar__sorter-toggler"
                      ></button>
                    </div>
                    {showPrice && (
                      <div className="tour-sidebar__sorter-content">
                        <div className="tour-sidebar__price-range">
                          <div className="form-group">
                            <p>
                              $<span id="min-value-rangeslider">{priceRange}</span>
                            </p>
                            <p>
                              $<span id="max-value-rangeslider">{priceRange}</span>
                            </p>
                          </div>
                          <Slider
                            min={0}
                            max={200}
                            value={priceRange}
                            onChange={handlePriceChange}
                            className="range-slider-price"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* <div className="tour-sidebar__sorter-single">
                    <div className="tour-sidebar__sorter-top">
                      <h3>Review Score</h3>
                      <button
                        onClick={() => setShowReview((preShow) => !preShow)}
                        className="tour-sidebar__sorter-toggler"
                      ></button>
                    </div>
                    {showReview && (
                      <div className="tour-sidebar__sorter-content">
                        <div className="tour-sidebar__sorter-inputs">
                          {[5, 4, 3, 2, 1].map((value, i) => {
                            count--;
                            return (
                              <p key={i}>
                                <input
                                  type="checkbox"
                                  id={`review-${count}`}
                                  name="radio-group"
                                  onChange={handleCheckboxChange}
                                  value={value}
                                />
                                <label htmlFor={`review-${count}`}>
                                  {[5, 4, 3, 2, 1].map((value, j) => (
                                    <i
                                      key={j}
                                      className={`fa fa-star${j + 1 <= count ? " active" : ""
                                        }`}
                                    ></i>
                                  ))}
                                </label>
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div> */}

                  <div className="tour-sidebar__sorter-single">
                    <div className="tour-sidebar__sorter-top">
                      <h3>Styles</h3>
                      <button
                        onClick={() => setShowStyles((preShow) => !preShow)}
                        className="tour-sidebar__sorter-toggler"
                      ></button>
                    </div>
                    {showStyles && (
                      <div className="tour-sidebar__sorter-content">
                        <div className="tour-sidebar__sorter-inputs">
                          {stylesApi.map(({id,name}, index) => (
                            <p key={id}>
                              <input
                                type="checkbox"
                                id={`style-${id + 1}`}
                                name="radio-group"
                                onChange={handleCheckboxStyles}
                                value={id}
                              />
                              <label htmlFor={`style-${id + 1}`}>{name}</label>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tour-sidebar__sorter-single">
                    <div className="tour-sidebar__sorter-top">
                      <h3>Themes</h3>
                      <button
                        onClick={() => setShowCategory((preShow) => !preShow)}
                        className="tour-sidebar__sorter-toggler"
                      ></button>
                    </div>
                    {showCategory && (
                      <div className="tour-sidebar__sorter-content">
                        <div className="tour-sidebar__sorter-inputs">
                          {themesApi.map(({id,name}, index) => (
                            <p key={id}>
                              <input
                                type="checkbox"
                                id={`cat-${id + 1}`}
                                name="radio-group"
                                onChange={handleCheckboxCategory}
                                value={id}
                              />
                              <label htmlFor={`cat-${id + 1}`}>{name}</label>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="tour-sidebar__sorter-single">
                    <div className="tour-sidebar__sorter-top">
                      <h3>Duration</h3>
                      <button
                        onClick={() => setShowDuration((preShow) => !preShow)}
                        className="tour-sidebar__sorter-toggler"
                      ></button>
                    </div>
                    {showDuration && (
                      <div className="tour-sidebar__sorter-content">
                        <div className="tour-sidebar__sorter-inputs">
                          {durations.map((duration, index) => (
                            <p key={index}>
                              <input
                                type="radio"
                                id={`duration-${index + 1}`}
                                name="radio-group"
                                onChange={handleCheckboxDuration}
                                value={duration}
                              />
                              <label htmlFor={`duration-${index + 1}`} className="radio-button-durattion">
                                {duration} days
                              </label>
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={8} lg={7}>
            <div className="tours-list__right">
              <div className="tours-list__inner">
                {tours && tours?.data.map(
                  ({ id, name, mainImage, price, superb, title, rate, text, date, user, map, duringDays, styleName }) => (
                    <div key={id} className="tours-list__single">
                      <div className="tours-list__img">
                        {/* <Image
                          src={require(`@/images/resources/${mainImage}`).default.src}
                          alt=""
                        /> */}
                        <ImageWithFallback src={mainImage} fallbackSrc={defaultImageUrl} alt="Test Image" />
                        <div className="tours-list__icon">
                          <Link href="/tour-details">
                            <a>
                              <i className="fa fa-heart"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="tours-list__content">
                        <div className="tours-list__stars">
                          <i className="fa fa-star"></i> {duringDays} Day. {styleName}
                        </div>
                        <h3 className="tours-list__title">
                          <Link href="/tour-details">{name}</Link>
                        </h3>
                        <p className="tours-list__rate">
                          <span>${price}</span> / Per Person
                        </p>
                        <p className="tours-list__text">{text}</p>
                        {/* <ul className="tours-list__meta list-unstyled">
                          <li>
                            <Link href="/tour-details">
                              <a>
                                <i className="far fa-calendar"></i>
                                {date}
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/tour-details">
                              <a>
                                <i className="far fa-user-circle"></i>
                                {user}
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/tour-details">
                              <a>
                                <i className="far fa-map"></i>
                                {map}
                              </a>
                            </Link>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  )
                )}
                <Pagination
                  count={Math.ceil(tours && tours.totalRecord ? tours?.totalRecord / 5 : 0)} variant="outlined"
                  onChange={onPageClick}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ToursListPage;
