import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import isoflaskImg from "@/public/images/products/Iso-Flask-Kit.jpg";
import fullnessExample from "@/public/images/products/IsoFlask_Fullness_Example.png";
import OrderProductsSection from "../OrderProductsSection";

export const metadata = {
    title: "IsoFlask | Products | Isotech",
    description: "The IsoFlask is designed specifically for the collection and shipment of groundwater samples for dissolved gas analysis.",
};

export default function IsoFlask() {
    const breadcrumbs= ["Products", "IsoFlask"];
    
    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoFlask</h1>

            <Image
                priority
                src={isoflaskImg}
                alt="IsoFlask Kit"
                width={300}
                height={360}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The IsoFlask is designed specifically for the collection and shipment of groundwater samples for dissolved gas analysis. Its unique design will not alter the quantity or isotopic characteristic of dissolved hydrocarbon gases, making it useful to identify the source of methane, ethane and propane.</p>

            <h2 className="mt-4">Key Advantages</h2>

            <ul>
                <li><Link href="/files/MethaneSamplingMethods_Molofskyetal._GroundwaterJournal_March2016.pdf">Improvement over the direct fill and inverted VOA sampling methods</Link></li>
                <li>Tamper evident ring helps to identify and flag potential variability in sampling protocol</li>
                <li>Pre-inserted bactericide capsule prevents bacterial degradation of the sample</li>
                <li>Includes complete, ready-to-use sampling kit with attachments for proper filling</li>
            </ul>

            <h2 className="mt-4">Specifications</h2>

            <ul>
                <li>Volume: ~750 ml each</li>
                <li>Stand-up pouch design</li>
                <li>Removable Luer<sup>®</sup> self-closing valve and cap configuration with tamper evident ring</li>
                <li>Clear, puncture resistant plastic front with white back to assist in coloration observations</li>
                <li>Temperature Range: +41°F (+5°C) to +122°F (+50°C)</li>
            </ul>

            <p><Link className="button download" href="/files/IsoFlask_Flyer.pdf">IsoFlask Product Flyer (PDF)</Link></p>

            <h2 className="mt-4">Sampling Instructions</h2>

            <ol>
                <li>Sampling source: Water samples should either be collected from a pressurized water system or by using a suitable water pump. When sampling from a pressurized water system, it is recommended to use an outdoor spigot or other source which bypasses any water treatment systems (i.e. water softeners, etc.). When using a pump, it should be capable of maintaining a constant pressure at or above that which exists within the aquifer. This is to ensure that gases dissolved in the water within the aquifer remain dissolved until the water is transferred into an IsoFlask.</li>
                <li>Record sample information onto the IsoFlask using the provided soft-tip, permanent pen.</li>
                <li>Purge the well.</li>
                <li>Attach the fill tube and purge with the source water. A control valve is included on the fill tube to assist in sampling. Use the control valve to stop/start flow into the IsoFlask (after purging).</li>
                <li>The IsoFlasks have been evacuated in advance. A capsule filled with bactericide has also been inserted. A properly evacuated IsoFlask will be tightly held against the bactericide capsule. There is no need to break the capsule even if you don&lsquo;t see it dissolving.  If the IsoFlask appears to have lost vacuum, do not use and contact Isotech for further instruction and/or replacement.</li>
                <li>While the water is flowing attach the fill tube to an evacuated IsoFlask.</li>
                <li>
                    The IsoFlask should be filled with 600-700 cc of water (i.e. to a thickness of about 2 inches). When sufficient sample has been collected, close the sampling valve and quickly disconnect the fitting from the IsoFlask. The water flow can now be turned off and the hose disconnected. NOTE: Do not overfill the IsoFlask (the IsoFlask should not be pressurized).  Sample storage: +41°F (+5°C) TO +122°F (+50°C).

                    <Image
                        src={fullnessExample}
                        alt="Three IsoBags. The first is not full enough. The second is correctly filled to a thickness of about 2 inches. The third is too full."
                        width={700}
                        height={245}
                        className="img-fluid d-block mx-auto mb-3"
                    />
                </li>
                <li>Submission of samples: Place the IsoFlask into its protective box lying flat. Complete a Chain-of-Custody/Analysis Request Form and include it with the sample(s).  Please note Isotech&lsquo;s receiving hours of Monday through Friday 8:00 a.m. to 4:30 p.m.</li>
            </ol>

            <p><Link className="button download" href="/files/IsoFlask_Sampling_Instructions.pdf">IsoFlask Sampling Instructions (PDF)</Link></p>

        </Subpage>

        <OrderProductsSection/>
        </>
    );
}