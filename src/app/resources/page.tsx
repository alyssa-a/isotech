import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import placeholderImg from "@/public/images/placeholder.png"

export const metadata = {
    title: "Resources | Isotech",
    description: "",
};

export default function Resources() {
    const breadcrumbs = ["Resources"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section bgColor="green" className="landing-hero">
            <div className="pe-lg-4">
                <h1>Resources</h1>

                <p className="lead mb-0 mb-md-3">Companies from around the world turn to Isotech for help in solving problems through high precision isotopic analysis. We've built a reputation on providing customers with superior sampling products and the best possible technical support.</p>
            </div>

            <Image 
                priority
                src={placeholderImg}
                alt=""
                className="slanted-left"
            />
        </Section>
        </>
    );
}