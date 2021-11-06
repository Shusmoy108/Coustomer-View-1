import {
  Button,
  Card,
  Divider,
  MenuItem,
  Typography,
  Select,
} from "@material-ui/core";
import React from "react";
export default function Filter() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",

          paddingRight: "5%",
          zIndex: -1,
        }}
      >
        <div
          style={{
            padding: "1% 3%",
            background: "#DBDBDB",
            zIndex: 0,
            flex: 6,
          }}
        >
          <div
            style={{
              fontFamily: "Bai Jamjuree",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "3vw",
            }}
          >
            Vorsprung
            <br />
            durch
            <br />
            Technik
          </div>
          <Divider style={{ background: "red", width: "10%", height: "4px" }} />
          <div style={{ paddingRight: "5%" }}>
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "Manrope", fontSize: "1vw" }}
            >
              We build. We improvise. We charge ahead, to redefine
              possibilities. We are the enablers. We are Mahindra.
            </Typography>
            <br />
            <Typography
              variant="subtitle1"
              style={{ fontFamily: "Manrope", fontSize: "1vw" }}
            >
              Having a presence across 100+ countries and operating in key
              industries, we are a federation of companies driven by one purpose
              – to Rise.
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            background: "red",
            zIndex: 0,
            flex: 4,
            padding: "5%",
          }}
        >
          <img
            src="images/carfilter.png"
            alt=""
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
