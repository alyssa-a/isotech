import Link from 'next/link';
import Image from 'next/image';
import Accordion from '@/components/Accordion';
import chemCompGraph from '@/public/images/gas/Fig. 6A Gas. Chemical Composition.jpg';

export default function ChemCompTab() {
    return (
        <div class="tab-pane fade show active" id="ChemicalComposition" role="tabpanel" aria-labelledby="ChemicalCompositionTab" tabindex="0">
            <h2>Chemical Composition</h2>

            <h3>Basic GC</h3>
            <p>Standard chemical characterization of gas samples. Report includes concentrations of hydrocarbons methane through hexanes+ (C1-C6+) and major fixed gases, including nitrogen, carbon monoxide, carbon dioxide, and combined argon + oxygen.</p>

            <h3>Full GC</h3>
            <p>Complete chemical characterization of gas samples. Includes discrete values for argon and oxygen, and full-range detection of helium and hydrogen.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={chemCompGraph}
                        alt=""
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Description of the image/graph goes here. Give the user some context... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</figcaption>
            </figure>

            <h3 className="mt-4">Sampling Guidelines</h3>

            <h4>Sample Container</h4>
            <p>Gas samples can be collected in <Link href="/products/isobag">IsoBags</Link>, <Link href="/products/isotube">IsoTubes</Link>, gas bags, or steel cylinders.</p>

            <h4>Holding Time</h4>
            <p>As long as sample containers are not leaking gas, samples will maintain gas molecular and isotopic composition.</p>

            <h4>Shipping</h4>
            <p>Do not ship on a Friday as there is no one to receive the sample. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>

            <h3 className="mt-4">Analysis Suites</h3>

            <Accordion heading={"Basic GC Analysis Suites"} headingLevel={4}>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th>Column heading?</th>
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
            </Accordion>

            <Accordion heading={"Full GC Analysis Suites"} headingLevel={4}>
                <table className="table table-striped mt-2">
                    <thead>
                        <tr>
                            <th>Column heading?</th>
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
            </Accordion>
    </div>
    );
}