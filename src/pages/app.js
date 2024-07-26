import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Ensure Bootstrap JS is loaded

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
