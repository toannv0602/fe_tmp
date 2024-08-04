import testimonialOne from "@/data/testimonialOne";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SingleTestimonialHome from "./SingleTestimonialHome";
import SingleTestimonial from "./SingleTestimonial";
import { useEffect, useRef, useState } from 'react';
import { getTopReviews } from "@/hooks/apis/home";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
    lazyload: true,
    nav: true,
    navPosition: "bottom",
    mouseDrag: true,
    items: 1,
    autoplay: false,
    autoHeight: true,
    controls: false,
    gutter: 0,
    autoplayButton: false,
    autoplayButtonOutput: false,
    responsive: {
        768: {
            items: 2,
            gutter: 30,
        },
        1200: {
            items: 3,
            gutter: 30,
        },
    },
};

const { shape1, shape2, tagline, title, testimonials, bg } = testimonialOne;

const TestimonialOneHome = ({ aboutPage = false }) => {
    const [dataReview, setDataReview] = useState([]);
    useEffect(() => {
        // Thay thế URL dưới đây bằng URL API thực tế của bạn
        const fetchDataReview = async () => {
            try {
                const responseReview = await getTopReviews();
                let array = [];
                if (responseReview && responseReview.data && responseReview.data.topReviews) {
                    array = responseReview.data.topReviews;
                }
                setDataReview(array);
            } catch (err) {
                console.log(err);
            }
        };
        fetchDataReview();

    }, []);

    return (
        <section
            className={
                aboutPage ? "testimonial-one about-page-testimonial" : "testimonial-one"
            }
        >
            {aboutPage ? (
                <div
                    className="about-page-testimonial-map"
                    style={{ backgroundImage: ` url(${bg.src})` }}
                ></div>
            ) : (
                <>
                    <div className="testimonial-one-shape-2 float-bob-y">
                        <Image src={shape1.src} alt="" />
                    </div>
                    <div className="testimonial-one-shape-3 animated slideInRight">
                        <Image src={shape2.src} alt="" />
                    </div>
                </>
            )}
            <Container>
                <div className="section-title text-center">
                    <span className="section-title__tagline">{tagline}</span>
                    <h2 className="section-title__title">{title}</h2>
                </div>
                <Row>
                    <Col xl={12}>
                        <div className="testimonial-one__carousel">
                            <TinySlider settings={settings}>
                                {dataReview && dataReview.map((testimonial, index) => (                                    
                                    <SingleTestimonialHome
                                        key={testimonial.id}
                                        testimonial={testimonial}
                                    />
                                ))}
                            </TinySlider>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default TestimonialOneHome;
