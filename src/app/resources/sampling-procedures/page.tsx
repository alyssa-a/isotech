import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Sampling Procedures | Resources | Isotech",
    description: "",
};

export default function SamplingProcedures() {
    const breadcrumbs = ["Resources", "Sampling Procedures"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Sampling Procedures</h1>

            <p>The following sampling techniques are commonly used by many of Isotech's customers. If you have a unique situation and need further assistance, please <Link href="/about/contact">contact us</Link>. All instructions are available in PDF format using <Link href="https://get2.adobe.com/reader/">Adobe Acrobat Reader</Link>.</p>

            <h2>Mudgas Samples</h2>
            <ul>
                <li><Link href="/files/IsoSampler Pro Quick Start Guide.pdf">IsoSampler™ Pro Quick Start Guide</Link></li>
                <li><Link href="/files/IsoSampler Pro Maintanance Guide.pdf">IsoSampler™ Pro Maintenance Guide</Link></li>
            </ul>

            <h2>Dissolved Gas Samples from Domestic and Municipal Water Wells</h2>
            <ul>
                <li><Link href="/files/IsoFlask_Sampling_Instructions.pdf">Using IsoFlasks®</Link></li>
                <li><Link href="https://www.youtube.com/watch?v=ZkZ-8ySx3FA">IsoFlask® Sampling Video</Link></li>
            </ul>

            <h2>Wellhead and Pipeline Natural Gas Samples</h2>
            <ul>
                <li><Link href="/files/Stainless_Steel_Cylinders_Sampling_Instructions.pdf">In double-ended gas cylinders</Link></li>
                <li><Link href="/files/IsoSampler GO to collect gas sample from wellhead.pdf">IsoSampler™ GO to collect gas sample from wellhead</Link></li>
            </ul>

            <h2>Hydrogen Sulfide Samples</h2>
            <ul>
                <li><Link href="/files/IsoTrap_Sampling_Instructions.pdf">Using IsoTrap®</Link></li>
                <li><Link href="https://www.youtube.com/watch?v=jv6PwF7ocV8">IsoTrap® Sampling Video</Link></li>
                <li><Link href="/files/IsoScrubber_Sampling_Instructions.pdf">Using IsoScrubber®</Link></li>
                <li><Link href="https://www.youtube.com/watch?v=rMkLFqpcKWs">IsoScrubber® Sampling Video</Link></li>
            </ul>

            <h2>Soil-Gas Samples</h2>
            <ul>
                <li><Link href="/files/IsoBag_Sampling_Instructions.pdf">In gas bags with a hand pump</Link></li>
                <li><Link href="https://www.youtube.com/watch?v=OnUNlGOFIlg">IsoBag® Sampling Video</Link></li>
            </ul>

            <h2>Cuttings/Mud Samples</h2>
            <ul>
                <li><Link href="/files/IsoJar_Sampling_Instructions.pdf">In IsoJars®</Link></li>
            </ul>

            <h2>Landfill Gas Sampling for Tritium</h2>
            <ul>
                <li><Link href="/files/LP_Cylinders_Sampling_Instructions.pdf">LP Cylinders for landfill gas sampling</Link></li>
            </ul>

            <h2>Water Chemistry Samples</h2>
            <ul>
                <li><Link href="/files/Water Chemistry Kit Sampling Instructions.pdf">Water Chemistry Kit Sampling Instructions</Link></li>
            </ul>

        </Subpage>
    );
}