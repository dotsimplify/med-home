// pages/api/revalidate.js
import axios from "axios";
import { getStaticProps } from "../legal/[slug]";

export default async function handler(req, res) {
  try {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.REVALIDATE_SECRET) {
      return res.status(401).json({ message: "Invalid token" });
    }
    // Get all the terms
    const allTerms = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/legal-documents`
    );

    const terms = await allTerms.data;
    const slugs = terms.map((one) => one.slug);
    // Revalidate each page for each slug
    for (const slug of slugs) {
      const { props } = await getStaticProps({ params: { slug } });
      if (props.revalidate) {
        res.setHeader("Cache-Control", "s-maxage=1, stale-while-revalidate");
      }
    }
    return res.status(200).json({ revalidated: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error revalidating pages." });
  }
}
