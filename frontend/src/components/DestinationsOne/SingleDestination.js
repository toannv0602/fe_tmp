import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const { image, title, tours, subTitle, col, code } = destination;

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
            src={require(`@/images/destination/${image}`).default.src}
            alt=""
          />
          <div className="destinations-one__content">
            {subTitle && (
              <p className="destinations-one__sub-title">{subTitle}</p>
            )}
            <h2 className="destinations-one__title">
              <Link href={`/destinations-details/${code}`}>{title}</Link>
            </h2>
          </div>
          <div className="destinations-one__button">
            <Link href={`/destinations-details/${code}`} passHref>
              <a href="/destinations-details/">{tours} tours</a>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleDestination;
