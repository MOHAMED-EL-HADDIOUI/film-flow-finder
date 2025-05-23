import React from "react";
import CarouselHome from "../components/ComponentHome/CarouselHome";
import SectionHome from "./../components/ComponentHome/SectionHome";
import SectionComing from "./../components/ComponentHome/SectionComing";
import SectionNews from "./../components/ComponentHome/SectionNews";
import Ourlogo from "./../components/ComponentHome/Ourlogo";

const Home = () => {
  return (
    <div>
      <CarouselHome />
      <SectionHome />
      <SectionComing />
      <SectionNews />
      <Ourlogo />
    </div>
  );
};

export default Home;
