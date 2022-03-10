import React from "react";

function BodySec6() {
  return (
    <section
      style={{
        height: "366px",
        backgroundColor: "#4BA87D",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "130px",
      }}
    >
      <div
        style={{
          height: "366px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontFamily: "Playfair Display",
            fontWeight: "900",
            fontStyle: "normal",
            fontSize: "60px",
            lineHeight: "80px",
            marginBlockStart: "0rem",
            marginBlockEnd: "1rem",
            textAlign: "center",
            color: "white",
          }}
        >
          Get started today!
        </p>
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
          PICK A PLAN
        </button>
      </div>
    </section>
  );
}

export default BodySec6;
