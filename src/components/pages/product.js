import React from "react";
import Navbar from "../includes/Navbarwhite";
import topbg from "../Images/product/topbg.jpg";
import sample from "../Images/home/sample.mp4";

import prod1 from "../Images/home/prod1.jpg";
import prod2 from "../Images/home/prod2.jpg";
import prod3 from "../Images/home/prod3.jpg";

function product() {


  return (
    
    <>
      <Navbar />

      <section className=" position-relative">
        
        <img className=" w-100" src={topbg} alt="" />
        <div className="position-absolute bottom-0 start-0">
          <div className=" mx-auto my-5 d-flex ps-5">
            <div className="position-relative">
              <h4 className="px-3 mb-0 border-start text-white border-end border-top">
                MARQUIS
              </h4>
              <div className="row g-0">
                <div className="col border-start border-bottom h-50 pt-2"></div>
                <div className="col border-botto h-50 ">
                  <h6 className="px-1 text-white">Collections</h6>
                </div>
                <div className="col border-bottom h-50 border-end pt-2"></div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="position-absolute bottom-0 end-0 me-4">
          <p className="border text-white border-white p-1  m-5">
            AVAILABLE IN 105 ML
          </p>
        </div>
        
      </section>
     
      <div
        id="productCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={topbg} className="mx-auto d-block w-100" alt="..." />
            
          </div>
          <div className="carousel-item">
            <img src={topbg} className="mx-auto d-block w-100" alt="..." />
            {/* <div
              className="position-absolute top-50 start-50 translate-middle d-none d-md-block border border-white"
              style={{ borderRadius: "50%", height: "450px", width: "450px" }}
            >
              <div
                className="position-absolute p-5 top-50 start-50 translate-middle carousel-caption d-none d-md-block border border-white bg-dark"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "400px",
                  opacity: ".7",
                }}
              >
                <div>
                  <h1 className="pt-5 mt-5 text-warning">NOTE</h1>
                  <h4>
                    GRAPEFRUIT, BERGAMOT, PLUM, STRAWBERRY, BLACKCURRANT,
                    COCONUT
                  </h4>
                </div>
              </div>
            </div> */}
          </div>
          <div className="carousel-item">
            <img src={topbg} className="mx-auto d-block w-100" alt="..." />
            {/* <div
              className="position-absolute top-50 start-50 translate-middle d-none d-md-block border border-white"
              style={{ borderRadius: "50%", height: "450px", width: "450px" }}
            >
              <div
                className="position-absolute p-5 top-50 start-50 translate-middle carousel-caption d-none d-md-block border border-white bg-dark"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "400px",
                  opacity: ".7",
                }}
              >
                <div>
                  <h1 className="pt-5 mt-5 text-warning">NOTE</h1>
                  <h4>
                    GRAPEFRUIT, BERGAMOT, PLUM, STRAWBERRY, BLACKCURRANT,
                    COCONUT
                  </h4>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#productCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="0"
            className="active btn btn-circle"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              borderRadius: "50%",
              height: "10px",
              width: "10px",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              borderRadius: "50%",
              height: "10px",
              width: "10px",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#productCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              borderRadius: "50%",
              height: "10px",
              width: "10px",
            }}
          ></button>
        </div>
        <div
              className="position-absolute top-50 start-50 translate-middle d-none d-md-block border border-white"
              style={{ borderRadius: "50%", height: "450px", width: "450px" }}
            >
              <div
                className="position-absolute p-5 top-50 start-50 translate-middle carousel-caption d-none d-md-block border border-white bg-dark"
                style={{
                  borderRadius: "50%",
                  height: "400px",
                  width: "400px",
                  opacity: ".7",
                }}
              >
                <div>
                  <h1 className="pt-5 mt-5 text-warning">NOTE</h1>
                  <h4>
                    GRAPEFRUIT, BERGAMOT, PLUM, STRAWBERRY, BLACKCURRANT,
                    COCONUT
                  </h4>
                </div>
              </div>
            </div>
      </div>
      
      <section className="">
        <div className="containe">
          <video className="videoTag w-100" controls autoPlay loop muted>
            <source src={sample} type="video/mp4" />
          </video>
        </div>
      </section>
      <section className="my-5 py-4">
        <div className="position-relative container border border-dark w-75  mx-auto my-5 d-flex">
          <h6 className="bg-white border border-dark py-2 px-4 position-absolute top-100 start-50 translate-middle">
            MORE MARQUIS COLLECTIONS
          </h6>
        </div>
      </section>
      <section>
        <div className="container  mb-5">
          <div className="row my-5">
            <div className="col-lg-4 px-4">
              <img className="w-100 shadow" src={prod1} alt="" />
              <div className="text-center my-5">
                <h2>product 1</h2>
                <h3>product 1</h3>
                <h6
                  style={{ width: "fit-content" }}
                  className="px-3 mx-auto border bordr-2 border-dark"
                >
                  LEARN MORE
                </h6>
              </div>
            </div>
            <div className="col-lg-4 px-4">
              <img className="w-100 shadow" src={prod2} alt="" />
              <div className="text-center my-5">
                <h2>product 1</h2>
                <h3>product 1</h3>
                <h6
                  style={{ width: "fit-content" }}
                  className="px-3 mx-auto border bordr-2 border-dark"
                >
                  LEARN MORE
                </h6>
              </div>
            </div>
            <div className="col-lg-4 px-4">
              <img className="w-100 shadow" src={prod3} alt="" />
              <div className="text-center my-5">
                <h2>product 1</h2>
                <h3>product 1</h3>
                <h6
                  style={{ width: "fit-content" }}
                  className="px-3 mx-auto border bordr-2 border-dark"
                >
                  LEARN MORE
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default product;
