import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@material-ui/core";

export default function ExpertCard() {
  return (
    <Card style={{ maxWidth: "300x", borderRadius: "15px" }}>
      <CardMedia
        component="img"
        height="140"
        image="images/cart2.png"
        alt="green iguana"
      />
      <CardContent>
        <div
          style={{
            fontFamily: "Manrope",
            padding: "1%",
            fontSize: "0.9vw",
          }}
        >
          Expert Review
        </div>
        <div
          style={{
            fontFamily: "Manrope",
            padding: "1%",
            fontWeight: "bold",
            fontSize: "1.25vw",
          }}
        >
          2022 Genesis G70 Review: Feels New All Over Again
        </div>
        <Divider style={{ height: "4px", color: "#828282", width: "25%" }} />
        <div style={{ marginTop: "5%", display: "flex" }}>
          <Avatar src="images/u1.png" />
          <div
            style={{
              fontFamily: "Manrope",
              padding: "5%",
              fontSize: "0.7vw",
            }}
          >
            By Joe Bruzek
            <br />
            Managing Editor
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
