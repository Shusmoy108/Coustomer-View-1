import { Button } from "@material-ui/core";

export default function FilterNav() {
  return (
    <div style={{ background: "#E0E0E0", display: "flex" }}>
      <div
        style={{
          flexGrow: 1,
          background: "#DE2035",
          padding: "5px",
          borderRadius: "0px 0px 80px 0px",
        }}
      />
      <div
        style={{
          flex: 6,
          display: "flex",
          padding: "10px",
        }}
      >
        <div
          style={{
            flex: 4,
            fontFamily: "Manrope",
            fontWeight: "bold",
            fontSize: "1vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Certified Pre-Owned Alfa Romeos for Sale
        </div>
        <div
          style={{
            flex: 2,
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
              Save Search
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          flexGrow: 1,
          background: "#DE2035",
          borderRadius: "80px 0px 0px 0px",
        }}
      />
    </div>
  );
}
