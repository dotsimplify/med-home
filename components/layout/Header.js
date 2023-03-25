import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const router = useRouter();
  const [scrollPosition, setScrollPosition] = useState(0);

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
      <div className="px-4 mx-auto max-w-[2000px] sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
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
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/products">
                <a
                  className={`px-3 py-2 text-lg font-medium  rounded-md hover:underline ${
                    router.pathname === "/products" ||
                    router.pathname.includes("polnaya-informatsiya-o-meditsine")
                      ? "text-theme-green"
                      : "text-black"
                  }`}
                >
                  Продукты
                </a>
              </Link>
              <Link href="/company-who-we-are">
                <a
                  className={`px-3 py-2 text-lg font-medium  rounded-md hover:underline ${
                    router.pathname === "/company-who-we-are"
                      ? "text-theme-green"
                      : "text-black"
                  }`}
                >
                  Компания
                </a>
              </Link>
              <Link href="/stati">
                <a
                  className={`px-3 py-2 text-lg font-medium rounded-md hover:underline ${
                    router.pathname.includes("/stati")
                      ? "text-theme-green"
                      : "text-black"
                  }`}
                >
                  Статьи
                </a>
              </Link>
              <Link href="/kontakt">
                <a
                  className={`px-3 py-2 text-lg font-medium text-black rounded-md hover:underline ${
                    router.pathname === "/kontakt"
                      ? "text-theme-green"
                      : "text-black"
                  }`}
                >
                  Контакт
                </a>
              </Link>
            </div>
            <div className="flex md:hidden">
              <button
                onClick={toggleNavbar}
                className="inline-flex items-center justify-center p-2 text-green-600 rounded-md hover:text-white hover:bg-theme-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {props.isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -250 }}
        animate={{ opacity: props.isOpen ? 1 : 0, y: props.isOpen ? 0 : -2000 }}
        className="absolute z-30 w-full md:hidden top-16 bg-theme-green"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/products">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:text-white"
            >
              Продукты
            </a>
          </Link>
          <Link href="/company-who-we-are">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:text-white"
            >
              Компания
            </a>
          </Link>
          <Link href="/stati">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:text-white"
            >
              Статьи
            </a>
          </Link>
          <Link href="/kontakt">
            <a
              onClick={() => props.setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium rounded-md text-gray-50 hover:text-white"
            >
              Контакт
            </a>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
