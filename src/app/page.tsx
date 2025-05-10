import styles from "@/css/home.module.scss";
import Link from "next/link";
import Section from "@/components/Section";
import cotton from "@/public/images/cotton.jpg";
import map from "@/public/images/world-map.jpg";

export default function Home() {
    return (
        <>
            <h1 className="visually-hidden">Home</h1>

            <div className={styles.hero}>
                <div className={`slanted-right ${styles.services}`}>
                    <div className="green-bg">
                        <h2 className="text-center">
                            <Link href="/services">
                                <span className="fw-normal">Explore Our</span> 
                                <br/>
                                <span className="text-uppercase fs-1">Services</span>
                            </Link>
                        </h2>
                    </div>
                </div>

                <div className={`slanted-left ${styles.products}`}>
                    <h2 className="text-center">
                        <Link href="/products">
                            <span className="fw-normal">Discover Our</span> 
                            <br/>
                            <span className="text-uppercase fs-1">Products</span>
                        </Link>
                    </h2>
                </div>
            </div>

            <Section className="text-center">
                <div className="mw-800">
                    <h2>The Largest Commercial Stable Isotope Laboratory in the World</h2>

                    <p>Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis - isotopic fingerprinting - for a variety of industries. We have built our reputation on providing superior services delivered by expert staff.</p>

                    <p className="mt-4"><Link className="button" href="/about">More About Isotech</Link></p>
                </div>
            </Section>

            <Section className="bg-img" style={{backgroundImage: `url(${cotton.src})`}}>
                <div className="py-md-4 d-flex justify-content-end">
                    <div className="orange-bg w-lg-50 p-2rem">
                        <h2>Cotton Origin Verification</h2>

                        <p>Do you know where your cotton is from? Is there a risk that your supply chain could be using yarn or fabric in finished products from prohibited regions that use forced labor?</p>

                        <p>Our team has built an extensive library of isotopic compositions of cotton samples from the major cotton producing regions of the world. You can send in raw cotton fiber, unprocessed or processed greige yarn, dyed fabric, or finished products to our facility to confirm your cotton origin.</p>

                        <p className="mt-4 mb-0"><Link className="button orange-bg" href="/services/cotton">Verify the Origin of Your Cotton</Link></p>
                    </div>
                </div>
            </Section>

            <Section 
                className="bg-img text-center"
                style={{
                    backgroundImage: `url(${map.src})`,
                    backgroundColor: "rgba(255,255,255,0.85)",
                    backgroundBlendMode: "lighten"
                }}
            >
                <div className="mw-800">
                    <h2>Satellite Laboratories</h2>

                    <p>Enhancing our service to the oil and gas industry around the globe.</p>

                    <p className="mt-4"><Link className="button" href="/about/satellite-laboratories">See Satellite Labs</Link></p>
                </div>
            </Section>

        </>
    );
}