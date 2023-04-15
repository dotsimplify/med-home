import React, { useState } from "react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { BsFillCheckCircleFill, BsTruck } from "react-icons/bs";
import SingleProduct from "../../components/products/SingleProduct";

const ProductsByLink = (props) => {
  const router = useRouter();
  if (!router.isFallback && !props.data) {
    return "Loading Article ...";
  }
  const [image, setImage] = useState(props.data?.images[0]?.url);
  const category = props.data.category;
  const filtered =
    props.products &&
    props.products.length > 0 &&
    props.products.filter(
      (single) => single.category == category && single._id !== props.data._id
    );

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="description"
          content="Хотите купить лекарства оптом? Не смотрите дальше! Наш оптовый бизнес по продаже лекарств предлагает доступ к более чем 10 000 различных лекарств с быстрой доставкой в любую точку России."
        />
        <link
          rel="canonical"
          href={`https://dok-aibolit.ru/${props.data.slug}`}
        />
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
        className=" max-w-[2000px] mx-auto"
      >
        <div className=" lg:px-10">
          <div className="flex flex-col items-start justify-between lg:flex-row">
            <div className="w-full md:w-1/3">
              <img
                src={image}
                className=" max-h-[24rem]  object-fill  lg:rounded-tr-[3rem]"
                alt="single"
              />
              <div className="grid grid-flow-row grid-cols-5 gap-4 px-4 mt-4 md:px-4 lg:grid-cols-8 ">
                {props.data.images &&
                  props.data.images.length > 0 &&
                  props.data.images.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => setImage(item?.url)}
                      className="transition-all duration-300 ease-in-out border rounded-lg cursor-pointer hover:shadow-cardShadow"
                    >
                      <img src={item?.url} alt="medicine" />
                    </div>
                  ))}
              </div>
            </div>
            <div className={`lg:w-1/2 w-full lg:py-6 pt-6 px-4 lg:px-16 `}>
              <span className="text-sm capitalize bg-theme-green pr-5 pl-4 rounded-2xl text-white py-1.5 tracking-wider ">
                {props.data.category}
              </span>
              <h1 className="mt-6 text-2xl font-bold tracking-wider text-gray-700 capitalize ">
                {props.data.title}
              </h1>
              <h2 className="pt-4 text-3xl font-bold text-theme-green ">
                {props.data.price} ₽
              </h2>
              <h3 className="pt-4 text-lg tracking-wide text-gray-500 ">
                <BsFillCheckCircleFill className="inline mr-3 text-xl text-theme-green" />
                В наличии
              </h3>
              <h3 className="py-4 text-base tracking-wide text-gray-500 ">
                <BsTruck className="inline mr-3 text-xl text-theme-green" />{" "}
                Экспресс-доставка по всей России
              </h3>
              <a
                href={`https://api.whatsapp.com/send?phone=+79141581503&text=${encodeURI(
                  `Здравствуйте, я хотел бы знать последнюю цену на ${props.data.title}.`
                )}`}
                className="inline-flex px-8 py-2 mt-4 text-lg font-bold text-white transition-all duration-200 border border-transparent rounded bg-theme-green font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                role="button"
              >
                Заказать сейчас
              </a>
            </div>
          </div>

          <div className="w-full mt-4 bg-white lg:w-4/6 lg:mt-10 rounded-xl">
            <h1 className="px-6 font-semibold border-b border-gray-300 py-7">
              Description
            </h1>
            <div
              className="px-6 py-4 space-y-4 "
              dangerouslySetInnerHTML={{ __html: props.data.description }}
            />
          </div>

          {filtered && filtered.length > 0 && (
            <div className="pt-0 pb-12 ">
              <h1 className="pl-2 mt-4 text-2xl font-extrabold text-gray-900 lg:mt-8 lg:text-4xl ">
                Similar listings
              </h1>
              <div className="py-12 overflow-x-auto ">
                <div className=" flex space-x-5 w-[150rem]">
                  {filtered.map((item) => {
                    return <SingleProduct key={item._id} data={item} />;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsByLink;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const posts = await res.data.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/product/${params.slug}`
    );
    const allProducts = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/products`
    );
    const responses = await Promise.all([res, allProducts]);

    return {
      props: {
        data: responses[0].data,
        products: responses[1].data.data,
      },
      revalidate: 30,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
