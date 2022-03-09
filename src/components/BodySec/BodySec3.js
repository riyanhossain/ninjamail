import React from "react";
import photo1 from "../../images/photo1.png";
import photo2 from "../../images/photo2.png";

function BodySec3() {
  return (
    <section style={{ marginTop: "98px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "533px",
            width: "1098px",
            backgroundColor: "",
            display: "flex",
            zIndex: "1",
          }}
        >
          <div style={{ width: "33.3%", backgroundColor: "", height: "533px" }}>
            <div
              style={{
                width: "320px",
                height: "449px",
                backgroundColor: "white",
              }}
            >
              <div
                style={{
                  height: "60%",
                  backgroundImage: `url(${photo1})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div style={{ height: "40%", marginLeft: "5%" }}>
                <p>
                  Launch campaigns but also find new customers. Our unique
                  platform handles campaigns from start to end.
                </p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#4BA87D",
                    fontWeight: "800",
                    fontSize: "1rem",
                    fontStyle: "normal",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div style={{ width: "33.3%", backgroundColor: "", height: "533px" }}>
            <div
              style={{
                width: "320px",
                height: "449px",
                backgroundColor: "white",
                marginTop: "84px",
              }}
            >
              <div
                style={{
                  height: "60%",
                  backgroundImage: `url(${photo2})`,
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div style={{ height: "40%", marginLeft: "5%" }}>
                <p>
                  Start building and sharing with your team today. NinjaMail is
                  renowned for its industry leading team collaboration tools.
                </p>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#4BA87D",
                    fontWeight: "800",
                    fontSize: "1rem",
                    fontStyle: "normal",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "33.3%",
              height: "533px",
              display: "flex",
              alignItems: "center",

            }}
          >
              <div style={{display:'flex',flexDirection:'column'}}>
              <p
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "900",
                fontStyle: "normal",
                fontSize: "44px",
                lineHeight: "48px",
                marginBlockStart: "0rem",
                marginBlockEnd: "0rem",
              }}
            >
              The source for proven, engaging email campaigns
            </p>
            <p>
              Whether you’re a startup, small business, e-commerce store, or
              want to promote your app, NinjaMail has the feature set tailored
              for your business.
            </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodySec3;
