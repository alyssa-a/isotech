import Link from "next/link";
import Image from "next/image";
import placeholder from '@/public/images/placeholder.png';

export default function HSIsotopesTab() {
    return (
        <div className="tab-pane fade" id="HydrogenSulfideIsotopes" role="tabpanel" aria-labelledby="HydrogenSulfideIsotopesTab" tabIndex={0}>
            <h2>Hydrogen Sulfide (H<sub>2</sub>S) Isotopes</h2>
            <p>Hydrogen Sulfide is a toxic gas that is dangerous to human health and is costly to remove from produced gas streams. Our team provides sampling equipment to collect a gas sample to ship without HAZMAT restrictions to determine the sulfur isotopic composition of H<sub>2</sub>S to assess the source of H2S. We also sell equipment to remove H<sub>2</sub>S from gas for analyses of other parameters.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={placeholder}
                        alt="Illustration of BIOCIDE 1"
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Description of the image/graph goes here. Give the user some context... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/>
                <span className="d-block mt-1">Credit: Illustration by Jason Gaspar/Rice University</span></figcaption>
            </figure>

            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Container</h4>
            <p>The H<sub>2</sub>S <Link href="/products/isotrap">IsoTrap</Link>. This sample container is unique in that as sample gas is flowed through the IsoTrap it is converted to a non-hazardous material that can be shipped without HAZMAT protocols. The IsoTrap has a color coded indicator that denotes when enough H<sub>2</sub>S has been captured for analysis. A minimum of 15 psi of pressure is required for gas sample collection.</p>

            <h4>Sample Size</h4>
            <p>Gas is flown through the IsoTrap for isotopic analysis, the volume of gas flown through the IsoTrap is dependent on the concentration of H<sub>2</sub>S in the gas stream.</p>

            <h4>Holding Time</h4>
            <p>After properly collecting a sample, there is no limit on how long an IsoTrap can be stored for.</p>

            <h4>Shipping</h4>
            <p>Do not ship on a Friday as there is no one to receive the sample over the weekend. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
        </div>
    );
}