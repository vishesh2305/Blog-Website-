import { Typography } from "@material-tailwind/react";
import React from "react";

function HeroSection() {
  return (
    <section className="m-10 hero-section-container">
      <div className="p-10 rounded-l-xl border border-blue-gray-100 hero-section-content-container flex flex-col items-center justify-center rounded-[10px]">
        <Typography variant="h3" color="blue-gray" className="hero-section-heading text-center">
          Blog Spot
        </Typography>
        <p className="hero-section-para text-center ">
          Create Your Blogs
        </p>
      </div>
    </section>
  );
}

export default HeroSection;