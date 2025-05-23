import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Unsplash = () => {
    const [photo, setPhoto] = useState ([]);

    useEffect(() => {
        axios
          .get(
            "https://api.unsplash.com/photos/?client_id=4ETFlbsID3AxEXNNBdo8WGMLtu2dAm_FEKHyHA3YnZk"
          )
          .then((result) => {
            // console.log(result.data);
            setPhoto(result.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    //   console.log(photo)




    return (
        <div>
            <div style={{backgroundColor:"#220000"}} className="container-fluid py-3">
                <div className="row py-5">
                    <div className="col text-white text-center py-5">
                        <h3>COLLECTION MY PHOTOS</h3>
                        <h1><strong>Unsplash</strong></h1>
                    </div>
                </div>
            </div>
            {photo.map((item, index) => {
                if(index < 9) {
                    return (
                        <div className="container">
                            <div className="row">
                                <div className="col my-5">
                                    <div className="card" key={index}>
                                        <img src={item.urls.regular} className="card-img-top" alt=""/>
                                        <div className="card-body">
                                            <h2 className="card-title text-danger"><strong>"{item.user.first_name}"</strong></h2>
                                            <p className="card-subtitle pb-3">Location : {item.user.location}</p>
                                            <h5 className="card-subtitle text-secondary">{item.user.bio}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}
export default Unsplash;
