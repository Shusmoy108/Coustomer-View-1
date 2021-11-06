import { Button, Grid } from "@material-ui/core";
import { ArrowRightAltRounded } from "@material-ui/icons";
import ExpertCard from "../expertcart/expertcard";

export default function ExppertBlock() {
  return (
    <div style={{ padding: "1% 5% 5% 5%" }}>
      {" "}
      <div
        style={{
          fontFamily: "Manrope",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          fontWeight: "bold",
          fontSize: "2.5vw",
          padding: "1%",
        }}
      >
        <div style={{ color: "red", paddingRight: "5px" }}>New car </div>{" "}
        <div>releases and expert reviews</div>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={3} md={2} xl={2}>
          <ExpertCard />
        </Grid>
        <Grid item xs={5} sm={3} md={2} xl={2}>
          <ExpertCard />
        </Grid>
        <Grid item xs={5} sm={3} md={2} xl={2}>
          <ExpertCard />
        </Grid>
        <Grid item xs={5} sm={3} md={2} xl={2}>
          <ExpertCard />
        </Grid>
        <Grid item xs={5} sm={3} md={2} xl={2}>
          <ExpertCard />
        </Grid>
        <Grid item xs={5} sm={3} md={2} xl={2}>
          <ExpertCard />
        </Grid>
      </Grid>
      {/* <div
        style={{
          display: "flex",
          //justifyContent: "space-between",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {" "}
        <Card style={{ maxWidth: "240px" }}>
          <CardMedia
            component="img"
            height="140"
            image="images/cart.png"
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
            <Divider
              style={{ height: "4px", color: "#828282", width: "25%" }}
            />
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
        <Card style={{ maxWidth: "240px" }}>
          <CardMedia
            component="img"
            height="140"
            image="images/cart1.png"
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
            <Divider
              style={{ height: "4px", color: "#828282", width: "25%" }}
            />
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
        <Card style={{ maxWidth: "240px" }}>
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
            <Divider
              style={{ height: "4px", color: "#828282", width: "25%" }}
            />
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
        <Card style={{ maxWidth: "240px" }}>
          <CardMedia
            component="img"
            height="140"
            image="images/cart.png"
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
            <Divider
              style={{ height: "4px", color: "#828282", width: "25%" }}
            />
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
        <Card style={{ maxWidth: "240px" }}>
          <CardMedia
            component="img"
            height="140"
            image="images/cart1.png"
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
            <Divider
              style={{ height: "4px", color: "#828282", width: "25%" }}
            />
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
        <Card style={{ maxWidth: "240px" }}>
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
            <Divider
              style={{ height: "4px", color: "#828282", width: "25%" }}
            />
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
      </div> */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button style={{ display: "flex" }}>
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
            See more reviews
          </div>{" "}
          <div>
            <ArrowRightAltRounded style={{ color: "#4F4F4F" }} />
          </div>
        </Button>
      </div>
    </div>
  );
}
