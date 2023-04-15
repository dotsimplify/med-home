import React from "react";
import axios from "axios";
import Post from "../../components/blog/Post";
import { useRouter } from "next/router";
import Head from "next/head";
import { schemaGenerator, stringClip } from "../../app/helper/helper";

const Slug = ({ data }) => {
  const router = useRouter();
  if (!router.isFallback && !data) {
    return "Loading Article ...";
  }

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
          href={`https://dok-aibolit.ru/stati/${data.slug}`}
        />
        <meta
          name="keywords"
          content="оптовая медицина,оптовые лекарства,оптовая фармацевтика ,медицинские препараты оптом ,оптовая продажа лекарств,лекарства оптом для аптек,оптовая закупка медикаментов,оптовые поставки лекарств,оптовая торговля медикаментами,оптовые поставки фармацевтики, 
          крупный опт медикаментов,качественные медикаменты оптом"
        />

        <title>{data.title}</title>
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
          content={stringClip(data.description, 200)}
        />
        <meta property="og:image" content="https://dok-aibolit.ru/logo.png" />
        <meta name="robots" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={data.title} />
        <meta
          name="twitter:description"
          content={`https://dok-aibolit.ru/${data.slug}`}
        />
        <meta name="twitter:site" content="@doktoraibalit" />
        <meta name="twitter:image" content="https://dok-aibolit.ru/logo.png" />
        <meta name="twitter:creator" content="@doktoraibalit" />

        <script type="application/ld+json">{schemaGenerator(data)}</script>
      </Head>
      <div className="max-w-[2000px] mx-auto">
        <Post data={data} />
      </div>
    </>
  );
};

export default Slug;

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
  const posts = await res.data;

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
      `${process.env.NEXT_PUBLIC_API_URL}/article-by-slug/${params.slug}`
    );
    const data = await res.data;
    return {
      props: { data },
      revalidate: 30,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
