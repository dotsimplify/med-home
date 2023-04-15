import React, { useState } from "react";
import App from "next/app";
import axios from "axios";
import "../styles/global.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactStrip from "../components/layout/ContactStrip";

function MyApp({ Component, pageProps, categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const [companyModal, setCompanyModal] = useState(false);
  const [catalogModal, setCatalogModal] = useState(false);
  const [activityModal, setActivityModal] = useState(false);
  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        companyModal={companyModal}
        setCompanyModal={setCompanyModal}
        catalogModal={catalogModal}
        setCatalogModal={setCatalogModal}
        activityModal={activityModal}
        setActivityModal={setActivityModal}
        categories={categories}
      />
      <Component isOpen={isOpen} setIsOpen={setIsOpen} {...pageProps} />
      <ContactStrip />
      <Footer />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const getCategories = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/product-categories`
  );

  const responses = await Promise.all([getCategories]);

  const categories = responses[0].data;

  // Call the original `getInitialProps` function if it exists
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, categories };
};

export default MyApp;
