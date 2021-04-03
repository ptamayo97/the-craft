import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Feed from "react-instagram-authless-feed";
import { Container, Row, Col, Jumbotron } from "reactstrap";

export default function Home() {
  return (
    <div className={styles.dark}>
      <Head>
        <title>The Craft Taco Truck</title>

        <link rel="icon" href="/images/small_logo.jpeg" />
      </Head>
      {/* <Hero>
        <img width="12%" src="/images/website.png" alt="Card image cap" />
      </Hero> */}

      <div className="mt-5 pt-5">
        <Container className=" pt-5">
          <Jumbotron className={styles.ivory}>
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

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </footer> */}
    </div>
  );
}
