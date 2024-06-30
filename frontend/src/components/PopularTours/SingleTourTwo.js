import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTourTwo = ({tour = {}, userSelect = false }) => {
  const { mainImage,styleName, code, duringDays, finishPlace, name,price,startPlace, meta=["3 Days", "12+", styleName] } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={mainImage}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> 8 Superb
          </div>
          <h3 className="popular-tours__title">
            <Link href="/tour-details">{name}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>{price} đ</span>
          </p>
          <ul className="popular-tours__meta list-unstyled">
            {meta.map((item, index) => (
              <li key={index}>
                <Link href="/tour-details">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTourTwo;
