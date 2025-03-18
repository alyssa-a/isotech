import Link from "next/link";
import Section from "@/components/Section";
import placeholder from "@/public/images/pexels-pixabay-248152.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function OrderProductsSection() {
    return (
        <Section bgColor="lighter grey" className="bg-img" style={{backgroundImage: `url(${placeholder.src})`}}>
            <div className="orange-bg w-lg-50 p-2rem">
                <h2>Order Products</h2>

                <p className="mb-0">
                    <span className="d-flex gap-2 align-items-center mb-3"><FontAwesomeIcon icon={faPhone} className="icon"/> (217) 398-3490</span>

                    <span className="d-flex gap-2 align-items-center mb-3"><FontAwesomeIcon icon={faEnvelope} className="icon"/> <Link href="mailto:onlineorders@stratumreservoir.com">onlineorders@stratumreservoir.com</Link></span>

                    <span className="d-flex gap-2 align-items-center"><FontAwesomeIcon icon={faInfoCircle} className="icon"/> <Link href="/products/warranty">Warranty Information</Link></span>
                </p>
            </div>
        </Section>
    );
}