import Link from 'next/link';
import Image from 'next/image';
import Subpage from '@/components/Subpage';

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
                </div>

                {/* Standard-Precision Stable Isotopes */}
                <div class="tab-pane fade" id="gas-3-tab-pane" role="tabpanel" aria-labelledby="gas-3-tab" tabindex="0">
                    <h2>Standard-Precision Stable Isotopes Analysis</h2>
                </div>

                {/* Radioisotopes */}
                <div class="tab-pane fade" id="gas-4-tab-pane" role="tabpanel" aria-labelledby="gas-4-tab" tabindex="0">
                    <h2>Radioisotopes Analysis</h2>
                </div>
            </div>
        </Subpage>
    );
}