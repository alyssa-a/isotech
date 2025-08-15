import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import isoscrubberImg from "@/public/images/products/IsoScrubber.jpg";

export const metadata = {
    title: "IsoScrubber® | Products | Isotech",
    description: "The IsoScrubber® strips toxic hydrogen sulfide (H2S) from natural gas for easier shipping to the lab, and allows for chemical and isotopic analysis of the light hydrocarbons",
};

export default function IsoScrubber() {
    const breadcrumbs= ["Products", "IsoScrubber®"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoScrubber®</h1>

            <Image
                priority
                src={isoscrubberImg}
                alt="IsoScrubber®"
                width={256}
                height={44}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Encountering natural gases that contain H<sub>2</sub>S is an increasingly common occurrence. Unfortunately, collecting gases containing H2S in the field and getting them back to the laboratory for analysis can be very problematic as H<sub>2</sub>S is highly toxic and cannot be transported by plane. Additionally, samples containing H<sub>2</sub>S often require expensive, specially treated containers for shipment as hydrogen sulfide is also quite corrosive.</p>

            <p>Isotech&lsquo;s H<sub>2</sub>S IsoScrubber®&reg; provides a solution to these challenges:</p>

            <ul>
                <li>Removes hydrogen sulfide from a gas sample without adversely affecting either the light hydrocarbon isotope values, or the ratios of one light hydrocarbon to another.</li>
                <li>By flushing gas through the H<sub>2</sub>S IsoScrubber®, the resulting sample can then be packaged in the provided shipper, and safely returned to the laboratory without need for HAZMAT shipping.</li>
                <li>Up to 180 milliliters of H<sub>2</sub>S laden gas can be flushed through an H<sub>2</sub>S IsoScrubber® into the provided gas bag (maximum H<sub>2</sub>S concentration: 50% H<sub>2</sub>S. NOTE: CO<sub>2</sub> will be affected both chemically and isotopically.)</li>
            </ul>

            <p>The IsoScrubber® strips toxic hydrogen sulfide (H<sub>2</sub>S) from natural gas for easier shipping to the lab, and allows for chemical and isotopic analysis of the light hydrocarbons.</p>

            <h2>Each sampling kit includes:</h2>

            <ul>
                <li>1 H<sub>2</sub>S IsoScrubber®</li>
                <li>1 60 ml syringe (valve & needle included)</li>
                <li>1 gas sampling bag</li>
                <li>Connector (to attach IsoScrubber® to gas bag)</li>
                <li>Shipper (including paint can) for return shipment to the lab</li>
                <li>Sampling instructions</li>
                <li>Guidelines for return shipment</li>
            </ul>

            <p><Link className="button download" href="/files/IsoScrubber_Product_Flyer.pdf">IsoScrubber® Product Flyer (PDF)</Link></p>

            <h2 className="mt-4">Sampling Instructions</h2>

            <div className="ratio ratio-16x9 w-lg-50">
                <iframe src="https://www.youtube.com/embed/rMkLFqpcKWs?si=Uza_khhjQiN3nUHd" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <p className="mt-4"><Link className="button download" href="/files/IsoScrubber_Sampling_Instructions.pdf">IsoScrubber® Sampling Instructions (PDF)</Link></p>

        </Subpage>
    );
}