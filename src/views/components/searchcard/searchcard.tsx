import { Button, Card, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
export default function SearchCard() {
  const [age, setAge] = React.useState("");
  const history = useHistory();
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div
    // /style={{ position: "absolute" }}
    >
      <Card
        style={{
          display: "flex",
          padding: "1% 2%",
          //margin: "1%",

          // top: "70%",
        }}
      >
        <div style={{ flex: 1, padding: "1% 4%" }}>
          <div style={{ paddingBottom: "15%" }}>
            <div
              style={{
                fontFamily: "Manrope",
                fontWeight: "bold",
                padding: "2px",
                fontSize: "0.9vw",
              }}
            >
              {" "}
              Select Make
            </div>
            <div
              style={{
                borderRadius: " 5px",
                border: " 1px solid red",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                disableUnderline
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "1vw",
                }}
              >
                <MenuItem
                  value=""
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  All Makes
                </MenuItem>
                <MenuItem
                  value={10}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  value={20}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  value={30}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Thirty
                </MenuItem>
              </Select>
            </div>
          </div>
          <div style={{ paddingBottom: "10%" }}>
            <div
              style={{
                fontFamily: "Manrope",
                fontWeight: "bold",
                padding: "2px",
                fontSize: "0.9vw",
              }}
            >
              {" "}
              Select Mileage
            </div>
            <div
              style={{
                borderRadius: " 5px",
                border: " 1px solid red",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                disableUnderline
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "1vw",
                }}
              >
                <MenuItem
                  value=""
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  All Mileage
                </MenuItem>
                <MenuItem
                  value={10}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  value={20}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  value={30}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Thirty
                </MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, padding: "1% 4%" }}>
          {" "}
          <div style={{ paddingBottom: "15%" }}>
            <div
              style={{
                fontFamily: "Manrope",
                fontWeight: "bold",
                padding: "2px",
                fontSize: "0.9vw",
              }}
            >
              {" "}
              Select Model
            </div>
            <div
              style={{
                borderRadius: " 5px",
                border: " 1px solid red",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                disableUnderline
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "1vw",
                }}
              >
                <MenuItem
                  value=""
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  All Model
                </MenuItem>
                <MenuItem
                  value={10}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  value={20}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  value={30}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Thirty
                </MenuItem>
              </Select>
            </div>
          </div>
          <div style={{ paddingBottom: "10%" }}>
            <div
              style={{
                fontFamily: "Manrope",
                fontWeight: "bold",
                padding: "2px",
                fontSize: "0.9vw",
              }}
            >
              {" "}
              Select Body Style
            </div>
            <div
              style={{
                borderRadius: " 5px",
                border: " 1px solid red",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                disableUnderline
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "1vw",
                }}
              >
                <MenuItem
                  value=""
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  All Body Style
                </MenuItem>
                <MenuItem
                  value={10}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  value={20}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  value={30}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Thirty
                </MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, padding: "1% 2%" }}>
          {" "}
          <div style={{ paddingBottom: "15%" }}>
            <div
              style={{
                fontFamily: "Manrope",
                fontWeight: "bold",
                padding: "2px",
                fontSize: "0.9vw",
              }}
            >
              {" "}
              Select Year
            </div>
            <div
              style={{
                borderRadius: " 5px",
                border: " 1px solid red",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                disableUnderline
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "1vw",
                }}
              >
                <MenuItem
                  value=""
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  All Year
                </MenuItem>
                <MenuItem
                  value={10}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  value={20}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  value={30}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Thirty
                </MenuItem>
              </Select>
            </div>
          </div>
          <div style={{ paddingBottom: "10%" }}>
            <div
              style={{
                fontFamily: "Manrope",
                fontWeight: "bold",
                padding: "2px",
                fontSize: "0.9vw",
              }}
            >
              {" "}
              Select Vehicle Status
            </div>
            <div
              style={{
                borderRadius: " 5px",
                border: " 1px solid red",
                paddingLeft: "10px",
              }}
            >
              {" "}
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                disableUnderline
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  fontSize: "1vw",
                }}
              >
                <MenuItem
                  value=""
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  All Vehicle Status
                </MenuItem>
                <MenuItem
                  value={10}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Ten
                </MenuItem>
                <MenuItem
                  value={20}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Twenty
                </MenuItem>
                <MenuItem
                  value={30}
                  style={{ fontFamily: "Manrope", fontSize: "1vw" }}
                >
                  Thirty
                </MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            style={{
              fontFamily: "Manrope",
              padding: "5% 30%",
              background: "red",
              textTransform: "capitalize",
              color: "white",
              fontWeight: "bold",
              fontSize: "1vw",
            }}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
              history.push("/search");
            }}
          >
            Search
          </Button>
        </div>
      </Card>
    </div>
  );
}
