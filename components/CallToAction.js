import React, { useState } from "react";
import Link from "next/link";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const CallToAction = () => {
  const testimonials = [
    {
      image: "/images/testinomy1.jpg",
      name: "Игорь Герасимов",
      position: "Красноярск",
      words:
        "Я уже довольно давно покупаю лекарства в этой оптовой компании, и должен сказать, что их продукция имеет первоклассное качество. Лекарства всегда доставляют вовремя, проблем с их услугами никогда не было.",
    },

    {
      image: "/images/testinomy3.jpg",
      name: "Андрей Полщиков",
      position: "Екатеринбург",
      words:
        "продукты имеют отличное качество, и их обслуживание клиентов является выдающимся. По моему опыту, они мгновенно отвечали на каждый мой запрос.",
    },

    {
      image: "/images/testinomy5.jpg",
      name: "Екатерина Кирсанова",
      position: "Омск",
      words:
        "Недавно я открыл новый аптечный бизнес и искал оптового поставщика лекарств. Наткнулась на эту компанию, чему очень рада. Их продукция превосходна, а цены очень разумны.",
    },
    {
      image: "/images/testinomy2.jpg",
      name: "Денис Михайлов",
      position: "Сочи",
      words:
        "Очень доволен продуктами и услугами этой оптовой медицинской компании. У них есть широкий ассортимент лекарств, и я никогда не сталкивался с проблемами с качеством их продукции. Их цены также очень разумны, что облегчает мне покупку необходимых лекарств оптом.",
    },
    {
      image: "/images/testinomy4.jpg",
      name: "Алена Ручкина",
      position: "Новосибирск",
      words:
        "Являюсь постоянным клиентом этой оптовой фармацевтической компании уже несколько лет и ни разу не разочаровался. Их продукция отличного качества, а цены очень конкурентоспособны. Я ценю индивидуальное обслуживание клиентов, которое они обеспечивают, и я всегда чувствую себя ценным клиентом.",
    },
  ];
  // State for keeping track of the current testimonial index
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  // Function for handling the next button click
  const handleNextButtonClick = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex + 1) % testimonials.length
    );
  };

  // Function for handling the previous button click
  const handlePrevButtonClick = () => {
    setCurrentTestimonialIndex(
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section className="py-10 mx-auto  max-w-[2000px] bg-gray-100 sm:py-16 lg:pt-24 lg:pb-12">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div>
            <img
              className="object-cover w-16 h-16 rounded-full"
              src={testimonials[currentTestimonialIndex].image}
              alt="Testinomial"
            />
            <blockquote>
              <p className="mt-6 text-lg leading-relaxed text-black">
                “{testimonials[currentTestimonialIndex].words}”
              </p>
            </blockquote>
            <p className="mt-6 text-base font-semibold text-black">
              {testimonials[currentTestimonialIndex].name}
            </p>
            <p className="mt-1 text-base text-gray-600">
              {testimonials[currentTestimonialIndex].position}
            </p>

            <div className="flex justify-start mt-8">
              <BsArrowLeftCircle
                className="mr-4 text-3xl cursor-pointer text-theme-green hover:text-black"
                onClick={handlePrevButtonClick}
              />
              <BsArrowRightCircle
                className="text-3xl cursor-pointer text-theme-green hover:text-black"
                onClick={handleNextButtonClick}
              />
            </div>
          </div>

          <div>
            <div className="overflow-hidden bg-white">
              <div className="p-8 lg:px-12 lg:py-10">
                <h3 className="text-2xl font-semibold text-black select-none">
                  Мы здесь, чтобы помочь вам
                </h3>
                <p className="mt-4 text-base text-gray-600 select-none">
                  Наши команды работают над тем, чтобы обеспечить лучший
                  потребительский опыт и описательную информацию для ваших
                  запросов.
                </p>
                <Link href="/kontakt">
                  <a
                    className="flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 border-2 border-transparent rounded-md bg-theme-green hover:bg-theme-green/80 "
                    role="button"
                  >
                    Подключиться сейчас
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
