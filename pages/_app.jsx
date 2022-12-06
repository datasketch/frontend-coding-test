// Next UI Provider
import { NextUIProvider } from "@nextui-org/react";

// React hot toast notifications
// import { Toaster } from "react-hot-toast";

// Global styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      {/* <Toaster position="bottom-center" reverseOrder={false} /> */}
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
