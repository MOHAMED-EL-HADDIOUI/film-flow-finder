import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import axios from "axios";
function SectionNews() {
  return (
    <div>
      <div className="container">
        <div className="row  ">
          <div className="col">
            <div className="mt-5 border-bottom">
              <h2 className="pb-5">RECENT NEWS</h2>
            </div>
            <NewsList />
            <Button variant="outline-danger">VIEW ALL BLOGS POST</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=069c58dea3b6464caf46224e2bbc4d4f"
      )
      .then((result) => {
        console.log(result.data.articles);
        setNews(result.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const arrays = news.map((item, idx) => {
    if (idx < 3) {
      return (
        <div class="col-md-4 my-5">
          <div class="card" key={item.idx}>
            <img
              src={item.urlToImage}
              class="card-img-top"
              alt=""
              height="200px"
            />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{item.publishedAt}</h6>
              <p className="card-subtitle mb-2 text-muted ">{item.content}</p>
            </div>
          </div>
        </div>
      );
    }
  });

  return <div className="row">{arrays}</div>;
};

export default SectionNews;
