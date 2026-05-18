import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | WooDoo Stadium",
  description: "A photographic gallery of the Stadium 11–11 in atelier, detail and outdoor settings.",
};

const images = [
  { src: "/uploads/foosball_table.jpg", title: "Atelier hero — Stadium 11-11", category: "Atelier" },
  { src: "/uploads/foosball_table_concrete.jpg", title: "Concrete & steel", category: "Outdoors" },
  { src: "/uploads/foosball_table_2.jpg", title: "X-frame profile", category: "Detail" },
  { src: "/uploads/foosball_table_concrete_1.jpg", title: "Side view — full table", category: "Studio" },
  { src: "/uploads/foosball_table_rain.jpg", title: "Rain on steel — detail", category: "Outdoors" },
  { src: "/uploads/foosball_table_concrete_3.jpg", title: "Detail — corner with wordmark", category: "Detail" },
];

const categories = ["All", "Atelier", "Outdoors", "Detail", "Studio"];

export default function GalleryPage() {
  return (
    <>
      <section className="section section--dark section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto", textAlign: "center", padding: "112px 0" }}>
          <h1 className="h1">Where it belongs.</h1>
        </div>
      </section>

      <GalleryClient images={images} categories={categories} />
    </>
  );
}
