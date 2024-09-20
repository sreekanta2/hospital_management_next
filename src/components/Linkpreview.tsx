/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { JSDOM } from "jsdom";

// Define the types for the meta tag data
interface MetaTags {
  title?: string;
  description?: string;
  image?: string;
}

// Define the types for the LinkPreview component props
interface LinkPreviewProps {
  url: string;
}

// Function to fetch and extract meta tags from a URL
const extractMetaTags = async (url: string): Promise<MetaTags | undefined> => {
  try {
    const response = await fetch(url);

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Extract meta tags from the document
    const metaTags = Array.from(document.querySelectorAll("meta")).reduce(
      (tags: { [key: string]: string }, meta) => {
        const name =
          meta.getAttribute("name") ||
          meta.getAttribute("property") ||
          meta.getAttribute("itemprop");
        const content = meta.getAttribute("content");

        if (name && content) {
          tags[name] = content;
        }
        console.log(tags);
        return tags;
      },
      {}
    );

    // Return an object with the title, description, and image
    return {
      title:
        document.title || metaTags["og:title"] || metaTags["twitter:title"],
      description:
        metaTags.description ||
        metaTags["og:description"] ||
        metaTags["twitter:description"],
      image:
        metaTags.image || metaTags["og:image"] || metaTags["twitter:image"],
    };
  } catch (error) {
    console.error("Error fetching Open Graph details", error);
    return undefined;
  }
};

// LinkPreview component
const LinkPreview = async ({ url }: LinkPreviewProps) => {
  const data = await extractMetaTags(url);

  if (!data) {
    return <p>Failed to fetch link preview.</p>;
  }

  return (
    <Link
      href={url}
      target="_blank"
      className="text-black  w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
      style={{
        textDecoration: "none",
      }}
    >
      <div className="object-cover h-full">
        <img
          src={data.image}
          alt="Link Preview"
          className="object-cover h-full w-[340px] m-0"
        />
      </div>
      <div className="p-4 w-[60%]">
        <h3 className="text-3xl font-bold leading-[2rem] mb-2 ">
          {data.title}
        </h3>
        <p className="text-base line-clamp-3 mb-2">{data.description}</p>
        <span className="mt-3 opacity-50 text-xs">{url}</span>
      </div>
    </Link>
  );
};

export default LinkPreview;
