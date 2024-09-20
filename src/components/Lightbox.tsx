"use client";
import { useCallback, useState } from "react";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";
import lgZoom from "lightgallery/plugins/zoom";
import LightGallery from "lightgallery/react";
import Image from "next/image";

// Define an interface for the gallery items
interface GalleryItem {
  id: string;
  src: string;
  thumb: string;
  size?: string; // Optional field for the data-lg-size attribute
}

export default function LightBox() {
  const [items] = useState<GalleryItem[]>([
    {
      id: "1",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-01.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-01.jpg",
    },
    {
      id: "2",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-02.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-02.jpg",
    },
    {
      id: "3",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-02.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-03.jpg",
    },
    {
      id: "4",
      src: "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-04.jpg",
      thumb:
        "https://doccure.dreamstechnologies.com/html/template/assets/img/features/feature-04.jpg",
    },
  ]);

  const getItems = useCallback(() => {
    return items.map((item) => (
      <a
        key={item.id}
        data-lg-size={item.size}
        className="gallery-item"
        data-src={item.src}
      >
        <Image
          className="rounded-md"
          src={item.thumb}
          alt="image"
          width={50}
          height={40}
        />
      </a>
    ));
  }, [items]);

  return (
    <div>
      <LightGallery
        plugins={[lgZoom]}
        elementClassNames="flex gap-2 w-52"
        zoom={true} // Set zoomable directly as a prop
        addClass="opacity-1" // Corrected to addClass instead of addclassName
      >
        {getItems()}
      </LightGallery>
    </div>
  );
}
