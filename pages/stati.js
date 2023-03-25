import React, { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import Pagination from "../components/Pagination";
import BlogThumbnail from "../components/blog/BlogThumbnail";

const Stati = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(100);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentResultsToMap =
    articles &&
    articles.length > 0 &&
    articles.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  useEffect(() => {}, [postsPerPage]);
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <link rel="canonical" href="https://dok-aibolit.ru/stati" />
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
      <section className="pb-12 bg-gray-50 sm:pb-16">
        <div className="px-6 mx-auto max-w-[2000px] lg:px-8">
          <h2 className="pt-8 text-2xl font-semibold leading-8 text-center text-gray-900 md:pt-16">
            Статьи
          </h2>
          <div className="flex flex-wrap gap-4 mx-auto mt-10 ">
            {currentResultsToMap &&
              currentResultsToMap.length > 0 &&
              currentResultsToMap.map((one) => {
                return <BlogThumbnail data={one} key={one._id} />;
              })}
          </div>
          <div className="py-4">
            <Pagination
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={articles && articles.length}
              paginate={paginate}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Stati;

export async function getStaticProps() {
  const allBlogs = axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`);

  const responses = await Promise.all([allBlogs]);

  return {
    props: {
      articles: responses[0].data,
    },
    revalidate: 10,
  };
}
