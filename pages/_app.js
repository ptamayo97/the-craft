import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Bebas Neue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Layout>
  );
}

export default MyApp;
