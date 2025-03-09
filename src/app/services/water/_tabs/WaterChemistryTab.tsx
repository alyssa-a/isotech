import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import fig5 from '@/public/images/water/Fig. 5 Anions and Cations.jpg';

export default function WaterChemistryTab() {    
    return (
        <div className="tab-pane fade" id="WaterChemistry" role="tabpanel" aria-labelledby="WaterChemistryTab" tabIndex={0}>
            <h2>Water Chemistry</h2>

            <h3>Queries addressed by this analysis</h3>
            <ul className="questions mb-0" style={{columns: 1}}>
                <li>What is the concentration of a specific metal in a water sample?</li>
                <li>Have deeper saline fluids higher in chloride and sodium migrated into shallower groundwater aquifers?</li>
                <li>What is the concentration of lithium in produced water?</li>
                <li>Are waters from different origins mixing?</li>
                <li>Is subsurface carbon sequestration successfully trapping dissolved carbon dioxide in the subsurface?</li>
                <li>What is the baseline water quality prior to drilling?</li>
            </ul>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={fig5}
                        alt=""
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Description of the image/graph goes here. Give the user some context... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</figcaption>
            </figure>

            <h3 className="mt-4">Anions</h3>
            <p>Filtered water samples (using a 0.45 micron filter) that are preserved with nitric acid are inlet into an Ion Chromatograph (IC) for analysis.</p>

            <h3 className="mt-4">Cations</h3>
            <p>Filtered water samples (using a 0.45 micron filter) are inlet into an inductively coupled plasma optical emission spectrometer (ICP-OES) for analysis. This is a separate non acidified bottle from the one collected for anion concentrations.</p>
            
            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Size </h4>
            <p>We recommend sending 250 mL of filtered and preserved water in a HDPE (high density polyurethane) or a plastic bottle. Analyses on smaller amounts are possible.</p>

            <h4>Preservative </h4>
            <p>The sample must be kept chilled to minimize microbial action and preserved with nitric acid to prevent precipitation of metals. It is recommended that several drops of nitric acid are added to the sample bottle. </p>

            <h4>Holding Time</h4>
            <p>Samples should be overnighted to the laboratory. Sampling events should be planned for Monday through Thursday to allow receipt of the sample within 48 hours. If shipment of the sample cannot happen the same or next day the sample should be kept refrigerated.</p>

            <h4>Shipping</h4>
            <p>Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>

            <h3 className="mt-4">Analysis Suites</h3>

            <div className="table-responsive mb-4">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Column heading?</th>
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