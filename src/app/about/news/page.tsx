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

            <h2>Cotton Assurance</h2>

            <Image 
                src={cottonImg}
                alt="3D visualization of isotope fingerprints of cotton"
                width={300}
                height={242}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Two substances or materials can appear to be identical, but they might have important differences due to natural variation in the stable isotope values of the molecules. For example, the hydrogen and oxygen isotope values of vegetation will reflect the isotope ratio of the water from the geographic region where the plants were grown.</p>

            <p>For more information about Cotton Assurance download a copy of the brochure or call us at 217-398-3490.</p>

            <p className="clearfix">
                <Link className="button download" href="/files/APDN_CertainT_Isotopes_2024.pdf">Cotton Assurance Brochure</Link>
            </p>

            {/*<hr className="my-4"/>*/}

        </Subpage>
    );
}