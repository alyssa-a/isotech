import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import isotrapImg from "@/public/images/products/isotrap.jpg";

export const metadata = {
    title: "IsoTrap® | Products | Isotech",
    description: "The IsoTrap® converts hydrogen sulfide to a non-hazardous material for easy shipping and subsequent sulfur isotopic analysis.",
};

export default function IsoTrap() {
    const breadcrumbs= ["Products", "IsoTrap®"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoTrap®</h1>

            <Image
                priority
                src={isotrapImg}
                alt="IsoTrap®"
                width={55}
                height={300}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The H<sub>2</sub>S IsoTrap®, from the inventors of the IsoTube®, is designed to help identify the source of H<sub>2</sub>S when encountered. Since hydrogen sulfide cannot be shipped via air when at toxic concentrations, the IsoTrap® converts the H<sub>2</sub>S into a non-hazardous material so that samples can be shipped by any means, including air—without HAZMAT training.</p>

            <p>The preferred method for collecting H<sub>2</sub>S samples with an IsoTrap® is to use our IsoTrap® Sampler. This device was specifically designed for collecting samples from pressurized sources and helps to regulate pressure and control flow through the IsoTrap®. The design incorporates color coding to ensure the sample flows in the proper direction. Samples can then be returned to Isotech for isotope analysis. No HAZMAT shipping is required!</p>

            <p><Link className="button download" href="/files/IsoTrap_Product_Flyer.pdf">IsoTrap® Product Flyer (PDF)</Link></p>

            <h2 className="mt-4">Sampling Instructions</h2>
            
            <p><strong>CAUTION:</strong> Hydrogen sulfide is a highly toxic gas even at low concentrations. All necessary precautions associated with the collection of samples containing hydrogen sulfide and/or which are pressurized, must be taken prior to collecting samples using IsoTraps®.</p>

            <p><strong>IMPORTANT:</strong> The IsoTrap® Sampler includes a pressure regulator that is rated for use up to a maximum inlet pressure of 3000 psig (200 bar). If pressures higher than this could be encountered, additional pressure control will be required.</p>

            <p><strong>From a pressurized source:</strong></p>

            <ol>
                <li>Locate a suitable, vertical port for collecting a sample. A “suitable” port will supply a <strong>dry, liquid-free, gas sample prior to any scrubbers,</strong> and should consist of both a 1/4” female NPT port, and a control valve that can be used to turn the gas on and off.</li>
                <li>Make sure that the threads on the filter of the IsoTrap® Sampler are clean, and wrap 2 or 3 layers of Teflon&reg; tape, clockwise onto the male threads of the filter.</li>
                <li>Screw the IsoTrap® Sampler into the sampling port and then tighten by using a wrench on the body of the filter.</li>
                <li>Divert the vent hose safely away (downwind) from the sampling point.</li>
                <li>Insert the gold valve of the IsoTrap® into the gold chuck by pushing against the spring, until there is enough clearance to insert the red valve into the red chuck. <strong>The IsoTrap® MUST be in this configuration to collect an adequate sample for analysis.</strong></li>
                <li>Turn the delivery pressure adjustment knob all the way counterclockwise (out). Slowly open the control valve on the sampling port. Delivery pressure will be indicated on the outlet pressure gauge. Increase the pressure by turning the knob clockwise (Max. 40 psig).</li>
                <li>Sample should now be flowing through the IsoTrap®. Continue to flow through the IsoTrap® until the light blue indicator has noticably changed color (to brown-black). For low concentrations of H2S (&lt;100 ppm), it is best to flow through the IsoTrap® until the indicator has completely changed from light blue to dark brown.</li>
                <li>
                    Turn the delivery pressure control knob counter clockwise (out) and shut off the control valve. Remove the IsoTrap® from the sampling unit, label it appropriately and return it to: <br/>
                    <strong>
                        Isotech Laboratories, Inc. <br/>
                        Attn. Sample Receiving <br/>
                        1308 Parkland Court <br/>
                        Champaign, IL 61821
                    </strong>
                </li>
                <li>The resulting IsoTraps® are not considered HAZMAT and do not need to be treated as such for return shipment.</li>
            </ol>

            <div className="ratio ratio-16x9 w-lg-50 my-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/jv6PwF7ocV8?si=kEE2IX4rM4_-WbOh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <p><Link className="button download" href="/files/IsoTrap_Sampling_Instructions.pdf">IsoTrap® Sampling Instructions (PDF)</Link></p>

        </Subpage>
    );
}