import "../styles/reset.css";
import "../styles/globals.sass";
import Header from "../components/header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
