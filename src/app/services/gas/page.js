import Link from 'next/link';
import Image from 'next/image';
import Subpage from '@/components/Subpage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const metadata = {
    title: "Gas Analyses | Services | Isotech",
    description: "",
};

export default function Gas() {
    const breadcrumbs = ["Services", "Gas Analyses"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Gas Analyses</h1>

            <ul class="nav nav-tabs my-4" id="gasTabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="gas-1-tab" data-bs-toggle="tab" data-bs-target="#gas-1-tab-pane" type="button" role="tab" aria-controls="gas-1-tab-pane" aria-selected="true">Chemical Composition</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="gas-2-tab" data-bs-toggle="tab" data-bs-target="#gas-2-tab-pane" type="button" role="tab" aria-controls="gas-2-tab-pane" aria-selected="false">High-Precision Stable Isotopes</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="gas-3-tab" data-bs-toggle="tab" data-bs-target="#gas-3-tab-pane" type="button" role="tab" aria-controls="gas-3-tab-pane" aria-selected="false">Standard-Precision Stable Isotopes</button>
                </li>

                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="gas-4-tab" data-bs-toggle="tab" data-bs-target="#gas-4-tab-pane" type="button" role="tab" aria-controls="gas-4-tab-pane" aria-selected="false">Radioisotopes</button>
                </li>
            </ul>

            <div class="tab-content px-3" id="gasTabsContent">
                
                {/* Chemical Composition */}
                <div class="tab-pane fade show active" id="gas-1-tab-pane" role="tabpanel" aria-labelledby="gas-1-tab" tabindex="0">
                    <h2>Chemical Composition Analysis</h2>

                    <h3>Basic GC</h3>
                    <p>Standard chemical characterization of gas samples. Report includes concentrations of hydrocarbons C1-C6+ and major fixed gases, including nitrogen, carbon monoxide, carbon dioxide, and combined argon + oxygen.</p>

                    <details className="mb-4">
                        <summary>Table name?????</summary>

                        <table className="table table-striped mt-2">
                            <thead>
                                <tr>
                                    <th>Sample Type</th>
                                    <th>Lowest Reportable Concentration</th>
                                    <th>Highest Calibrated Concentration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Methane</td>
                                    <td>2 ppm</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Ethane</td>
                                    <td>1 ppm</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Ethylene</td>
                                    <td>1 ppm</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>Propane</td>
                                    <td>1 ppm</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Propylene</td>
                                    <td>1 ppm</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>Isobutane/n-Butane</td>
                                    <td>1 ppm</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Isopentane/n-pentane</td>
                                    <td>1 ppm</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>C6+</td>
                                    <td>1 ppm</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>Hydrogen</td>
                                    <td>1%</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>Argon + Oxygen</td>
                                    <td>200 ppm</td>
                                    <td>20.9%</td>
                                </tr>
                                <tr>
                                    <td>Nitrogen</td>
                                    <td>100 ppm</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Carbon Monoxide</td>
                                    <td>100 ppm</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Carbon Dioxide</td>
                                    <td>50 ppm</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </table>
                    </details>

                    <h3>Full GC</h3>
                    <p>Complete chemical characterization of gas samples. Includes discrete values for argon and oxygen, and full-range detection of helium and hydrogen.</p>

                    <details className="mb-4">
                        <summary>Table name?????</summary>

                        <table className="table table-striped mt-2">
                            <thead>
                                <tr>
                                    <th>Sample Type</th>
                                    <th>Lowest Reportable Concentration</th>
                                    <th>Highest Calibrated Concentration</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Methane</td>
                                    <td>2 ppm</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Ethane</td>
                                    <td>1 ppm</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>Ethylene</td>
                                    <td>1 ppm</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>Propane</td>
                                    <td>1 ppm</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>Propylene</td>
                                    <td>1 ppm</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>Isobutane/n-Butane</td>
                                    <td>1 ppm</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Isopentane/n-pentane</td>
                                    <td>1 ppm</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>C6+</td>
                                    <td>1 ppm</td>
                                    <td>1%</td>
                                </tr>
                                <tr>
                                    <td>Hydrogen</td>
                                    <td>25 ppm</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Helium</td>
                                    <td>25 ppm</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Argon</td>
                                    <td>50 ppm</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Oxygen</td>
                                    <td>100 ppm</td>
                                    <td>20.9%</td>
                                </tr>
                                <tr>
                                    <td>Nitrogen</td>
                                    <td>100 ppm</td>
                                    <td>100%</td>
                                </tr>
                                <tr>
                                    <td>Carbon Monoxide</td>
                                    <td>100 ppm</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Carbon Dioxide</td>
                                    <td>50 ppm</td>
                                    <td>100%</td>
                                </tr>
                            </tbody>
                        </table>
                    </details>

                    <h3>Sampling Guidelines</h3>

                    <p><strong>Sample Container:</strong> Gas samples can be collected in <Link href="https://youtu.be/OnUNlGOFIlg">IsoBags</Link>, IsoTubes, gas bags, or steel cylinders.</p>

                    <p><strong>Holding Time:</strong> As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

                    <p><strong>Shipping:</strong> Do not ship on a Friday as there is no one to receive the sample. Please include a COC.</p>

                    <h3>Analysis Suites</h3>
                    <p><strong>Basic gas chromatograph (GC) analyses:</strong> Concentrations of methane (CH<sub>4</sub>), ethane, ethene, propane, propene, isobutane, n-butane, iso-pentane, n-pentane, hexanes+,  nitrogen, carbon monoxide, carbon dioxide, oxygen+argon.</p> 

                    <p><strong>Full GC analyses:</strong> Concentrations of methane (CH<sub>4</sub>), ethane (C<sub>2</sub>H<sub>6</sub>), ethene, propane (C<sub>3</sub>H<sub>8</sub>), propene, isobutane (iC<sub>4</sub>H<sub>10</sub>), n-butane (nC<sub>4</sub>H<sub>10</sub>), iso-pentane (iC<sub>5</sub>H<sub>12</sub>), n-pentane (nC<sub>5</sub>H<sub>12</sub>), hexanes+,  nitrogen, carbon monoxide, carbon dioxide, oxygen, hydrogen, helium, and argon.</p>
                </div>

                {/* High-Precision Stable Isotopes */}
                <div class="tab-pane fade" id="gas-2-tab-pane" role="tabpanel" aria-labelledby="gas-2-tab" tabindex="0">
                    <h2>High-Precision Stable Isotopes Analysis</h2>

                    <p>Isotech uses an off-line method to generate high-precision stable isotope ratios of carbon and hydrogen in hydrocarbon gas samples. Each sample is separated into its components, each component is combusted, and the combustion products are collected and sealed in a glass ampoule using a vacuum system. The combustion products are then analyzed on a dual-inlet IRMS. This method is much more labor-intensive and time-consuming, but allows us to achieve unbeatable precision: 1 sigma is 0.1‰ for δ<sup>13</sup>C measurements, and 3.5‰ for δ<sup>2</sup>H measurements.</p>

                    <p>Isotech has the capability to analyze δ<sup>13</sup>C and δ<sup>2</sup>H in hydrocarbons C<sub>1</sub>-C<sub>5</sub>; and δ<sup>13</sup>C and δ<sup>18</sup>O of CO<sub>2</sub>. </p>

                    <h3>Questions answered by this analysis</h3>
                    <ul>
                        <li>Is stray natural gas from a leaking pipeline, an underground gas storage reservoir, a swamp, microbial drift gas, coal mining, decomposition of an oil spill, leaking from an abandoned well, or a producing oil or gas well</li>
                        <li>What are the British thermal units of energy associated with my gas stream?</li>
                        <li>What is the source of gas in a producing well? If a mixture of gas sources, what is the proportion of gas from each source?</li>
                        <li>Did storage gas enter a producing well? If so, what proportion of gas is storage gas and native gas in producing well?</li>
                        <li>Is gas from the tubing of a well leaking into the annulus spacing of the well? Could gas in the annulus space of a well be from shallower hydrocarbon bearing units or from microbial activity?</li>
                        <li>Did I discover economically viable concentrations of hydrogen or helium?</li>
                        <li>While drilling a well could I be crossing other hydrocarbon bearing units suitable for extraction?</li>
                        <li>Could hydrocarbon gas be migrating into the soil gas zone and if so what is the source of that hydrocarbon gas?</li>
                        <li>Has stray gas undergone oxidation?</li>
                        <li>Has producing gas undergone a hydrocarbon isotopic reversal?</li>
                        <li>Is microbial methane formed by near surface fermentation or deep sub-surface carbon dioxide reduction?</li>
                    </ul>

                    <h3>Sampling Guidelines</h3>

                    <p><strong>Sample Container:</strong> Gas samples can be collected in <Link href="https://youtu.be/OnUNlGOFIlg">IsoBags</Link>, IsoTubes, gas bags, or steel cylinders.</p>

                    <p><strong>Holding Time:</strong> As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

                    <p><strong>Shipping:</strong> Do not ship on a Friday as there is no one to receive the sample. Please include a COC.</p>

                    <h3>Analysis Suites</h3>
                    <ul>
                        <li>NG-1: Includes Full GC, δ<sup>13</sup>C and δD of CH<sub>4</sub></li>
                        <li>NG-2: Includes NG-1, δ<sup>13</sup>C of C<sub>2</sub>H<sub>6</sub> and C<sub>3</sub>H<sub>8</sub></li>
                        <li>NG-3: Includes NG-2, δ<sup>13</sup>C of iC<sub>4</sub>H<sub>10</sub> and nC<sub>4</sub>H<sub>10</sub> </li>
                        <li>NG-4: Includes NG-3, δ<sup>13</sup>C of iC<sub>5</sub>H<sub>12</sub> and nC<sub>5</sub>H<sub>12</sub></li>
                    </ul>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>What do you call these??</th>
                                <th>NG-1</th>
                                <th>NG-2</th>
                                <th>NG-3</th>
                                <th>NG-4</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Full GC</td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td>δ<sup>13</sup>C and δD of methane</td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td>δ<sup>13</sup>C of ethane and propane</td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td>δ<sup>13</sup>C of Iso- and normal-butane</td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td>δ<sup>13</sup>C of Iso- and normal-pentane</td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                        </tbody>
                    </table>

                    <p>Custom analysis packages available on request. Call us at (217) 398-3490 or email <Link href="mailto:DLChampaignProjectManagement@stratumreservoir.com">DLChampaignProjectManagement@stratumreservoir.com</Link> for a quote. </p>
                </div>

                {/* Standard-Precision Stable Isotopes */}
                <div class="tab-pane fade" id="gas-3-tab-pane" role="tabpanel" aria-labelledby="gas-3-tab" tabindex="0">
                    <h2>Standard-Precision Stable Isotopes Analysis</h2>
                </div>

                {/* Radioisotopes */}
                <div class="tab-pane fade" id="gas-4-tab-pane" role="tabpanel" aria-labelledby="gas-4-tab" tabindex="0">
                    <h2>Radioisotopes Analysis</h2>

                    <h3>Questions answered by this analysis</h3>
                    <ul>
                        <li>Did natural gas originate from a landfill or an alternative source?</li>
                        <li>Is microbial natural gas associated with older glacial water or modern processes?</li>
                        <li>Is stray gas a mixture of landfill gas and produced gas?</li>
                        <li>Is the presence of hydrocarbons in a soil zone from an oil spill or from recent microbial activity?</li>
                    </ul>

                    <h3>Sampling Guidelines</h3>

                    <p><strong>Sample Container:</strong> Gas samples for <sup>14</sup>C of methane can be collected in <Link href="https://youtu.be/OnUNlGOFIlg">IsoBags</Link>, IsoTubes, gas bags, or steel cylinders.</p>

                    <p>Gas samples for 3H of methane need to be collected in ~18 liter LP tanks that have been pre-evacuated and are pressurized to 20 psi using a pump. Below is a photo of the LP Tank, the pump and the associated connections to collect a gas sample for 3H of methane analysis from a gas monitoring well in the field:</p>

                    <p>[image]</p>

                    <p>It is important to ensure that there are no leaks in the connections and that liquid does not get into the LP tank. A specific SOP for collecting gas samples for tritium analysis is provided.</p>

                    <p><strong>Holding Time:</strong> As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

                    <p><strong>Shipping:</strong> Do not ship on a Friday as there is no one to receive the sample. Please include a COC.</p>

                    <h3>Analysis Suites</h3>
                    <ul>
                        <li>BG-1: Includes Full GC, δ<sup>13</sup>C and δD of CH<sub>4</sub>, and δ<sup>13</sup>C of carbon dioxide</li>
                        <li>BG-2: Includes BG-1, <sup>14</sup>C of CH<sub>4</sub></li>
                        <li>BG-3: Includes BG-2, <sup>3</sup>H of CH<sub>4</sub></li>
                    </ul>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>What do you call these??</th>
                                <th>BG-1</th>
                                <th>BG-2</th>
                                <th>BG-3</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Full GC</td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td>δ<sup>13</sup>C and δD of methane</td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td>δ<sup>13</sup>C of CO<sub>2</sub></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td><sup>14</sup>C of methane</td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                            <tr>
                                <td><sup>3</sup>H of methane</td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><span className="visually-hidden">no</span></td>
                                <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> {/* end tab-content */}
        </Subpage>
    );
}