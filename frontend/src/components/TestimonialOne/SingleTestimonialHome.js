import React from "react";
import { Image } from "react-bootstrap";

const SingleTestimonialHome = ({ testimonial }) => {
  const {
    image,
    rate,
    reviewDetail,
    submitName,
    submitedTime,
    tourName,
    traveledDate,
    review,
  } = testimonial;

  const rating = rate ? parseInt(rate) : 0;

  console.log(testimonial);

  return (
    <div>
      <div style={{ userSelect: "none" }} className="testimonial-one__single">
        <div className="testimonial-one__img">
          <Image
            src={require(`@/images/testimonial/testimonial-one-img-1.png`).default.src}
            alt=""
          />
        </div>
        <div className="testimonail-one__content">
          <div className="testimonial-one__top-revivew-box">
            {Array.from(Array(rating)).map((_, i) => (
              <i key={i} className="fa fa-star"></i>
            ))}
          </div>
          <p className="testimonial-one__text">{reviewDetail}</p>
          <div className="testimonial-one__client-info">
            <h3 className="testimonial-one__client-name">{submitName}</h3>
            <p className="testimonial-one__client-title">Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonialHome;
