import React from "react";
import image1 from '../../images/Image1.png'
import image2 from '../../images/Image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/Image4.png'
import image5 from '../../images/Image5.png'

function BodySec5() {
  return (
    <section>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "944px",
            height: "211px",
            display: "flex",
            flexDirection: "column",
            justifyContent:'space-around'
          }}
        >
          <div
            style={{
              height: "70%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <p
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "900",
                fontStyle: "normal",
                fontSize: "44px",
                lineHeight: "48px",
                marginBlockStart: "0rem",
                marginBlockEnd: "0rem",
                width: "400px",
                textAlign: "center",
              }}
            >
              All the best brands already use us.
            </p>
          </div>
          <div style={{display:'flex',height:'48px',justifyContent:'space-between',alignItems:'center'}}>
              <img src={image1} alt="" style={{height:'44px',width:"85px"}} />
              <img src={image2} alt="" style={{height:'33px',width:"160px"}} />
              <img src={image3} alt="" style={{height:'48px',width:"145px"}} />
              <img src={image4} alt="" style={{height:'25px',width:"141px"}} />
              <img src={image5} alt="" style={{height:'22px',width:"138px"}} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BodySec5;
