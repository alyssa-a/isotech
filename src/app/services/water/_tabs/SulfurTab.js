import Link from 'next/link';
import Image from 'next/image';
import tritiumImg from '@/public/images/water-tritium.jpg';

export default function SulfurTab() {
    return (
        <div className="tab-pane fade" id="water-4-tab-pane" role="tabpanel" aria-labelledby="water-4-tab" tabIndex="0">
            <h2>Sulfur Analysis</h2>

            <Image 
                src={tritiumImg}
                alt="Oil barrels"
                width="450"
                height="338"
                className="float-md-end ms-md-3 mb-3"
            />

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
    );
}