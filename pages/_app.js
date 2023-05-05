import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ParallaxProvider>
  );
}
