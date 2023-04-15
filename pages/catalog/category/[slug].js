import React, { useState, useEffect } from "react";
import slugify from "react-slugify";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import SingleProduct from "../../../components/products/SingleProduct";
import Pagination from "../../../components/Pagination";
import CategoryComp from "../../../components/products/CategoryComp";
import CategoryAccordian from "../../../components/products/CategoryAccordian";
import Heading from "../../../components/Heading";
import Breadcrumb from "../../../components/Breadcrumb";
import SubCategoryComp from "../../../components/products/SubCategoryComp";

const Products = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props.categories) {
    return "Loading Products ...";
  }
  const indexedArray =
    props.categories &&
    props.categories.length > 0 &&
    props.categories.findIndex((one) => one.categoryName === router.query.slug);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentResultsToMap =
    props.products &&
    props.products.length > 0 &&
    props.products.slice(indexOfFirstPost, indexOfLastPost);

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
        <link rel="canonical" href="https://dok-aibolit.ru/products" />
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
      <section
        onClick={() => props.isOpen && props.setIsOpen(false)}
        className="pb-12 bg-gray-50 sm:pb-16"
      >
        <div className="md:px-6 mx-auto max-w-[2000px] lg:px-8">
          <Heading text={router.query.slug} />
          <Breadcrumb links={[{ name: router.query.slug }]} />
          {props.relatedSubCategories &&
            props.relatedSubCategories.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3">
                {props.relatedSubCategories.map((one) => {
                  return <SubCategoryComp key={one} category={one} />;
                })}
              </div>
            )}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
            <div className="hidden mt-4 md:block">
              <CategoryAccordian
                indexedArray={[indexedArray]}
                items={props.categories}
              />
            </div>
            <div className="col-span-3 px-3 md:px-0">
              {currentResultsToMap && currentResultsToMap.length > 0 && (
                <div className="grid grid-cols-1 gap-6 mt-10 lg:mt-4 lg:gap-4 lg:grid-cols-4">
                  {currentResultsToMap.map((one) => {
                    return <SingleProduct key={one._id} data={one} />;
                  })}
                </div>
              )}
              {props.products && !props.products.length && (
                <h2 className="py-4 font-medium text-gray-500">
                  Лекарства не найдены
                </h2>
              )}
              <div className="py-4">
                <Pagination
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={props.products && props.products.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const posts = await res.data.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.category },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/products-by-category/${encodeURI(
      params.slug
    )}`
  );
  const getCategories = axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/product-categories`
  );
  const subCategories = axios.get(
    `${
      process.env.NEXT_PUBLIC_API_URL
    }/get-sub-categories-by-category/${slugify(params.slug)}`
  );

  const responses = await Promise.all([res, getCategories, subCategories]);

  return {
    props: {
      products: responses[0].data,
      categories: responses[1].data,
      relatedSubCategories: responses[2].data?.subCategories,
    },
  };
}
