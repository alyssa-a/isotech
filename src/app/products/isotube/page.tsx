import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import isotubeImg from "@/public/images/products/isotube.png";

export const metadata = {
    title: "IsoTube® | Products | Isotech",
    description: "The next-generation IsoTube® sets the industry standard for mudgas sampling and produced gas sampling.",
};

export default function IsoTube() {
    const breadcrumbs = ["Products", "IsoTube®"];

    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoTube®</h1>

            <Image
                priority
                src={isotubeImg}
                alt="IsoTube"
                width={500}
                height={110}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The original IsoTube® was developed in response to gas sampling and shipping difficulties our customers experienced in the field. Since then, over 1 million IsoTubes® have been sold and used by hundreds of customers around the globe. Now, 20 years later, the next-generation IsoTube® continues to set the industry standard for mud gas and produced gas sampling.</p>

            <h2 className="mt-4">Key Advantages</h2>

            <p><strong>More analysis potential:</strong> IsoTubes® are evacuated to minimize air contamination, and IsoSampler devices are designed to pressurize the collected samples. More gas and minimal air contamination allows the laboratory to generate more data points and improve precision for our customers.</p>

            <p><strong>Faster, more precise sampling:</strong> Evacuated IsoTubes® sample quickly, maximizing data precision at each depth. Data from legacy flow-through systems represents an average gas composition over a wider range of depth in the well, especially when modern field equipment with lower gas flow rates is used.</p>

            <p><strong>Preserves sample integrity:</strong> Each IsoTube® is pressure- and vacuum-tested to ensure sample integrity. Long-term testing shows virtually no chemical or isotopic degradation of gases stored for 3 years or longer.</p>

            <p><strong>Environmentally-friendly:</strong> IsoTubes® are 99.9% recyclable.</p>

            <h2 className="mt-4">Specifications</h2>

            <ul>
                <li>Max. Pressure: 80 psig @ 20°C</li>
                <li>Dimensions: Diameter 32 mm (1.25”), Overall Length 192 mm (7.56”)</li>
                <li>Volume: 110 cc - 3.75 fl. oz.</li>
                <li>Valve: spring-loaded elastomer to metal seal in an over-seat configuration</li>
                <li>Wetted Materials: nitrile rubber, brass, Teflon, and aluminum</li>
                <li>Nonwetted Materials: steel</li>
                <li>IsoTubes® are not suitable for collecting gases containing hydrogen sulfide (H<sub>2</sub>S, sour gas)</li>
                <li>COO: Champaign, Illinois, USA</li>
                <li>Shipping codes: - HTC: 7613000000    ECCN: EAR99</li>
                <li>Conforms to all regulations applicable to DOT-2P/IP7 specifications</li>
                <li>DOT-2P/IP7 is printed on the can</li>
            </ul>

            <p><Link className="button download" href="/files/IsoTube Specification Sheet.pdf">IsoTube® Specification Sheet (PDF)</Link></p>

            <h2 className="mt-4">Sampling Instructions</h2>

            <h3>IsoTube® Equipment</h3>

            <p>IsoTubes® are primarily designed for sampling during mudgas logging. The simple snap-in feature of the IsoSampler Pro allow samples to be taken instantaneously from a flow stream by simply snapping an IsoTube® into the sampling chuck. This can all be done without interfering with the operation of other mud-logging equipment.</p>

            <p><Link href="https://isosampler.com" className="button">Learn more about IsoTube® sampling devices</Link></p>
        </Subpage>

        <OrderProductsSection/>
        </>
    );
}