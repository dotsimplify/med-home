import React from "react";
import Link from "next/link";

const Hero = (props) => {
  return (
    <section className="relative py-20 sm:py-16 lg:pt-0">
      <div className="absolute top-0 left-0 overflow-hidden">
        <img
          className="w-full h-auto origin-top-left transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-105"
          src="/images/background.png"
          alt="bg"
        />
      </div>

      <div className="relative px-4 mx-auto  max-w-[2000px] sm:px-6 lg:pl-8 lg:pr-0">
        <div className="grid grid-cols-1 gap-y-4 lg:items-start lg:grid-cols-2 xl:grid-cols-2">
          <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:pt-8 2xl:pt-16 sm:text-5xl sm:leading-tight lg:text-5xl 2xl:text-6xl lg:leading-tight font-pj">
              Поставка лекарств и медицинской продукции потребителю
            </h1>
            <p className="mt-2 text-lg text-gray-600 2xl:text-xl sm:mt-6 font-inter">
              Один из крупнейших продавцов лекарственных средств с
              экспресс-доставкой по всей России по лучшей цене
            </p>
            <Link href="/catalog">
              <a
                className="inline-flex px-8 py-3 mt-8 text-lg font-bold text-white transition-all duration-200 border border-transparent rounded bg-theme-green sm:mt-10 font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                role="button"
              >
                Каталог
              </a>
            </Link>
          </div>

          <div className="xl:col-span-1 ">
            <img
              className="w-full mx-auto rounded-l-xl"
              src="/images/hero.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
