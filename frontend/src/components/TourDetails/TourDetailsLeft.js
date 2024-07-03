import SingleTour from "@/components/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faBedPulse,faWalking } from '@fortawesome/free-solid-svg-icons';

const { overview, overviewList, faq, superb, reviewScore, comments, reviews } =
  tourDetailsLeft;

const TourDetailsLeft = ({ tourDetail }) => {
  const [active, setActive] = useState(1);

  const { tripSummary, startPlace, finishPlace, emissionsWarning, reasonLove, importationNote, reasonRight, inclusionsInfoRes, itineraries } = tourDetail || {};
  const validItineraries = itineraries || [];

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
