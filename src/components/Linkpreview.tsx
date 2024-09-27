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
    <div
      style={{
        textDecoration: "none",
        color: "black",
        width: "50%",
        height: "200px",
        cursor: "pointer",
        display: "flex", // Ensure display is set to flex
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        gap: "12px",
        textAlign: "left",
        border: "2px solid white",
      }}
    >
      <div style={{ flexShrink: 0, objectFit: "cover", height: "100%" }}>
        <img
          src="https://www.creowis.com/"
          alt="Link Preview"
          width="340" // Specify width
          height="200" // Specify height
          style={{
            objectFit: "cover",
            height: "100%",
            width: "340px",
            margin: "0",
          }}
        />
      </div>
      <div style={{ padding: "16px", width: "60%" }}>
        <h3
          style={{
            fontSize: "1.875rem",
            fontWeight: "bold",
            lineHeight: "2rem",
            marginBottom: "8px",
          }}
        >
          titlegggggg ggggggg gggggggg gggggg
        </h3>
        <p
          style={{
            fontSize: "1rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "8px",
          }}
        >
          datadescription
        </p>
        <span
          style={{ marginTop: "12px", opacity: "0.5", fontSize: "0.75rem" }}
        >
          lll
        </span>
      </div>
    </div>
  );
};

export default LinkPreview;
