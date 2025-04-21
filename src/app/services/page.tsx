import "@/css/services.scss";
import Link from "next/link";
import Section from "@/components/Section";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
    title: "Services | Isotech",
    description: "Isotech offers stable and radiogenic isotope analyses of gases, waters, solids and other liquids from a variety of sources.",
};

export default function Services() {
    const breadcrumbs = ["Services"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section>
            <h1>Services</h1>

            <h2 className="mt-4">Laboratory Services</h2>

            <p>At Isotech, we have the capability of measuring carbon, hydrogen, nitrogen, oxygen, and sulfur isotope ratios on a variety of different materials. Examples of some of the materials that can be analyzed are: gas, dissolved gas, carbonates, rock, water, nitrates, fabrics, foods, oils, pharmaceuticals, and plant materials.</p>
            
            <p>Many options are available when ordering isotopic analyses. Analyses are routinely ordered by component, but Isotech has also developed suites to make it simpler for customers to select the proper tests needed for their specific applications. This is especially helpful when certain basic analyses are prerequisites for more extended analyses or when combinations of analysis types are required (ie, gas samples may be subjected to compositional analyses to ensure proper stable and radiogenic isotopic analyses).</p>

            <div className="row mt-4 pt-3">
                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card gas-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/gas" className="stretched-link">Gas</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card water-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/water" className="stretched-link">Water</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card cotton-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/cotton" className="stretched-link">Cotton Origin</Link>
                            </h3>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 mb-4">
                    <div className="card p-5 services-card solid-liquid-card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                <Link href="/services/solids-liquids" className="stretched-link">Solids & Liquids</Link>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Section>

        <Section bgColor="lighter grey">
            <h2>Interpretive Services</h2>

            <p>Our team composes interpretive reports for clients to assess the source, fate, and transport of natural gas and water in the vadose zone, surface water, groundwater aquifers, and oil and gas reservoirs to determine remediation, monitoring, and extraction strategies. We present data using diagnostic plots to identify contaminant sources, assess storage gas operations, or to enhance gas production from reservoirs for clients.</p>

            <p className="mt-4"><Link className="button" href="/services/interpretive">Explore Interpretive Services</Link></p>
        </Section>
        </>
    );
}