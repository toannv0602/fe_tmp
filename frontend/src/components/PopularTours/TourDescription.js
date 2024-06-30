import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const TourDescription = ({tourSlug}) => {
    const { code, message, data } = tourSlug || {};
    return (
        <section className="popular-tours-detail">
            <Container className="container-tours-detail">
                <div className="">
                    <h1 className="text-center u-margin-bottom--1">{data.title}</h1>
                    <div className="">
                        <img className="tours-detail-img" src={data.bannerImg} />
                    </div>
                </div>
            </Container>
            <Container>
                <div className="">
                    <p className="lead">{data.content}</p>
                    <div>
                        {data.subContent}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TourDescription;
