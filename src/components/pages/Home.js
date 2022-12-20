import React from "react";
import Navbar from "../includes/Navbar";
import bg from "../Images/home/bg1.jpg";
import sec2 from "../Images/home/sec2.jpg";
import prod1 from "../Images/home/prod1.jpg";
import prod2 from "../Images/home/prod2.jpg";
import prod3 from "../Images/home/prod3.jpg";
import prod4 from "../Images/home/prod4.jpg";
import prod5 from "../Images/home/prod5.jpg";
import prod6 from "../Images/home/prod6.jpg";
import ourstore from "../Images/home/ourstore.jpg";
// import sample from "../Images/home/sample.mp4";
import comsoonvid from "../Images/home/comsoonvid.webm";

function Home() {
  return (
    
    <div className="containe">
      <Navbar />
      <section
        style={{
          backgroundImage: `url('${bg}')`,
          height: "100vh",
          backgroundSize: "cover",
        }}
      ></section>
      <section>
        <div className="col-8 mx-auto my-5 py-5">
          <img className="w-100" src={sec2} alt=""></img>
        </div>
      </section>
      <section>
        <div className="position-relative  mx-auto my-5 d-flex">
          <div className="mx-auto  border border-secondary border-2">
            <h1 className="px-4">MARQUIS </h1>
            <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
              Collections
            </h6>
          </div>
        </div>
        <div className="container border-bottom border-dark mb-5">
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
      <section>
        <h2 className="text-center">DISCOVER</h2>
        <h1 className="text-center">OUR BRANDS</h1>
        <hr
          className="mx-auto mt-0"
          style={{
            height: "2px",
            borderWidth: "0",
            color: "black",
            backgroundColor: "#000",
            width: "150px",
          }}
        />
      </section>
      <section>
        <div className="container mb-5">
          <div className="row my-5">
            <div className="col-lg-4 px-4">
              <img className="w-100" src={prod4} alt="" />
              <div className="position-relative  mx-auto my-5 d-flex">
                <div className="mx-auto  border border-secondary border-2">
                  <h4 className="px-4">MARQUIS </h4>
                  <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
                    Collections
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-4">
              <img className="w-100" src={prod5} alt="" />
              <div className="position-relative  mx-auto my-5 d-flex">
                <div className="mx-auto  border border-secondary border-2">
                  <h4 className="px-4">MARQUIS </h4>
                  <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
                    Collections
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-4">
              <img className="w-100" src={prod6} alt="" />
              <div className="position-relative  mx-auto my-5 d-flex">
                <div className="mx-auto  border border-secondary border-2">
                  <h4 className="px-4">MARQUIS </h4>
                  <h6 className="bg-white px-2 position-absolute top-100 start-50 translate-middle">
                    Collections
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative container border  mx-auto my-5 d-flex">
        <h6 className="bg-white border border-dark py-2 px-4 position-absolute top-100 start-50 translate-middle">
          VIEW ALL
        </h6>
      </div>
      <section className="my-5 position-relative">
        <img className="my-5 w-100" src={ourstore} alt="" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 style={{fontSize:85}} className="text-white">OUR STORE</h1>
          <h2 className="text-white text-center">COMING SOON</h2>
        </div>
      </section>
      <section className="my-5 py-5">
        <div className="container bg-black d-flex justify-content-center">
          <video className="w-50" autoPlay loop muted>
            <source src={comsoonvid} type="video/mp4" />
          </video>
        </div>
      </section>
    </div>
  );
}
export default Home;
