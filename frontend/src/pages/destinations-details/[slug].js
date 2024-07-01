import React from "react";
import { getRegionTours, getRegionToursInfo } from "@/hooks/apis/destinations";
// import Tours from "@/components/PopularTours/Tours";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TourDescription from "@/components/PopularTours/TourDescription";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import Exception from "@/components/ExceptionPage/Exception";
// import { tourDescriptionFake } from "@/data/tourDescriptionFake";
import Video from "@/components/PopularTours/Video";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";

export async function getServerSideProps({ params }) {
  const { slug } = params;
  // const { code, message, data } = tourDescriptionFake || {};
  const dataCallRegionInfo = {
    keySearch: params.slug
  }

  let check = false;
  let responseRegionInfo = await getRegionToursInfo(dataCallRegionInfo);
  if (responseRegionInfo != undefined && responseRegionInfo.code == 200) {
    check = true;
  } else {
    responseRegionInfo = 1;
  }

  return {
    props: {
      tourSlug: responseRegionInfo,
      code: params.slug,
      check: check
    },
  };
}

const TourPage = ({ tourSlug, code, check }) => {
  console.log(tourSlug);
  if (check == true) {
    return (
      <Layout pageTitle="Tours">
        <PageHeader title="Popular Tours" page="Tours" />
        {/* <Tours tourSlug={tourSlug}/> */}
        <TourDescription tourSlug={tourSlug} />
        <PopularToursTwo code={code} />
        <TestimonialOne />
      </Layout>
    );
  } else {
    return (
      <Layout pageTitle="Tours">
        <Exception />
      </Layout>
    );
  }
};

export default TourPage;
