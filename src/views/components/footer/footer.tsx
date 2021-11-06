import { Divider } from "@material-ui/core";
import {
  EmailOutlined,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOnOutlined,
  PhoneOutlined,
  Twitter,
  YouTube,
} from "@material-ui/icons";

export default function Footer() {
  return (
    <div style={{ background: "#DBDBDB" }}>
      <div
        style={{
          padding: "3% 5%",
          display: "flex",
        }}
      >
        <div style={{ flex: 2 }}>
          <img
            src="images/logo.jpg"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "200px",
              paddingBottom: "2%",
            }}
          />
          <Divider
            style={{
              background: "red",
              width: "10%",
              height: "2px",
              marginBottom: "2%",
              maxWidth: "80px",
            }}
          />
          <div
            style={{
              fontFamily: "Manrope",
              textAlign: "justify",
              fontSize: "1vw",
            }}
          >
            Award-winning, family owned dealership of new and pre-owned vehicles
            with several locations across the city. Lowest prices and the best
            customer service guaranteed.
          </div>
        </div>
        <div style={{ flex: 2, display: "flex", justifyContent: "center" }}>
          <div
            style={{
              fontFamily: "Manrope",
              textAlign: "justify",
              //fontWeight: "bold",
              fontSize: "1.25vw",
            }}
          >
            <div style={{ fontWeight: "bold" }}>Quick Links</div>
            <ul
              style={{
                fontSize: "1.1vw",
                listStyleType: "circle",
              }}
            >
              <li>Listings</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Our team</li>
            </ul>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          {" "}
          <div
            style={{
              fontFamily: "Manrope",
              textAlign: "justify",
              //fontWeight: "bold",
              fontSize: "1.25vw",
            }}
          >
            <div style={{ fontWeight: "bold" }}>Others</div>
            <ul
              style={{
                fontSize: "1.1vw",
                listStyleType: "circle",
              }}
            >
              <li>Terms of use</li>
              <li>Privacy policy</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div
          style={{
            flex: 2,
            fontFamily: "Manrope",
            textAlign: "justify",

            //fontWeight: "bold",
            fontSize: "1.25vw",
          }}
        >
          {" "}
          <div
            style={{
              fontWeight: "bold",
              display: "flex",
              // padding: "1%",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            Connect With Us
          </div>
          <div
            style={{
              display: "flex",
              padding: "2% 0%",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <PhoneOutlined style={{ paddingRight: "5px", color: "#DE2035" }} />{" "}
            <div
              style={{
                fontFamily: "Manrope",
                paddingRight: "15px",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              888-851-4953
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "2% 0%",
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <EmailOutlined style={{ paddingRight: "5px", color: "#DE2035" }} />{" "}
            <div
              style={{
                fontFamily: "Manrope",
                paddingRight: "15px",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              info@luxcar.com
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "2% 0%",
              // justifyContent: "center",
              //alignItems: "center",
            }}
          >
            <LocationOnOutlined
              style={{ paddingRight: "5px", color: "#DE2035" }}
            />{" "}
            <div
              style={{
                fontFamily: "Manrope",
                paddingRight: "15px",
                display: "flex",

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              1 N Creasy Ln, Lafayette, IN 47905
            </div>
          </div>
        </div>
      </div>
      <Divider style={{ height: "1px", color: "black" }} />
      <div
        style={{
          padding: "3% 5%",
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 2,
            fontFamily: "Manrope",

            display: "flex",
            fontSize: "1.25vw",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          © 2021 Luxkar Inc. All rights reserved.
        </div>
        <div style={{ flexGrow: 3 }} />
        <div
          style={{
            flex: 2,
            fontFamily: "Manrope",
            color: "#DE2035",
            display: "flex",
            fontSize: "1.25vw",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Facebook /> <Twitter /> <GitHub /> <LinkedIn /> <Instagram />{" "}
          <YouTube />
        </div>
      </div>
    </div>
  );
}
