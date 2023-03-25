import React from "react";
import Link from "next/link";
import { FaTelegram, FaVk, FaLocationArrow } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="bg-gray-200">
      <div className="max-w-[2000px] px-8 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src="/logo.svg" className="h-6 mr-5 sm:h-16" alt="logo" />
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Мы здесь, чтобы помочь вам найти лучшие предложения на
              высококачественные лекарства
            </p>
            <div className="flex mt-8 space-x-6 text-gray-600">
              <a href="tel:+789141581503">
                <RiWhatsappFill className="text-3xl cursor-pointer hover:text-green-600" />
              </a>
              <FaTelegram className="text-3xl cursor-pointer hover:text-sky-600" />
              <FaVk className="text-3xl cursor-pointer hover:text-blue-600" />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-medium">Компания</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/company-who-we-are">
                  <a className="cursor-pointer hover:underline">О компании</a>
                </Link>
                <Link href="/kontakt">
                  <a className="cursor-pointer hover:underline">Контакт</a>
                </Link>
                <Link href="/stati">
                  <a className="cursor-pointer hover:underline">Статьи</a>
                </Link>
              </nav>
            </div>

            <div>
              <p className="font-medium">Полезные ссылки</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/products">
                  <a className="cursor-pointer hover:underline">
                    Все лекарства
                  </a>
                </Link>
                <Link href="/products">
                  <a className="cursor-pointer hover:underline">
                    Лекарства в предложении
                  </a>
                </Link>
                <a
                  className="cursor-pointer hover:underline"
                  href="tel:+789141581503"
                >
                  Горячая линия для лучших предложений
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium">Юридический</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                <Link href="/legal/privacy-policy">
                  <a className="cursor-pointer hover:underline">
                    политика конфиденциальности
                  </a>
                </Link>
                <Link href="/legal/terms-and-conditions">
                  <a className="cursor-pointer hover:underline">
                    Условия эксплуатации
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs text-gray-800">
          © {year} https://dok-aibolit.ru™. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
