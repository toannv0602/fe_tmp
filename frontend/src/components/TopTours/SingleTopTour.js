import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";

const ImageWithFallback = ({ src, fallbackSrc, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} onError={handleImageError} alt={alt} />;
};

const SingleTopTour = ({tour = {}, userSelect = false }) => {
  const { id, code, name,image, meta=["3 Days", "12+", "HA NOI - HCM"] } = tour;
  const defaultImageUrl = require(`@/images/resources/popular-tours__img-1.jpg`).default.src;
  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          {/* <Image
            src={mainImage}
            alt=""
          /> */}
          <ImageWithFallback src={image} fallbackSrc={defaultImageUrl} alt="Test Image" />
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
            <Link href={`/tour-details/${id}`}>{name}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>$ {price}</span>
          </p>
          <ul className="popular-tours__meta list-unstyled">
            {meta.map((item, index) => (
              <li key={index}>
                <Link href={`/tour-details/${id}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTopTour;
