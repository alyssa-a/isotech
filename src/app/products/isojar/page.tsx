import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import Accordion from "@/components/Accordion";
import OrderProductsSection from "../OrderProductsSection";
import isoJarImg from "@/public/images/products/IsoJar.jpg";
import chart1 from "@/public/images/products/isojarschart1.jpg";
import chart2 from "@/public/images/products/isojarschart2.jpg";
import label from "@/public/images/products/IsoJar_Label.png";

export const metadata = {
    title: "IsoJar® | Products | Isotech",
    description: "The IsoJar® is constructed of a durable, clear plastic designed for collecting drill cuttings.",
};

export default function IsoJar() {
    const breadcrumbs= ["Products", "IsoJar®"];
    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoJar®</h1>

            <Image 
                priority
                src={isoJarImg} 
                alt="IsoJar®" 
                width={125}
                height={155}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />
            
            <p className="clearfix">For collecting drill cuttings that have traditionally been sampled into paint cans, we have developed the IsoJar®, constructed of a durable, clear plastic. After extensive testing, we have found there is very little change in either the compositional or isotopic data of gases contained in these jars over time since leakage compared to paint cans is drastically reduced</p>

            <hr className="mb-5"/>

            <div className="row">
                <div className="col-12 col-md-6">
                    <Image 
                        src={chart1} 
                        alt="Graph showing concentrations of C2-C4+ after 2.5 months" 
                        width={490}
                        height={186}
                        className="img-fluid d-block mx-auto"
                    />
                </div>

                <div className="col-12 col-md-6">
                    <Image 
                        src={chart2} 
                        alt="Graph showing isotope data after 5 months in IsoJars®" 
                        width={490}
                        height={208}
                        className="img-fluid d-block mx-auto"
                    />
                </div>
            </div>

            <hr className="mt-5"/>

            <h2 className="mt-4">Sampling Instructions</h2>

            <h3>Procedures for Taking Cuttings Samples</h3>

            <Accordion heading="Samples with OIL BASED MUD for Head Space Analysis" headingLevel={4}>
                <ol>
                    <li>Identify when and where you will collect the sample.</li>
                    <li>Cut a thin slice like a cake and place in the jar (approximately 2 cups).</li>
                    <li>Add 10 drops of the dilute bactericide, Benzalkonium Chloride, to the jar.</li>
                    <li>Screw the lid on as tight as possible.</li>
                    <li>Tape the lid to keep it tight and from vibrating loose during shipment.  Tape in same direction (clockwise) that the lid is screwed on.</li>
                </ol>
            </Accordion>

            <Accordion heading="Samples with WATER BASED MUD for Head Space Analysis" headingLevel={4}>
                <ol>
                    <li>Identify when and where you will collect the sample.</li>
                    <li>Cut a thin slice like a cake and place in the jar (approximately 2 cups).</li>
                    <li>Add water to reach the line on the label.</li>
                    <li><strong>Do not fill</strong> the jar with water as the headspace gap is needed to allow gas to desorb into the gap.</li>
                    <li>Add 10 drops of the dilute bactericide, Benzalkonium Chloride, to the jar.</li>
                    <li>Screw the lid on as tight as possible.</li>
                    <li>Tape the lid to keep it tight and from vibrating loose during shipment. Tape in same direction (clockwise) that the lid is screwed on.</li>
                </ol>
            </Accordion>

            <Accordion heading="Cuttings only Samples" headingLevel={4}>
                <ol>
                    <li>Take cuttings from the shale shaker.</li>
                    <li>Place on sieve of correct size and dip in clean oil based mud.  If using water based mud you may rinse with water.</li>
                    <li>Put cuttings in jar (approximately 2 cups).</li>
                    <li>Only add water to reach the line on the label.</li>
                    <li><strong>Do not fill</strong> the jar with water as the headspace gap is needed to allow gas to desorb into the gap.</li>
                    <li>Leave about a <strong>1-inch gap</strong> between the water and top of the jar.</li>
                    <li>Add 10 drops of the dilute bactericide, Benzalkonium Chloride, to the jar.</li>
                    <li>Screw the lid on as tight as possible.</li>
                    <li>Tape the lid to keep it tight and from vibrating loose during shipment.  Tape in same direction (clockwise) that the lid is screwed on.</li>
                </ol>
            </Accordion>

            <h3 className="mt-4">Recording Sample Information</h3>

            <p>Record sample identification information on the jar label. Be sure to label the IsoJar® with: Well Name, Depth Top, Depth Bottom, Date, Time, and Comment. The following is an example of the label on the jar.</p>

            <Image 
                src={label} 
                alt="Example IsoJar® label" 
                width={400}
                height={134}
                className="img-fluid d-block mx-auto"
            />

            <h3>Packaging Samples</h3>
            <ol>
                <li>Seal lid as tight as possible and tape clockwise to ensure sample integrity.</li>
                <li>After jars are tightly sealed and taped, <strong>place them upside down</strong> in the original shipping box. <strong>If any leaks are detected, transfer the sample to a new IsoJar®®.</strong></li>
                <li>Complete the log sheet included in each box. List the samples being shipped in the box by <strong>Well Name, Depth (ft. or m.), Date, Time (24-hour scale), Company/Contact and Operator.</strong></li>
                <li>Thoroughly seal the box with tape.</li>
            </ol>

            <h3>Sample and Jar Storage</h3>
            <ul>
                <li>Jars are guaranteed for 1 year from the shipment date from Isotech.</li>
                <li>Jars and samples should be stored between 60&deg;F and 80&deg;F.</li>
                <li>In situations where the product may not have been handled or stored properly, the customer is advised to evaluate the product for conformity and suitability for use.</li>
            </ul>

            <p><Link className="button download" href="/files/IsoJar_Sampling_Instructions.pdf">IsoJar® Sampling Instructions (PDF)</Link></p>
            
        </Subpage>

        <OrderProductsSection />

        </>
    );
}