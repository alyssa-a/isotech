import Link from 'next/link';
import Image from 'next/image';
import stableIsotopesImg from '@/public/images/water/Fig. 2 Stable Isotopes of water.jpg';

export default function StableIsotopesTab() {
    return (
        <div className="tab-pane fade" id="StableIsotopes" role="tabpanel" aria-labelledby="StableIsotopesTab" tabIndex="0">
            <h2>Stable Isotopes</h2>

            <figure className="figure float-md-end ms-md-4 mb-4">
                <Image 
                    src={stableIsotopesImg}
                    alt="Diagram of a seawater barrier injection well preventing saltwater intrusion into a drinking water aquifer"
                    width="450"
                    height="231"
                    className="figure-img img-fluid"
                />
                <figcaption className="figure-caption">Photo credit: <Link href="https://southbaycities.org/groundwater-desalination-how-do-we-create-a-drought-proof-water-supply/">South Bay Cities Council of Governments</Link></figcaption>
            </figure>

            <div>
                <h3>Queries addressed by this analysis</h3>
                <ul className="questions">
                    <li>Are deeper brine fluids migrating into a drinking water aquifer?</li>
                    <li>What is the source of water in an aquifer?</li>
                    <li>Does recharge to an aquifer come from groundwater or surface water (precipitation)?</li>
                    <li>Where is water sourced from that is contaminated with nitrate/toxic metals?</li>
                    <li>Are injected produced fluids leaking into shallower aquifers?</li>
                </ul>
            </div>

            <h3 className="mt-4">δD and δ<sup>18</sup>O: Groundwater</h3>
            <p>We have adopted new technologies to analyze the isotopic composition of surface water,  groundwater, and deeper produced brine water. Cavity Ring Down Spectrometry allows us to analyze waters more efficiently and cost effectively.</p>

            <div className="accordion mb-4" id="samplingGW">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingGWGuidelines" aria-expanded="false" aria-controls="samplingGWGuidelines">
                            Sampling Guidelines for Ground/Surface Waters
                        </button>
                    </h4>

                    <div id="samplingGWGuidelines" className="accordion-collapse collapse" data-bs-parent="#samplingGW">
                        <div className="accordion-body">
                            <h5>Sample Size</h5>
                            <p>If you are only analyzing δD and δ<sup>18</sup>O, 2 to 60 mL is sufficient. If you require analysis on smaller volumes please contact us.</p>

                            <h5>Sample Container</h5>
                            <p>HDPE, plastic, or glass bottle. Plastic is preferred for shipping safety.</p>

                            <h5>Preservative</h5>
                            <p>None required if only analyzing δD and δ<sup>18</sup>O.</p>

                            <h5>Holding Time</h5>
                            <p>If the bottle is air tight a year holding time is reasonable.</p>

                            <h5>Shipping</h5>
                            <p>No special considerations required with shipping. Please include a <Link href="#">COC</Link>.</p>
                            <p><strong>Expected Turnaround Time</strong></p>
                            <ul>
                                <li>Standard Service: 10 business days</li>
                                <li>Rush Service: 3 business days<br/>
                                <em>Advance arrangements required for rush service</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="mt-4">Production Waters</h3>
            <p>Production waters and high salinity brines require vacuum distillation and CF-IRMS analysis.</p>

            <div className="accordion mb-4" id="samplingPW">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingPWGuidelines" aria-expanded="false" aria-controls="samplingPWGuidelines">
                            Sampling Guidelines for Production Waters
                        </button>
                    </h4>

                    <div id="samplingPWGuidelines" className="accordion-collapse collapse" data-bs-parent="#samplingPW">
                        <div className="accordion-body">
                            <h5>Sample Size</h5>
                            <p>If you are only analyzing δD and δ<sup>18</sup>O, 5 to 60 mL of recoverable water is sufficient. If you require analysis on smaller volumes please contact us.</p>

                            <h5>Sample Container</h5>
                            <p>HDPE, plastic, or glass bottle. Plastic is preferred for shipping safety.</p>

                            <h5>Preservative</h5>
                            <p>None required if only analyzing δD and δ<sup>18</sup>O.</p>

                            <h5>Holding Time</h5>
                            <p>If the bottle is air tight a year holding time is reasonable.</p>

                            <h5>Shipping</h5>
                            <p>No special considerations required with shipping. Please include a <Link href="#">COC</Link>.</p>
                            <p><strong>Expected Turnaround Time</strong></p>
                            <ul>
                                <li>Standard Service: 15 business days</li>
                                <li>Rush Service: 5 business days<br/>
                                <em>Advance arrangements required for rush service</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="mt-4">δ<sup>13</sup>C of Dissolved Inorganic Carbon</h3>
            <p>Water samples are acidified and analyzed via a Gas Bench and CF-IRMS.</p>

            <div className="accordion mb-4" id="samplingd13CDIC">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingd13CDICGuidelines" aria-expanded="false" aria-controls="samplingd13CDICGuidelines">
                            Sampling Guidelines for δ<sup>13</sup>C of DIC
                        </button>
                    </h4>

                    <div id="samplingd13CDICGuidelines" className="accordion-collapse collapse" data-bs-parent="#samplingd13CDIC">
                        <div className="accordion-body">
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
                            <p><strong>Expected Turnaround Time</strong></p>
                            <ul>
                                <li>Standard Service: 15 business days</li>
                                <li>Rush Service: 5 business days<br/>
                                <em>Advance arrangements required for rush service</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}