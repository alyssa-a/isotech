import Link from 'next/link';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import placeholder from '@/public/images/placeholder.png';

export default function StableIsotopesTab() {
    return (
        <div className="tab-pane fade" id="StableIsotopes" role="tabpanel" aria-labelledby="StableIsotopesTab" tabIndex={0}>
            <h2>Stable Isotopes</h2>

            <h3>Questions we can answer</h3>
            <ul className="questions mb-0">
                <li>Are deeper brine fluids migrating into a drinking water aquifer?</li>
                <li>What is the source of water in an aquifer?</li>
                <li>What water source(s) is recharging an aquifer?</li>
                <li>Where is water sourced from that is contaminated with nitrate/toxic metals?</li>
                <li>Are injected produced fluids leaking into shallower aquifers?</li>
            </ul>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={placeholder}
                        alt=""
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Description of the image/graph goes here. Give the user some context... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</figcaption>
            </figure>

            <h3 className="mt-4">δD and δ<sup>18</sup>O: Groundwater</h3>
            <p>We have adopted new technologies to analyze the isotopic composition of surface water,  groundwater, and deeper produced brine water. Cavity Ring Down Spectrometry allows us to analyze waters more efficiently and cost effectively.</p>

            <Accordion heading="Sampling Guidelines for Groundwater" headingLevel={4}>
                <h5>Sample Size</h5>
                <p>If you are only analyzing δD and δ<sup>18</sup>O, 2 to 60 mL is sufficient. If you require analysis on smaller volumes please contact us.</p>

                <h5>Sample Container</h5>
                <p>HDPE, plastic, or glass bottle. Plastic is preferred for shipping safety.</p>

                <h5>Preservative</h5>
                <p>None required if only analyzing δD and δ<sup>18</sup>O.</p>

                <h5>Holding Time</h5>
                <p>If the bottle is air tight a year holding time is reasonable.</p>

                <h5>Shipping</h5>
                <p>No special considerations required with shipping. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
            </Accordion>

            <h3 className="mt-4">δD and δ<sup>18</sup>O: Production Waters</h3>
            <p>Production waters and high salinity brines require vacuum distillation and CF-IRMS analysis.</p>

            <Accordion heading="Sampling Guidelines for Production Waters" headingLevel={4}>
                <h5>Sample Size</h5>
                <p>If you are only analyzing δD and δ<sup>18</sup>O, 5 to 60 mL of recoverable water is sufficient. If you require analysis on smaller volumes please contact us.</p>

                <h5>Sample Container</h5>
                <p>HDPE, plastic, or glass bottle. Plastic is preferred for shipping safety.</p>

                <h5>Preservative</h5>
                <p>None required if only analyzing δD and δ<sup>18</sup>O.</p>

                <h5>Holding Time</h5>
                <p>If the bottle is air tight a year holding time is reasonable.</p>

                <h5>Shipping</h5>
                <p>No special considerations required with shipping. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
            </Accordion>

            <h3 className="mt-4">δ<sup>13</sup>C of Dissolved Inorganic Carbon</h3>
            <p>Water samples are acidified and analyzed via a Gas Bench and CF-IRMS.</p>

            <Accordion heading={<>Sampling Guidelines for δ<sup>13</sup>C of DIC</>} headingLevel={4}>
                <h5>Sample Size</h5>
                <p>Minimum-25 mL, ideal-150 mL. If you require analysis on smaller volumes please contact us.</p>

                <h5>Sample Container</h5>
                <p>HDPE, plastic, or glass bottle. Plastic is preferred for shipping safety. The sample should not have air included in the bottle.</p>

                <h5>Preservative</h5>
                <p>Filter the sample with at least a 0.45 micron or smaller pore-size diameter filter. The sample should also be kept on ice to minimize any microbial action.</p>

                <h5>Holding Time</h5>
                <p>If the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>

                <h5>Shipping</h5>
                <p>We recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive sample Monday through Friday.</p>
            </Accordion>
        </div>
    );
}