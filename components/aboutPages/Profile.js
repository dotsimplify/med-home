import React from "react";

const Profile = () => {
  return (
    <div className="px-4 bg-white sm:px-6 lg:pb-16 lg:px-8">
      <div className="mx-auto max-w-[2000px]">
        <div className="">
          <p className="text-xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-xl">
            "Доктор Айболит" - ваш надежный партнер в заботе о здоровье!
          </p>
          <p className="mt-4 mb-8 text-base text-gray-500 lg:mx-auto">
            Компания "Оптовые лекарства" является лидером в отрасли оптовой
            торговли лекарственными средствами в России. Наша компания успешно
            работает на рынке уже более 20 лет и предлагает своим клиентам
            широкий ассортимент качественных медикаментов от ведущих
            производителей.
          </p>
        </div>
        <img
          className="max-h-[400px] w-full rounded-lg"
          src="/images/medicine-research.webp"
          alt="research lab"
        />
        <div className="mt-6 ">
          <h2 className="text-base font-semibold tracking-wide uppercase text-theme-green">
            Лекарства высокого качества
          </h2>
          <p className="mt-4 text-base text-gray-500 lg:mx-auto">
            Мы стремимся стать надежным партнером для наших клиентов, предлагая
            надежные, качественные и доступные лекарственные средства. Наша
            миссия заключается в том, чтобы обеспечить быструю доставку
            лекарственных препаратов по всей стране, с минимальными затратами на
            время и деньги.
          </p>
        </div>

        <div className="mt-6 ">
          <h2 className="text-base font-semibold tracking-wide uppercase text-theme-green">
            Внимательный персонал
          </h2>
          <p className="mt-4 text-base text-gray-500 lg:mx-auto">
            Мы работаем только с проверенными поставщиками, чтобы гарантировать
            качество продукции. Наша команда профессионалов готова помочь нашим
            клиентам с любыми вопросами, связанными с покупкой медикаментов и
            оказанием квалифицированной помощи в выборе подходящих препаратов.
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-base font-semibold tracking-wide uppercase text-theme-green">
            Этика
          </h2>
          <p className="mt-4 text-base text-gray-500 lg:mx-auto">
            Мы стремимся не только продавать лекарства, но и улучшать качество
            жизни наших клиентов, предоставляя доступ к инновационным
            лекарственным средствам и технологиям. Мы верим, что здоровье - это
            главное богатство каждого человека, и наша цель - сделать лекарства
            более доступными и эффективными для всех.
          </p>
        </div>
        <div className="mt-6">
          <p className="mt-4 text-base text-gray-500 lg:mx-auto">
            С нами вы можете быть уверены, что ваша здоровье в надежных руках.
            Спасибо, что выбрали компанию "Оптовые лекарства" в качестве вашего
            партнера в заботе о здоровье.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
