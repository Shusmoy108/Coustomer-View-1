import { Button, Divider } from "@material-ui/core";
import {
  EmailOutlined,
  LocationOnOutlined,
  PersonAddOutlined,
  PhoneOutlined,
} from "@material-ui/icons";

export default function Header() {
  return (
    <div style={{ background: "#F2F2F2" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PhoneOutlined style={{ paddingRight: "5px", color: "#DE2035" }} />{" "}
        <div style={{ fontFamily: "Manrope", paddingRight: "15px" }}>
          888-851-4953
        </div>
        <EmailOutlined style={{ paddingRight: "5px", color: "#DE2035" }} />{" "}
        <div style={{ fontFamily: "Manrope", paddingRight: "15px" }}>
          info@luxcar.com
        </div>
        <LocationOnOutlined style={{ paddingRight: "5px", color: "#DE2035" }} />{" "}
        <div style={{ fontFamily: "Manrope", paddingRight: "15px" }}>
          1 N Creasy Ln, Lafayette, IN 47905
        </div>
      </div>
      <Divider />
      <div
        style={{
          padding: "1% 0",
          display: "flex",
        }}
      >
        <div
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="images/logo.jpg"
            alt=""
            style={{ width: "100%", height: "auto", maxWidth: "200px" }}
          />
        </div>

        <div
          style={{
            flex: 3,
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
            flexWrap: "wrap",
            gap: " 12px",
          }}
        >
          {" "}
          <div
            style={{
              fontWeight: "bold",
              fontFamily: "Manrope",
              fontSize: "1vw",
            }}
          >
            Cars for sale
          </div>{" "}
          <div
            style={{
              fontFamily: "Manrope",
              fontSize: "1vw",
            }}
          >
            About us
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              fontSize: "1vw",
            }}
          >
            Blogs
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              fontSize: "1vw",
            }}
          >
            Contact us
          </div>
        </div>
        <div
          style={{
            flex: 3,
            display: "flex",
            justifyContent: "center",

            alignItems: "center",
          }}
        >
          <div style={{ fontFamily: "Manrope", paddingRight: "15px" }}>
            <Button
              variant="contained"
              style={{
                fontFamily: "Manrope",
                background: "#DE2035",
                textTransform: "capitalize",
                color: "white",
              }}
            >
              <PersonAddOutlined /> Sign In
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
