import styles from "@/css/home.module.css";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
    return (
        <>
            <h1 className="visually-hidden">Home</h1>

            <div className={styles.hero}>
                <div className={`slanted-right ${styles.services}`}>
                    <h2 className="text-center">
                        <span className="fw-normal">Explore Our</span> 
                        <br/>
                        <span className="text-uppercase fs-1">Services</span>
                    </h2>
                </div>

                <div className={`slanted-left ${styles.products}`}>
                    <h2 className="text-center">
                        <span className="fw-normal">Discover Our</span> 
                        <br/>
                        <span className="text-uppercase fs-1">Products</span>
                    </h2>
                </div>
            </div>

            <Section className="text-center">
                <div className="mw-800">
                    <h2>The Largest Commercial Stable Isotope Laboratory in the World</h2>

                    <p>Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis - isotopic fingerprinting - for a variety of industries. We have built our reputation on providing superior services delivered by expert staff.</p>

                    <p className="mt-4"><Link className="button" href="#">More About Isotech</Link></p>
                </div>
            </Section>

        </>
    );
}