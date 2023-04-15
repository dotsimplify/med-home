import React from "react";
import Head from "next/head";
import axios from "axios";
import CategoryComp from "../../components/products/CategoryComp";
import CategoryAccordian from "../../components/products/CategoryAccordian";
import CategoryWithSubCategory from "../../components/products/CategoryWithSubCategory";
import Heading from "../../components/Heading";
import Breadcrumb from "../../components/Breadcrumb";

const Products = (props) => {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <link rel="canonical" href="https://dok-aibolit.ru/products" />
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
      </Head>
      <section
        onClick={() => props.isOpen && props.setIsOpen(false)}
        className="pb-12 bg-gray-50 sm:pb-16"
      >
        <div className=" pb-12 md:py-6 mx-auto max-w-[2000px] lg:px-8">
          <Heading text="КАТАЛОГ" />
          <Breadcrumb links={[{ name: "КАТАЛОГ" }]} />

          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-3">
            <div className="hidden md:block">
              <CategoryAccordian items={props.categories} />
            </div>
            <div className="col-span-3">
              {props.categories &&
                props.categories.length > 0 &&
                props.categories.map((single) => {
                  return (
                    <CategoryWithSubCategory
                      key={single._id}
                      category={single}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

export async function getStaticProps() {
  const products = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const categories = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/product-categories`
  );

  const responses = await Promise.all([products, categories]);

  return {
    props: {
      products: responses[0].data?.data,
      categories: responses[1].data,
    },
  };
}
