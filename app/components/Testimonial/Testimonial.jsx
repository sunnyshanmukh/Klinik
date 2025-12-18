import "./Testimonial.css";
import testimonialData from "../../data/testimonial.js";

export default function Testimonial() {
    const {Title, Testimonials} = testimonialData;

    return(
        <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">{Title.name}</p>
                <h1>{Title.description}</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                {Testimonials.map((testimonial) => (
                    <div className="testimonial-item text-center" key={testimonial.id}>
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src={testimonial.image} style={{width:"100px",height:"100px"}} alt=""/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>{testimonial.description}</p>
                        <h5 className="mb-1">{testimonial.name}</h5>
                        <span className="fst-italic">{testimonial.position}</span>
                    </div>
                </div>
                ))}               
            </div>
        </div>
    </div>
    );
}