import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import buildingImg from "@/public/images/isotech-building2010.jpg";

export const metadata = {
    title: "About | Isotech",
    description: "",
};

export default function About() {
    const breadcrumbs = ["About"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section bgColor="green" className="landing-hero">
            <div className="pe-lg-4">
                <h1>About</h1>

                <p className="lead mb-0 mb-md-3">The largest commercial stable isotope laboratory in the world, Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis - isotopic fingerprinting - for a variety of industries. We have built our reputation on providing superior services delivered by expert staff.</p>
            </div>

            <Image 
                priority
                src={buildingImg}
                alt="Isotech building"
                className="slanted-left"
            />
        </Section>

        <Section>
            <p>From the original offerings of chemical and stable isotope analysis of natural gases, Isotech has expanded into isotope analyses of other gases, waters, organic and inorganic solids, and organic liquids, completing samples for customers around the world.</p>

            <p>Known for the innovative development of the IsoTube®, IsoJar®, IsoPak™, IsoTrap® and IsoFlask® sampling containers, Isotech sets industry standards for generating the most accurate data possible and providing the highest quality customer service.</p>

            <h2 className="mt-4">Staff</h2>

            <p>Founded in 1985 by Dennis Coleman, Kerry Riley, Jerry Benson and Jack Liu, Isotech now employs 50 chemists, technicians, technologists and support staff dedicated to providing customers with the best possible data and service.</p>

            <p><Link className="button" href="/about/staff">Meet Our Staff</Link></p>

            <h2 className="mt-4">Location and Facilities</h2>

            <p>Isotech&lsquo;s headquarters are located 150 miles south of Chicago in Champaign, Illinois, home of the University of Illinois, the Illinois State Geological Survey, the Illinois Natural History Survey, and the Illinois State Water Survey. We also maintain numerous satellite laboratories in the U.S. and around the world.</p>

            <p>In February 2003, we moved into a new state-of-the-art laboratory facility designed and constructed specifically to meet the requirements of high-precision isotopic analysis. In 2009, we added an additional 13,000 square feet of lab, warehouse and office space. In our on-site workshop, we maintain much of our own equipment, as well as design and construct the equipment needed for special analyses or for sampling under unusual conditions.</p>

            <h2 className="mt-4">Instrumentation</h2>

            <ul>
                <li>12 Isotope Ratio Spectrometers equipped for both compound specific isotope
                analysis of carbon, oxygen, hydrogen and nitrogen isotopes and high-precision dual inlet analysis of carbon, hydrogen and oxygen.</li>
                <li>All instruments are installed in a dedicated room with uninterruptible power supply and a back-up generator to ensure that samples will not be lost due to a power failure during analysis.</li>
                <li>23 Gas Chromatographs for compositional analysis of gases and for preparation of gas samples for isotopic analysis of different species; several are interfaced with vacuum systems for sample preparation.</li>
                <li>Four Low Level Liquid Scintillation Spectrometers in a temperature-controlled environment for Beta counting of tritium.</li>
                <li>Picarro CRDS laser for water isotope analysis.</li>
                <li>Electrolytic enrichment for low-level tritium analysis is carried out in glass electrolysis cells cooled in a refrigerated water bath.</li>
                <li>In addition to routine laboratory facilities such as drying ovens and fume hoods, Isotech maintains numerous glass and metal vacuum systems for various sample preparation procedures.</li>
            </ul>

        </Section>
        
        </>
    );
}