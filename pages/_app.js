import React, { useState } from "react";
import "../styles/global.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactStrip from "../components/layout/ContactStrip";

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState("");

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Component isOpen={isOpen} setIsOpen={setIsOpen} {...pageProps} />
      <ContactStrip />
      <Footer />
    </>
  );
}

export default MyApp;
