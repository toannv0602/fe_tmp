import SingleTour from "@/components/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBedPulse, faWalking } from '@fortawesome/free-solid-svg-icons';

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsLeft = ({ tourDetail }) => {
  const [active, setActive] = useState(1);

  const { tripSummary, startPlace, finishPlace, physicalRating, minAge, groupSizeMin, groupSizeMax, code, styleName, emissionsWarning, reasonLove, importationNote, reasonRight, inclusionsInfoRes, itineraries, mainImage } = tourDetail || {};
  const validItineraries = itineraries || [];
  const urlImg = `http://157.173.218.3/antraveling/api/client/media/image/${mainImage}`;
  const rating = physicalRating ? parseInt(physicalRating) : 0;

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Overview</h3>
        <p className="tour-details-two__overview-text">{tripSummary}</p>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {overviewList.slice(0, 4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="tour-details-two__overview-bottom-right">
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Trip overview</h3>
        <div className="trip-summary trip-summary--horizontal l-grid u-padding-top--0 lg:u-padding-top--2 u-padding-bottom--0 lg:u-padding-bottom--2 u-padding-right--0 lg:u-padding-right--2 u-padding-left--0 lg:u-padding-left--2 lg:u-margin-bottom--2">
          <div className="trip-summary__image-grid l-grid__cell l-grid__cell--12-col l-grid__cell--8-col-desktop">
            <img sizes="681px" className="trip-summary__map u-margin-bottom--0-5 lg:u-margin-bottom--1 imagery imagery--fluid" src={urlImg} alt="Image trip" />
          </div>
          <div className="trip-summary__dictionary-grid l-grid__cell l-grid__cell--12-col l-grid__cell--4-col-desktop">
            <div className="l-grid l-grid--no-spacing">
              <dl className="horizontal l-grid__cell l-grid__cell--12-col l-grid__cell--4-col-tablet">
                <dt>Start</dt>
                <dd>{startPlace}</dd>
                <dt>Finish</dt>
                <dd>{finishPlace}</dd>
                <dt>Physical rating</dt>
                <dd><span className="rating">
                  {Array.from(Array(rating)).map((_, i) => (
                    <i key={i} className="fa fa-star"></i>
                  ))}
                </span>
                </dd>
              </dl>
              <dl className="u-margin-top--1 horizontal l-grid__cell l-grid__cell--12-col l-grid__cell--4-col-tablet">
                <dt>Style</dt>
                <dd>{styleName}</dd>
                <dt>Ages</dt>
                <dd>{minAge}</dd>
                <dt>Group size</dt>
                <dd>Min {groupSizeMin} - Max {groupSizeMax}</dd>
                <dt>Trip code</dt>
                <dd className="u-margin-bottom--1">{code}</dd>
              </dl>
              <dl>
                <button
                  style={{ zIndex: 0 }}
                  type="submit"
                  className="thm-btn tour-details-two__sidebar-btn"
                >
                  Book Now
                </button>
              </dl>
            </div>
          </div>
          <div className="l-grid__cell l-grid__cell--12-col u-margin-bottom--1 u-margin-top--1">
            <div className="carbon-calculation">
              <div className="carbon-calculation__content u-text-align--left md:u-text-align--center">
                <span className="underline-yellow">{emissionsWarning}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {validItineraries.map(({ stt, title, content, meals, addOnActivities, accommodation, specialInformation }) => (
            <div
              className={`accrodion overflow-hidden${active === stt ? " active" : ""
                }`}
              key={stt}
            >
              <div onClick={() => setActive(stt)} className="accrodion-title">
                <h4>
                  <span>{title}</span>
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${active === stt ? "slideInUp d-block" : "slideInDown d-none"
                  }`}
              >
                <div className="inner">
                  <p>{content}</p>
                  <ul className="list-unstyled">
                    <div className="title-list-unstyled"><FontAwesomeIcon icon={faCoffee} /> Meals</div>
                    {meals.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>

                <div className="inner">
                  <ul className="list-unstyled">
                    <div className="title-list-unstyled"><FontAwesomeIcon icon={faWalking} /> Add on activities</div>
                    {addOnActivities.map((list, index) => (
                      <li key={index}>{list}</li>
                    ))}
                  </ul>
                </div>

                <div className="inner">
                  <ul className="list-unstyled">
                    <div className="title-list-unstyled"><FontAwesomeIcon icon={faBedPulse} /> Accommodation</div>
                    <li>{accommodation}</li>
                  </ul>
                </div>
              </div>


            </div>
          ))}
        </div>
      </div>



      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Tour Plan</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2782922271074!2d106.69008841428892!3d10.776715362273434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752950bf2c1e93%3A0x2c07a3b7a94fb7ab!2sHo%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sbd!4v1625098120667!5m2!1sen!2sbd"
          className="tour-details-two__location-map"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="tour-details-two__title review-scores__title">
        Review Scores
      </h3>


      <div className="tour-details__review-score">
        <div className="tour-details__review-score-ave">
          <div className="my-auto">
            <h3>{superb}</h3>
            <p>
              <i className="fa fa-star"></i> Super
            </p>
          </div>
        </div>
        <div className="tour-details__review-score__content">
          {reviewScore.map((review) => (
            <ReviewScoreBar review={review} key={review.id} />
          ))}
        </div>
      </div>

      <div className="l-grid">
        <div className="l-grid__cell l-grid__cell--12-col l-grid__cell--4-col-desktop">
          <div>
            <p className="headline--6 review-filters__title">Filter by rating</p>
            <div className="u-margin-top--1 u-margin-bottom--1">
              <div className="rating-filter-item">
                <div className="rating-filter-item__checkbox">
                  <div className="checkbox u-margin-bottom--0 u-margin-top--0 u-margin-right--0">
                    <div className="checkbox__group">
                      {/* onchange them is-dirty vao class checkbox */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        value={5}
                        className="checkbox__input"
                        id="5star-checkbox"
                      />
                    </div>
                    <label className="checkbox__label" htmlFor="5star-checkbox">
                      <span className="rating-filter-item__checkbox__label"> 5 star </span>
                    </label>
                  </div>
                </div>
                <div className="rating-filter-item__progress">
                  <span>
                    <span className="progress-bar">
                      <span className="progress-bar__inner" style={{width: 80 + '%'}}></span>
                    </span>
                    <label className="progress-bar__label u-color--text u-text-align--left"> 988 </label>
                  </span>
                </div>
              </div>
              <div className="rating-filter-item">
                <div className="rating-filter-item__checkbox">
                  <div className="checkbox u-margin-bottom--0 u-margin-top--0 u-margin-right--0">
                    <div className="checkbox__group">
                      {/* onchange them is-dirty vao class checkbox */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        value={5}
                        className="checkbox__input"
                        id="5star-checkbox"
                      />
                    </div>
                    <label className="checkbox__label" htmlFor="5star-checkbox">
                      <span className="rating-filter-item__checkbox__label"> 5 star </span>
                    </label>
                  </div>
                </div>
                <div className="rating-filter-item__progress">
                  <span>
                    <span className="progress-bar">
                      <span className="progress-bar__inner" style={{width: 80 + '%'}}></span>
                    </span>
                    <label className="progress-bar__label u-color--text u-text-align--left"> 988 </label>
                  </span>
                </div>
              </div>
              <div className="rating-filter-item">
                <div className="rating-filter-item__checkbox">
                  <div className="checkbox u-margin-bottom--0 u-margin-top--0 u-margin-right--0">
                    <div className="checkbox__group">
                      {/* onchange them is-dirty vao class checkbox */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        value={5}
                        className="checkbox__input"
                        id="5star-checkbox"
                      />
                    </div>
                    <label className="checkbox__label" htmlFor="5star-checkbox">
                      <span className="rating-filter-item__checkbox__label"> 5 star </span>
                    </label>
                  </div>
                </div>
                <div className="rating-filter-item__progress">
                  <span>
                    <span className="progress-bar">
                      <span className="progress-bar__inner" style={{width: 80 + '%'}}></span>
                    </span>
                    <label className="progress-bar__label u-color--text u-text-align--left"> 988 </label>
                  </span>
                </div>
              </div>
              <div className="rating-filter-item">
                <div className="rating-filter-item__checkbox">
                  <div className="checkbox u-margin-bottom--0 u-margin-top--0 u-margin-right--0">
                    <div className="checkbox__group">
                      {/* onchange them is-dirty vao class checkbox */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        value={5}
                        className="checkbox__input"
                        id="5star-checkbox"
                      />
                    </div>
                    <label className="checkbox__label" htmlFor="5star-checkbox">
                      <span className="rating-filter-item__checkbox__label"> 5 star </span>
                    </label>
                  </div>
                </div>
                <div className="rating-filter-item__progress">
                  <span>
                    <span className="progress-bar">
                      <span className="progress-bar__inner" style={{width: 80 + '%'}}></span>
                    </span>
                    <label className="progress-bar__label u-color--text u-text-align--left"> 988 </label>
                  </span>
                </div>
              </div>
              <div className="rating-filter-item">
                <div className="rating-filter-item__checkbox">
                  <div className="checkbox u-margin-bottom--0 u-margin-top--0 u-margin-right--0">
                    <div className="checkbox__group">
                      {/* onchange them is-dirty vao class checkbox */}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        value={5}
                        className="checkbox__input"
                        id="5star-checkbox"
                      />
                    </div>
                    <label className="checkbox__label" htmlFor="5star-checkbox">
                      <span className="rating-filter-item__checkbox__label"> 5 star </span>
                    </label>
                  </div>
                </div>
                <div className="rating-filter-item__progress">
                  <span>
                    <span className="progress-bar">
                      <span className="progress-bar__inner" style={{width: 80 + '%'}}></span>
                    </span>
                    <label className="progress-bar__label u-color--text u-text-align--left"> 988 </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="l-grid__cell l-grid__cell--12-col l-grid__cell--8-col-desktop"></div>
      </div>


      <div className="tour-details__review-comment">
        {comments.map((comment) => (
          <SingleComment comment={comment} key={comment.id} />
        ))}
      </div>
      <ReviewForm reviews={reviews} />
    </div>
  );
};

export default TourDetailsLeft;
