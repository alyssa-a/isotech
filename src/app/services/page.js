import Link from "next/link";
import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Services | Isotech",
    description: "At Isotech, we have the capability of measuring carbon, hydrogen, nitrogen, oxygen, and sulfur isotope ratios on a variety of different materials. Isotech also offers stable and radiogenic isotope analyses of gases, waters, solids and other liquids from a variety of sources.",
};

export default function Services() {
    const breadcrumbs = ["Services"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Services</h1>
            
            <h2 className="mt-3">Services by Sample Type</h2>
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

            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Gas</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-center"><Link href="/services/water" className="stretched-link">Water</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Organic Solids & Liquids</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Inorganic Solids</Link></p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="mt-3">Services by Isotope</h2>
            <p>Isotopes are different forms of the same element, differing only in the number of neutrons in the nucleus of the atom. Although some isotopes are unstable and decay radioactively, most are stable. Isotech offers stable and radiogenic isotope analyses of gases, waters, solids and other liquids from a variety of sources.</p>

            <div className="row">
                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="chemical-formula">C</div>
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Carbon</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="chemical-formula">H<sub>2</sub></div>
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Hydrogen</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="chemical-formula">N<sub>2</sub></div>
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Nitrogen</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="chemical-formula">O<sub>2</sub></div>
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Oxygen</Link></p>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 mb-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="chemical-formula">S</div>
                            <p className="card-title text-center"><Link href="#" className="stretched-link">Sulfur</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Subpage>
    );
}