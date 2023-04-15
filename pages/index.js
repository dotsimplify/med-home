import React from "react";
import axios from "axios";
import Link from "next/link";
import BlogThumbnail from "../components/blog/BlogThumbnail";
import Head from "next/head";
import { indexPageSchema, aToZ } from "../app/helper/helper";
import Points from "../components/Points";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import SingleProduct from "../components/products/SingleProduct";
import CallToAction from "../components/CallToAction";

const Index = (props) => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <link rel="canonical" href="https://dok-aibolit.ru" />
        <meta
          name="keywords"
          content="оптовая медицина,оптовые лекарства,оптовая фармацевтика ,медицинские препараты оптом ,оптовая продажа лекарств,лекарства оптом для аптек,оптовая закупка медикаментов,оптовые поставки лекарств,оптовая торговля медикаментами,оптовые поставки фармацевтики, 
          крупный опт медикаментов,качественные медикаменты оптом"
        />

        <title>
          Доктор Айболит | Быстрая доставка по всей стране более 10 000 лекарств
        </title>
        <meta
          property="og:title"
          content="
          Доктор Айболит |  Покупайте лекарства оптом: быстрая доставка более 10 000 товаров высшего качестваs"
        />
        <meta property="og:site_name" content="Doctor Ai blit" />
        <meta property="og:locale" content="ru-ru" />
        <meta property="og:url" content="https://dok-aibolit.ru" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <meta property="og:image" content="https://dok-aibolit.ru/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Доктор Айболит | Быстрая доставка по всей стране более 10 000 лекарств"
        />
        <meta
          name="twitter:description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <meta name="twitter:site" content="@doktoraibalit" />
        <meta name="twitter:image" content="https://dok-aibolit.ru/logo.png" />
        <meta name="twitter:creator" content="@doktoraibalit" />
        <script type="application/ld+json">
          {indexPageSchema([
            "company-who-we-are",
            "contacts",
            "products",
            "stati",
            "legal/privacy-policy",
            "legal/terms-and-conditions",
          ])}
        </script>
      </Head>

      <div onClick={() => props.isOpen && props.setIsOpen(false)}>
        <Hero />
        <Points />
        <section className="py-12 mx-auto  max-w-[2000px] bg-white sm:py-16 lg:py-8">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
            <div className="max-w-md mx-auto text-center lg:pb-12">
              <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Наши рекомендуемые товары
              </h2>
              <p className="mt-4 text-base font-normal leading-7 text-gray-600">
                У нас есть российские и зарубежные лекарства с доставкой по всей
                России
              </p>
            </div>

            {props.products && props.products.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-4 lg:gap-4 lg:grid-cols-4">
                {props.products.slice(0, 10).map((one) => {
                  return <SingleProduct key={one._id} data={one} />;
                })}
              </div>
            )}
          </div>
        </section>

        <section className="py-10 mx-auto  max-w-[2000px] bg-white sm:py-16 lg:py-24">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold leading-tight text-theme-green sm:text-4xl lg:text-5xl">
                Часто задаваемые вопросы
              </h2>
            </div>
            <div className="mx-auto mt-8 space-y-4 lg:max-w-3xl 2xl:max-w-7xl md:mt-16 ">
              {props.faqs &&
                props.faqs.length > 0 &&
                props.faqs.map((one) => {
                  return <Faq key={one._id} data={one} />;
                })}
            </div>
          </div>
        </section>
        <CallToAction />
        <div className="relative hidden px-6 py-12 mx-auto  max-w-[2000px] bg-white lg:px-12 md:block">
          <h1 className="py-2 text-xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-3xl">
            Статьи
          </h1>
        </div>
        {props.articles && props.articles.length > 0 && (
          <div className="grid grid-cols-1 gap-4 mx-auto pb-12  max-w-[2000px] px-12 py-2 bg-white md:grid-cols-2 lg:grid-cols-3 ">
            {props.articles.map((one) => {
              return <BlogThumbnail data={one} key={one._id} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Index;

export async function getStaticProps() {
  const products = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const articles = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
  const faqs = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);

  const responses = await Promise.all([products, articles, faqs]);

  return {
    props: {
      products: responses[0].data?.data,
      articles: responses[1].data,
      faqs: responses[2].data,
    },
    revalidate: 30,
  };
}
