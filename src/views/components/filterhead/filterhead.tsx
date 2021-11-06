import { Divider, MenuItem, Select } from "@material-ui/core";
import React from "react";
export default function FilterHead() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "0 5%",
        paddingTop: "1%",
        background: "#F2F2F2",
      }}
    >
      <div style={{ flex: 2 }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontWeight: "bold",
            paddingBottom: "10px",
            //padding: "4px",
            fontSize: "1.25vw",
          }}
        >
          Filter By
        </div>
        <Divider style={{ height: "1px" }} />
      </div>
      <div
        style={{
          flex: 10,
          display: "flex",
          padding: "0 40px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Manrope",
            // fontWeight: "bold",
            color: "red",
            //padding: "4px",
            fontSize: "1vw",
          }}
        >
          Showing 1 – 30 of 55 Listings
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              fontFamily: "Manrope",
              fontWeight: "bold",

              padding: "4px 10px",
              fontSize: "1vw",
            }}
          >
            Sort By
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
                Mileage High to Low
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
    </div>
  );
}
