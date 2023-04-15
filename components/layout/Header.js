import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Transition } from "react-transition-group";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { BsFillTelephoneFill, BsArrowLeft } from "react-icons/bs";

const Navbar = (props) => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleAllModal = (mm) => {
    if (props.companyModal) {
      props.setCompanyModal(false);
    }
    if (props.catalogModal) {
      props.setCatalogModal(false);
    }
    if (props.activityModal) {
      props.setActivityModal(false);
    }
    if (mm) {
      props.setIsOpen(false);
    }
  };

  const toggleNavbar = () => {
    props.setIsOpen(!props.isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-50 bg-white pb-1 border-b ${
        router.pathname === "/" && scrollPosition < 400
          ? "border-transparent"
          : "border-gray-300"
      }  `}
    >
      <div className="px-4 mx-auto max-w-[2000px] sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between ">
          <div className="flex items-center w-1/2">
            <div className="flex-shrink-0">
              <Link href="/">
                <img
                  src="/logo.svg"
                  className="w-1/2 cursor-pointer"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end w-full md:justify-between">
            <div className="items-center hidden md:flex ">
              <div
                onMouseEnter={() => props.setCompanyModal(true)}
                onMouseLeave={() => props.setCompanyModal(false)}
                className="relative"
              >
                <Link href="/company-who-we-are">
                  <a
                    onClick={() => props.setCompanyModal(false)}
                    className={`px-3 py-5 text-sm font-medium  rounded-md hover:underline ${
                      router.pathname === "/company-who-we-are"
                        ? "text-theme-green"
                        : "text-black"
                    }`}
                  >
                    О КОМПАНИИ
                  </a>
                </Link>
                {props.companyModal && (
                  <div className="absolute left-0 w-32 bg-white border rounded-lg shadow-2xl cursor-pointer top-10">
                    <Link
                      href={`/company-who-we-are?about=${encodeURI("О нас")}`}
                    >
                      <h3
                        onClick={() => props.setCompanyModal(false)}
                        className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                      >
                        О нас
                      </h3>
                    </Link>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Партнеры"
                      )}`}
                    >
                      <h3
                        onClick={() => props.setCompanyModal(false)}
                        className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                      >
                        Партнеры
                      </h3>
                    </Link>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Лицензии"
                      )}`}
                    >
                      <h3
                        onClick={() => props.setCompanyModal(false)}
                        className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                      >
                        Лицензии
                      </h3>
                    </Link>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Презентация"
                      )}`}
                    >
                      <h3
                        onClick={() => props.setCompanyModal(false)}
                        className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                      >
                        Презентация
                      </h3>
                    </Link>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Вакансии"
                      )}`}
                    >
                      <h3
                        onClick={() => props.setCompanyModal(false)}
                        className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                      >
                        Вакансии
                      </h3>
                    </Link>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => props.setCatalogModal(true)}
                onMouseLeave={() => props.setCatalogModal(false)}
                className="relative"
              >
                <Link href="/catalog">
                  <a
                    onClick={() => props.setCatalogModal(false)}
                    className={`px-3 py-5 text-sm font-medium  rounded-md hover:underline ${
                      router.pathname === "/catalog" ||
                      router.pathname.includes(
                        "polnaya-informatsiya-o-meditsine"
                      )
                        ? "text-theme-green"
                        : "text-black"
                    }`}
                  >
                    КАТАЛОГ
                  </a>
                </Link>
                {props.catalogModal && (
                  <div className="absolute p-4 pt-8 -left-[557px] right-0 w-[1260px] max-h-64 overflow-y-scroll bg-white border-l border-r border-b rounded-lg cursor-pointer top-8 ml-2">
                    <div className="grid grid-cols-3 ">
                      {props.categories &&
                        props.categories.length > 0 &&
                        props.categories.map((one) => {
                          return (
                            <div key={one.categoryName} className="px-3 py-2 ">
                              <Link
                                href={`/catalog/category/${encodeURI(
                                  one.categoryName
                                )}`}
                              >
                                <h4
                                  onClick={() => props.setCatalogModal(false)}
                                  className="text-base font-semibold text-gray-700 capitalize select-none hover:text-theme-green"
                                >
                                  {one.categoryName}
                                </h4>
                              </Link>
                              {one.subCategoryList &&
                                one.subCategoryList.length > 0 &&
                                one.subCategoryList.map((sub, index) => {
                                  return (
                                    <Link
                                      href={`/catalog/sub/${encodeURI(sub)}`}
                                    >
                                      <h5
                                        onClick={() =>
                                          props.setCatalogModal(false)
                                        }
                                        className="py-1 text-sm font-normal text-gray-500 capitalize select-none hover:text-theme-green"
                                        key={index}
                                      >
                                        {sub}
                                      </h5>
                                    </Link>
                                  );
                                })}
                            </div>
                          );
                        })}
                    </div>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => props.setActivityModal(true)}
                onMouseLeave={() => props.setActivityModal(false)}
                className="relative"
              >
                <Link href="/company-operations">
                  <a
                    onClick={() => props.setActivityModal(false)}
                    className={`px-3 py-5 text-sm font-medium  rounded-md hover:underline ${
                      router.pathname === "/products" ||
                      router.pathname.includes(
                        "polnaya-informatsiya-o-meditsine"
                      )
                        ? "text-theme-green"
                        : "text-black"
                    }`}
                  >
                    ДЕЯТЕЛЬНОСТЬ
                  </a>
                </Link>
                {props.activityModal && (
                  <div className="absolute left-0 w-64 bg-white border rounded-lg shadow-2xl cursor-pointer top-10">
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Направления"
                      )}`}
                    >
                      <a>
                        <h3
                          onClick={() => props.setActivityModal(false)}
                          className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                        >
                          Направления
                        </h3>
                      </a>
                    </Link>
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Оптовые поставки лекарств"
                      )}`}
                    >
                      <a>
                        <h3
                          onClick={() => props.setActivityModal(false)}
                          className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                        >
                          Оптовые поставки лекарств
                        </h3>
                      </a>
                    </Link>
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Поставка онкопрепаратов"
                      )}`}
                    >
                      <a>
                        <h3
                          onClick={() => props.setActivityModal(false)}
                          className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                        >
                          Поставка онкопрепаратов
                        </h3>
                      </a>
                    </Link>

                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Качество и хранение"
                      )}`}
                    >
                      <a>
                        <h3
                          onClick={() => props.setActivityModal(false)}
                          className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                        >
                          Качество и хранение
                        </h3>
                      </a>
                    </Link>
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Доставка"
                      )}`}
                    >
                      <a>
                        <h3
                          onClick={() => props.setActivityModal(false)}
                          className="px-3 py-2 text-sm font-semibold text-gray-600 select-none hover:text-theme-green"
                        >
                          Доставка
                        </h3>
                      </a>
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/stati">
                <a
                  className={`px-3 py-5 text-sm font-medium rounded-md hover:underline ${
                    router.pathname.includes("/stati")
                      ? "text-theme-green"
                      : "text-black"
                  }`}
                >
                  ПРЕСС-ЦЕНТР
                </a>
              </Link>
              <Link href="/contacts">
                <a
                  className={`px-3 py-5 text-sm font-medium text-black rounded-md hover:underline ${
                    router.pathname === "/contacts"
                      ? "text-theme-green"
                      : "text-black"
                  }`}
                >
                  КОНТАКТЫ
                </a>
              </Link>
            </div>
            <div className="flex items-center ">
              <div className="hidden md:block">
                <a href="tel:+789141581503">
                  <BsFillTelephoneFill className="text-xl text-gray-600 cursor-pointer hover:text-green-600" />
                </a>
              </div>
              <div className="flex md:hidden">
                <button
                  onClick={toggleNavbar}
                  className="inline-flex items-center justify-center p-2 text-green-600 rounded-md hover:text-white hover:bg-theme-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <FaBars />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition
        in={Boolean(props.isOpen)}
        timeout={300}
        classNames="drawer"
        unmountOnExit
      >
        {(state) => (
          <>
            <div
              className={`fixed  inset-0 md:hidden w-24 z-10  transition-opacity ${
                state === "entered" ? "opacity-75" : "opacity-0"
              }`}
              onClick={() => handleAllModal(true)}
            ></div>
            <div
              className={`fixed inset-y-0 right-0 md:hidden max-w-full flex flex-col w-64 transition-all ${
                state === "entered" ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="h-full overflow-y-auto border-l border-gray-100 bg-slate-100">
                <div
                  className={`flex items-center ${
                    props.companyModal ||
                    props.catalogModal ||
                    props.activityModal
                      ? "justify-between"
                      : "justify-end"
                  } p-6 cursor-pointer`}
                >
                  {(props.companyModal ||
                    props.catalogModal ||
                    props.activityModal) && (
                    <button
                      className="text-gray-700"
                      onClick={() => handleAllModal(false)}
                      aria-label="Close panel"
                    >
                      <BsArrowLeft
                        className="w-6 h-6 text-theme-green "
                        aria-hidden="true"
                      />
                    </button>
                  )}
                  <button
                    className="text-gray-700"
                    onClick={() => handleAllModal(true)}
                    aria-label="Close panel"
                  >
                    <AiOutlineClose
                      className="w-6 h-6 text-theme-green "
                      aria-hidden="true"
                    />
                  </button>
                </div>
                {!props.companyModal &&
                  !props.catalogModal &&
                  !props.activityModal && (
                    <div className="mt-2">
                      <nav>
                        <div className="flex items-center justify-between pr-8">
                          <Link href="/company-who-we-are">
                            <h4
                              onClick={() => handleAllModal(true)}
                              className="block px-4 py-2 text-lg font-medium cursor-pointer hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                            >
                              О КОМПАНИИ
                            </h4>
                          </Link>
                          <div
                            onClick={() => props.setCompanyModal(true)}
                            className="p-1 hover:bg-white group"
                          >
                            <FaChevronRight className="text-gray-500 cursor-pointer group-hover:text-theme-green " />
                          </div>
                        </div>
                        <div className="flex items-center justify-between pr-8 my-4">
                          <Link href="/company-who-we-are">
                            <h4
                              onClick={() => handleAllModal(true)}
                              className="block px-4 py-2 text-lg font-medium cursor-pointer hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                            >
                              КАТАЛОГ
                            </h4>
                          </Link>
                          <div
                            onClick={() => props.setCatalogModal(true)}
                            className="p-1 hover:bg-white group"
                          >
                            <FaChevronRight className="text-gray-500 cursor-pointer group-hover:text-theme-green " />
                          </div>
                        </div>
                        <div className="flex items-center justify-between pr-8 mb-4">
                          <Link href="/company-operations">
                            <h4
                              onClick={() => handleAllModal(true)}
                              className="block px-4 py-2 text-lg font-medium cursor-pointer hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                            >
                              ДЕЯТЕЛЬНОСТЬ
                            </h4>
                          </Link>
                          <div
                            onClick={() => props.setActivityModal(true)}
                            className="p-1 hover:bg-white group"
                          >
                            <FaChevronRight className="text-gray-500 cursor-pointer group-hover:text-theme-green " />
                          </div>
                        </div>

                        <Link href="/stati">
                          <a
                            onClick={() => handleAllModal(true)}
                            className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                          >
                            ПРЕСС-ЦЕНТР
                          </a>
                        </Link>
                        <Link href="/contacts">
                          <a
                            onClick={() => handleAllModal(true)}
                            className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                          >
                            КОНТАКТЫ
                          </a>
                        </Link>
                      </nav>
                    </div>
                  )}
                {props.companyModal && (
                  <div>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI("О нас")}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        О нас
                      </a>
                    </Link>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Партнеры"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Партнеры
                      </a>
                    </Link>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Лицензии"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Лицензии
                      </a>
                    </Link>
                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Презентация"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Презентация
                      </a>
                    </Link>

                    <Link
                      href={`/company-who-we-are?about=${encodeURI(
                        "Вакансии"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Вакансии
                      </a>
                    </Link>
                  </div>
                )}

                {props.catalogModal && (
                  <div className="overflow-y-auto">
                    {props.categories &&
                      props.categories.length > 0 &&
                      props.categories.map((one) => {
                        return (
                          <div key={one.categoryName}>
                            <Link
                              href={`/catalog/category/${encodeURI(
                                one.categoryName
                              )}`}
                            >
                              <h4
                                onClick={() => handleAllModal(true)}
                                className="block px-4 py-2 text-sm font-semibold capitalize cursor-pointer hover:text-theme-green"
                              >
                                {one.categoryName}
                              </h4>
                            </Link>
                            {one.subCategoryList &&
                              one.subCategoryList.length > 0 &&
                              one.subCategoryList.map((sub, index) => {
                                return (
                                  <Link href={`/catalog/sub/${encodeURI(sub)}`}>
                                    <h5
                                      onClick={() => handleAllModal(true)}
                                      className="block px-4 py-2 mb-1 text-xs font-normal capitalize cursor-pointer hover:text-theme-green"
                                      key={index}
                                    >
                                      {sub}
                                    </h5>
                                  </Link>
                                );
                              })}
                          </div>
                        );
                      })}
                  </div>
                )}

                {props.activityModal && (
                  <div>
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Направления"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Направления
                      </a>
                    </Link>
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Оптовые поставки лекарств"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Оптовые поставки лекарств
                      </a>
                    </Link>
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Поставка онкопрепаратов"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Поставка онкопрепаратов
                      </a>
                    </Link>
                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Качество и хранение"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Качество и хранение
                      </a>
                    </Link>

                    <Link
                      href={`/company-operations?about=${encodeURI(
                        "Доставка"
                      )}`}
                    >
                      <a
                        onClick={() => handleAllModal(true)}
                        className="block px-4 py-2 mb-4 text-lg font-medium hover:bg-theme-red text-background-dark-gray hover:text-theme-green "
                      >
                        Доставка
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
