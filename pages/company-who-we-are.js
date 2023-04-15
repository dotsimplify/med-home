import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Profile from "../components/aboutPages/Profile";
import Head from "next/head";
import Image from "next/image";
import AboutSidebar from "../components/aboutPages/AboutSidebar";
import Heading from "../components/Heading";
import Breadcrumb from "../components/Breadcrumb";
import Partners from "../components/aboutPages/Partners";
import Presentation from "../components/aboutPages/Presentation";
import Vacancies from "../components/aboutPages/Vacancies";

const CompanyOperations = (props) => {
  const router = useRouter();
  const { about } = router.query;

  const [defaultComp, setDefaultComp] = useState(about || "О нас");
  const arr = ["О нас", "Партнеры", "Лицензии", "Презентация", "Вакансии"];

  useEffect(() => {
    if (!about) {
      setDefaultComp("О нас");
    }
    if (about) {
      setDefaultComp(about);
    }
  }, [about]);

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
        <div className="md:py-6 mx-auto max-w-[2000px] lg:px-8">
          <Heading text={defaultComp} />
          <Breadcrumb bg="bg-white" links={[{ name: defaultComp }]} />

          <div className="relative grid grid-cols-1 gap-3 pb-12 md:grid-cols-4">
            <div className="hidden md:block">
              <AboutSidebar
                arr={arr}
                active={defaultComp}
                setActive={setDefaultComp}
              />
            </div>
            <div className="col-span-3">
              {defaultComp === "О нас" && <Profile />}
              {defaultComp === "Партнеры" && <Partners />}
              {defaultComp === "Презентация" && <Presentation />}
              {defaultComp === "Вакансии" && <Vacancies />}
              {defaultComp === "Лицензии" && (
                <>
                  <p className="px-6 text-xl font-extrabold leading-8 tracking-tight text-theme-green sm:text-3xl">
                    Лицензии
                  </p>
                  <div className="grid items-center grid-cols-1 mx-auto  max-w-[2000px] md:grid-cols-2 gap-4 p-8 pb-12">
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
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyOperations;
