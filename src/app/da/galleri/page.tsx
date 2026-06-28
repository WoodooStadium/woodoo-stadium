import type { Metadata } from "next";
import GalleryClient from "@/app/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Galleri | Woodoo Stadium",
  description: "Et fotografisk galleri af Stadium 11–11 i atelier, detalje og udendørs omgivelser.",
  alternates: {
    canonical: "https://woodoo-stadium.com/da/galleri",
    languages: { en: "https://woodoo-stadium.com/gallery" },
  },
};

const images = [
  { src: "/uploads/foosball_table.jpg", title: "Stadium 11–11 — oplyst", category: "Studio" },
  { src: "/uploads/foosball_table_concrete_1-50694ac5.jpg", title: "Sideprofil — beton", category: "Studio" },
  { src: "/uploads/hero.png", title: "Stadium 11–11 — fuld profil", category: "Detail" },
  { src: "/uploads/foosball_table_concrete_3.jpg", title: "Hjørne — ordmærke detalje", category: "Detail" },
  { src: "/uploads/foosball_table_rain.jpg", title: "Regn på stål", category: "Detail" },
  { src: "/uploads/woodoo_stadium_top.png", title: "Ovenfra — spillebane", category: "Detail" },
  { src: "/uploads/Hero_1.png", title: "X-ramme — dramatisk profil", category: "Studio" },
  { src: "/uploads/branded.png", title: "Branded udgave", category: "Studio" },
  { src: "/uploads/woodoo_stadium_tubor_branded.png", title: "Tuborg branded udgave", category: "Studio" },
  { src: "/uploads/woodoo_stadium_outdoor.png", title: "Tagterrasse — aftenplacering", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_58ab0836.jfif", title: "Sideprofil — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_7bcd012d.jfif", title: "Tre-kvart — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_025b30b0.jfif", title: "Ovenfra — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_232dad1d.jfif", title: "Frontprofil — park", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_8227f7dc.jfif", title: "Tre-kvart med træer", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_66369433.jfif", title: "Dramatisk vinkel — skygge", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_93dbeb38.jfif", title: "Ovenfra vinkel", category: "Outdoors" },
  { src: "/uploads/woodoo_foosball_original_9953d088.jfif", title: "Regn på stål — makro", category: "Detail" },
  { src: "/uploads/woodoo_stadium_side.png", title: "Side — vådt stål detalje", category: "Detail" },
  { src: "/uploads/woodoo_stadium_side_bespoke.png", title: "Side — bespoke udgave", category: "Studio" },
  { src: "/uploads/woodoo_g_lit_studio.jpg", title: "Stadium 11–11 — oplyst", category: "Studio" },
  { src: "/uploads/woodoo_g_studio_profile.jpg", title: "Studie — profil", category: "Studio" },
  { src: "/uploads/woodoo_g_studio_full.jpg", title: "Studie — fuld profil", category: "Studio" },
  { src: "/uploads/woodoo_g_wordmark_red.jpg", title: "Woodoo — rød detalje", category: "Studio" },
  { src: "/uploads/woodoo_g_made_in_denmark.jpg", title: "Made in Denmark", category: "Detail" },
  { src: "/uploads/woodoo_g_wordmark_steel.jpg", title: "Ordmærke i stål", category: "Detail" },
  { src: "/uploads/woodoo_g_scoring_slider.jpg", title: "Scoreviser — rav", category: "Detail" },
  { src: "/uploads/woodoo_g_handle_dusk.jpg", title: "Håndtag — skumring", category: "Detail" },
  { src: "/uploads/woodoo_g_underframe.jpg", title: "Under banen — stål", category: "Detail" },
  { src: "/uploads/woodoo_g_ball_nightlight.jpg", title: "Bolden — natlys", category: "Detail" },
  { src: "/uploads/woodoo_g_fixing_ball.jpg", title: "Beslag & bold", category: "Detail" },
  { src: "/uploads/woodoo_g_ball_in_play.jpg", title: "Bolden i spil", category: "Detail" },
  { src: "/uploads/woodoo_g_grip_wmark.jpg", title: "Greb — W-mærke", category: "Detail" },
  { src: "/uploads/woodoo_g_panorama.jpg", title: "Banen — panorama", category: "Detail" },
  { src: "/uploads/woodoo_g_rail_red.jpg", title: "Bande — rødt beslag", category: "Detail" },
  { src: "/uploads/woodoo_g_delivery_dusk.jpg", title: "Levering — aftenlys", category: "Outdoors" },
  { src: "/uploads/woodoo_g_carry_daylight.jpg", title: "Levering — dagslys", category: "Outdoors" },
  { src: "/uploads/woodoo_g_festival.jpg", title: "Spil i det fri — festival", category: "Outdoors" },
];

const categories = ["All", "Studio", "Outdoors", "Detail", "Craft"];

export default function DaGalleriPage() {
  return (
    <>
      <section className="section section--dark section--no-top">
        <div className="fade-up" style={{ maxWidth: "72ch", margin: "0 auto", textAlign: "center", padding: "112px 0" }}>
          <span className="kicker" style={{ color: "rgba(242,238,229,0.4)" }}>Galleri</span>
          <h1 className="h1" style={{ marginTop: "16px" }}>Hvor det hører til.</h1>
        </div>
      </section>
      <GalleryClient images={images} categories={categories} />
    </>
  );
}
