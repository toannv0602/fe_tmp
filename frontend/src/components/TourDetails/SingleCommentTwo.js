import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const SingleCommentTwo = ({ comment = {} }) => {
    const {
        orderId,
        reviewDetail,
        submitedTime,
        rate,
        tourId,
        tourName,
        submitName,
        traveledDate
    } = comment;

    return (
        <div className="tour-details__review-comment-single">
            <div className="tour-details__review-comment-top">            
                <div className="tour-details__review-comment-top-content" style={{ marginLeft: '0px' }}>
                    <h3>{submitName}</h3>
                    <p>{submitedTime}</p>
                </div>
            </div>
            <div className="tour-details__review-comment-content">
                <p>{reviewDetail}</p>
            </div>
            <div className="tour-details__review-form-stars">
                {Array.from(Array(5)).map((_, i) => (
                    <i
                        key={i}
                        className={`fa fa-star${i < rate ? " active" : ""}`}
                    ></i>
                ))}
            </div>
        </div>
    );
};

export default SingleCommentTwo;
