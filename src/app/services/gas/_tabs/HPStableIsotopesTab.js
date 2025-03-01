import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';

export default function HPStableIsotopesTab() {
    return (
        <div class="tab-pane fade" id="gas-2-tab-pane" role="tabpanel" aria-labelledby="gas-2-tab" tabindex="0">
            <h2>High-Precision Stable Isotopes</h2>

            <p>Isotech uses an off-line method to generate high-precision stable isotope ratios of carbon and hydrogen in hydrocarbon gas samples. Each sample is separated into its components, each component is combusted, and the combustion products are collected and sealed in a glass ampoule using a vacuum system. The combustion products are then analyzed on a dual-inlet IRMS. This method is much more labor-intensive and time-consuming, but allows us to achieve unbeatable precision: 1 sigma is 0.1‰ for δ<sup>13</sup>C measurements, and 3.5 ‰ for δ<sup>2</sup>H measurements.</p>

            <p>Isotech has the capability to analyze δ<sup>13</sup>C and δ<sup>2</sup>H in hydrocarbons C<sub>1</sub>-C<sub>5</sub>; and δ<sup>13</sup>C and δ<sup>18</sup>O of CO<sub>2</sub>.</p>

            <div className="lighter-grey-bg">
                <h3>Questions answered by this analysis</h3>
                <ul>
                    <li>Is stray natural gas from a leaking pipeline, an underground gas storage reservoir, a swamp, microbial drift gas, coal mining, decomposition of an oil spill, leaking from an abandoned well, or a producing oil or gas well?</li>
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
            </div>

            <h3>Sampling Guidelines</h3>

            <p><strong>Sample Container:</strong> Gas samples can be collected in <Link href="https://youtu.be/OnUNlGOFIlg">IsoBags</Link>, IsoTubes, gas bags, or steel cylinders.</p>

            <p><strong>Holding Time:</strong> As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

            <p><strong>Shipping:</strong> Do not ship on a Friday as there is no one to receive the sample. Please include a COC.</p>

            <h3>Analysis Suites</h3>
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
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C and δD of methane</td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of ethane and propane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of Iso- and normal-butane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>δ<sup>13</sup>C of Iso- and normal-pentane</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck}/> <span className="visually-hidden">yes</span></td>
                    </tr>
                </tbody>
            </table>

            <p>Custom analysis packages available on request. Call us at (217) 398-3490 or email <Link href="mailto:DLChampaignProjectManagement@stratumreservoir.com">DLChampaignProjectManagement@stratumreservoir.com</Link> for a quote. </p>
        </div>
    );
}