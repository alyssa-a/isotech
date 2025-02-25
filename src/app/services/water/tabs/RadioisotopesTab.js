import Link from 'next/link';
import Image from 'next/image';
import radioisotopesImg from '@/public/images/water/cave_stalactites.jpg';

export default function RadioisotopesTab() {
    return (
        <div className="tab-pane fade" id="water-3-tab-pane" role="tabpanel" aria-labelledby="water-3-tab" tabIndex="0">
            <h2>Radioisotope Analysis</h2>

            <Image 
                priority
                src={radioisotopesImg}
                alt="Stalactite formations in a cave"
                width="450"
                height="338"
                className="float-md-end ms-md-3 mb-3"
            />

            <h3>Questions Answered by This Analysis</h3>
            <ul>
                <li>Has groundwater infiltrated through carbonate reservoirs?</li>
                <li>How old is the groundwater in an aquifer system?</li>
                <li>Are there relationships between the relative ages of groundwater and water quality?</li>
                <li>Did landfill gas migrate into a groundwater well?</li>
                <li>Did fluids from producing oil/gas wells migrate into a landfill?</li>
                <li>Is water in an aquifer from recent precipitation (modern) or from an older source?</li>
            </ul>

            <h3><sup>14</sup>C of DIC</h3>
            <p>Water is acidified and the resulting carbon dioxide is collected and sent to <Link href="https://www.radiocarbon.com/">Beta Analytic</Link> for AMS analysis. Results are reported in percent modern carbon (pMC).</p>

            <div className="accordion mb-4" id="sampling14C">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sampling14CGuidelines" aria-expanded="false" aria-controls="sampling14CGuidelines">
                            Sampling Guidelines for &nbsp; <sup>14</sup>C of DIC
                        </button>
                    </h4>

                    <div id="sampling14CGuidelines" className="accordion-collapse collapse" data-bs-parent="#sampling14C">
                        <div className="accordion-body">
                            <h5>Sample Size</h5>
                            <p>Minimum-70 mL, ideal-250 mL. If you require analysis on smaller volumes please contact us.</p>

                            <h5>Sample Container</h5>
                            <p>HDPE (plastic) or glass bottle. Plastic is preferred for shipping safety. The sample should not have air included in the bottle.</p>

                            <h5>Preservative</h5>
                            <p>Filter the sample with at least a 0.45 micron or smaller pore-size diameter filter. The sample should also be kept on ice to prevent any bacterial action.</p>

                            <h5>Holding Time</h5>
                            <p>If the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>

                            <h5>Shipping</h5>
                            <p>We recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive sample Monday through Friday.</p>
                            <p><strong>Expected Turnaround Time</strong></p>
                            <ul>
                                <li>Standard Service: 30 business days</li>
                                <li>Rush Service: 10 business days<br/>
                                <em>Advance arrangements required for rush service</em></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Tritium Direct Count</h3>
            <p>Analysis is effective when elevated tritium concentrations are expected such as landfill and nuclear event studies. The quantifiable limit for direct count is 10-15 tritium units (TU) based on the specific statistics of the run. Smaller concentrations will be reported as a less than value based on the statistics.</p>

            <div className="accordion mb-4" id="samplingTDC">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingTDCGuidelines" aria-expanded="false" aria-controls="samplingTDCGuidelines">
                            Sampling Guidelines for Tritium Direct Count
                        </button>
                    </h4>

                    <div id="samplingTDCGuidelines" className="accordion-collapse collapse" data-bs-parent="#samplingTDC">
                        <div className="accordion-body">
                            <h5>Sample Size</h5>
                            <p>We recommend sending in 50 mL of water. Analyses on smaller amounts are possible. If you wish to analyze less than 10 mL please contact us first.</p>

                            <h5>Sample Container</h5>
                            <p>We recommend a HDPE (plastic) bottle.</p>

                            <h5>Preservative</h5>
                            <p>No preservative or cooling is required. Ensure that the bottle is air tight to prevent evaporation.</p>

                            <h5>Holding Time</h5>
                            <p>Samples should be sent in within six months of sampling.</p>

                            <h5>Shipping</h5>
                            <p>No special considerations are needed in shipping these samples. Please include a COC.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Tritium Electrolytic Enrichment</h3>
            <p>For tritium levels below modern levels electrolytic enrichment is suggested. The quantifiable limit for electrolytic enrichment is 1TU. Smaller concentrations will be reported as a less than value based on the statistics.</p>

            <div className="accordion mb-4" id="samplingTEE">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingTEEGuidelines" aria-expanded="false" aria-controls="samplingTEEGuidelines">
                            Sampling Guidelines for Tritium Direct Count
                        </button>
                    </h4>

                    <div id="samplingTEEGuidelines" className="accordion-collapse collapse" data-bs-parent="#samplingTEE">
                        <div className="accordion-body">
                            <h5>Sample Size</h5>
                            <p>We recommend sending 1 liter of water. Analysis on smaller amounts is possible. If you wish to analyze less than 500 mL please contact us first.</p>

                            <h5>Sample Container</h5>
                            <p>We recommend a 1 liter HDPE (plastic) bottle.</p>

                            <h5>Preservative</h5>
                            <p>No preservative or cooling is required. Ensure that the bottle is air tight to prevent evaporation.</p>

                            <h5>Holding Time</h5>
                            <p>Samples should be sent in within six months of sampling.</p>

                            <h5>Shipping</h5>
                            <p>No special considerations are needed in shipping these samples. Please include a COC.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}