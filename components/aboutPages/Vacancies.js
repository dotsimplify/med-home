import React from "react";
import VacancyCard from "./VacancyCard";
import Faq from "../Faq";

const jobs = [
  {
    question: "Фармацевт (работа в офисе)",
    answer: `<h1>Должностные обязанности:</h1>


   <p> - Работа с клиентами по телефону - входящие звонки, исходящие звонки,</p>
   <p> - Обработка заказов от клиентов (розница и мелкий опт), формирование КП, выставление счетов, подготовка сопроводительной документации,</p>
   <p> - Контроль доставки заказов до клиента,</p>
   <p> - Ведение базы данных клиентов,</p>
   <p> - Мониторинг рынка фармпрепаратов, актуализация базы данных фармпрепаратов.</p>
<p>
    Требования:</p>
    
    <p>- Высшее/среднее медицинское или фармацевтическое образование,</p>
    <p>- Опыт работы на фармацевтическом рынке от 2 лет,</p>
    <p>- Владение ПК (Exсel, 1С),</p>
    <p>- Коммуникабельность,</p>
    <p>- Инициативность,</p>
    <p>- Активность.</p>
    
   <p> Условия:</p>
    
   <p> - 5/2 (с 9:00-18:00), сб-вс - выходной (в месяц 2 субботы рабочие с 10-15 ч. (время зависит от кол-ва заказов),</p>
   <p> - Оклад + премии по итогам выполнения плана,</p>
    <p>- Трудоустройство согласно ТК РФ.</p>`,
  },
];

const Vacancies = () => {
  return (
    <div className="px-4 bg-white sm:px-6 lg:pb-16 lg:px-8">
      <div className="mx-auto max-w-[2000px]">
        <div className="">
          <VacancyCard />
          <p className="text-base font-semibold leading-8 tracking-tight text-gray-600 md:font-extrabold sm:text-xl">
            На данный момент открыты следующие вакансии
          </p>
          <div className="mt-6 space-y-4 ">
            {jobs.map((one, index) => {
              return <Faq key={index} data={one} html />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
