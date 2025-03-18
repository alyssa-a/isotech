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

                <p className="lead mb-0 mb-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
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