import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Core pages
      { source: "/omwoodoo", destination: "/da/showroom", permanent: true },
      { source: "/omproduktionen", destination: "/da/showroom", permanent: true },
      { source: "/udlejning", destination: "/da/udlejning", permanent: true },
      { source: "/galleri", destination: "/da/galleri", permanent: true },
      { source: "/kopi-af-udlejning", destination: "/da/showroom", permanent: true },
      { source: "/blog", destination: "/da/blog", permanent: true },
      { source: "/bordene", destination: "/da/bordet", permanent: true },

      // Shop categories
      { source: "/category/komplette-borde", destination: "/da/bordet", permanent: true },
      { source: "/category/all-products", destination: "/da/bordet", permanent: true },
      { source: "/category/tilbeh%C3%B8r", destination: "/da/tilpas", permanent: true },
      { source: "/category/spiller-figurer", destination: "/da/tilpas", permanent: true },
      { source: "/category/reservedele", destination: "/da/tilpas", permanent: true },

      // Shop products
      { source: "/product-page/spillerfigur-pro-alu-gr%C3%B8n", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/100-udend%C3%B8rs-bordfodbold-1", destination: "/da/bordet", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu-bl%C3%A5", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/stang-u-greb-angreb", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu-sort", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/stang-u-greb-forsvar", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/stang-m-8-kant-greb-midtbane-1", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu-r%C3%B8d", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/stang-u-greb-midtbane", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/pro-bordfodbold-m-stadionlys", destination: "/da/bordet", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu-orange", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/bane-underlag", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu-hvid", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/100-udend%C3%B8rs-logo-bord", destination: "/da/bordet", permanent: true },
      { source: "/product-page/overfladebehandling", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/stang-u-greb-m%C3%A5l", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/gummistop", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/stang-m-8-kant-greb-angreb", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu-lilla", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/100-udend%C3%B8rs-bordfodbold-2", destination: "/da/bordet", permanent: true },
      { source: "/product-page/stang-m-8-kant-greb-midtbane", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/spillerfigur-pro-alu-gul", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/stang-m-8-kant-greb-m%C3%A5l", destination: "/da/tilpas", permanent: true },
      { source: "/product-page/100-udend%C3%B8rs-bordfodbold-pro", destination: "/da/bordet", permanent: true },
      { source: "/product-page/100-udend%C3%B8rs-bordfodbold", destination: "/da/bordet", permanent: true },
    ];
  },
};

export default nextConfig;