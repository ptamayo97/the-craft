import { Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Menu from "../components/Menu";
import Feed from "react-instagram-authless-feed";
import { Container, Row, Col, Jumbotron } from "reactstrap";

class Home extends Component {
  state = {
    menu: [
      {
        category: "Tacos",
        image: "/images/tacos.jpg",
        items: [
          {
            name: "Carne Asada",
            ingredients: ["diced red onion", "guacamole", "cilantro"],
            single: "3.50",
            plate: "10.50",
            price: "3.50",
          },
          {
            name: "Carnitas",
            ingredients: ["diced red onion", "guacamole", "cilantro"],
            single: "3.00",
            plate: "9.00",
            price: "3.00",
          },
          {
            name: "Pollo Asado",
            ingredients: ["diced red onion", "guacamole", "cilantro"],
            single: "3.00",
            plate: "9.00",
            price: "3.00",
          },
          {
            name: "Cochinita Pibil",
            ingredients: ["cilantro", "pickled red onion"],
            single: "3.00",
            plate: "9.00",
            price: "3.00",
          },
          {
            name: "Shrimp",
            ingredients: [
              "cabbage",
              "diced red onion",
              "pickled red onion",
              "cilantro",
            ],
            single: "4.00",
            plate: "12.00",
            price: "4.00",
          },
          {
            name: "Al Pastor",
            ingredients: ["diced red onion", "guacamole", "cilantro"],
            single: "3.00",
            plate: "9.00",
            price: "3.00",
          },
          {
            name: "Soyrizo",
            ingredients: ["diced red onion", "guacamole", "cilantro"],
            single: "3.00",
            plate: "9.00",
            price: "3.00",
          },
        ],
      },
      {
        category: "Craft Tacos",
        image: "/images/craft_tacos.jpg",
        items: [
          { name: "Baja Poke", price: "8.00" },
          { name: "Nopales (Vegan on request)", price: "4.50" },
          { name: "Cochinita Quesataco", price: "5.00" },
          { name: "Bulgogi Taco", price: "7.00" },
          { name: "Surf and Turf", price: "7.50" },
        ],
      },
      {
        category: "Bowls",
        image: "/images/bowls.jpg",
        items: [
          {
            name: "Carne Asada",
            price: "11.00",
          },
          {
            name: "Pollo Asado",
            price: "10.00",
          },
          {
            name: "Carnitas",
            price: " 10.00",
          },
          {
            name: "Al Pastor",
            price: "10.00",
          },
          {
            name: "Shrimp",
            price: "12.00",
          },
          {
            name: "Soyrizo",
            price: "10.00",
          },
          {
            name: "Cochinita Pibil",
            price: "10.00",
          },
          {
            name: "Surf and Turf",
            price: "13.50",
          },
        ],
      },
      {
        category: "Salads",
        image: "https://via.placeholder.com/542",
        items: [{ name: "Caesar  | Add-ons: $5 any protein ", price: "7.00" }],
      },
      {
        category: "Fries",
        image: "/images/fries.jpg",
        items: [
          {
            name: "Carne Asada",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "cilantro",
            ],
            price: "12.00",
          },
          {
            name: "Pollo Asado",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "cilantro",
            ],
            price: "11.00",
          },
          {
            name: "Carnitas",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "cilantro",
            ],
            price: "11.00",
          },
          {
            name: "Cochinita Pibil",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "cilantro",
              "pickled red onion",
            ],
            price: "11.00",
          },
          {
            name: "Al Pastor",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "cilantro",
            ],
            price: "11.00",
          },
          {
            name: "Surf and Turf",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "cilantro",
            ],
            price: "15.00",
          },
          {
            name: "Soyrizo",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "cilantro",
              "pickled red onion",
            ],
            price: "10.50",
          },
        ],
      },
      {
        category: "Burritos",
        image: "/images/burritos.jpg",
        items: [
          {
            name: "Carne Asada",
            ingredients: ["pico de gallo", "guacamole"],
            price: "12.00",
          },
          {
            name: "Pollo Asado",
            ingredients: ["pico de gallo", "guacamole"],
            price: "11.00",
          },
          {
            name: "Carnitas",
            ingredients: ["pico de gallo", "guacamole"],
            price: "11.00",
          },
          {
            name: "Al Pastor",
            ingredients: ["pico de gallo", "guacamole"],
            price: "11.00",
          },
          {
            name: "Surf and Turf",
            ingredients: ["pico de gallo", "jack cheese", "crema", "guacamole"],
            price: "14.00",
          },
          {
            name: "California Burrito",
            ingredients: [
              "fries",
              "pico de gallo",
              "jack cheese",
              "crema",
              "guacamole",
            ],
            price: "12.75",
          },
          {
            name: "Bean and Cheese",
            ingredients: ["beans", "jack cheese"],
            price: "7.00",
          },
        ],
      },
    ],
  };
  render() {
    return (
      <div className={styles.dark}>
        <Head>
          <title>The Craft Taco Truck</title>

          <link rel="icon" href="/images/small_logo.jpeg" />
        </Head>
        {/* <Hero>
        <img width="12%" src="/images/website.png" alt="Card image cap" />
      </Hero> */}

        <Container className="mt-5 pt-5">
          <Jumbotron className={styles.ivory}>
            <Row>
              <Col className="d-flex justify-content-center">
                <img
                  src="/images/website.png"
                  alt=""
                  width={`100%`}
                  height={`100%`}
                />
              </Col>
            </Row>
            <Row className="lead">
              <Col>
                <p className="text-center">
                  Our mission at The Craft Taco Truck is building hand-crafted
                  products with authenticity, honesty, and originality.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <img width="100%" src="/images/yummy.jpg" alt="tacos" />
              </Col>
            </Row>

            <Row className="mt-5">
              <Col sm="12" md={{ size: 12 }}>
                <iframe
                  src="https://www.google.com/calendar/embed?color=%239fe1e7&deb=-&embed_style=WyJhdDplbWI6c3QiLCIjZTBlMGUwIiwiI2VkZWRlZCIsIiM0MTg0ZjMiLCJyb2JvdG8iLCIjNjM2MzYzIiw1MDAsIiNmZmYiXQo&eopt=0&mode=agenda&showCalendars=1&showPrint=0&showTitle=0&showTz=0&src=thecraft@thecrafttacotruck.com"
                  // style="border:solid 1px #777"
                  width="100%"
                  height="500"
                  frameborder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>

            <Menu menu={this.state.menu} />
          </Jumbotron>
          {/* <Row>
            <Col>
              <Feed
                userName="thecrafttacotruck"
                className="col"
                classNameLoading="Loading"
                limit="3"
              />
            </Col>
          </Row> */}
        </Container>
      </div>

      /* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </footer> */
    );
  }
}

export default Home;
