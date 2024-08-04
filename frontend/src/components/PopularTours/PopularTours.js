import popularTours from "@/data/popularTours";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";
import { useEffect, useRef, useState } from 'react';
import { getRegionTours, getRegionToursInfo,getCountryTours } from "@/hooks/apis/destinations";
import SingleTourTwo from "./SingleTourTwo";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  navPosition: "bottom",
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
  responsive: {
    800: {
      items: 2,
      gutter: 30,
    },
    1200: {
      items: 4,
      gutter: 30,
    },
  },
};

const PopularTours = () => {
  const [dataTour, setDataTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    // Thay thế URL dưới đây bằng URL API thực tế của bạn
    const fetchDataTour = async () => {
      try {
        const dataCallListRegionTours = {
          countryCode: "VN",
          page: 1,
          size: 12,
          orderBy: "price"
        }

        const responseRegionTours = await getCountryTours(dataCallListRegionTours);
        if (isMounted) {
          setDataTour(responseRegionTours.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchDataTour();
    return () => {
      isMounted = false;
    };
  }, []);

  // useEffect(() => {
  //   if (dataTour !== null) {
  //     console.log('Data has been set:', dataTour);
  //   }
  // }, [dataTour]);


  return (
    <section className="popular-tours">
      <div className="popular-tours__container">
        <div className="section-title text-center">
          <span className="section-title__tagline">Featured tours</span>
          <h2 className="section-title__title">Most Popular Tours</h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="popular-tours__carousel">

              {dataTour?.data
                && <TinySlider settings={settings}>
                  {(dataTour.data.map((tour) => (
                    <SingleTourTwo key={tour.id} tour={tour} userSelect />
                  )))}
                </TinySlider>
                // :
                // <TinySlider settings={settings}>
                //   {
                //     (popularTours.map((tour) => (
                //       <SingleTour key={tour.id} tour={tour} />
                //     )))}
                // </TinySlider>
              }

            </div>
          </Col>
        </Row>
      </div>
    </section>
  );

};

export default PopularTours;
