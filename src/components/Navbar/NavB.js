import React from "react";
import logo from "../../images/mail.png";
import './NavB.css'

function NavB() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
      }}
    >
      <div
        style={{
          height: "102px",
          display: "flex",
          alignItems: "center",
          width: "1400px",
         
        }}
      >
        <div
          style={{
            width: "40%",
            display: "flex",
            alignItems: "center",
            height: "102px",
          }}
        >
          <img src={logo} alt="" style={{ height: "64px", width: "129px" }} id='navLogo'/>
          <p
            style={{
              fontFamily: "",
              fontWeight: "900",
              fontSize: "35px",
              height: "60px",
              fontStyle: "normal",
              width: "163px",
            }}
            id='navP'
          >
            NinjaMail
          </p>
        </div>
        <div
          style={{
            width: "60%",
            display: "flex",
            alignItems: "center",
            height: "102px",
            justifyContent:'space-evenly'
          }}
        >
          <a
            href="#feature"
            style={{
              fontWeight: "800",
              fontSize: "17px",
              width: "95px",
              fontStyle: "normal",
              borderBottom: "5px solid #4BA87D",
              textAlign: "center",
              textDecoration:'none',
              color: 'black',
              padding:'5px'
            }}
          >
            FEATURES
          </a>
          <a
            href="/"
            style={{
              fontWeight: "800",
              fontSize: "17px",
              width: "95px",
              fontStyle: "normal",
              borderBottom: "5px solid #4BA87D",
              textAlign: "center",
              textDecoration:'none',
              color: 'black',
              padding:'5px'
            }}
          >
            PRICING
          </a>
          <a
            href="/"
            style={{
              fontWeight: "800",
              fontSize: "17px",
              width: "95px",
              fontStyle: "normal",
              borderBottom: "5px solid #4BA87D",
              textAlign: "center",
              textDecoration:'none',
              color: 'black',
              padding:'5px'
            }}
          >
            SERVICES
          </a>
          <a
            href="/"
            style={{
              fontWeight: "800",
              fontSize: "17px",
              width: "95px",
              fontStyle: "normal",
              borderBottom: "5px solid #4BA87D",
              textAlign: "center",
              textDecoration:'none',
              color: 'black',
              padding:'5px'
            }}
          >
            PARTNERS
          </a>
          <button className="navBtn" style={{width:'168px',color:'white',backgroundColor:'#4BA87D',padding:'9px',fontWeight:'bold',fontSize:'17px',border: 'none'}}>SIGN UP FREE</button>
        </div>
      </div>
    </nav>
  );
}

export default NavB;
