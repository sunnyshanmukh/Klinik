"use client";
import Breadcrump from "../components/Breadcrump/Breadcrump";
import Testimonial from "../components/Testimonial/Testimonial";
import { useEffect } from "react";
import { initHomeCarousels, destroyHomeCarousels } from "../utils/carousel.js";

export default function TestimonialPage() {
    useEffect(() => {
        initHomeCarousels();    
        return () => {
            destroyHomeCarousels();
        };
    }, []);
  return (
    <div>
      <Breadcrump Title="Testimonial"/>
      <Testimonial />
     </div>
  );
}