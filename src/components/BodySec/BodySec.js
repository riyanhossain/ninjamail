import React from "react";
import container1 from "../../images/container1.png";
import "../../App.css";

function BodySec() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
      id='container1'
        style={{
          height: "383px",
          width: "1088px",
          backgroundColor: "",
          marginTop: "105px",
          zIndex: "1",
          backgroundImage: `url(${container1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
      >
        <div id='divContainer' style={{ width: "489px" }}>
          <p
            style={{
              fontFamily: "Playfair Display",
              fontWeight: "900",
              fontStyle: "normal",
              fontSize: "3.6875em",
              lineHeight: "71px",
              marginBlockStart: "1rem",
              marginBlockEnd: "1rem",
            }}
          >
            Create Stunning Email Campaigns
          </p>
          <p>
            Create and launch email campaigns that captivate your customers in
            just a few clicks.
          </p>
          <div style={{ display: "flex", marginTop: "1rem" }}>
            <button
              id="bodySecBtn"
              style={{
                width: "200px",
                padding: "12px",
                border: "2px solid #4BA87D",
                backgroundColor: "white",
                color: "#4BA87D",
                fontFamily: "",
                fontWeight: "900",
                fontStyle: "normal",
                fontSize: "15px",
                lineHeight: "25px",
              }}
            >
              TRY NOW
            </button>
            <button
              id="bodySecBtn"
              style={{
                marginLeft: "50px",
                width: "200px",
                padding: "12px",
                border: "2px solid #4BA87D",
                backgroundColor: "white",
                color: "#4BA87D",
                fontFamily: "",
                fontWeight: "900",
                fontStyle: "normal",
                fontSize: "15px",
                lineHeight: "25px",
              }}
            >
              GET A DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodySec;
