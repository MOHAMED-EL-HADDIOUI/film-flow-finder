import React from "react";
import "./../../App.css";
import Logo1 from "./../../assets/img/logo/logo1.png";
import Logo2 from "./../../assets/img/logo/logo2.png";
import Logo3 from "./../../assets/img/logo/logo3.png";
import Logo4 from "./../../assets/img/logo/logo4.png";
import Logo5 from "./../../assets/img/logo/logo5.png";
// import Logo6 from "./../../assets/img/logo/logo6.png";

const Ourlogo = () => {
  return (
    <section>
      <div className="container">
        <div className="row  ">
          <div className="col">
            <div className="mt-5 border-bottom">
              <h2 className="pb-5">Our Partner</h2>
            </div>
            <div className="logos-wrapper pr-5 ">
              <div className="item-logos">
                <img className="logos-png" src={Logo1} alt="" />
              </div>
              <div className="item-logos">
                <img className="logos-png" src={Logo2} alt="" />
              </div>
              <div className="item-logos">
                <img className="logos-png" src={Logo3} alt="" />
              </div>
              <div className="item-logos">
                <img className="logos-png" src={Logo4} alt="" />
              </div>
              <div className="item-logos">
                <img className="logos-png" src={Logo5} alt="" />
              </div>
              {/* <div className="item-logos">
                <img className="logos-png" src={Logo6} alt="" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourlogo;
