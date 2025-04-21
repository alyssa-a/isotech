import Image from "next/image";
import Subpage from "@/components/Subpage";
import fig13 from "@/public/images/cotton/Figure 13_3D plot of cotton origin.png";

export const metadata = {
    title: "Cotton Origin | Services | Isotech",
    description: "",
};

export default function Cotton() {
    const breadcrumbs = ["Services", "Cotton Origin"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Cotton Origin</h1>

            <p>Knowing where cotton was grown ensures compliance with humanitarian practices, consumer expectations, and regulatory requirements. Verifying cotton origin can address if cotton was harvested using forced or child labor, if a product that claims it is “Egyptian Cotton” was actually grown in Egypt, and if a product contains cotton from the Xinjiang Uyghur Autonomous Region (XUAR).</p>

            <p>In 2021, US Customs and Border Protection (CBP) passed the Uyghur Forced Labor Prevention Act to prohibit cotton from the XUAR to be distributed in US markets. The CBP Publication No. 3869-1024 states that isotopic testing of cotton is a tool to verify cotton origin and provides an Isotopic Testing Guide that our facility conforms to. In addition to this, our team has built an extensive library of isotopic compositions of cotton samples from the major cotton producing regions of the world. You can send in raw cotton fiber, unprocessed or processed greige yarn, dyed fabric, or finished products to our facility to verify cotton origin.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={fig13}
                        alt="3D visualization of isotope fingerprints of cotton"
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Expert chemists employ advanced 3D visualization techniques to analyze isotope fingerprints based on carbon, hydrogen, and oxygen isotopic measurements of cotton to correlate with geographic origin.</figcaption>
            </figure>

        </Subpage>
    );
}