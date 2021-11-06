import {
  Accordion,
  AccordionSummary,
  Checkbox,
  MenuItem,
  Select,
  Slider,
  TextField,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import React from "react";
export default function FilterBox() {
  const [age, setAge] = React.useState("");
  const [value, setValue] = React.useState<number[]>([0, 100]);
  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  const handleSlider = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div style={{}}>
      <div style={{ paddingTop: "10px" }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontWeight: "bold",
            padding: "4px",
            fontSize: "1vw",
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
      <div style={{ paddingTop: "10px" }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontWeight: "bold",
            padding: "2px",
            fontSize: "1vw",
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
            // width: "50%",
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
              //background: "white",
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

      <div style={{ paddingTop: "10px" }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontWeight: "bold",
            padding: "2px",
            fontSize: "1vw",
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
      <div style={{ paddingTop: "10px" }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontWeight: "bold",
            padding: "2px",
            fontSize: "1vw",
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
      <div style={{ paddingTop: "10px" }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontWeight: "bold",
            padding: "2px",
            fontSize: "1vw",
          }}
        >
          {" "}
          Select Year
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
                Min
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
          <div
            style={{
              fontFamily: "Manrope",
              fontWeight: "bold",
              //padding: "2px",
              fontSize: "1.2vw",
            }}
          >
            {" "}
            To
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
                Max
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
      <div style={{ paddingTop: "10px" }}>
        <div
          style={{
            fontFamily: "Manrope",
            fontWeight: "bold",
            padding: "2px",
            fontSize: "1vw",
          }}
        >
          {" "}
          Select Mileage
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            alignItems: "center",
          }}
        >
          {" "}
          <TextField
            id="outlined-basic"
            style={{ border: " 1px solid red", borderRadius: " 5px" }}
            variant="outlined"
            value={0}
          />
          <div
            style={{
              fontFamily: "Manrope",
              fontWeight: "bold",
              //padding: "2px",
              fontSize: "1.2vw",
            }}
          >
            {" "}
            To
          </div>
          <TextField
            id="outlined-basic"
            style={{ border: " 1px solid red", borderRadius: " 5px" }}
            variant="outlined"
            value={20000000}
          />
        </div>
      </div>

      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        style={{ color: "red" }}
        //onChange={handleSlider}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
      />
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
            Price Rating
          </div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Excellent Price
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Great Price
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Fair Price
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> High Price
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
            Exterior Color
          </div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
            Popular Features
          </div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>Drive Type</div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
            Transmission
          </div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>Engine</div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
            Interior Color
          </div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>Cylinders</div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
      <Accordion style={{ background: "transparent", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>Fuel Type</div>
        </AccordionSummary>

        <div>
          {" "}
          <Checkbox defaultChecked style={{ color: "red" }} /> Red
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Green
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Blue
        </div>
        <div>
          {" "}
          <Checkbox style={{ color: "red" }} /> Yellow
        </div>
      </Accordion>
    </div>
  );
}
