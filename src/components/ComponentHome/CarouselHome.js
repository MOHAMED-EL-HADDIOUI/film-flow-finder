import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../App.css";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const CarouselHome = () => {
  return (
    <section className="my-red">
      <Container>
        <Carousel>
          <Carousel.Item>
            <Row className="justify-content-center my-3 py-5">
              <Col md={5} className=" text-left text-light  mb-5">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src={
                    "https://image.tmdb.org/t/p/w220_and_h330_face/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
                  }
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Parasit</b>
                </h4>
                <h5>Drama</h5>
              </Col>
              <Col md={5} className="text-left text-light">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src={
                    "https://image.tmdb.org/t/p/w220_and_h330_face/4YJNp1cquIkX8JxFwkKNEFQ9tgr.jpg"
                  }
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Just Mercy</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center my-3 py-5">
              <Col md={5} className=" text-left text-light  mb-5">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src={
                    "https://image.tmdb.org/t/p/w220_and_h330_face/qfQ78ZKiouoM2yhAnfNblp9ijQE.jpg"
                  }
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>The Hunt</b>
                </h4>
                <h5>Thriller</h5>
              </Col>
              <Col md={5} className="text-left text-light">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src="https://image.tmdb.org/t/p/w220_and_h330_face/pBbwUKjxOfIsAChBzKsC3a6Zdfm.jpg"
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>The Secret Garden</b>
                </h4>
                <h5>Adventure,Thriller</h5>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center my-3 py-5">
              <Col md={5} className=" text-left text-light  mb-5">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src={
                    "https://image.tmdb.org/t/p/w220_and_h330_face/dVZJByLhVpbKp4YKAChM12MxSNn.jpg"
                  }
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Memories of Murder</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
              <Col md={5} className="text-left text-light">
                <img
                  width="551px"
                  height="351px"
                  className="d-block w-100"
                  src={
                    "https://image.tmdb.org/t/p/w220_and_h330_face/4VlXER3FImHeFuUjBShFamhIp9M.jpg"
                  }
                  alt="First slide"
                />
                <br></br>
                <h4>
                  <b>Mortal Kombat Legends: Scorpion’s Revenge</b>
                </h4>
                <h5>Action,Thriller</h5>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default CarouselHome;
