import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function RadioisotopesTab() {
    return (
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
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td>δ<sup>13</sup>C and δD of methane</td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td>δ<sup>13</sup>C of CO<sub>2</sub></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td><sup>14</sup>C of methane</td>
                    <td><span className="visually-hidden">no</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
                <tr>
                    <td><sup>3</sup>H of methane</td>
                    <td><span className="visually-hidden">no</span></td>
                    <td><span className="visually-hidden">no</span></td>
                    <td><FontAwesomeIcon icon={faCheck} className="fs-6"/> <span className="visually-hidden">yes</span></td>
                </tr>
            </tbody>
        </table>
    </div>
    );
}