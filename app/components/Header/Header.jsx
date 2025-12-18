"use client";

import "./Header.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pagesRoutes = [
    "/feature",
    "/doctor",
    "/testimonial",
    "/404"
  ];
  const pathname = usePathname();
  const isPagesRoute = pagesRoutes.includes(pathname);
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
      <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>Klinik</h1>
      </Link>
        
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link href="/" className={`nav-item nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link href="/about" className={`nav-item nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                <Link href="/service" className={`nav-item nav-link ${pathname === '/service' ? 'active' : ''}`}>Service</Link>
                <div className="nav-item dropdown">
                    <a href="#" className={`nav-link dropdown-toggle ${isPagesRoute ? 'active' : ''}`} data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                        <Link href="/feature" className={`dropdown-item ${pathname === '/feature' ? 'active' : ''}`}>Feature</Link>
                        <Link href="/doctor" className={`dropdown-item ${pathname === '/doctor' ? 'active' : ''}`}>Our Doctor</Link>
                        <Link href="/testimonial" className={`dropdown-item ${pathname === '/testimonial' ? 'active' : ''}`}>Testimonial</Link>                     
                    </div>
                </div>
                <Link href="/contact" className="nav-item nav-link">Contact</Link>
            </div>
            <Link href="appointment" className={`btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block`}>Appointment<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>
  );
}
