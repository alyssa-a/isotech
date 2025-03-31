import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Shipping Guidelines | Resources | Isotech",
    description: "",
};

export default function ShippingGuidelines() {
    const breadcrumbs = ["Resources", "Shipping Guidelines"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Shipping Guidelines</h1>

            <p>To ensure that your samples arrive safely in our laboratory, we have developed detailed shipping guidelines. For your convenience we have also included MSDS information. All documents are available in PDF format using <Link href="https://get2.adobe.com/reader/">Adobe Acrobat Reader</Link>.</p>

            <ul>
                <li><Link href="/files/IsoTubeSP_UN2037.pdf">Flammable gas samples in IsoTubes® and MSDS for UN2037 (PDF)</Link></li>
                <li><Link href="/files/Shipping Instructions for Gas Samples in LP Tanks.pdf">Gas samples in LP tanks and MSDS for UN1971 (PDF)</Link></li>
                <li><Link href="/files/Natural Gas Shipping Instructions in Cylinders with SDS.pdf">Natural gas samples in cylinders and MSDS for UN1971 (PDF)</Link></li>
                <li><Link href="public/files/International_Shipping.pdf">Special instructions for international shipments (PDF)</Link></li>
            </ul>
            
            <h2 className="mt-4">Shipping Address for Samples</h2>

            <p>
                Stratum Reservoir (Isotech)<br/>
                Sample Receiving<br/>
                1308 Parkland Ct<br/>
                Champaign, IL 61821-1826
            </p>

            <h2 className="mt-4">Chain of Custody Forms</h2>

            <p>When shipping samples to Isotech we highly recommend sending them with a Chain of Custody (COC). The COC includes critical information regarding sample identification, contact information and analysis requests.</p>

            <p>Often in legal proceedings a COC is critical to validate the admissibility of data. We will make contact with the person specified on the COC to confirm analysis requests and expected turnaround times. When your samples are received we will sign the COC and create an electronic copy which will be sent back to you with your results.</p>

            <p>For traceability purposes, please be sure you sign and date the bottom of the form after printing. In addition to shipping the COC with the samples you may also email a copy of the form to us. This helps eliminate any potential transcription errors.</p>

            <p>
                <Link className="button download me-2" href="/files/Fillable_Chain_of_Custody_Form.pdf">Fillable COC (PDF)</Link>
                <Link className="button download" href="/files/Printable_Chain_of_Custody_Form.pdf">Printable COC (PDF)</Link>
            </p>

            <h2 className="mt-4">HAZMAT Certification</h2>

            <p>You must be certified to ship hazardous goods before sending flammable and/or toxic gases to Isotech&lsquo;s laboratory.</p>

            <p>Numerous companies offer training courses at your facility or online. If you&lsquo;re interested in an online course, please contact us and we&lsquo;ll provide you with the necessary information.</p>

        </Subpage>
    );
}