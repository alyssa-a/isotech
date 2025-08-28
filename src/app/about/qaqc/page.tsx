import Image from "next/image";
import Subpage from "@/components/Subpage";
import qcImg from "@/public/images/QC.jpg";

export const metadata = {
    title: "Quality Assurance/Quality Control | About | Isotech",
    description: "Isotech, an ISO 9001:2008 Certified company, is known for the quality of its data.",
};

export default function QualityAssurance() {
    const breadcrumbs = ["About", "Quality Assurance/Quality Control"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Quality Assurance/Quality Control</h1>

            <p>Isotech, an ISO 9001:2008 Certified company, since inception has been known for the quality of its data, as demonstrated by the accompanying comparison graphs. Isotech was co-selected by NIST (National Institute of Standards and Technology) to perform the isotopic calibration of natural gas standards for international distribution.</p>

            <p>In addition to required annual proficiency tests mandated to maintain our ISO17025 accreditation, Isotech participates in round-robin testing whenever the opportunity arises and has participated in studies by the Finnigan Corporation, IAEA, and FIRMS, among others.</p>

            <Image 
                src={qcImg}
                alt="table of analysis results"
                width={800}
                height={812}
                className="img-fluid"
            />

            <p>At least 20% of all analyses performed at Isotech are for QA/QC.</p>

            <h2>Standards</h2>

            <p>We obtain our primary standards from the International Atomic Energy Agency (IAEA) in Vienna, Austria, which are then certified by the National Institute of Standards and Technology (NIST), or from NIST directly. We obtain secondary standards from commercially available sources recognized in the industry. Internal Reference standards are prepared by direct calibration against primary and secondary standards.</p>

            <h2>Check/Reference Samples</h2>

            <p>A check/reference sample is analyzed approximately every tenth analysis. This, is a quality control measure to ensure methodologies are being properly followed. Check/reference samples are chosen which have been analyzed many times over a period of years with consistent results and which are compositionally similar to the samples being analyzed.</p>

            <h2>Standards Duplicate Samples</h2>

            <p>Where appropriate, duplicate analyses are also performed approximately every tenth analysis.</p>
        </Subpage>
    );
}