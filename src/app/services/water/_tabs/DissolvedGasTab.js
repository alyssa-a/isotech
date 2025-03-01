import Link from 'next/link';
import Image from 'next/image';
import Section from '@/components/Section';
import dissolvedGasImg from '@/public/images/water/Fig. 1 Diss Gas Analysis.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function DissolvedGasTab() {
    return(
        <div className="tab-pane fade show active" id="water-1-tab-pane" role="tabpanel" aria-labelledby="water-1-tab" tabIndex="0">
            <h2>Dissolved Gas Analysis</h2>

            <figure className="figure float-md-end mx-md-4 mb-4">
                <Image 
                    priority
                    src={dissolvedGasImg}
                    alt="Diagram illustrating groundwater systems, showing wastewater treatment, drinking water aquifers, abandoned wells, oil and gas reservoirs, and deep saline formations."
                    width="350"
                    height="284"
                    className="figure-img img-fluid"
                />
                <figcaption className="figure-caption">Photo credit: <Link href="https://www.bgs.ac.uk/news/assessing-potential-groundwater-contamination-in-the-pursuit-of-new-energy-sources/">British Geological Survey</Link></figcaption>
            </figure>

            <p>Our team determines the dissolved gas composition of water samples collected in IsoFlasks. Analytical reports include a <Link href="#">full compositional and isotopic analysis</Link> of the headspace and dissolved gas concentrations in the water for methane, ethane and propane. Dissolved gas concentrations are available for additional components upon request.</p>

            <Section bgColor={"lighter-grey"}>
                <h3>Questions answered by this analysis</h3>
                <ul className="mb-0">
                    <li>Are there explosive concentrations of methane in a groundwater well?</li>
                    <li>What processes are responsible for methane in my water source? Is this microbial methane?</li>
                    <li>Did natural gas from a producing gas well, a gas storage facility or a landfill migrate into a water source?</li>
                    <li>Did a remediation project reduce or eliminate hydrocarbon contamination in an aquifer?</li>
                    <li>Is a groundwater well contaminated with brine or hydrocarbon gas and what was the source of that contamination?</li>
                    <li>If multiple sources of methane are present in a water sample, what proportion is from microbial processes? What proportion is from gas migration from a producing gas well? If multiple producing wells cause gas migration into a water well, what proportion of gas is from each well?</li>
                </ul>
            </Section>

            <h3 className="mt-4">Sampling Guidelines</h3>

            <div className="accordion mb-4 mt-3" id="samplingDG">
                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingDGSize" aria-expanded="false" aria-controls="samplingDGSize">
                            Sample Size
                        </button>
                    </h4>

                    <div id="samplingDGSize" className="accordion-collapse collapse" data-bs-parent="#samplingDG">
                        <div className="accordion-body">
                            <p>We recommend that you fill the IsoFlask with 600-750 mL of water for dissolved gas analysis. If you wish to use a bottle method for collection please contact us for recommendations. Note that other sampling containers may over or under represent the gas content of the water. We do have the capability to analyze dissolved gas from 40 mL VOA vials or similar sized containers. However, the amount of gas available could severely limit the isotopic work possible.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingDGContainer" aria-expanded="false" aria-controls="samplingDGContainer">
                            Sample Container
                        </button>
                    </h4>

                    <div id="samplingDGContainer" className="accordion-collapse collapse" data-bs-parent="#samplingDG">
                        <div className="accordion-body">
                            <p>The IsoFlask is the recommended container for this analysis. Other containers used are HDPE bottles with septum integral to the cap, flip top style glass bottles and VOA vials.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingDGPreservative" aria-expanded="false" aria-controls="samplingDGPreservative">
                            Preservative
                        </button>
                    </h4>

                    <div id="samplingDGPreservative" className="accordion-collapse collapse" data-bs-parent="#samplingDG">
                        <div className="accordion-body">
                            <p>IsoFlasks have a biocide that prevents microbial action and should be kept from excessive heat and sunlight. Other containers require refrigeration and shipment on ice.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingDGHolding" aria-expanded="false" aria-controls="samplingDGHolding">
                            Holding Time
                        </button>
                    </h4>

                    <div id="samplingDGHolding" className="accordion-collapse collapse" data-bs-parent="#samplingDG">
                        <div className="accordion-body">
                            <p>IsoFlasks can be held unrefrigerated for up to two months. For other containers, if the sample is kept refrigerated, we recommend shipping the sample to us with in two weeks of sampling.</p>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h4 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#samplingDGShipping" aria-expanded="false" aria-controls="samplingDGShipping">
                            Shipping
                        </button>
                    </h4>

                    <div id="samplingDGShipping" className="accordion-collapse collapse" data-bs-parent="#samplingDG">
                        <div className="accordion-body">
                            <p>IsoFlasks can be shipped using your preferred method. For other containers, we recommend the sample be shipped on ice and overnighted to the lab. Please do not ship on a Friday as we only receive samples Monday through Friday.</p>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Analysis Suites</h3>
            <ul>
                <li>Gas Chromatograph (GC) dissolved gas analyses: Concentration of methane (CH<sub>4</sub>), ethane, ethene, propane, propene, isobutane, n-butane, iso-pentane, n-pentane, hexanes+,  nitrogen, carbon monoxide, carbon dioxide, oxygen, argon and calculations for the dissolved concentrations for methane, ethane, and propane. </li>
                <li>DG-1: includes GC dissolved gas, δ<sup>13</sup>C and δD of CH<sub>4</sub></li>
                <li>DG-2: includes DG-1 plus δ<sup>13</sup>C only of C<sub>2</sub>H<sub>6</sub> and C<sub>3</sub>H<sub>8</sub></li>
            </ul>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Analysis Suites</th>
                        <th>GC Only</th>
                        <th>DG-1</th>
                        <th>DG-2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dissolved Gas GC</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Concentration of methane, ethane, and propane dissolved in water </td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C and δD of methane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of ethane and propane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}