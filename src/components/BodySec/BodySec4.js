import React from "react";
import photo3 from "../../images/photo3.png";
import photo4 from "../../images/photo4.png";
import photo5 from "../../images/photo5.png";

function BodySec4() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            height: "530px",
            width: "1089px",
            backgroundColor: "",
            zIndex: "1",
          }}
        >
          <div
            style={{
              height: "239px",
              width: "1089px",
              backgroundColor: "",
              display: "flex",
            }}
          >
            <div
              style={{
                height: "239px",
                width: "33.33%",
                backgroundColor: "",
                backgroundImage: `url(${photo3})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div
                style={{
                  height: "239px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <p
                  style={{
                    fontWeight: "900",
                    fontStyle: "normal",
                    fontSize: "30px",
                    lineHeight: "37px",
                    marginBlockStart: "1rem",
                    marginBlockEnd: "0rem",
                    color: "white",
                    marginLeft: "5%",
                  }}
                >
                  Frankie
                </p>
                <p
                  style={{
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "20px",
                    marginBlockStart: "0rem",
                    marginBlockEnd: "1rem",
                    color: "white",
                    marginLeft: "5%",
                  }}
                >
                  Member since 2016
                </p>
              </div>
            </div>
            <div
              style={{
                height: "239px",
                width: "33.33%",
                backgroundColor: "",
                backgroundImage: `url(${photo4})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  height: "239px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <p
                  style={{
                    fontWeight: "900",
                    fontStyle: "normal",
                    fontSize: "30px",
                    lineHeight: "37px",
                    marginBlockStart: "1rem",
                    marginBlockEnd: "0rem",
                    color: "white",
                    marginLeft: "7.5%",
                  }}
                >
                  Camile
                </p>
                <p
                  style={{
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "20px",
                    marginBlockStart: "0rem",
                    marginBlockEnd: "1rem",
                    color: "white",
                    marginLeft: "7.5%",
                  }}
                >
                  Member since 2012
                </p>
              </div>
            </div>
            <div
              style={{
                height: "239px",
                width: "33.33%",
                backgroundColor: "",
                backgroundImage: `url(${photo5})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            >
              <div
                style={{
                  height: "239px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <p
                  style={{
                    fontWeight: "900",
                    fontStyle: "normal",
                    fontSize: "30px",
                    lineHeight: "37px",
                    marginBlockStart: "1rem",
                    marginBlockEnd: "0rem",
                    color: "white",
                    marginLeft: "10%",
                  }}
                >
                  Elayne
                </p>
                <p
                  style={{
                    fontWeight: "500",
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "20px",
                    marginBlockStart: "0rem",
                    marginBlockEnd: "1rem",
                    color: "white",
                    marginLeft: "10%",
                  }}
                >
                  Member since 2018
                </p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "4%",
            }}
          >
            <p
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "900",
                fontStyle: "normal",
                fontSize: "44px",
                lineHeight: "48px",
                marginBlockStart: "1rem",
                marginBlockEnd: "1rem",
                textAlign: "center",
                width: "850px",
              }}
            >
              Learn how others are reaching their audience easier than ever
              before.
            </p>
            <div style={{ display: "flex", width: "668px" }}>
              <input placeholder="Enter your mail" style={{ width: "420px" }} />
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
                JOIN OUR LIST
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodySec4;
