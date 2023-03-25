import React, { useState } from "react";
import { TbDiscount2 } from "react-icons/tb";
import { MdCategory } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";

const Points = () => {
  return (
    <div className="z-10 py-16 overflow-hidden bg-white cursor-default ">
      <div className=" px-6 m-auto space-y-8 mx-auto  max-w-[2000px] text-gray-500 md:px-12">
        <div>
          <span className="px-4 py-2 text-sm font-medium rounded-lg shadow-lg text-gray-50 bg-theme-green">
            Функции
          </span>
          <h2 className="mt-6 text-2xl font-bold text-gray-900 md:text-4xl">
            Идеальное место для покупки лекарств оптом
          </h2>
        </div>
        <div className="grid mt-16 overflow-hidden border divide-x divide-y rounded-xl sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-3">
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative px-8 pt-8 space-y-8">
              <TbDiscount2 className="text-5xl text-red-600" />
              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition ">
                  Предложения и скидки
                </h5>
                <p className="text-sm text-gray-600">
                  Мы предлагаем одни из самых конкурентоспособных цен в отрасли,
                  гарантируя нашим клиентам лучшее соотношение цены и качества.
                </p>
              </div>
            </div>
          </div>

          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <MdCategory className="text-5xl text-indigo-500" />

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition ">
                  Более 9500 + Лекарства
                </h5>
                <p className="text-sm text-gray-600 ">
                  Все наши лекарства получены от известных производителей и
                  поставщиков, гарантируя, что вы получите лекарства самого
                  высокого качества.
                </p>
              </div>
            </div>
          </div>
          <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div className="relative p-8 space-y-8">
              <GiCommercialAirplane className="text-5xl text-green-700" />

              <div className="space-y-2">
                <h5 className="text-xl font-medium text-gray-800 transition ">
                  Экспресс-доставка
                </h5>
                <p className="text-sm text-gray-600">
                  Мы понимаем важность своевременной доставки, поэтому мы
                  предлагаем варианты мгновенной доставки для наших клиентов.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Points;
