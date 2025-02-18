import Link from 'next/link';
import Image from 'next/image';
import Subpage from '@/components/Subpage';
import dissolvedGasImg from '@/public/images/water-dissolved-gas.jpg';
import stableIsotopesImg from '@/public/images/water-stable-isotopes.jpg';
import dicImg from '@/public/images/water-dic.jpg';
import tritiumImg from '@/public/images/water-tritium.jpg';
import sulfatesImg from '@/public/images/water-sulfates.jpg';
import nitratesImg from '@/public/images/water-nitrates.jpg';
import hydrogenSulfideImg from '@/public/images/water-hydrogen-sulfide.jpg';

export const metadata = {
    title: "Water Analyses | Services | Isotech",
    description: "Isotech offers numerous types of isotopic analysis for groundwater and surface samples.",
};

export default function Water() {
    const breadcrumbs = ["Services", "Water Analyses"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Water Analyses</h1>
            
            <p>Isotech offers numerous types of isotopic analysis for groundwater and surface samples. You can select our analytical services by <Link href="#">specific component</Link>, or choose from one of our testing suites. We also offer <Link href="#">sampling products</Link> to assist you in collecting good, representative samples. If you have a specific need not listed, please <Link href="#">contact us</Link>.</p>
            
            <ul class="nav nav-tabs my-4" id="waterTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="water-1-tab" data-bs-toggle="tab" data-bs-target="#water-1-tab-pane" type="button" role="tab" aria-controls="water-1-tab-pane" aria-selected="true">Dissolved Gas</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-2-tab" data-bs-toggle="tab" data-bs-target="#water-2-tab-pane" type="button" role="tab" aria-controls="water-2-tab-pane" aria-selected="false">Stable Isotopes</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-3-tab" data-bs-toggle="tab" data-bs-target="#water-3-tab-pane" type="button" role="tab" aria-controls="water-3-tab-pane" aria-selected="false">Radioisotopes</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-4-tab" data-bs-toggle="tab" data-bs-target="#water-4-tab-pane" type="button" role="tab" aria-controls="water-4-tab-pane" aria-selected="false">Sulfur</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-5-tab" data-bs-toggle="tab" data-bs-target="#water-5-tab-pane" type="button" role="tab" aria-controls="water-5-tab-pane" aria-selected="false">Nitrate</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-6-tab" data-bs-toggle="tab" data-bs-target="#water-6-tab-pane" type="button" role="tab" aria-controls="water-6-tab-pane" aria-selected="false">Water Chemistry</button>
                </li>
            </ul>

            <div class="tab-content px-3" id="waterTabsContent">

                {/* Dissolved Gas */}
                <div class="tab-pane fade show active" id="water-1-tab-pane" role="tabpanel" aria-labelledby="water-1-tab" tabindex="0">
                    <h2>Dissolved Gas Analysis</h2>

                    <Image 
                        priority
                        src={dissolvedGasImg}
                        alt="Bubbles in water"
                        width="450"
                        height="338"
                        className="float-md-end ms-md-3 mb-3"
                    />

                    <p>Our team determines the dissolved gas composition of water samples collected in IsoFlasks. Analytical reports include a <Link href="#">full compositional and isotopic analysis</Link> of the headspace and dissolved gas concentrations in the water for methane, ethane and propane. Dissolved gas concentrations are available for additional components upon request.</p>

                    <h3>Questions answered by this analysis</h3>
                    <ul>
                        <li>Are there explosive concentrations of methane in a groundwater well?</li>
                        <li>What processes are responsible for methane in my water source? Is this microbial methane?</li>
                        <li>Did natural gas from a producing gas well, a gas storage facility or a landfill migrate into a water source?</li>
                        <li>Did a remediation project reduce or eliminate hydrocarbon contamination in an aquifer?</li>
                        <li>Is a groundwater well contaminated with brine or hydrocarbon gas and what was the source of that contamination?</li>
                        <li>If multiple sources of methane are present in a water sample, what proportion is from microbial processes? What proportion is from gas migration from a producing gas well? If multiple producing wells cause gas migration into a water well, what proportion of gas is from each well?</li>
                    </ul>

                    <div className="accordion" id="samplingDissolvedGasAccordion">
                        <div className="accordion-item">
                            <h3 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingDissolvedGasAccordionCollapseOne" aria-expanded="false" aria-controls="samplingDissolvedGasAccordionCollapseOne">
                                    Guidelines for Sampling Dissolved Gas
                                </button>
                            </h3>

                            <div id="samplingDissolvedGasAccordionCollapseOne" className="accordion-collapse collapse" data-bs-parent="#isamplingDissolvedGasAccordion">
                                <div className="accordion-body">
                                    <h4>Sample Size</h4>
                                    <p>We recommend that you fill the IsoFlask with 600-750 mL of Water. The IsoFlask will collect any associated gas with the water. If you wish to use a bottle method for collection please contact us for recommendations. Note that bottle methods may over or under represent the gas content of the water. We do have the capability to analyze dissolved gas from VOA vials or similarly sized containers. However, the amount of gas available would severely limit the isotopic work possible.</p>

                                    <h4>Sample Container</h4>
                                    <p>The IsoFlask is the recommended container for this analysis. Other containers used are HDPE bottles with septum integral to the cap, flip top style glass bottles and VOA vials.</p>

                                    <h4>Preservative</h4>
                                    <p>IsoFlasks have a biocide that prevents microbial action. IsoFlasks should be kept from excessive heat and sunlight. Other containers require refrigeration and shipment on ice.</p>

                                    <h4>Holding Time</h4>
                                    <p>IsoFlasks can be held unrefrigerated for up to two months. For other containers, if the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>

                                    <h4>Shipping</h4>
                                    <p>IsoFlask can be shipped using your preferred method. For other containers, we recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive samples Monday through Friday.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <h3>Analysis Suites</h3>
                    <ul>
                        <li>GC dissolved gas</li>
                        <li>DG-1 - includes Diss Gas complete composition, δ<sup>13</sup>C and δD of CH<sub>4</sub></li>
                        <li>DG-2 - includes DG-1 plus δ<sup>13</sup>C only of C<sub>2</sub>H<sub>6</sub> and C<sub>3</sub>H<sub>8</sub></li>
                    </ul>

                </div>

                {/* Stable Isotopes */}
                <div class="tab-pane fade" id="water-2-tab-pane" role="tabpanel" aria-labelledby="water-2-tab" tabindex="0">
                    <h2>Stable Isotope Analysis</h2>
                    <p>Stable isotopes of water δD and δ<sup>18</sup>O intro text here............</p>

                    <Image 
                        priority
                        src={stableIsotopesImg}
                        alt="River between trees"
                        width="450"
                        height="338"
                        className="float-md-end ms-md-3 mb-3"
                    />

                    <h3>Questions answered by this analysis</h3>
                    <ul>
                        <li>Are deeper brine fluids migrating up into a drinking water aquifer?</li>
                        <li>Is the source of water in an aquifer recent precipitation?</li>
                        <li>Does recharge to an aquifer come from snow melt or summer rain events?</li>
                        <li>Where is water sourced from that is contaminated with nitrate/toxic metals?</li>
                    </ul>

                    <h3>Ground/Surface Waters</h3>
                    <p>We have adopted new technologies to analyze ground and surface waters. Cavity Ring Down Spectrometry allows us to analyze waters more efficiently and cost effectively. Some low salinity brines can also be analyzed with this method.</p>

                    <h4>Sample Size</h4>
                    <p>If you are only analyzing δD and δ<sup>18</sup>O, 2 to 60 mL is sufficient. If you require analysis on smaller volumes please contact us.</p>

                    <h4>Sample Container</h4>
                    <p>HDPE (plastic) or glass bottle. Plastic is preferred for shipping safety.</p>

                    <h4>Preservative</h4>
                    <p>None required if only analyzing δD and δ<sup>18</sup>O.</p>

                    <h4>Holding Time</h4>
                    <p>If the bottle is air tight a year holding time is reasonable.</p>

                    <h4>Shipping</h4>
                    <p>No special considerations required with shipping. Please include a <Link href="#">COC</Link>.</p>
                    <p><strong>Expected Turnaround Time</strong></p>
                    <ul>
                        <li>Standard Service: 10 business days</li>
                        <li>Rush Service: 3 business days<br/>
                        <em>Advance arrangements required for rush service</em></li>
                    </ul>

                    <h3>Production Waters</h3>
                    <p>Production waters and high salinity brines require vacuum distillation and CF-IRMS analysis. This process is time consuming and somewhat more costly.</p>

                    <h4>Sample Size</h4>
                    <p>If you are only analyzing δD and δ<sup>18</sup>O, 5 to 60 mL of recoverable water is sufficient. If you require analysis on smaller volumes please contact us.</p>

                    <h4>Sample Container</h4>
                    <p>HDPE (plastic) or glass bottle. Plastic is preferred for shipping safety.</p>

                    <h4>Preservative</h4>
                    <p>None required if only analyzing δD and δ<sup>18</sup>O.</p>

                    <h4>Holding Time</h4>
                    <p>If the bottle is air tight a year holding time is reasonable.</p>

                    <h4>Shipping</h4>
                    <p>No special considerations required with shipping. Please include a <Link href="#">COC</Link>.</p>
                    <p><strong>Expected Turnaround Time</strong></p>
                    <ul>
                        <li>Standard Service: 15 business days</li>
                        <li>Rush Service: 5 business days<br/>
                        <em>Advance arrangements required for rush service</em></li>
                    </ul>
                </div>
                
                {/* Radioisotopes */}
                <div class="tab-pane fade" id="water-3-tab-pane" role="tabpanel" aria-labelledby="water-3-tab" tabindex="0">
                    <h2>Radioisotope Analysis</h2>

                    <Image 
                        priority
                        src={dicImg}
                        alt="Stalactite formations in a cave"
                        width="450"
                        height="338"
                        className="float-md-end ms-md-3 mb-3"
                    />

                    <h3>Questions Answered by This Analysis</h3>
                    <ul>
                        <li>Has groundwater infiltrated through carbonate reservoirs?</li>
                        <li>How old is the methane that has contaminated an aquifer? Is this recently formed methane or methane that formed millions of years ago with the burial of high organic matter rocks?</li>
                        <li>How old is the groundwater in an aquifer system?</li>
                    </ul>

                    <h3>δ<sup>13</sup>C of DIC</h3>
                    <p>Water samples are acidified and analyzed via a Gas Bench and CF-IRMS.</p>

                    <h4>Sample Size</h4>
                    <p>Minimum-25 mL, ideal-150 mL. If you require analysis on smaller volumes please contact us.</p>

                    <h4>Sample Container</h4>
                    <p>HDPE (plastic) or glass bottle. Plastic is preferred for shipping safety. The sample should not have air included in the bottle.</p>

                    <h4>Preservative</h4>
                    <p>Filter the sample with at least a 0.45 micron or smaller pore-size diameter filter. The sample should also be kept on ice to minimize any microbial action.</p>

                    <h4>Holding Time</h4>
                    <p>If the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>

                    <h4>Shipping</h4>
                    <p>We recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive sample Monday through Friday.</p>
                    <p><strong>Expected Turnaround Time</strong></p>
                    <ul>
                        <li>Standard Service: 15 business days</li>
                        <li>Rush Service: 5 business days<br/>
                        <em>Advance arrangements required for rush service</em></li>
                    </ul>

                    <h3><sup>14</sup>C of DIC</h3>
                    <p>Water is acidified and the resulting carbon dioxide is collected and sent to <Link href="https://www.radiocarbon.com/">Beta Analytic</Link> for AMS analysis. Results are reported in percent modern carbon (pMC).</p>

                    <h4>Sample Size</h4>
                    <p>Minimum-70 mL, ideal-250 mL. If you require analysis on smaller volumes please contact us.</p>

                    <h4>Sample Container</h4>
                    <p>HDPE (plastic) or glass bottle. Plastic is preferred for shipping safety. The sample should not have air included in the bottle.</p>

                    <h4>Preservative</h4>
                    <p>Filter the sample with at least a 0.45 micron or smaller pore-size diameter filter. The sample should also be kept on ice to prevent any bacterial action.</p>

                    <h4>Holding Time</h4>
                    <p>If the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>

                    <h4>Shipping</h4>
                    <p>We recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive sample Monday through Friday.</p>
                    <p><strong>Expected Turnaround Time</strong></p>
                    <ul>
                        <li>Standard Service: 30 business days</li>
                        <li>Rush Service: 10 business days<br/>
                        <em>Advance arrangements required for rush service</em></li>
                    </ul>
                </div>

                {/* Sulfur */}
                <div class="tab-pane fade" id="water-4-tab-pane" role="tabpanel" aria-labelledby="water-4-tab" tabindex="0">
                    <h2>Sulfur Analysis</h2>

                    <Image 
                        priority
                        src={tritiumImg}
                        alt="Oil barrels"
                        width="450"
                        height="338"
                        className="float-md-end ms-md-3 mb-3"
                    />

                    <h3>Questions Answered by This Analysis</h3>
                    <ul>
                        <li>Did landfill gas migrate outside of a landfill into an aquifer?</li>
                        <li>Did fluids from producing oil/gas wells migrate into a landfill?</li>
                        <li>Is water in an aquifer from recent precipitation (modern) or from an older source?</li>
                    </ul>

                    <h3>Direct Count</h3>
                    <p>Analysis is effective when elevated tritium concentrations are expected such as landfill and nuclear event studies. The quantifiable limit for direct count is 10-15 TU based on the specific statistics of the run. Smaller concentrations will be reported as a less than value based on the statistics.</p>

                    <h4>Sample size</h4>
                    <p>We recommend sending in 50 mL of water. Analyses on smaller amounts are possible. If you wish to analyze less than 10 mL please contact us first.</p>

                    <h4>Sample Container</h4>
                    <p>We recommend a HDPE (plastic) bottle.</p>

                    <h4>Preservative</h4>
                    <p>No preservative or cooling is required. Ensure that the bottle is air tight to prevent evaporation.</p>

                    <h4>Holding Time</h4>
                    <p>Samples should be sent in within six months of sampling.</p>

                    <h4>Shipping</h4>
                    <p>No special considerations are needed in shipping these samples. Please inculde a <Link href="#">COC</Link>.</p>

                    <h3>Electrolytic Enrichment</h3>
                    <p>For tritium levels below modern levels electrolytic enrichment is suggested. The quantifiable limit for electrolytic enrichment is 1TU. Smaller concentrations will be reported as a less than value based on the statistics.</p>

                    <h4>Sample Size</h4>
                    <p>We recommend sending 1 liter of water. Analysis on smaller amounts is possible. If you wish to analyze less than 500 mL please contact us first.</p>

                    <h4>Sample Container</h4>
                    <p>We recommend a 1 liter HDPE (plastic) bottle.</p>

                    <h4>Preservative</h4>
                    <p>No preservative or cooling is required. Ensure that the bottle is air tight to prevent evaporation.</p>

                    <h4>Holding Time</h4>
                    <p>Samples should be sent in within six months of sampling.</p>

                    <h4>Shipping</h4>
                    <p>No special considerations are needed in shipping these samples. Please inculde a <Link href="#">COC</Link>.</p>
                </div>

                {/* Nitrate */}
                <div class="tab-pane fade" id="water-5-tab-pane" role="tabpanel" aria-labelledby="water-5-tab" tabindex="0">
                    <h2>Nitrate Analysis</h2>

                    <Image 
                        priority
                        src={sulfatesImg}
                        alt="Grand Prismatic Spring in Yellowstone National Park"
                        width="450"
                        height="338"
                        className="float-md-end ms-md-3 mb-3"
                    />

                    <p>Isotopic analysis of nitrate intro text here...</p>
                    
                    <h3>Questions answered by this analysis</h3>
                        <ul>
                            <li>What is the source of nitrate in a water source and is the concentration at levels dangerous to human health?</li>
                            <li>Is nitrate from reduced nitrogen fertilizer?</li>
                            <li>Is nitrate from synthetic fertilizer?</li>
                            <li>Is nitrate from septic systems?</li>
                            <li>Is nitrate from manure applications?</li>
                            <li>Is denitrification occurring in a groundwater aquifer system?</li>
                        </ul>

                    <h3>δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate</h3>
                        <p>δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate is analyzed by first isolation via ion exchange and then EA/TCEA-IRMS analysis. A minimum concentration of 3 mg/L (as nitrate) is required for analysis.</p>

                    <h3>Guidelines for sampling nitrates</h3>
                        <p><strong>Sample size:</strong> We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please contact us first.</p>

                        <p><strong>Sample container:</strong> We recommend a 1 liter HDPE or plastic bottle.</p>

                        <p><strong>Preservative:</strong> The sample should be field filtered using at least 0.45 micron or smaller pore-size diameter filter. The sample must be kept chilled to minimize microbial action.</p>

                        <p><strong>Holding time:</strong> Samples should be sent in within two weeks of sampling.</p>

                        <p><strong>Shipping:</strong> Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="#">COC</Link>.</p>
                </div>

                {/* Water Chemistry */}
                <div class="tab-pane fade" id="water-6-tab-pane" role="tabpanel" aria-labelledby="water-6-tab" tabindex="0">
                    <h2>Water Chemistry Analysis</h2>

                    <h3>Questions answered by this analysis</h3>
                    <ul>
                        <li>What is the concentration of a specific metal in a water sample?</li>
                        <li>Have deeper saline fluids higher in chloride and sodium migrated into shallower groundwater aquifers?</li>
                        <li>What is the concentration of lithium in produced water?</li>
                        <li>Are waters from different origins mixing?</li>
                        <li>Is subsurface carbon sequestration successfully trapping dissolved carbon dioxide in the subsurface?</li>
                        <li>What is the baseline water quality prior to drilling?</li>
                    </ul>

                    <h3>Analysis Suites</h3>
                    <p>Custom analysis packages available on request - call us at (217) 398-3490 or email <Link href="mailto:DLChampaignProjectManagement@stratumreservoir.com">DLChampaignProjectManagement@stratumreservoir.com</Link> for a quote. </p>

                </div>

            </div>
        </Subpage>
    );
}