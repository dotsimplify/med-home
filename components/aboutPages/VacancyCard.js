import React from "react";

const VacancyCard = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-4 p-5 mb-4 border rounded-md md:grid-cols-3">
      <div>
        <h1 className="pb-1 text-lg font-semibold text-theme-green">
          Контактное лицо
        </h1>
        <p className="text-sm font-semibold text-gray-500">Менеджер</p>
      </div>
      <div>
        <h1 className="pb-1 text-lg font-semibold text-theme-green">
          Электронная почта
        </h1>
        <p className="text-sm font-semibold text-gray-500">
          office@dok-aibolit.ru
        </p>
      </div>
      <div>
        <h1 className="pb-1 text-lg font-semibold text-theme-green">телефон</h1>
        <p className="text-sm font-semibold text-gray-500">+784212-465888</p>
      </div>
    </div>
  );
};

export default VacancyCard;
