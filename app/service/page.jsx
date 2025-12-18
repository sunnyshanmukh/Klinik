"use client";
import Breadcrump from "../components/Breadcrump/Breadcrump";
import Service from "../components/Service/Service";
import Appointment from "../components/Appointment/Appointment";
import Testimonial from "../components/Testimonial/Testimonial";
import { useEffect } from "react";
import { initHomeCarousels, destroyHomeCarousels } from "../utils/carousel.js";

export default function ServicesPage() {
    useEffect(() => {
        initHomeCarousels();
        return () => {
          destroyHomeCarousels();
        };
      }, []);
  return (
    <div>
      <Breadcrump Title="Our Services"/>
        <Service /> 
        <Appointment />
        <Testimonial/>
    </div>
  );
}