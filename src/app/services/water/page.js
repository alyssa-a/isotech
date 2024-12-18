import Link from 'next/link';
import Subpage from "@/components/Subpage";

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
                    <button class="nav-link" id="water-2-tab" data-bs-toggle="tab" data-bs-target="#water-2-tab-pane" type="button" role="tab" aria-controls="water-2-tab-pane" aria-selected="false">δD &amp; <sup>18</sup>O</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-3-tab" data-bs-toggle="tab" data-bs-target="#water-3-tab-pane" type="button" role="tab" aria-controls="water-3-tab-pane" aria-selected="false">DIC</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-4-tab" data-bs-toggle="tab" data-bs-target="#water-4-tab-pane" type="button" role="tab" aria-controls="water-4-tab-pane" aria-selected="false"><sup>3</sup>H</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-5-tab" data-bs-toggle="tab" data-bs-target="#water-5-tab-pane" type="button" role="tab" aria-controls="water-5-tab-pane" aria-selected="false">Sulfates</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-6-tab" data-bs-toggle="tab" data-bs-target="#water-6-tab-pane" type="button" role="tab" aria-controls="water-6-tab-pane" aria-selected="false">Nitrates</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="water-7-tab" data-bs-toggle="tab" data-bs-target="#water-7-tab-pane" type="button" role="tab" aria-controls="water-7-tab-pane" aria-selected="false">Dissolved H<sub>2</sub>S</button>
                </li>
            </ul>

            {/* Dissolved Gas */}
            <div class="tab-content" id="waterTabsContent">
                <div class="tab-pane fade show active" id="water-1-tab-pane" role="tabpanel" aria-labelledby="water-1-tab" tabindex="0">
                    <h2>Dissolved Gas Analysis</h2>
                    <p>Dissolved gases can be extracted from water for analysis. Water samples can be collected by different methods; we recommend the use of the IsoFlask in most situations. Reports will include a <Link href="#">full compositional analysis</Link> of the headspace and dissolved gas concentrations in the water for methane, ethane and propane. Additional dissolved gas calculations are available for some components upon request.</p>

                    <h3>Questions Answered by This Analysis</h3>
                    <ul>
                        <li>Are there explosive concentrations of hydrocarbons in a domestic well?</li>
                        <li>What processes are responsible for methane in my water source? Is this microbial methane?</li>
                        <li>Did natural gas from an underground gas storage facility migrate into my water well?</li>
                        <li>Did natural gas from a producing gas well migrate into my water well?</li>
                        <li>Did a remediation project reduce or eliminate hydrocarbon contamination in an aquifer?</li>
                        <li>Has hydrocarbon gas migrated through a drinking water aquifer and is no longer present?</li>
                        <li>If multiple sources of methane are present in a water sample, what proportion is from microbial processes? What proportion is from gas migration from a producing gas well? If multiple producing wells cause gas migration into a water well, what proportion of gas is from each well?</li>
                    </ul>

                    <h3>Sample Size</h3>
                    <p>We recommend that you fill the IsoFlask with 600-750 mL of Water. The IsoFlask will collect any associated gas with the water. If you wish to use a bottle method for collection please contact us for recommendations. Note that bottle methods may over or under represent the gas content of the water. We do have the capability to analyze dissolved gas from VOA vials or similarly sized containers. However, the amount of gas available would severely limit the isotopic work possible.</p>

                    <h3>Sample Container</h3>
                    <p>The IsoFlask is the recommended container for this analysis. Other containers used are HDPE bottles with septum integral to the cap, flip top style glass bottles and VOA vials.</p>

                    <h3>Preservative</h3>
                    <p>IsoFlasks have a biocide that prevents microbial action. IsoFlasks should be kept from excessive heat and sunlight. Other containers require refrigeration and shipment on ice.</p>

                    <h3>Holding Time</h3>
                    <p>IsoFlasks can be held unrefrigerated for up to two months. For other containers, if the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>

                    <h3>Shipping</h3>
                    <p>IsoFlask can be shipped using your preferred method. For other containers, we recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive samples Monday through Friday.</p>

                    <h3>Analysis Suites</h3>
                    <ul>
                        <li>GC dissolved gas</li>
                        <li>DG-1 - includes Diss Gas complete composition, δ<sup>13</sup>C and δD of CH<sub>4</sub></li>
                        <li>DG-2 - includes DG-1 plus δ<sup>13</sup>C only of C<sub>2</sub>H<sub>6</sub> and C<sub>3</sub>H<sub>8</sub></li>
                    </ul>

                </div>

                {/* δD18O */}
                <div class="tab-pane fade" id="water-2-tab-pane" role="tabpanel" aria-labelledby="water-2-tab" tabindex="0">
                    <h2>Stable Isotopes of Water δD and δ<sup>18</sup>O</h2>

                    <h3>Questions Answered by This Analysis</h3>
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
                
                {/* DIC */}
                <div class="tab-pane fade" id="water-3-tab-pane" role="tabpanel" aria-labelledby="water-3-tab" tabindex="0">
                    <h2>δ<sup>13</sup>C and <sup>14</sup>C of Dissolved Inorganic Carbon</h2>

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

                {/* 3H */}
                <div class="tab-pane fade" id="water-4-tab-pane" role="tabpanel" aria-labelledby="water-4-tab" tabindex="0">
                    <h2>Tritium Analysis via Scintillation Counter</h2>

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

                {/* Sulfates */}
                <div class="tab-pane fade" id="water-5-tab-pane" role="tabpanel" aria-labelledby="water-5-tab" tabindex="0">
                    <h2>Isotopic Analysis of Sulfate</h2>
                    
                    <h3>Questions Answered by This Analysis</h3>
                    <ul>
                        <li>What is the source of sulfate or H<sub>2</sub>S in a groundwater well?</li>
                        <li>Is this sulfate naturally occurring (water rock interactions, thermochemical sulfate reduction)?</li>
                        <li>Is this microbial sulfate or H<sub>2</sub>S?</li>
                        <li>Is this naturally occurring sulfate/H<sub>2</sub>S or is oil and gas drilling forming sulfate/H<sub>2</sub>S? </li>
                    </ul>

                    <h3>δ<sup>34</sup>S and δ<sup>18</sup>O of Sulfate</h3>
                    <p>Sulfate is analyzed by first isolation via precipitation and then EA/TCEA-IRMS analysis. A minimum concentration of 5 mg/L is required for analysis.</p>

                    <h4>Sample Size</h4>
                    <p>We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please contact us first.</p>

                    <h4>Sample Container</h4>
                    <p>We recommend a 1 liter HDPE (plastic) bottle.</p>

                    <h4>Preservative</h4>
                    <p>The sample should be field filtered using at least 0.45 micron or smaller pore-size diameter filter. The sample must be kept chilled to minimize microbial action.</p>

                    <h4>Holding Time</h4>
                    <p>Samples should be sent in within two weeks of sampling.</p>

                    <h4>Shipping</h4>
                    <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="#">COC</Link>.</p>
                </div>

                {/* Nitrates */}
                <div class="tab-pane fade" id="water-6-tab-pane" role="tabpanel" aria-labelledby="water-6-tab" tabindex="0">
                    <h2>Isotopic Analysis of Nitrate</h2>

                    <h3>Questions Answered by This Analysis</h3>
                    <ul>
                        <li>What is the source of nitrate in a water source and is the concentration at levels dangerous to human health?</li>
                        <li>Is nitrate from reduced nitrogen fertilizer?</li>
                        <li>Is nitrate from synthetic fertilizer?</li>
                        <li>Is nitrate from septic systems?</li>
                        <li>Is nitrate from manure applications?</li>
                        <li>Is denitrification occurring in my system?</li>
                    </ul>

                    <h3>δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate</h3>
                    <p>δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate is analyzed by first isolation via ion exchange and then EA/TCEA-IRMS analysis. A minimum concentration of 3 mg/L (as nitrate) is required for analysis.</p>

                    <h4>Sample Size</h4>
                    <p>We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please contact us first.</p>

                    <h4>Sample Container</h4>
                    <p>We recommend a 1 liter HDPE (plastic) bottle.</p>

                    <h4>Preservative</h4>
                    <p>The sample should be field filtered using at least 0.45 micron or smaller pore-size diameter filter. The sample must be kept chilled to minimize microbial action.</p>

                    <h4>Holding Time</h4>
                    <p>Samples should be sent in within two weeks of sampling.</p>

                    <h4>Shipping</h4>
                    <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="#">COC</Link>.</p>
                </div>

                {/* Dissolved H2S */}
                <div class="tab-pane fade" id="water-7-tab-pane" role="tabpanel" aria-labelledby="water-7-tab" tabindex="0">
                    <h2>Dissolved Hydrogen Sulfide Isotopic Analysis</h2>

                    <h3>Questions Answered by This Analysis</h3>
                    <ul>
                        <li>What is the source of sulfate or H<sub>2</sub>S in a groundwater well?</li>
                        <li>Is this sulfate naturally occurring (water rock interactions, thermochemical sulfate reduction)?</li>
                        <li>Is this microbial sulfate or H<sub>2</sub>S?</li>
                        <li>Is this naturally occurring sulfate/H<sub>2</sub>S or is oil and gas drilling forming sulfate/H<sub>2</sub>S? </li>
                    </ul>

                    <h3>d<sup>34</sup>S of H<sub>2</sub>S</h3>
                    <p>H<sub>2</sub>S is evolved from solution, converted to silver sulfide and analyzed via EA-IRMS analysis. A minimum concentration of 3 mg/L is required for analysis.</p>

                    <h4>Sample Size</h4>
                    <p>We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please contact us first.</p>

                    <h4>Sample Container</h4>
                    <p>We recommend a 1 liter HDPE (plastic) bottle. The bottle should have no headspace. Fill the bottle with a surface tension bubble and cap.</p>

                    <h4>Preservative</h4>
                    <p>The sample must be kept chilled to minimize microbial action. It is recommended that 1mL of 25% NaOH is added.</p>

                    <h4>Holding Time</h4>
                    <p>Samples should be overnighted to the laboratory. Sampling events should be planned for Monday through Thursday to allow receipt of the sample within 48 hours. If shipment of the sample cannot happen the same or next day the sample should be frozen.</p>

                    <h4>Shipping</h4>
                    <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="#">COC</Link>.</p>
                </div>

            </div>
        </Subpage>
    );
}