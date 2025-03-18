import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import Accordion from "@/components/Accordion";
import cylinderImg from "@/public/images/products/Cylinder.jpg";

export const metadata = {
    title: "Cylinders | Products | Isotech",
    description: "Isotech offers DOT-approved stainless steel gas sampling cylinders and LP gas cylinders for sampling gas at pressures up to 1800 psig.",
};

export default function Cylinders() {
    const breadcrumbs= ["Products", "Cylinders"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Cylinders</h1>

            <Image
                priority
                src={cylinderImg}
                alt="Stainless steel gas cylinder"
                width={336}
                height={76}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <h2 className="mt-4">Stainless Steel Gas Cylinders</h2>

            <p>We offer DOT-approved stainless steel gas sampling cylinders that are cleaned and evacuated after every use. These cylinders are packed in reusable plastic shipping cartons.</p>

            <Accordion heading="Sampling Instructions for Stainless Steel Gas Cylinders" headingLevel={3}>
                <h4>Collection of Gas Samples With Double-Ended Gas Cylinders</h4>

                <ol>
                    <li>Check the pressure on the well or pipeline to be sampled with a reliable pressure gauge.  If the pressure exceeds 1800 psi, <strong>STOP</strong>, a pressure reduction regulator <strong>must</strong> be used to collect the sample as the <strong>maximum rated pressure</strong> for these gas cylinders is <strong>1800 psi</strong>.</li>
                    <li>Remove the end caps from both ends of a cylinder and clean off the threads.  Using the Teflon tape provided, place 2 to 4 wraps of tape on the threads on one of the valves.</li>
                    <li>Locate a valve or gauge port having a ¼” NPT female thread suitable for collecting the sample.  Crack the control valve on the sampling port slightly so that you can hear a small amount of gas escaping.</li>
                    <li>With the gas still flowing slightly (to purge the air from the valve) screw the taped end of the gas cylinder valve into the sampling port as shown on the drawing and snug it down with a wrench.  The control valve can now be fully opened.</li>
                    <li>Carefully open the inlet valve on the cylinder and allow 5 or 10 seconds for the cylinder to become pressurized up to the well pressure.</li>
                    <li>Close the cylinder inlet valve and then open the outlet valve to vent the gas in the cylinder.  Leave the outlet valve open just until you can no longer hear gas escaping, and then close it.</li>
                    <li>Although these cylinders are fully evacuated before sending them to the field, it is advisable to repeat steps 5 and 6 once or twice to insure that all air has been flushed from the connecting line.</li>
                    <li>When the cylinder has been adequately flushed, check to see that the cylinder outlet valve is firmly closed and then open the inlet valve one more time.  Allow 20 or 30 seconds for the cylinder to become pressurized and then close the inlet valve. <strong>Do not use wrenches or pliers to close the valves. They have soft seats and excessive force can ruin them.</strong></li>
                    <li>Close the control valve on the well or pipeline and remove the cylinder.  Be sure to use an adjustable or open-end wrench on the valve body; do not use a pipe wrench on the cylinder as this could loosen the valve from the cylinder.  Clean the used tape off of the thread.</li>
                    <li>Wrap the threads on both ends of the cylinder with Teflon tape and replace the end caps.  Use two wrenches to snug the end caps.  This is important to insure that the sample will not be lost if one of the valves should leak or accidentally open.</li>
                    <li>Record the well name or number, the sample pressure, and the sampling date on the cylinder tag and returnthe cylinder to the shipping carton.  Ship the samples to Isotech as explained in the enclosed shipping instructions.</li>
                </ol>
            </Accordion>

            <p>
                <Link className="button download" href="/files/Stainless_Steel_Cylinders_Sampling_Instructions.pdf">Stainless Steel Gas Cylinders Sampling Instructions (PDF)</Link>
            </p>

            <h2 className="mt-4">LP Gas Cylinders</h2>

            <p>DOT-approved LP tanks are required for shipment of large samples of flammable gas (&gt;5% methane) for tritium analysis of methane. These cylinders are evacuated after every use. We have several battery-operated pumps that can be supplied for filling these tanks.</p>

            <Accordion heading="Sampling Instructions for LP Gas Cylinders" headingLevel={3}>
                <h4>Sample Collection Procedures Using a 12 Volt Pump and Propane Tanks</h4>

                <h5>Setup</h5>
                <ol>
                    <li>Remove the foam packing from the case and, if not already connected, attach the line with the water trap to the inlet of the pump station using the quick-disconnect.</li>
                    <li>Attach the power cord to the cigarette lighter of the field vehicle.  An extension cord is provided and may be used if necessary, but using it will decrease the pumping speed.</li>
                </ol>

                <h5>Purging</h5>
                <ol>
                    <li>Attach the inlet tubing to the monitoring probe or extraction well to be sampled. <strong>IMPORTANT:</strong> extend the outlet line outside of the case and point it away from the case; if combustible gases are pumped into the pump case, <strong>they could be ignited by the pump.</strong></li>
                    <li>Open the rate control valve on the pump station approximately 1/8 turn and turn on the pump switch.</li>
                    <li>Purge the tubing and lines.  <strong>Monitor the vacuum on the inlet.</strong>  Some drop in pressure is normal if sampling a monitoring probe completed with small tubing.  However, if vacuum increases rapidly or exceeds about 10 inches of mercury, it generally indicates that the tubing or well is filled with water.  If this occurs, immediately decrease the pumping rate by partially closing the rate control valve.  If a significant vacuum on the inlet is still observed (more than 5”), turn off the pump to prevent drawing water into the system. If the inlet vacuum gauge reads less than 5, the control valve can be opened another full turn which will provide full pumping rate.</li>
                    <li>Purge the probe or well for a sufficient length of time to remove the gas in the bore of the probe or well, if possible.  If sampling an extraction or vent well that is flowing, a few seconds to purge the pump and tubing is all that is necessary.</li>
                </ol>

                <h5>Collecting a Sample</h5>
                <ol>
                    <li>Remove the plastic cap from one of the sampling cylinders, but <strong>do not open the valve on the cylinder.</strong></li>
                    <li>With the pump running, loosely attach the outlet line to the cylinder so that the threads on the fitting just catch.  Note that on these cylinders, the threads are reversed, so turn counter-clockwise to tighten.  <strong>With the cylinder valve still closed</strong>, push the fitting in tight against the cylinder fitting until a pressure increase on the outlet gauge is observed and then pull the fitting back to allow the pressure to be released.  Repeating this several times will purge the air from the dead volume of the valve.  When the valve is purged, tighten the fitting down with fingers.  It is not necessary to use a wrench on these fittings; the brass f itting seals by pressing against a rubber O-ring, which does not require a lot of pressure to seal.</li>
                    <li>Open the cylinder valve to collect the sample.  The cylinders have been pre-evacuated and therefore purging the cylinder is not necessary.  Note: because the cylinder is under vacuum, the sample will initially be “pulled” into the cylinder very quickly, probably at a rate much quicker than the rate of the pump.  If it is suspected that there is water in the well, care must be taken at this stage so that the water is not pulled into the pump by the faster flow rate.  If it is necessary to slow the rate at this time, use the control valve on the pump, not on the cylinder.  Once the cylinder has reached atmospheric pressure, continue pumping until the cylinder reaches <strong>20 psi</strong>.</li>
                    <li>When the cylinder is filled to 20 psi, close the cylinder valve and then turn off the pump.  Do not over tighten the valve; these valves have a soft seat and need only be tightened down snug.  Over tightening will damage the valve.  Disconnect the cylinder from the tubing and replace the plastic plug into the cylinder valve.</li>
                    <li>Record the sample name or well number, the cylinder pressure, and the date on the sample tag.</li>
                    <li>Fill out the “Analysis Request Form” indicating the analyses to be carried out and return the samples to Isotech following the packing and shipping instructions enclosed.</li>
                </ol>
            </Accordion>

            <p>
                <Link className="button download" href="/files/LP_Cylinders_Sampling_Instructions.pdf">LP Gas Cylinders Sampling Instructions (PDF)</Link>
            </p>

        </Subpage>
    );
}