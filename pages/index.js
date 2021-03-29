import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <header
        className="masthead"
        style={{
          backgroundImage: `url("https://source.unsplash.com/BtbjCFUvBXs/1920x1080")`,
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center">
              <h1 className="font-weight-light">The Craft Taco Truck</h1>
              <p className="lead">A great starter layout for a landing page</p>
            </div>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container">
          <h2 className="font-weight-light">Page Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section>
    </div>
  );
}
