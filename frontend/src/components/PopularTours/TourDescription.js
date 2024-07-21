import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseFire,faUsers,faMoneyBill,faLanguage,faCalendarTimes,faPhoneFlip,faSocks } from '@fortawesome/free-solid-svg-icons';

const TourDescription = ({tourSlug}) => {
    const { code, message, data } = tourSlug || {};
    return (
        <section className="popular-tours-detail">
            <Container className="container-tours-detail">
                <div className="">
                    <h1 className="text-center u-margin-bottom--1">{data.title}</h1>
                    <div className="">
                        <img className="tours-detail-img" src={data.bannerImg} alt="Banner Image"/>
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
            <Container>
                <div>
                    <div className="u-margin-top--6">
                        <h2>{data.name} at a glance</h2>
                        <div className="destination-facts__grid-wrapper">
                            <div className="l-grid">
                                <div className="l-grid__cell">
                                    <ul className="icon-list">
                                        <li className="icon-list__item">
                                            <h4><FontAwesomeIcon icon={faHouseFire} /> CAPITAL CITY</h4>
                                            <p>{data.capitalCity}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="l-grid__cell">
                                    <ul className="icon-list">
                                        <li className="icon-list__item">
                                            <h4><FontAwesomeIcon icon={faUsers} /> POPULATION</h4>
                                            <p>{data.population}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="l-grid__cell">
                                    <ul className="icon-list">
                                        <li className="icon-list__item">
                                            <h4><FontAwesomeIcon icon={faMoneyBill} /> CURRENCY</h4>
                                            <p>{data.currency}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="l-grid__cell">
                                    <ul className="icon-list">
                                        <li className="icon-list__item">
                                            <h4><FontAwesomeIcon icon={faLanguage} /> LANGUAGE</h4>
                                            <p>{data.language}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="l-grid__cell">
                                    <ul className="icon-list">
                                        <li className="icon-list__item">
                                            <h4><FontAwesomeIcon icon={faCalendarTimes} /> TIME ZONE</h4>
                                            <p>{data.timezone}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="l-grid__cell">
                                    <ul className="icon-list">
                                        <li className="icon-list__item">
                                            <h4><FontAwesomeIcon icon={faPhoneFlip} /> CALLING CODE</h4>
                                            <p>{data.callingCode}</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="l-grid__cell">
                                    <ul className="icon-list">
                                        <li className="icon-list__item">
                                            <h4><FontAwesomeIcon icon={faSocks} /> ELECTRICITY</h4>
                                            <p>{data.electricity}</p>
                                        </li>
                                    </ul>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TourDescription;
