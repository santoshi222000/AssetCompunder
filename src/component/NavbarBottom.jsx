import React from "react";
import about from "../assets/Images/banner1.png";
import lp2 from "../assets/Images/xy.png";
import lp3 from "../assets/Images/aa.png";
// import "../App.css";
import "./navbarBottom.css";

function NavbarBottom() {
  return (
    <div className="home">
      {/* <h1 className="homeHeading" style={{ fontSize: "3em", lineHeight: "68px"}}>
                <span style={{  color: "rgb(243, 166, 0)" }}>
                  {" "}
                  Algorithmic
                </span>{" "}
                <br /> Trading B2E
              </h1> */}
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{ display: "none" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ display: "none" }}
            className="slide2-button"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{ display: "none" }}
          ></button>
        </div>
        <div class="carousel-inner">
          <div className="inner">
            <div class="carousel-item active">
              <img src={lp3} class="d-block w-100" alt="..." />
            </div>

            <div class="carousel-item " id="cItem">
              <div
                style={{
                  color: "black",
                  position: "absolute",
                  marginTop: "100px",
                  marginLeft: "200px",
                }}
              >
                <h1 style={{ fontSize: "3em", lineHeight: "68px" }}>
                  <span style={{ fontSize: "70px", color: "rgb(243, 166, 0)" }}>
                    {" "}
                    Algorithmic
                  </span>{" "}
                  <br /> Trading B2E
                </h1>
                <button
                  style={{
                    color: "white",
                    backgroundColor: "rgb(243, 166, 0)",
                    border: "none",
                    padding: "5px",
                    marginTop: "10px",
                  }}
                >
                  Join Know
                </button>
              </div>
              <img src={lp2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item " id="cItem1">
              <img src={about} class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default NavbarBottom;
