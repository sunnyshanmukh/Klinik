import "./Footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
    <div className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-social rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Services</h5>
                    <Link className="btn btn-link" href="">Cardiology</Link>
                    <Link className="btn btn-link" href="">Pulmonary</Link>
                    <Link className="btn btn-link" href="">Neurology</Link>
                    <Link className="btn btn-link" href="">Orthopedics</Link>
                    <Link className="btn btn-link" href="">Laboratory</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Quick Links</h5>
                    <Link className="btn btn-link" href="">About Us</Link>
                    <Link className="btn btn-link" href="">Contact Us</Link>
                    <Link className="btn btn-link" href="">Our Services</Link>
                    <Link className="btn btn-link" href="">Terms & Condition</Link>
                    <Link className="btn btn-link" href="">Support</Link>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h5 className="text-light mb-4">Newsletter</h5>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div className="position-relative mx-auto" style={{maxwidth: '400px'}}>
                        <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="/">Klinik Website</a>, 2025 All Right Reserved.
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        Designed By <a className="border-bottom" href="">Zombie</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div>
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    </div>
  );
}