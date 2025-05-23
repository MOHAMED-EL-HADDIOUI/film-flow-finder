import React from "react";

const SectionComing = () => {
  return (
    <section className="bg-dark text-light pt-4">
      <div className=" container mb-5">
        <div className="col-md pt-3 text-center border-bottom border-danger">
          <h2 className="pb-3">COMING SOON</h2>
        </div>
      </div>

      <div class="row justify-content-center  ">
        <div class="col-md-5 text-left  mb-5">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/D86RtevtfrA"
            ></iframe>
          </div>
        </div>
        <div class="col-md-5 text-left">
          <h4>
            <b>DEADPOOL 2</b>
          </h4>
          1h 59min, |{" "}
          <span className="text-danger">Action, Adventure, Comedy,</span> | May
          18, 2018 (USA)
          <p className="pt-4">
            After losing Vanessa (Morena Baccarin), the love of his life,
            4th-wall breaking mercenary Wade Wilson aka Deadpool (Ryan Reynolds)
            must assemble a team and protect a young, full-figured mutant
            Russell Collins aka Firefist (Julian Dennison) from Cable (Josh
            Brolin).
          </p>
          <p>
            <b>Director:</b> David Leitch <br></br>
            <b>Writers:</b> Rhett Reese, Paul Wernick<br></br>
            <b>Stars:</b> Ryan Reynolds, Josh Brolin, Morena Baccarin
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionComing;
