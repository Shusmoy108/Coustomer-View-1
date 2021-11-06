import { Button, Divider } from "@material-ui/core";
import { ArrowRightAltRounded } from "@material-ui/icons";

export default function FeaturedBox() {
  return (
    <div style={{ padding: "5% 5% 5% 5%" }}>
      <div
        style={{
          fontFamily: "Manrope",
          color: "#DE2035",
          fontSize: "1.1vw",
          fontWeight: "bold",
        }}
      >
        Handy picked
      </div>
      <div
        style={{
          display: "flex",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            flex: "1",
            fontFamily: "Manrope",
            fontSize: "2vw",
            fontWeight: "bold",
          }}
        >
          Featured Listings
        </div>
        <div style={{ flexGrow: 1 }} />
        <div
          style={{
            flex: "1",
            fontFamily: "Manrope",
            fontSize: "2vw",
            fontWeight: "bold",
            display: "flex",
            gap: "12px",
            justifyContent: "flex-end",
            alignContent: "center",
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            style={{
              fontFamily: "Manrope",
              //background: "red",
              background: "#f8d0d5",
              fontWeight: "bold",
              padding: "1% 5%",
              textTransform: "capitalize",
              color: "red",
              fontSize: "1vw",
            }}
          >
            New
          </Button>
          <Button
            // variant="outlined"
            style={{
              fontFamily: "Manrope",
              //background: "red",
              textTransform: "capitalize",
              fontWeight: "bold",
              padding: "1% 5%",
              background: "#DCDCDC",
              fontSize: "1vw",
              color: "black",
            }}
          >
            Used
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          background: "#F2F2F2",
        }}
      >
        <div style={{ flex: 1, display: "flex", position: "relative" }}>
          <img
            src="images/carcart.png"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
          <div style={{ position: "absolute", top: "80%", width: "100%" }}>
            <div
              style={{
                display: "flex",
                padding: "5% 5% 0% 5%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  fontFamily: "Manrope",
                  //fontWeight: "bold",
                  color: "white",
                  fontSize: "1.25vw",
                }}
              >
                2021 BMW GX 460 Base
              </div>
              <div
                style={{
                  fontFamily: "Manrope",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "1.5vw",
                }}
              >
                $25,000
              </div>
            </div>
            <Divider
              style={{ height: "1px", width: "100%", background: "#BDBDBD" }}
            />
            <div
              style={{
                display: "flex",
                padding: "1% 5% 0% 5%",
                gap: "10px",
              }}
            >
              <div
                style={{
                  fontFamily: "Manrope",
                  //fontWeight: "bold",
                  color: "white",
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
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>

              <div
                style={{
                  fontFamily: "Manrope",
                  //fontWeight: "bold",
                  color: "white",
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
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  fontFamily: "Manrope",
                  //fontWeight: "bold",
                  color: "white",
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
                    backgroundColor: "#bbb",
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
              <div
                style={{
                  fontFamily: "Manrope",
                  //fontWeight: "bold",
                  color: "white",
                  fontSize: "1vw",
                }}
              >
                White Exterior, Black Interior
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: "flex", gap: "10px", paddingBottom: "8px" }}>
            <div style={{ flex: 1, position: "relative" }}>
              <img
                src="images/car1.png"
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ position: "absolute", top: "70%", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "5% 5% 0% 5%",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "1vw",
                    }}
                  >
                    2020 Lexus GX 460 Base
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "1.15vw",
                    }}
                  >
                    $25,000
                  </div>
                </div>
                <Divider
                  style={{
                    height: "1px",
                    width: "100%",
                    background: "#BDBDBD",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    padding: "1% 5% 0% 5%",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
                    }}
                  >
                    White Exterior, Black Interior
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <img
                src="images/car2.png"
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ position: "absolute", top: "70%", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "5% 5% 0% 5%",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "1vw",
                    }}
                  >
                    2020 Lexus GX 460 Base
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "1.15vw",
                    }}
                  >
                    $25,000
                  </div>
                </div>
                <Divider
                  style={{
                    height: "1px",
                    width: "100%",
                    background: "#BDBDBD",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    padding: "1% 5% 0% 5%",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
                    }}
                  >
                    White Exterior, Black Interior
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ flex: 1, position: "relative" }}>
              <img
                src="images/car3.png"
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
              <div style={{ position: "absolute", top: "70%", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "5% 5% 0% 5%",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "1vw",
                    }}
                  >
                    2020 Lexus GX 460 Base
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "1.15vw",
                    }}
                  >
                    $25,000
                  </div>
                </div>
                <Divider
                  style={{
                    height: "1px",
                    width: "100%",
                    background: "#BDBDBD",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    padding: "1% 5% 0% 5%",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
                    }}
                  >
                    White Exterior, Black Interior
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: 1, position: "relative" }}>
              <img
                src="images/car4.png"
                alt=""
                style={{ width: "100%", height: "auto" }}
              />{" "}
              <div style={{ position: "absolute", top: "70%", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "5% 5% 0% 5%",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "1vw",
                    }}
                  >
                    2020 Lexus GX 460 Base
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      fontWeight: "bold",
                      color: "white",
                      fontSize: "1.15vw",
                    }}
                  >
                    $25,000
                  </div>
                </div>
                <Divider
                  style={{
                    height: "1px",
                    width: "100%",
                    background: "#BDBDBD",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    padding: "1% 5% 0% 5%",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>

                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
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
                        backgroundColor: "#bbb",
                        borderRadius: "50%",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      fontFamily: "Manrope",
                      //fontWeight: "bold",
                      color: "white",
                      fontSize: "0.7vw",
                    }}
                  >
                    White Exterior, Black Interior
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button>
          {" "}
          <div
            style={{
              fontFamily: "Manrope",
              //fontWeight: "bold",
              textTransform: "capitalize",
              color: "#4F4F4F",
              fontSize: "1vw",
            }}
          >
            {" "}
            See more listing
          </div>{" "}
          <div>
            <ArrowRightAltRounded style={{ color: "#4F4F4F" }} />
          </div>
        </Button>
      </div>
    </div>
  );
}
