import "../styles/reset.css";
import "../styles/variables.sass";
import "../styles/fonts.css";
import "../styles/globals.sass";
import "../styles/typography.sass";
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
