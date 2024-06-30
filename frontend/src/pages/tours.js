import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import TourDescription from "@/components/PopularTours/TourDescription";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import React from "react";

const Tours = () => {
  return (
    <Layout pageTitle="Tours">
      <PageHeader title="Popular Tours" page="Tours" />
      {/* <TourDescription/>
      <PopularToursTwo toursPage /> */}
    </Layout>
  );
};

export default Tours;
