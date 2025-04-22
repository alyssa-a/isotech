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

            <p>Isotech, an ISO 9001:2008 Certified company, is known for the quality of its data, as demonstrated by the accompanying comparison graphs. Most recently, Isotech was co-selected by NIST (National Institute of Standards and Technology) to perform the isotopic calibration of natural gas standards for international distribution.</p>

            <p>Isotech willingly participates in round-robin testing whenever the opportunity arises and has participated in studies by the Finnigan Corporation, IAEA, and FIRMS. Cross-checks with the Illinois State Geological Survey also are carried out frequently. Three natural gas standards set up by the International Atomic Energy Agency (IAEA) and now maintained by NIST are periodically analyzed.</p>

            <Image 
                src={qcImg}
                alt="table of analysis results"
                width={800}
                height={812}
                className="img-fluid"
            />

            <p>20% of all analyses performed at Isotech are for QA/QC.</p>

            <h2>Standards</h2>

            <p>We obtain our primary standards from the International Atomic Energy Agency in Vienna, Austria, which are then certified by NIST, or from NIST directly. We obtain secondary standards from commercially available sources recognized in the industry. Internal Reference standards are prepared by direct calibration against primary and secondary standards.</p>

            <h2>Check/Reference Samples</h2>

            <p>A check/reference sample is analyzed approximately every tenth analysis. This, in essence, results in a test of the method. Check/reference samples are chosen which have been analyzed many times over a period of years with consistent results and which are compositionally similar to the samples being analyzed.</p>

            <h2>Standards Duplicate Samples</h2>

            <p>Duplicate analyses are also performed approximately every tenth analysis. This duplicate sample analysis is performed approximately five analyses after the check/reference sample analysis is performed. So for a particular analysis procedure, a test of the method is performed every five analyses.</p>

            <h2>Specific Routine Procedures to Assess Performance</h2>

            <p>Reference samples chosen to match the submitted samples as closely as possible, in conjunction with duplicate samples and check samples, provide a matrix for performance evaluation. Control charts of replicate analytical data for reference samples are kept for each analytical method practiced routinely. Control charts are used to check the performance of an instrument and/or analytical technique. Control charts for replicate samples are kept as tables and/or graphs. Graphs are updated daily to monitor for long term changes or trends. If a problem is detected with the reference sample, diagnostic testing is carried out until the cause of the discrepancy is identified.</p>
        </Subpage>
    );
}