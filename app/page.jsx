"use client";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Service from "./components/Service/Service.jsx";
import Feature from "./components/Feature/Feature.jsx";
import Team from "./components/Doctor/Doctor.jsx";
import Appointment from "./components/Appointment/Appointment.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";

import { useEffect } from "react";
import { initHomeCarousels, destroyHomeCarousels } from "./utils/carousel.js";

export default function Home() {
  useEffect(() => {
    initHomeCarousels();
    return () => {
      destroyHomeCarousels();
    };
  }, []);
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Feature />
      <Team limit={4} />
      <Appointment />
      <Testimonial />
    </div>
  );
}
