import { Divider, Typography } from "@material-ui/core";
import SearchCard from "../searchcard/searchcard";

export default function FilterBlock() {
  return (
    <div style={{ display: "flex", background: "#DBDBDB", paddingRight: "5%" }}>
      <div
        style={{
          flex: 6,
          background: "#DBDBDB",
          padding: "1% 3%",

          position: "relative",
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
            We build. We improvise. We charge ahead, to redefine possibilities.
            We are the enablers. We are Mahindra.
          </Typography>
          <br />
          <Typography
            variant="subtitle1"
            style={{ fontFamily: "Manrope", fontSize: "1vw" }}
          >
            Having a presence across 100+ countries and operating in key
            industries, we are a federation of companies driven by one purpose –
            to Rise.
          </Typography>
          {/* <div style={{ position: "relative", border: "1px solid blue" }}>
            <div
              style={{
                height: "100px",
                width: "100px",
                background: "red",
                overflow: "auto",
              }}
            >
              if there is some really long content here, it will cause overflow,
              but the green box will not
              <div
                style={{
                  position: "absolute",
                  zIndex: -1,
                  left: "20px",
                  top: "0",
                  height: "200px",
                  width: "200px",
                  background: "green",
                }}
              ></div>
            </div>
          </div> */}
        </div>
        <SearchCard />
      </div>

      <div
        style={{
          flex: 4,
          background: "#DE2035",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="images/carfilter.png"
          alt=""
          style={{ width: "45%", position: "absolute", height: "auto" }}
        />
      </div>
      {/* <div style={{ flex: 1, background: "#DBDBDB" }}></div> */}
    </div>
  );
}
