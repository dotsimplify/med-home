export const formatDate = (date) => {
  const dateStr = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return dateStr;
};

export const copied = async (text, setCopy) => {
  await navigator.clipboard.writeText(text);
  setCopy(true);
};

export const stringClip = (str, length) => {
  if (str.length > length) {
    return str.slice(str, length).concat("...");
  }
  return str;
};

export const schemaGenerator = (data) => {
  let dynamicUrl = process.env.NEXT_PUBLIC_CLIENT_URL + "/stati/" + data.slug;
  return `{
      "@context": "https://schema.org/",
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": ${JSON.stringify(dynamicUrl)}
      },
      "headline": ${JSON.stringify(data.title)},
      "description": ${JSON.stringify(data.description)},
      "image": {
        "@type": "ImageObject",
        "url": ${JSON.stringify(data.coverImage.url)},
        "width": "1280",
        "height": "720"
      },
      "author": {
        "@type": "Person",
        "name": "Admin"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Doktor Ai Blit",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dok-aibolit.ru/logo.png",
          "width": "400",
          "height": "10"
        }
      },
      "datePublished": ${JSON.stringify(data.modified)},
      "dateModified": ${JSON.stringify(data.modified)}
    }`;
};

const urlGenratorForSchema = (arr, baseUrl) => {
  return (
    arr &&
    arr.length > 0 &&
    arr.map((one) => [JSON.stringify(baseUrl + "/" + one)])
  );
};

export const indexPageSchema = (categoryArray) => {
  return ` {
    "@context":"http://schema.org",
    "@type":"SiteNavigationElement",
    "name":${JSON.stringify(categoryArray)},
    "url": [${urlGenratorForSchema(
      categoryArray,
      process.env.NEXT_PUBLIC_CLIENT_URL
    )}]
    }`;
};

export const singleBlogSchemaGenerator = (data) => {
  return `  {
    "@context":"https://schema.org",
    "@type": "BlogPosting",
    "headline": ${JSON.stringify(data.title)},
    "image": ${JSON.stringify(data.images?.url)},
    "editor": ${JSON.stringify(process.env.NEXT_PUBLIC_BLOG_EDITOR_NAME)}, 
    "genre": ${JSON.stringify(process.env.NEXT_PUBLIC_BLOG_GENRE)}, 
    "keywords": ${JSON.stringify(data.tags)}, 
    "wordcount": ${JSON.stringify(data.description.length)},
    "publisher": ${JSON.stringify(
      process.env.NEXT_PUBLIC_ORGANISATION_NAME_FOR_SEO + "Admin"
    )},
    "url": ${JSON.stringify(
      process.env.NEXT_PUBLIC_CLIENT_URL + "/" + data.slug
    )},
    "datePublished": ${JSON.stringify(data.createdAt)},
    "dateCreated": ${JSON.stringify(data.createdAt)},
    "dateModified":${JSON.stringify(data.updatedAt)},
    "description": ${JSON.stringify(data.description)},
    "articleBody": ${JSON.stringify(data.description)},
    "inLanguage": "en-US",
		"isFamilyFriendly": "true"    
  }`;
};

export const aToZ = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const readingTime = (text) => {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
};
