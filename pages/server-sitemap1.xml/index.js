import axios from "axios";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/articles`
  );

  const allGames = await response.data;
  const fields = allGames.map((single) => ({
    loc: `${process.env.NEXT_PUBLIC_CLIENT_URL}/travel-comprehensive-guide/${single.slug}`,
    lastmod: single.updatedAt,
  }));
  return getServerSideSitemap(ctx, fields);
};

export default function ArticleSitemap() {}
