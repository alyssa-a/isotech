import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function WaterChemistryTab() {
    return (
        <div className="tab-pane fade" id="water-6-tab-pane" role="tabpanel" aria-labelledby="water-6-tab" tabIndex="0">
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

            <h3>Anions</h3>
            <p>Filtered water samples (using a 0.45 micron filter) that are preserved with nitric acid are inlet into an Ion Chromatograph (IC) for analysis.</p>

            <h3>Cations</h3>
            <p>Filtered water samples (using a 0.45 micron filter) are inlet into an inductively coupled plasma optical emission spectrometer (ICP-OES) for analysis. This is a separate non acidified bottle from the one collected for anion concentrations.</p>
            
            <h3>Sampling Guidelines</h3>

            <h3>Analysis Suites</h3>

            <div class="table-responsive mb-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Analysis Suites</th>
                        <th>WAB (Basic)</th>
                        <th>WAE (Environmental)</th>
                        <th>WAO (Oilfield)</th>
                        <th>WAFA (Flow Assurance)</th>
                        <th>WAC (CO<sub>2</sub>)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Water Properties</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Sodium</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Potassium</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Magnesium</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Calcium</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Barium</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Strontium</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Iron</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Manganese</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Lithium</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Boron</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Silicon</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Zinc</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                    </tr>
                    <tr>
                        <td>Aluminum</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Cadmium</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Cobalt</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Chromium</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Copper</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Molybdenum</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Nickel</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Phosphorus</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Vanadium</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Sulfate</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Chloride</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Fluoride</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                    </tr>
                    <tr>
                        <td>Bromide</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>                    
                    </tr>
                    <tr>
                        <td>Iodide</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                    </tr>
                    <tr>
                        <td>Nitrate</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                    </tr>
                    <tr>
                        <td>Phosphate</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                    </tr>
                    <tr>
                        <td>Sulfide</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                        <td><span className="visually-hidden">no</span></td>
                    </tr>
                    <tr>
                        <td>DIC</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                    </tr>
                    <tr>
                        <td>TDS</td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                    </tr>
                    <tr>
                        <td>TSS</td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><span className="visually-hidden">no</span></td>
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                        <td><FontAwesomeIcon icon={faCheck} className="fs-6 green-text"/> <span className="visually-hidden">yes</span></td>  
                    </tr>
                </tbody>
            </table>
            </div>

            <p>Custom analysis packages available on request - call us at (217) 398-3490 or email <Link href="mailto:DLChampaignProjectManagement@stratumreservoir.com">DLChampaignProjectManagement@stratumreservoir.com</Link> for a quote. </p>

        </div>
    );
}