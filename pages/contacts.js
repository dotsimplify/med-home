import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { BiChevronDown } from "react-icons/bi";
import { FaTelegram, FaVk, FaLocationArrow } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = (props) => {
  const [serverResponse, setServerResponse] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleRequest = async (e) => {
    e.preventDefault();
    if (!name || !email || !message || !mobile) return;
    if (mobile.length > 15 && mobile.length < 10) {
      return setError(
        "Пожалуйста, введите правильный номер мобильного телефона"
      );
    }
    const values = { email, message, name, mobile };
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/i-am-interested`,
      values
    );
    setServerResponse(res.data?.message);
    setEmail("");
    setMessage("");
    setMobile("");
    setName("");
    setTimeout(() => {
      setServerResponse("");
    }, 7000);
  };
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <link rel="canonical" href="https://dok-aibolit.ru/contacts" />
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
      <div
        onClick={() => props.isOpen && props.setIsOpen(false)}
        className="flex flex-col items-start lg:flex-row"
      >
        <div className="w-full text-center ">
          <div className="p-8 m-2 border md:max-w-xs md:mx-8 bg-gray-50 rounded-xl">
            <h1 className="pb-2 text-xl font-bold text-gray-800">
              Доктор Айболит
            </h1>
            <p className="py-3 text-sm">office@dok-aibolit.ru</p>
            <p className="pb-3 text-sm">admin@dok-aibolit.ru</p>
            <div className="pb-3">
              <a href="tel:+784212465888" className="text-sm">
                +784212-465888
              </a>
            </div>
            <div className="pb-3">
              <a href="tel:+784212466088" className="text-sm ">
                +784212-466088
              </a>
            </div>
            <h2 className="pb-4 text-sm text-gray-700">
              г. Хабаровск, ул.Карла Маркса, 166, корпус "А", 3 этаж
            </h2>
            <a
              rel="norefferer noopener "
              target="_blank"
              href="https://go.2gis.com/q17n7"
            >
              <FaLocationArrow className="text-xl text-green-600" />
            </a>
          </div>
          <div className="p-8 m-2 my-4 border md:max-w-xs md:mx-8 bg-gray-50 rounded-xl">
            <div className="flex items-center ">
              <a
                href={`https://api.whatsapp.com/send?phone=+79141581503&text=${encodeURI(
                  `Здравствуйте`
                )}`}
              >
                <RiWhatsappFill className="text-3xl text-gray-600 cursor-pointer hover:text-green-600" />
              </a>
              <a href="https://t.me/+79141581503">
                <FaTelegram className="mx-5 text-3xl text-gray-600 cursor-pointer hover:text-sky-600" />
              </a>
              <FaVk className="text-3xl text-gray-600 cursor-pointer hover:text-blue-600" />
            </div>
          </div>
        </div>

        <div className="isolate w-full bg-[#48aa394d] py-12 px-6 sm:py-16 lg:px-8">
          <div className="absolute hidden inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:left-[20rem]">
            <svg
              className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
            >
              <path
                fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                fillOpacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#48AA39" />
                  <stop offset={1} stopColor="#FF80B5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Связаться с отделом продаж
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Наш отдел продаж доступен 24x7 для вашей помощи
            </p>
          </div>
          <div className="max-w-xl mx-auto mt-16 sm:mt-8">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Имя
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    required
                    id="FullName"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    autoComplete="name"
                    className="block outline-none focus:ring ring-theme-green w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Электронная почта
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm r placeholder:text-gray-400 focus:ring-inset outline-none focus:ring ring-theme-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  номер телефона (10 цифр)
                </label>
                <div className="relative mt-2.5">
                  <div className="absolute inset-y-0 left-0 flex items-center">
                    <label htmlFor="country" className="sr-only">
                      Country
                    </label>
                    <select
                      style={{
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        textIndent: "1px",
                      }}
                      id="country"
                      name="country"
                      className="h-full py-0 pl-4 text-gray-400 bg-transparent border-0 rounded-md outline-none bg-none pr-9 focus:ring ring-theme-green sm:text-sm"
                    >
                      <option>+7</option>
                    </select>
                    <BiChevronDown
                      className="absolute top-0 w-5 h-full text-gray-400 pointer-events-none right-3"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="number"
                    onChange={(e) => setMobile(e.target.value)}
                    id="message"
                    required
                    value={mobile}
                    autoComplete="mobile"
                    className="block w-full rounded-md border-0 py-2 px-3.5 pl-20 text-gray-900 shadow-sm placeholder:text-gray-400 outline-none focus:ring ring-theme-green sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Сообщение
                </label>
                <div className="mt-2.5">
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    value={message}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm outline-none focus:ring ring-theme-green placeholder:text-gray-400  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <h3>{error}</h3>
            <div className="mt-10">
              <button
                type="submit"
                onClick={handleRequest}
                className={`block w-full rounded-md ${
                  serverResponse
                    ? "bg-white text-black"
                    : "bg-theme-green text-white"
                } px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm hover:bg-theme-green/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-green`}
              >
                {serverResponse ? serverResponse : "Отправить"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
