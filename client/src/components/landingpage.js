import React, { Component } from "react";
import IMG1 from "../img/img1.jpg";
import IMG2 from "../img/img2.jpg";
import IMG4 from "../img/img4.jpg";
import IMG5 from "../img/img5.jpg";
import IMG6 from "../img/img6.jpg";
import IMG7 from "../img/img7.jpg";
import HUMAN1 from "../img/human1.png";
import HUMAN2 from "../img/human2.png";
import HUMAN3 from "../img/human3.png";
import COMPANY from "../img/company.png";
import { Row, Col, Container, Card, CardColumns } from "react-bootstrap";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div>
        <section class="content-section">
          <h3>
            <div class="container" style={{ color: "white" }}>
              <img
                class="img-fluid"
                style={{ width: "100%", height: "700px" }}
                src={IMG1}
                alt=""
              />
              <div
                class="top-left font1"
                style={{ size: "400px", lineHeight: "55px" }}
              >
                LOCAL<br></br>ORGANIC<br></br>RESPONSIBLE
              </div>

              <div
                class="bottom-left font2"
                style={{
                  marginBottom: "200px",
                  fontSize: "21px",
                  textShadow: "2px 2px 10px white",
                  lineHeight: "35px"
                }}
              >
                Farm-to-table, prepared meals <br></br>delivered to your
                doorstep.<br></br>
                <a href="/signup">
                  <button
                    type="button"
                    class="btn1 btn1-primary font4"
                    style={{ marginTop: "10px", color: "white" }}
                  >
                    Get Started
                  </button>
                </a>
              </div>

              <div class="bottom-left font2">
                <a href="/login" styler={{ color: "white" }}>
                  Already a Member? Sign in
                </a>
              </div>
            </div>
            <div class="container">
              <div class="langding-part2 font2">
                <br></br>
                <center>
                  <h2 class="font3">SAVE TIME, EAT BETTER.</h2>
                </center>
                <hr class="one-half" />
                <Container>
                  <Row
                    style={{
                      fontSize: "28px",
                      color: "#196F3D",
                      paddingTop: "0",
                      marginLeft: "5%"
                    }}
                  >
                    <Col>CHOOSE YOUR PLAN</Col>
                    <Col>WEEKLY DELIVERY</Col>
                    <Col>NO COMMITMENT</Col>
                  </Row>
                  <Row
                    style={{
                      fontSize: "15px",
                      color: "#4D4D4D",
                      lineHeight: "25px",
                      marginLeft: "5%"
                    }}
                  >
                    <Col>
                      <Cell col={11}>
                        Order 5, 10, or 20 meals each week. Customize your order
                        from 6 new recipes every week.
                      </Cell>
                    </Col>
                    <Col>
                      <Cell col={10}>
                        We deliver in Austin, Texas to your home or office.
                        Delivery times are Sunday 6pm to 9pm and Monday 9am to
                        1pm.{" "}
                      </Cell>
                    </Col>
                    <Col>
                      <Cell col={10}>
                        Prep to Your Door is flexible. You can modify, skip, or
                        cancel your plan at any time with no commitment.
                      </Cell>
                    </Col>
                  </Row>
                </Container>
                <br></br>
                <hr class="one" />
                <center>
                  <button
                    type="button"
                    class="btn1 btn1-primary font4"
                    style={{
                      marginTop: "10px",
                      color: "white",
                      size: "10px",
                      fontSize: "17px"
                    }}
                  >
                    Get Started
                  </button>
                </center>
              </div>
            </div>

            <div class="container">
              <div class="langding-part2 font2">
                <br></br>
                <br></br>
                <Grid>
                  <Cell col={8}>
                    <Container>
                      <Row style={{ fontSize: "28px" }}>
                        <Col>LOCAL FARMS</Col>
                        <Col>REUSABLE PACKAGING</Col>
                      </Row>
                      <Row
                        style={{
                          fontSize: "13px",
                          color: "#4D4D4D",
                          lineHeight: "20px"
                        }}
                      >
                        <Col>
                          <Cell col={10}>
                            Eat seasonally and locally every week. Our chefs
                            create each menu based on what is growing in Texas.
                          </Cell>
                        </Col>
                        <Col>
                          <Cell col={11}>
                            Did you know that every piece of plastic ever
                            produced, still exists today? Enjoy a plastic-free
                            experience with your PTYD deliveries.
                          </Cell>
                        </Col>
                      </Row>
                      <br></br>
                      <br></br>
                      <Row style={{ fontSize: "28px" }}>
                        <Col>ZERO WASTE</Col>
                        <Col>ORGANIC PRODUCE</Col>
                      </Row>

                      <Row
                        style={{
                          fontSize: "13px",
                          color: "#4D4D4D",
                          lineHeight: "20px"
                        }}
                      >
                        <Col>
                          <Cell col={10}>
                            Nearly 40% of all food grown in the United States is
                            thrown away. In our kitchen, all food scraps are
                            composted to make healthy organic soil.{" "}
                          </Cell>
                        </Col>
                        <Col>
                          <Cell col={11}>
                            Not only is organic food better for your health,
                            it's better for our planet. Healthy soil means
                            healthy nutrients and healthy bodies.{" "}
                          </Cell>
                        </Col>
                      </Row>
                    </Container>
                  </Cell>
                  <Cell col={4}>
                    <img
                      class="img-fluid"
                      style={{ width: "80%", height: "100%" }}
                      src={IMG2}
                      alt=""
                    />
                  </Cell>
                  <button
                    type="button"
                    class="btn1 btn1-primary font4"
                    style={{
                      marginTop: "10px",
                      color: "white",
                      size: "10px",
                      fontSize: "17px"
                    }}
                  >
                    EAT BETTER NOW
                  </button>
                </Grid>
              </div>
            </div>
            <br></br>
            <div
              class="container background"
              style={{
                backgroundSize: "100% 100%"
              }}
            >
              <br />
              <br />
              <center>
                <div
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    width: "700px",
                    height: "700px"
                  }}
                >
                  <br></br>
                  <h2 class="font1">DELIVERED WEEKLY</h2>
                  <h3 class="font1">STRAIGHT TO YOUR DOOR</h3>
                  <hr class="three" />
                  <h5 class="font1">&bull; READY-TO-EAT PLANT BASED MEALS</h5>
                  <h5 class="font1">&bull; ORGANIC INGREDIENTS </h5>
                  <h5 class="font1">&bull; LOCALLY SOURCED</h5>
                  <h5 class="font1">&bull; REUSABLE ECO-FRIENDLY MASON JARS</h5>
                  <hr class="three" />
                  <h6>
                    All meals are 100% gluten, meat, and dairy free.
                    <br />
                    <i>Pause anytime, no commitment.</i>
                  </h6>
                  <br></br>
                  <h5 class="font1">PLANS STARTING AT</h5>
                  <h4 class="font3">
                    <large>$59</large> / WEEK
                  </h4>
                </div>
              </center>
              <br />
              <br />
            </div>
            <br></br>
            <div class="container">
              <h3 class="font2" style={{ color: "#196F3D" }}>
                FRESH MENU EVERY WEEK
              </h3>
              <h5 class="font1">
                Organic. Seasonal. Local. Every week try something new. Your
                taste buds will thank you.{" "}
              </h5>
              <Grid>
                <Cell col={4}>
                  <img
                    class="img-fluid"
                    style={{ width: "80%", height: "60%" }}
                    src={IMG4}
                    alt=""
                  />
                  <h4 class="font2">RAINBOW SALAD</h4>
                  <Cell col={10}>
                    <p class="font2">
                      All the colors for all the nutrients! This salad is
                      perfect for a lunch on the go. With delicious, freshly
                      made cilantro lime hummus, pickled onions, quinoa, and a
                      fresh serving of greens, this salad has all the essential
                      nutrients to keep you firing all day.
                    </p>
                  </Cell>
                </Cell>
                <Cell col={4}>
                  <img
                    class="img-fluid"
                    style={{ width: "80%", height: "60%" }}
                    src={IMG5}
                    alt=""
                  />
                  <h4 class="font2">BBQ CHICKPEA SALAD</h4>
                  <Cell col={10}>
                    <p class="font2">
                      Southern, smoky, spiced chickpeas smothered in the worlds
                      best BBQ Sauce. You'll want to order this when it comes on
                      the menu, trust me.
                    </p>
                  </Cell>
                </Cell>
                <Cell col={4}>
                  <img
                    class="img-fluid"
                    style={{ width: "80%", height: "60%" }}
                    src={IMG6}
                    alt=""
                  />
                  <h4 class="font2">BLUEBERRY COCONUT OATS</h4>
                  <Cell col={10}>
                    <p class="font2">
                      Say hello to your new favorite breakfast. Eat in the car
                      or steal bites between emails. Fresh blueberries, coconut
                      cream, chia seeds and rolled oats. This meal has the
                      antioxidants, healthy fats and fiber to kickstart your
                      day.
                    </p>
                  </Cell>
                </Cell>
              </Grid>
              <br></br>
              <button
                type="button"
                class="btn1 btn1-primary font4"
                style={{
                  marginTop: "10px",
                  color: "white",
                  size: "10px",
                  fontSize: "17px"
                }}
              >
                BROWSE OUR MENU
              </button>
            </div>
            <br></br>
            <br></br>
            <div class="container">
              <Grid>
                <Cell col={8}>
                  <h3 class="font2">The Healthiest Fast-Food in Austin</h3>

                  <Container>
                    <div class="font2">
                      <Row style={{ fontSize: "20px", color: "#888785" }}>
                        <Col>Time</Col>
                        <Col>Delicious</Col>
                      </Row>
                      <Row
                        style={{
                          fontSize: "13px",
                          lineHeight: "20px",
                          color: "#888785"
                        }}
                      >
                        <Col>
                          Save time and enjoy healthy meals made with real whole
                          foods. You don't have to sacrifice health for
                          convenience anymore.
                        </Col>
                        <Col>
                          New season means new ingredients. Eat exciting new
                          dishes every week based on what is in season and
                          growing in Texas farms.
                        </Col>
                      </Row>
                      <br></br>
                      <Row style={{ fontSize: "20px", color: "#888785" }}>
                        <Col>Healthy</Col>
                        <Col>Zero Waste</Col>
                      </Row>

                      <Row
                        style={{
                          fontSize: "13px",
                          lineHeight: "20px",
                          color: "#888785"
                        }}
                      >
                        <Col>
                          100% organic, plant-based ingredients. No chemicals,
                          antibiotics, or preservatives. All meals are
                          gluten-free.
                        </Col>
                        <Col>
                          Reusable jars and delivery bags means we save
                          thousands of plastic containers every week. Zero
                          plastic throw away when you order PTYD.
                        </Col>
                      </Row>
                      <br></br>
                      <button
                        type="button"
                        class="btn1 btn1-primary font4"
                        style={{
                          marginTop: "10px",
                          color: "white",
                          size: "10px",
                          fontSize: "17px"
                        }}
                      >
                        EAT HEALTHIER NOW
                      </button>
                    </div>
                  </Container>
                </Cell>
                <Cell col={4}>
                  <img
                    class="img-fluid"
                    style={{ width: "80%", height: "100%" }}
                    src={IMG7}
                    alt=""
                  />
                </Cell>
              </Grid>
            </div>
            <br></br>
            <br></br>
            <div class="container font2">
              <h3 class="font2">What Prepsters love about us...</h3>
              <CardColumns>
                <Card className="p-3">
                  <p>
                    Healthy, delicious, and delivered to your door at an
                    affordable price. Hard to beat. As a bonus, the jars are
                    eco-friendly. I can't wait to see PTYD expand.
                  </p>
                  <br />
                  <br />
                  <Grid>
                    <Cell col={3}>
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "60px",
                          height: "60px",
                          marginTop: "10px"
                        }}
                        src={HUMAN1}
                        alt="Avatar"
                      ></img>
                    </Cell>
                    <Cell col={7}>
                      <h5 class="font2">Veronica</h5>
                      <p>UX Designer</p>
                    </Cell>
                  </Grid>
                </Card>
                <Card className="p-3">
                  <p>
                    Best meal prep service we've ever used. The food is fresh,
                    organic, dairy and meat free. When you love food as much as
                    my husband and I do, you appreciate having consistent meals
                    throughout the week that are the definition of clean.
                  </p>
                  <br />
                  <Grid>
                    <Cell col={3}>
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "60px",
                          height: "60px",
                          marginTop: "10px"
                        }}
                        src={HUMAN2}
                        alt="Avatar"
                      ></img>
                    </Cell>
                    <Cell col={7}>
                      <h5>Luke</h5>
                      <p>Tech</p>
                    </Cell>
                  </Grid>
                </Card>
                <Card className="p-3">
                  <p>
                    These meals are delicious, healthy, and make life SO easy
                    and enjoyable! The team is great with customer service if I
                    ever have any questions. I don't think I've ever had a meal
                    I didn't like!
                  </p>
                  <br />
                  <br />
                  <Grid>
                    <Cell col={3}>
                      <img
                        style={{
                          borderRadius: "50%",
                          width: "60px",
                          height: "60px",
                          marginTop: "10px"
                        }}
                        src={HUMAN3}
                        alt="Avatar"
                      ></img>
                    </Cell>
                    <Cell col={7}>
                      <h5 class="font2">Courtney</h5>
                      <p>Fitness Designer</p>
                    </Cell>
                  </Grid>
                </Card>
              </CardColumns>
              <br />
              <button
                type="button"
                class="btn1 btn1-primary font4"
                style={{
                  marginTop: "10px",
                  color: "white",
                  size: "10px",
                  fontSize: "17px"
                }}
              >
                TRY US TODAY
              </button>
              <br />
              <Grid>
                <center>
                  <Cell col={8}>
                    <h3 class="font2" style={{ lineHeight: "50px" }}>
                      "PTYD is so good and we love it so much, it feels like
                      part of our family! It's so thrilling to fill our fridge
                      every week with tasty surprises!"
                    </h3>
                    <br />
                  </Cell>{" "}
                  <img
                    class="img-fluid"
                    style={{ width: "50%", height: "22%" }}
                    src={COMPANY}
                    alt=""
                  />
                  <div style={{ backgroundColor: "black" }}>
                    <br />
                    <br />
                  </div>
                  <br />
                </center>
              </Grid>
              <br />
            </div>
          </h3>
        </section>
      </div>
    );
  }
}

export default Landing;