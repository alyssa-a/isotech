import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import Accordion from "@/components/Accordion";
import OrderProductsSection from "../OrderProductsSection";

export const metadata = {
    title: "IsoSampler™ Pro | Products | Isotech",
    description: "Manifold to efficiently collect mud gas samples into IsoTubes®.",
};

export default function IsoSamplerPro() {
    const breadcrumbs = ["Products", "IsoSampler™ Pro"];

    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoSampler™ Pro</h1>

            <h2 className="mt-4">Dimensions</h2>

            <ul>
                <li>Mounting Holes: 6 x ø 6.35 mm (ø 0.25 in)</li>
                <li>Overall Width: 477.5 mm (18.8 in)</li>
                <li>Overall Height: 132.1 mm (5.2 in)</li>
                <li>Overall Depth: 99.10 mm (3.9 in)</li>
                <li>Rack Units: 3 RU</li>
            </ul>

            <h2>Specifications</h2>
            <ul>
                <li>AC Power Requirements: one NEMA 1-15 or NEMA 5-15 outlet, 90-240 VAC at 1 A max.</li>
                <li>Power Input: 5.5 mm OD x 2.5 mm center-positive barrel jack, 24 VDC at 200 mA max.</li>
                <li>Mounting Options: Wall mount or standard 19” rack mount (3 rack units).</li>
                <li>Flow Connections: SAMPLE GAS INPUT and SAMPLE GAS OUTPUT, 1/4” poly line.
                    <ul>
                        <li>Connection Type: 1/4” push-to-connect.</li>
                    </ul>
                </li>
                <li>Minimum Gas Flow Rate: 140 mL/min</li>
            </ul>

            <h2>Hardware Included</h2>
            <ul>
                <li>AC to DC power supply</li>
                <li>Mounting hardware for rack mount
                    <ul>
                        <li>4x M6 x 10 mm screws</li>
                        <li>4x M6 hex nuts</li>
                    </ul>
                </li>
                <li>4x wood screws for wall mount</li>
                <li>Spare parts kit:
                    <ul>
                        <li>Replacement 65 μm filters</li>
                        <li>Replacement o-rings for chuck assembly</li>
                        <li>Chuck wrench tool</li>
                    </ul>
                </li>
            </ul>

            <h2>Installation</h2>
             <Accordion heading="Selecting the Pump Output Setting" headingLevel={3}>
                <p>The IsoSampler Pro has two pump output settings. <strong>Make sure you have selected the correct pump output setting for your gas flow rate prior to taking a sample, or your samples may be compromised.</strong></p>

                <ul>
                    <li>If your gas flow rate is below 300 mL/min, you need the pump output to be switched to the low-flow setting. If you just purchased your IsoSampler Pro, the factory default setting is low-flow, and you may skip this step.</li>
                    <li>If your gas flow rate is 300 mL/min or greater, you should use the high-flow setting.</li>
                </ul>

                <ol>
                    <li>Remove the fasteners as shown:
                        {/* <Image
                            priority
                            src={fasteners}
                            alt="Remove 6 flat head screws (3 on top and 3 on bottom) and 1 pan head screw"
                            width="800"
                            className="d-block mx-auto img-fluid"
                        /> */}
                    </li>
                    <li>Once the back panel has been removed, find the PUMP OUTPUT switch. Shown below is the factory default setting for LOW-FLOW. Push the toggle lever to the right to select HIGH-FLOW.
                        {/* <Image
                            priority
                            src={switchLow}
                            alt="Switch flipped to the left indicating low pump output"
                            width="500"
                            className="d-block mx-auto img-fluid my-3"
                        /> */}
                    </li>
                    <li>Once the pump output setting has been selected, reverse the disassembly process.</li>
                </ol>
            </Accordion>

            <Accordion heading="Mounting the IsoSampler Pro" headingLevel={3}>
                <p>To rack mount the IsoSampler Pro, use the supplied M6 x 10mm screws and the M6 nuts as shown below. The IsoSampler Pro may also be wall mounted using the supplied wood screws.</p>
                {/* <Image
                    priority
                    src={rack}
                    alt="Diagram showing where to use screws"
                    width="800"
                    className="d-block mx-auto img-fluid"
                /> */}
            </Accordion>

            <Accordion heading="Connecting the sample flow lines and the 24 VDC power" headingLevel={3}>
                <ul>
                    <li>Connect the sample gas inlet and outlet lines as shown below.</li>
                    <li>Connect the power supply barrel jack to the left side of the IsoSampler Pro as shown.</li>
                    <li>Connect the power supply to a NEMA 1-15 or NEMA 5-15 outlet.</li>
                </ul>
            
                {/* <Image 
                    priority
                    src={installed}
                    alt="Diagram of an installed IsoSampler Pro"
                    width="800"
                    className="d-block mx-auto img-fluid"
                /> */}
            </Accordion>

            <h2>Sampling Instructions</h2>
            
            <p><strong>Note: IsoTubes are not suitable for collecting gases containing hydrogen sulfide (H<sub>2</sub>S, sour gas)</strong></p>
            <p>The IsoSampler Pro has two pump output settings. <strong>Make sure you have selected the correct pump output setting for your gas flow rate prior to taking a sample, or your samples may be compromised.</strong> See the <a href="#installation">installation section</a> above for more information.</p>

            <Accordion heading="Step 1: Checking an evacuated IsoTube" headingLevel={3}>
                {/* <Image 
                    priority
                    src={test}
                    alt="Isotube diagram"
                    width="800"
                    className="d-block mx-auto img-fluid"
                /> */}
                
                <ul>
                    <li>Remove a new IsoTube from the plastic film and connect the IsoTube to the pressure gauge by pressing the valve stem into the chuck until it clicks into place.</li>
                    <li>The vacuum reading should be between 25 and 30 inHg. If the reading is not at least 25 inHg of vacuum, do not use the IsoTube. Open another IsoTube and check vacuum to confirm the tube is suitable for use.</li>
                    <li>Once the vacuum level is confirmed, remove the IsoTube from the pressure gauge chuck by pulling back the outer sleeve of the chuck until the IsoTube is released.</li>

                    <p><em>Note: if the equipment is located at altitude, the pressure gauge will read slightly negative before the IsoTube is connected.</em></p>
                </ul>
            </Accordion>

        </Subpage>

        <OrderProductsSection/>
        </>
    );
}