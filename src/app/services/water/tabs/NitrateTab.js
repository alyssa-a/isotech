import Link from 'next/link';
import Image from 'next/image';
import sulfatesImg from '@/public/images/water-sulfates.jpg';

export default function NitrateTab() {
    return (
        <div className="tab-pane fade" id="water-5-tab-pane" role="tabpanel" aria-labelledby="water-5-tab" tabIndex="0">
            <h2>Nitrate Analysis</h2>

            <Image 
                priority
                src={sulfatesImg}
                alt="Grand Prismatic Spring in Yellowstone National Park"
                width="450"
                height="338"
                className="float-md-end ms-md-3 mb-3"
            />

            <p>Isotopic analysis of nitrate intro text here...</p>
            
            <h3>Questions answered by this analysis</h3>
                <ul>
                    <li>What is the source of nitrate in a water source and is the concentration at levels dangerous to human health?</li>
                    <li>Is nitrate from reduced nitrogen fertilizer?</li>
                    <li>Is nitrate from synthetic fertilizer?</li>
                    <li>Is nitrate from septic systems?</li>
                    <li>Is nitrate from manure applications?</li>
                    <li>Is denitrification occurring in a groundwater aquifer system?</li>
                </ul>

            <h3>δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate</h3>
                <p>δ<sup>15</sup>N and δ<sup>18</sup>O of Nitrate is analyzed by first isolation via ion exchange and then EA/TCEA-IRMS analysis. A minimum concentration of 3 mg/L (as nitrate) is required for analysis.</p>

            <h3>Guidelines for sampling nitrates</h3>
                <p><strong>Sample size:</strong> We recommend sending 1 liter of water. Analyses on smaller amounts are possible. If you wish to analyze less than 500 mL please contact us first.</p>

                <p><strong>Sample container:</strong> We recommend a 1 liter HDPE or plastic bottle.</p>

                <p><strong>Preservative:</strong> The sample should be field filtered using at least 0.45 micron or smaller pore-size diameter filter. The sample must be kept chilled to minimize microbial action.</p>

                <p><strong>Holding time:</strong> Samples should be sent in within two weeks of sampling.</p>

                <p><strong>Shipping:</strong> Samples must be shipped on ice and overnighted to our lab. Do not ship on a Friday as there is no one to receive the sample and put in refrigeration over the weekend. Please include a <Link href="#">COC</Link>.</p>
        </div>
    );
}