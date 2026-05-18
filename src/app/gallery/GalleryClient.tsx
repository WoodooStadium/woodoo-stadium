"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

interface GalleryClientProps {
  images: GalleryImage[];
  categories: string[];
}

export default function GalleryClient({ images, categories }: GalleryClientProps) {
  const [filter, setFilter] = useState("All");
  const filteredImages = useMemo(
    () => images.filter((image) => filter === "All" || image.category === filter),
    [filter, images]
  );

  return (
    <>
      <section className="section section--no-top">
        <div className="filter-row fade-up" data-delay="1">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-button ${filter === category ? "filter-button--active" : ""}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid fade-up" data-delay="2">
          {filteredImages.map((image) => (
            <div className="cell-photo" key={image.src}>
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div className="overlay">
                <div className="overlay__label">
                  {image.title}
                  <span className="meta">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
