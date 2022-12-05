import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <div className="text-pickled-bluewood">
        <Component {...pageProps} />
      </div>
  );
}

export default MyApp;
