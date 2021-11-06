import { Button, TextField } from "@material-ui/core";

export default function SubscribeBlock() {
  return (
    <div style={{ padding: "1% 5% 5% 5%" }}>
      <div
        style={{
          fontFamily: "Manrope",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1.5vw",
        }}
      >
        Subscribe to our newsletter and we will bring you the latest news and
        reviews.
      </div>
      <div
        style={{
          fontFamily: "Manrope",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          fontSize: "1.5vw",
          padding: "2%",
        }}
      >
        {/* <div style={{ flexGrow: 2 }} /> */}
        {/* <div
          style={{
            flex: 4,
            //display: "flex",
            //justifyContent: "center",
            //alignItems: "stretch",
          }}
        >
          {" "} */}
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter your email to Subscribe...."
          style={{ width: "45%" }}
          //helperText="Enter your email to Subscribe...."
        />
        {/* </div> */}
        {/* 
        <div
          style={{
            flex: 2,
            //display: "flex",
            //justifyContent: "center",
            //alignItems: "stretch",
          }}
        > */}
        <Button
          variant="contained"
          style={{
            fontFamily: "Manrope",
            background: "red",
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "white",
            //marginLeft: "2%",
            paddingLeft: "2%",
            paddingRight: "2%",
            height: "100%",
            fontSize: "1.25vw",
          }}
        >
          Subscribe
        </Button>
        {/* </div> */}
      </div>
    </div>
  );
}
