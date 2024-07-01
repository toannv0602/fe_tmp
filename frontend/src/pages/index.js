import AboutTwo from "@/components/AboutTwo/AboutTwo";
import BannerTwo from "@/components/BannerTwo/BannerTwo";
import BookNow from "@/components/BookNow/BookNow";
import BrandTwo from "@/components/BrandTwo/BrandTwo";
import CounterOne from "@/components/CounterOne/CounterOne";
import DestinationsTwo from "@/components/DestinationsTwo/DestinationsTwo";
import Layout from "@/components/Layout/Layout";
import NewsTwo from "@/components/NewsTwo/NewsTwo";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import SingaporeTour from "@/components/SingaporeTour/SingaporeTour";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import TourTypes from "@/components/TourTypes/TourTypes";
import VideoTwo from "@/components/VideoTwo/VideoTwo";
import PopularTours from "@/components/PopularTours/PopularTours";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import NewsOne from "@/components/NewsOne/NewsOne";
import React from "react";

const Home2 = () => {
  return (
    <Layout pageTitle="Home Two">
      <BannerTwo />
      <ThreeIconBox />
      <DestinationsOne />
      <PopularToursTwo />
      <PopularTours />
      <WhyChoose />
      <TestimonialOne />
      <NewsOne />
      {/* <GalleryOne /> */}
      {/* <SingaporeTour /> */}
      {/* <VideoTwo /> */}
      {/* <CounterOne /> */}
      {/* <DestinationsTwo /> */}
      {/* <AboutTwo /> */}
      {/* <TourTypes /> */}
      {/* <BrandTwo /> */}
      {/* <NewsTwo /> */}
      {/* <BookNow /> */}
    </Layout>
  );
};

export default Home2;
