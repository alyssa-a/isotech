import "@/css/services.css";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";
import labPlaceholder from "@/public/images/lab-placeholder.jpg";
import gasIcon from "@/public/images/icons/gas.svg";
import waterIcon from "@/public/images/icons/water.svg";
import solidLiquidIcon from "@/public/images/icons/solids-liquids.svg";

export const metadata = {
    title: "Services | Isotech",
    description: "Isotech offers stable and radiogenic isotope analyses of gases, waters, solids and other liquids from a variety of sources.",
};

export default function Services() {
    const breadcrumbs = ["Services"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section bgColor={"green"} className="landing-hero">
            <div className="pe-lg-4">
                <h1>Services</h1>

                <p className="lead mb-0 mb-md-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>

            <Image 
                priority
                src={labPlaceholder}
                alt="lab equipment"
                className="slanted-left"
            />
        </Section>

        <Section>
            <h2>Laboratory Services</h2>

            <p>At Isotech, we have the capability of measuring carbon, hydrogen, nitrogen, oxygen, and sulfur isotope ratios on a variety of different materials. Examples of some of the materials that can be analyzed are: animal materials, natural gas, carbonates, groundwater, nitrates, fabrics, foods, oils, pharmaceuticals, and plant materials.</p>
            
            <p>Many options are available when ordering isotopic analysis. Analysis is routinely ordered by component, but Isotech has also developed suites to make it simpler for customers to select the proper tests needed for their specific applications. This is especially helpful when certain basic analyses are prerequisites for more extended analysis or when combinations of analysis types are required (ie, gas samples may be subjected to compositional, stable isotope, and radiogenic isotope analysis).</p>

            <h3>By Sample Type</h3>

            <div className="row mt-3">
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card p-4 services-card gas-card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <Image 
                                src={gasIcon}
                                alt="Icon of three circles arranged in a triangle"
                                className="mb-3"
                            />
                            <h4 className="card-title text-center"><Link href="/services/gas" className="stretched-link">Gas</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card p-4 services-card water-card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <Image 
                                src={waterIcon}
                                alt="Water droplet icon"
                                className="mb-3"
                            />
                            <h4 className="card-title text-center"><Link href="/services/water" className="stretched-link">Water</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card p-4 services-card solid-liquid-card">
                        <div className="card-body d-flex flex-column align-items-center">
                            <Image 
                                src={solidLiquidIcon}
                                alt="Waves icon"
                                className="mb-3"
                            />
                            <h4 className="card-title text-center"><Link href="#" className="stretched-link">Solids & Liquids</Link></h4>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

        <Section bgColor={"lighter-grey"}>
            <h2>Interpretive Services</h2>

            <p>Our team composes interpretive reports for clients to assess the source, fate, and transport of natural gas and water in the vadose zone, surface water, groundwater aquifers, and oil and gas reservoirs to determine remediation, monitoring, and extraction strategies. We present data using diagnostic plots to identify contaminant sources, assess storage gas operations, or to enhance gas production from reservoirs for clients.</p>

            <p className="mt-4"><Link className="button" href="/services/interpretive">Explore Interpretive Services</Link></p>
        </Section>
        </>
    );
}