import popularToursTwo from "@/data/popularToursTwo";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import SingleTourTwo from "./SingleTourTwo";
import { getRegionTours, getRegionToursInfo,getCountryTours } from "@/hooks/apis/destinations";
import { useEffect, useRef, useState } from 'react';


const { tagline, title, popularTours } = popularToursTwo;

const PopularToursTwo = ({ code }) => {
  const [dataTour, setDataTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Thay thế URL dưới đây bằng URL API thực tế của bạn
    const fetchDataTour = async () => {
      try {
        const dataCallListRegionTours = {
          countryCode: code,
          page: 1,
          size: 6,
          orderBy: "price"
        }
    
        const responseRegionTours = await getCountryTours(dataCallListRegionTours);
        setDataTour(responseRegionTours.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err);
        setLoading(false);
      }
    };

    if (code) {
      fetchDataTour();
    }
  }, [code]);

  useEffect(() => {
    if (dataTour !== null) {
      console.log('Data has been set:', dataTour);
    }
  }, [dataTour]);

  return (
    <section className="popular-tours-two">
      <Container>
        {dataTour && (
          <div className="section-title text-center">
            <span className="section-title__tagline">{tagline}</span>
            <h2 className="section-title__title">{title}</h2>
          </div>
        )}
        {/* <Row>
          {popularTours.map((tour) => (
            <Col
              key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row> */}

        <Row>
          {dataTour?.data && dataTour.data.map((tour) => (
            <Col
              // key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTourTwo tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;
