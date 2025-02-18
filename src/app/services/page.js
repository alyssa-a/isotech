import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Services | Isotech",
    description: "Isotech offers stable and radiogenic isotope analyses of gases, waters, solids and other liquids from a variety of sources.",
};

export default function Services() {
    const breadcrumbs = ["Services"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Services</h1>
            
            <h2 className="mt-3">Analytical Services</h2>
            <p>At Isotech, we have the capability of measuring carbon, hydrogen, nitrogen, oxygen, and sulfur isotope ratios on a variety of different materials. Examples of some of the materials that can be analyzed are:</p>
            <ul className="col-list-3">
                <li>animal materials</li>
                <li>natural gas</li>
                <li>carbonates</li>
                <li>groundwater</li>
                <li>nitrates</li>
                <li>fabrics</li>
                <li>foods</li>
                <li>oils</li>
                <li>pharmaceuticals</li>
                <li>plant materials</li>
            </ul>
            <p>Many options are available when ordering isotopic analysis. Analysis is routinely ordered by component, but Isotech has also developed suites to make it simpler for customers to select the proper tests needed for their specific applications. This is especially helpful when certain basic analyses are prerequisites for more extended analysis or when combinations of analysis types are required (ie, gas samples may be subjected to compositional, stable isotope, and radiogenic isotope analysis).</p>

            <h3>By Sample Type</h3>
            <div className="row mt-3">
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center"><Link href="#" className="stretched-link">Gas</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center"><Link href="/services/water" className="stretched-link">Water</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title text-center"><Link href="#" className="stretched-link">Solids & Liquids</Link></h4>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="mt-3">Interpretive Services</h2>
            <p>lorem ipsum...</p>

            
        </Subpage>
    );
}