import { Button, Divider } from "@material-ui/core";

export default function CarCard() {
  return (
    <div
      style={{
        background: "#E9E9E9",
        display: "flex",
        borderRadius: "10px",
        margin: "10px",
        //border: "1px solid",
      }}
    >
      <div style={{ flex: 3 }}>
        <img
          src="images/car2.png"
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div style={{ flex: 10 }}>
        <div style={{ padding: "20px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ position: "relative", flex: "1" }}>
              <img
                src="images/new.svg"
                alt="New"
                style={{ width: "auto", height: "auto" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "6px",
                  left: "10px",
                  fontFamily: "Manrope",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "1vw",
                }}
              >
                NEW
              </div>
            </div>
            <div
              style={{ flex: 2, display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                variant="outlined"
                color="secondary"
                style={{
                  fontFamily: "Manrope",
                  //background: "red",
                  background: "#f8d0d5",
                  border: "0px",
                  fontWeight: "bold",
                  padding: "1% 5%",
                  textTransform: "capitalize",
                  color: "red",
                }}
              >
                Check Availability
              </Button>
            </div>
          </div>

          <div
            style={{
              fontFamily: "Manrope",
              fontWeight: "bold",
              paddingTop: "5px",
              fontSize: "1.25vw",
            }}
          >
            2020 Lexus GX 460 Base
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              paddingTop: "5px",
              fontSize: "1.25vw",
            }}
          >
            23,878 mi
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              fontWeight: "bold",
              paddingTop: "5px",
              fontSize: "1.5vw",
              color: "red",
            }}
          >
            $56,000
          </div>
          <div style={{ display: "flex", paddingTop: "5px" }}>
            <Button
              variant="outlined"
              color="secondary"
              style={{
                fontFamily: "Manrope",
                //background: "red",
                //background: "#f8d0d5",
                fontWeight: "bold",
                marginRight: "10px",
                textTransform: "capitalize",
                color: "red",
              }}
            >
              Good Deal
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{
                fontFamily: "Manrope",
                //background: "red",
                //background: "#f8d0d5",
                fontWeight: "bold",
                marginRight: "10px",
                textTransform: "capitalize",
                color: "red",
              }}
            >
              Hot Car
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{
                fontFamily: "Manrope",
                //background: "red",
                //background: "#f8d0d5",
                fontWeight: "bold",
                marginRight: "10px",
                textTransform: "capitalize",
                color: "red",
              }}
            >
              Home Delivery
            </Button>
          </div>
        </div>
        <Divider style={{ height: "1px" }} />

        <div
          style={{
            display: "flex",
            padding: "20px",
            gap: "10px",
          }}
        >
          <div
            style={{
              fontFamily: "Manrope",
              //fontWeight: "bold",
              //color: "white",
              fontSize: "1vw",
            }}
          >
            Spring, TX
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div
              style={{
                height: "5px",
                width: " 5px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>

          <div
            style={{
              fontFamily: "Manrope",
              //fontWeight: "bold",
              //color: "white",
              fontSize: "1vw",
            }}
          >
            Certified Pre-Owned
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div
              style={{
                height: "5px",
                width: " 5px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              //fontWeight: "bold",
              //color: "white",
              fontSize: "1vw",
            }}
          >
            No accidents, 1 owner
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <div
              style={{
                height: "5px",
                width: " 5px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></div>
          </div>
          <div
            style={{
              fontFamily: "Manrope",
              //fontWeight: "bold",
              //color: "white",
              fontSize: "1vw",
            }}
          >
            White Exterior, Black Interior
          </div>
        </div>
      </div>
    </div>
  );
}
