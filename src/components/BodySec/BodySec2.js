import React from "react";
import vedio from "../../images/VIDEO.png";

function BodySec2() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "75px",
      }}
    >
      <div
      id='divContainer2'
        style={{
          height: "531px",
          width: "944px",
          backgroundColor: "",
          marginTop: "105px",
          zIndex: "1",
          backgroundImage: `url(${vedio})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p
        id='divP2'
          style={{
            fontFamily: "Playfair Display",
            fontWeight: "900",
            fontStyle: "normal",
            fontSize: "3.6875em",
            lineHeight: "71px",
            marginBlockStart: "1rem",
            marginBlockEnd: "1rem",
            color: "white",
          }}
        >
          Reach More Customers
        </p>
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
          LEARN HOW
        </button>
      </div>
    </section>
  );
}

export default BodySec2;
