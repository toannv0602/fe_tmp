import destinationsOne from "@/data/destinationsOne";
import React from "react";
import { Container } from "react-bootstrap";
import Masonry from "react-masonry-component";
import SingleDestination from "../DestinationsOne/SingleDestination";
import TopTours from "../TopTours/TopTours";

const DestinationsPage = () => {
  return (
    <section className="destinations-one destinations-page">
      <Container>
        <Masonry className="row position-relative">
          {destinationsOne.map((destination) => (
            <SingleDestination key={destination.id} destination={destination} />
          ))}
        </Masonry>
        <TopTours />
      </Container>
    </section>
  );
};

export default DestinationsPage;
