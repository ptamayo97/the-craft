import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Container, Row, Col } from "reactstrap";
import Menu from "../components/Menu";

class menu extends Component {
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
        image: "/images/salad.jpg",
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
    const { menu } = this.state;
    return (
      // <Container>
      //   <Head>
      //     <title>The Craft Taco Truck | Menu</title>

      //     <link rel="icon" href="/images/small_logo.jpeg" />
      //   </Head>
      //   <Row>
      //     <Col className="col-sm-12 col-md-6 offset-md-3 text-center">
      //       <h1 className="mt-5 py-5">Whats on the menu?</h1>
      //     </Col>
      //   </Row>

      // </Container>
      <div style={{ color: "#d9d9d9" }}>
        <Head>
          <title>The Craft Taco Truck | Menu</title>

          <link rel="icon" href="/images/small_logo.jpeg" />
        </Head>
        <Menu menu={this.state.menu} />
      </div>
    );
  }
}

export default menu;
