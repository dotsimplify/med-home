import React, { useState } from "react";
import Profile from "../components/Profile";
import Head from "next/head";
import Image from "next/image";

const About = (props) => {
  const [defaultComp, setDefaultComp] = useState("О компании");
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <link
          rel="canonical"
          href="https://dok-aibolit.ru/company-who-we-are"
        />
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
      <section onClick={() => props.isOpen && props.setIsOpen(false)}>
        <div className="flex justify-center mx-auto  max-w-[2000px] pt-8 text-base font-semibold ">
          <h1
            onClick={() => setDefaultComp("О компании")}
            className={`pt-1 text-base  uppercase cursor-pointer ${
              defaultComp === "О компании"
                ? "border-b-4 border-theme-green"
                : "border-b-4 border-gray-500"
            } mr-8 `}
          >
            О компании
          </h1>
          <h1
            onClick={() => setDefaultComp("Сертификация")}
            className={`pt-1 text-base  uppercase cursor-pointer ${
              defaultComp === "Сертификация"
                ? "border-b-4 border-theme-green"
                : "border-b-4 border-gray-500"
            } `}
          >
            Сертификация
          </h1>
        </div>
        {defaultComp === "О компании" && <Profile />}
        {defaultComp === "Сертификация" && (
          <div className="grid items-center mx-auto  max-w-[2000px] grid-cols-2 gap-4 p-8 py-12">
            <div className="mx-auto">
              <Image
                height="500"
                width="500"
                src="/images/licence1.png"
                alt="business licence"
              />
            </div>
            <div className="mx-auto">
              <Image
                height="500"
                width="500"
                src="/images/licence2.png"
                alt="business licence 2"
              />
            </div>
            <div className="mx-auto">
              <Image
                height="500"
                width="500"
                src="/images/licence3.png"
                alt="business licence 3"
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default About;
