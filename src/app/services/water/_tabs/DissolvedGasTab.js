import Image from 'next/image';
import Link from 'next/link';
import placeholderImg from '@/public/images/placeholder.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function DissolvedGasTab() {
    return(
        <div className="tab-pane fade show active" id="DissolvedGas" role="tabpanel" aria-labelledby="DissolvedGasTab" tabIndex="0">
            <h2>Dissolved Gas</h2>

            <figure className="figure float-md-end ms-md-4 mb-4">
                <Image 
                    priority
                    src={placeholderImg}
                    alt=""
                    width="450"
                    className="figure-img img-fluid"
                />
                <figcaption className="figure-caption">Description of the image/graph goes here. Give the user some context...</figcaption>
            </figure>

            <p>Our team determines the dissolved gas composition of water samples collected in IsoFlasks. Analytical reports include a full compositional and isotopic analysis of the headspace and dissolved gas concentrations in the water for methane, ethane and propane. Dissolved gas concentrations are available for additional components upon request.</p>

            {/* <div className="p-4 mb-4 lighter-grey-bg"> */}
                <h3>Questions answered by this analysis</h3>
                <ul className="questions">
                    <li>Are there explosive concentrations of methane in a groundwater well?</li>
                    <li>What processes are responsible for methane in my water source? Is this microbial methane?</li>
                    <li>Did natural gas from a producing gas well, a gas storage facility or a landfill migrate into a water source?</li>
                    <li>Did a remediation project reduce or eliminate hydrocarbon contamination in an aquifer?</li>
                    <li>Is a groundwater well contaminated with brine or hydrocarbon gas and what was the source of that contamination?</li>
                    <li>If multiple sources of methane are present in a water sample, what proportion is from microbial processes? What proportion is from gas migration from a producing gas well? If multiple producing wells cause gas migration into a water well, what proportion of gas is from each well?</li>
                </ul>
            {/* </div> */}

            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Container</h4>
            <p>The <Link href="/products/isoflask">IsoFlask</Link> is the recommended container for this analysis. Other containers used are HDPE bottles with septum integral to the cap, flip top style glass bottles and VOA vials. </p>

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
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Column Heading?</th>
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