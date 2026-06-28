import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Woodoo Stadium",
  description: "A photographic gallery of the Stadium 11–11 in atelier, detail and outdoor settings.",
};

const images = [
  { src: "/uploads/foosball_table.jpg", title: "Stadium 11–11 — illuminated", category: "Studio" },
  { src: "/uploads/foosball_table_concrete_1-50694ac5.jpg", title: "Side profile — concrete", category: "Studio" },
  { src: "/uploads/hero.png", title: "Stadium 11–11 — full profile", category: "Detail" },
  { src: "/uploads/foosball_table_concrete_3.jpg", title: "Corner — wordmark detail", category: "Detail" },
  { src: "/uploads/foosball_table_rain.jpg", title: "Rain on steel", category: "Detail" },
  { src: "/uploads/woodoo_stadium_top.png", title: "Top view — playing field", category: "Detail" },
  { src: "/uploads/Hero_1.png", title: "X-frame — dramatic profile", category: "Studio" },
  { src: "/uploads/branded.png", title: "Branded edition", category: "Studio" },
  { src: "/uploads/woodoo_stadium_tubor_branded.png", title: "Tuborg branded edition", category: "Studio" },
  { src: "/uploads/woodoo_stadium_outdoor.png", title: "Rooftop terrace — evening placement", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_58ab0836.jfif", title: "Side profile — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_7bcd012d.jfif", title: "Three-quarter — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_025b30b0.jfif", title: "Top-down — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_232dad1d.jfif", title: "Front profile — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_8227f7dc.jfif", title: "Three-quarter with trees", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_66369433.jfif", title: "Dramatic angle — shadow", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_93dbeb38.jfif", title: "Top-down angle", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_9953d088.jfif", title: "Rain on steel — macro", category: "Detail" },
  { src: "/uploads/woodoo_stadium_side.png", title: "Side — wet steel detail", category: "Detail" },
  { src: "/uploads/woodoo_stadium_side_bespoke.png", title: "Side — bespoke edition", category: "Studio" },
  { src: "/uploads/woodoo_g_lit_studio.jpg", title: "Stadium 11–11 — illuminated", category: "Studio" },
  { src: "/uploads/woodoo_g_studio_profile.jpg", title: "Studio — profile", category: "Studio" },
  { src: "/uploads/woodoo_g_studio_full.jpg", title: "Studio — full profile", category: "Studio" },
  { src: "/uploads/woodoo_g_wordmark_red.jpg", title: "Woodoo — red detail", category: "Studio" },
  { src: "/uploads/woodoo_g_made_in_denmark.jpg", title: "Made in Denmark", category: "Detail" },
  { src: "/uploads/woodoo_g_wordmark_steel.jpg", title: "Wordmark in steel", category: "Detail" },
  { src: "/uploads/woodoo_g_scoring_slider.jpg", title: "Scoring slider — amber", category: "Detail" },
  { src: "/uploads/woodoo_g_handle_dusk.jpg", title: "Handle — dusk", category: "Detail" },
  { src: "/uploads/woodoo_g_underframe.jpg", title: "Beneath the field — steel", category: "Detail" },
  { src: "/uploads/woodoo_g_ball_nightlight.jpg", title: "The ball — night light", category: "Detail" },
  { src: "/uploads/woodoo_g_fixing_ball.jpg", title: "Bracket & ball", category: "Detail" },
  { src: "/uploads/woodoo_g_ball_in_play.jpg", title: "Ball in play", category: "Detail" },
  { src: "/uploads/woodoo_g_grip_wmark.jpg", title: "Grip — W mark", category: "Detail" },
  { src: "/uploads/woodoo_g_panorama.jpg", title: "The field — panorama", category: "Detail" },
  { src: "/uploads/woodoo_g_rail_red.jpg", title: "Rail — red bracket", category: "Detail" },
  { src: "/uploads/woodoo_g_delivery_dusk.jpg", title: "Delivery — evening light", category: "Outdoors" },
  { src: "/uploads/woodoo_g_carry_daylight.jpg", title: "Delivery — daylight", category: "Outdoors" },
  { src: "/uploads/woodoo_g_festival.jpg", title: "Play outdoors — festival", category: "Outdoors" },
];

const categories = ["All", "Studio", "Outdoors", "Detail", "Craft"];

export default function GalleryPage() {
  return (
    <>
      <section className="section section--dark section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto", textAlign: "center", padding: "112px 0" }}>
          <span className="kicker" style={{ color: "rgba(242,238,229,0.4)" }}>Gallery</span>
          <h1 className="h1" style={{ marginTop: "16px" }}>Where it belongs.</h1>
        </div>
      </section>
      <GalleryClient images={images} categories={categories} />
    </>
  );
}