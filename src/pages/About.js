import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import Photo1 from "./../assets/img/about/bayu.png";
import Photo2 from "./../assets/img/about/zaki.png";
import Photo3 from "./../assets/img/about/rubi.png";

const About = () => {
  return (
    <div>
      <div
        style={{ backgroundColor: "#220000" }}
        className="container-fluid py-3"
      >
        <div className="row py-5">
          <div className="col text-white text-center py-5">
            <h3>WHO WE ARE</h3>
            <h1>
              <strong>ABOUT US</strong>
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <ol className="breadcrumb justify-content-center py-3">
              <li className="breadcrumb-item text-danger">Home</li>
              <li className="breadcrumb-item text-danger">Pages</li>
              <li className="breadcrumb-item active">About Us</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col text-center pt-5">
              <h2>
                <strong>A FEW WORDS ABOUT US</strong>
              </h2>
              <hr className="mx-5 px-5" />
              <p className="py-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <div className="row">
                <div className="col">
                  <h4>
                    <strong>WHY CHOOSE US</strong>
                  </h4>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
                <div className="col">
                  <h4>
                    <strong>OUR MISSIONS</strong>
                  </h4>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
                <div className="col">
                  <h4>
                    <strong>WHAT WE DO</strong>
                  </h4>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#E40004" }}
      >
        <div className="container">
          <div className="row">
            <div className="col py-5 text-center">
              <h2 className="text-white">
                <strong>SELECTION OF HIGH QUALITY FILMS</strong>
              </h2>
              <hr />
              <p className="text-white py-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Button variant="dark">LEARN MORE</Button>{" "}
              <Button variant="dark">CONTACT US</Button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="container">
          <div className="row">
            <div className="col pb-5">
              <h2 className="text-center pt-5">
                <strong>MOVIE GENRES</strong>
              </h2>
              <hr />
              <div className="row pt-5">
                <div className="col">
                  <p className="text-danger">
                    <strong>Fantasy</strong>
                  </p>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
                <div className="col">
                  <p className="text-danger">
                    <strong>Action Movie</strong>
                  </p>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
                <div className="col">
                  <p className="text-danger">
                    <strong>Crime</strong>
                  </p>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
              </div>
              <div className="row mt-4 pb-5">
                <div className="col">
                  <p className="text-danger">
                    <strong>Biographical</strong>
                  </p>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
                <div className="col">
                  <p className="text-danger">
                    <strong>Military</strong>
                  </p>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
                <div className="col">
                  <p className="text-danger">
                    <strong>Adventure</strong>
                  </p>
                  <p>
                    Turpis egestas integer eget aliquet praesent tristique magna
                    sit. mauris pellentesque pulvinar.
                  </p>
                </div>
              </div>
              <Button variant="danger">VIEW ALL FEATURES</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col py-5">
              <h2 className="text-center">
                <strong>OUR FANTASTIC TEAM</strong>
              </h2>
              <hr />
              <div className="row mt-5">
                <div className="col text-center">
                  <img src={Photo1} alt="" />
                  <h4 className="text-danger">
                    <strong>Bayu Iqbal</strong>
                  </h4>
                  <p className="text-secondary">Founder, Owner</p>
                  <p>Turpis egestas integer eget praesent tristique magna</p>
                </div>
                <div className="col text-center">
                  <img src={Photo2} alt="" />
                  <h4 className="text-danger">
                    <strong>Zaki Khairi</strong>
                  </h4>
                  <p className="text-secondary">Web Designer</p>
                  <p>Turpis egestas integer eget praesent tristique magna</p>
                </div>
                <div className="col text-center">
                  <img src={Photo3} alt="" />
                  <h4 className="text-danger">
                    <strong>Rubi Anggoro</strong>
                  </h4>
                  <p className="text-secondary">Software Enginers</p>
                  <p>Turpis egestas integer eget praesent tristique magna</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
