export default function Navbar() {
    return (
        <div>
    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" style={{width: '3rem', height: '3rem'}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    
        <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>123 Street, New York, USA</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+012 345 6789</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="#" aria-label="Facebook">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="#" aria-label="Twitter">
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href="#" aria-label="Linked-in">
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                    </a>
                    <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href="#" aria-label="Instagram">
                        <i className="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
    </div>
    );
}