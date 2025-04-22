import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import cottonImg from "@/public/images/cotton/Figure 13_3D plot of cotton origin.png";
import isoflaskImg from "@/public/images/products/Iso-Flask-Kit.jpg";
import isotrapImg from "@/public/images/products/isotrap.jpg";
import dicKitImg from "@/public/images/products/DICkit.jpg";

export const metadata = {
    title: "News | About | Isotech",
    description: "The leatest news from Isotech.",
};

export default function News() {
    const breadcrumbs = ["About", "News"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1 className="mb-4">News</h1>

            <h2>CertainT® Cotton Assurance</h2>

            <Image 
                src={cottonImg}
                alt="3D visualization of isotope fingerprints of cotton"
                width={300}
                height={242}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Two substances or materials can appear to be identical, but they might have important differences due to natural variation in the stable isotope values of the molecules. For example, the hydrogen and oxygen isotope values of vegetation will reflect the isotope ratio of the water from the geographic region where the plants were grown.</p>

            <p>For more information about CertainT® Cotton Assurance download a copy of the brochure or call us at 217-398-3490.</p>

            <p className="clearfix">
                <Link className="button download" href="/files/APDN_CertainT_Isotopes_2024.pdf">CertainT® Cotton Assurance Brochure</Link>
            </p>

            <hr className="my-4"/>

            <h2>The IsoFlask®</h2>

            <Image
                src={isoflaskImg}
                alt="isoflask"
                width={300}
                height={360}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p className="clearfix">The <Link href="/products/isoflask">IsoFlask</Link> is the latest sampling product from Isotech. Featuring a unique puncture resistant design, the IsoFlask offers a simplified way to collect and ship dissolved gases in groundwater samples without altering the quantity or isotopic characteristics of the dissolved hydrocarbons.  A tamper evident ring, pre-inserted bactericide capsule, and ready-to-use sampling kit make the IsoFlask the top choice for identifying the source of methane, ethane and propane in water wells.</p>

            <hr className="my-4"/>

            <h2>IsoTrap® sampling device part of industry study</h2>

            <Image
                src={isotrapImg}
                alt="isotrap"
                width={75}
                height={409}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The H<sub>2</sub>S <Link href="/products/isotrap">IsoTrap</Link>, developed by Isotech, was recently part of a study conducted by Shell to help identify the source of H<sub>2</sub>S in a discovered field. Findings were presented at the Petroleum Geoscience Conference & Exhibition (PGCE 2013; Kuala Lumpur, Malaysia) and at the International Meeting on Organic Geochemistry (IMOG 2013; Tenerife, Canary Islands). The IsoTrap is designed to convert hydrogen sulfide into a non-hazardous material for easy transport and subsequent isotopic analysis. The study involved the IsoTrap's role in helping to gather the necessary samples in the field and then subsequent isotopic analysis in Isotech's lab.</p>

            <p className="clearfix">
                <Link className="button download" href="/files/Shell_PGCE2013_AbstractMcKinney.pdf">Read the Case Study</Link>
            </p>

            <hr className="my-4"/>

            <h2>New DIC Sampling Kit</h2>

            <Image
                src={dicKitImg}
                alt="DIC Kit"
                width={300}
                height={237}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p className="clearfix">Isotech has assembled a convenient, all-in-one sampling kit for dissolved inorganic carbons (DIC). Kits include everything required to collect and ship four DIC samples.</p>

        </Subpage>
    );
}