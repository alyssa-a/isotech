import Link from 'next/link';
import Subpage from '@/components/Subpage';
import DissolvedGasTab from './tabs/DissolvedGasTab';
import StableIsotopesTab from './tabs/StableIsotopesTab';
import RadioisotopesTab from './tabs/RadioisotopesTab';
import SulfurTab from './tabs/SulfurTab';
import NitrateTab from './tabs/NitrateTab';
import WaterChemistryTab from './tabs/WaterChemistryTab';

export const metadata = {
    title: "Water Analyses | Services | Isotech",
    description: "Isotech offers numerous types of isotopic analysis for groundwater and surface samples.",
};

export default function Water() {
    const breadcrumbs = ["Services", "Water Analyses"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Water Analyses</h1>
            
            <p className="lead">Isotech offers numerous types of isotopic analysis for groundwater and surface samples. We also offer <Link href="#">sampling products</Link> to assist you in collecting good, representative samples. If you have a specific need not listed, please <Link href="#">contact us</Link>.</p>
            
            <ul className="nav nav-tabs my-4" id="waterTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="water-1-tab" data-bs-toggle="tab" data-bs-target="#water-1-tab-pane" type="button" role="tab" aria-controls="water-1-tab-pane" aria-selected="true">Dissolved Gas</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="water-2-tab" data-bs-toggle="tab" data-bs-target="#water-2-tab-pane" type="button" role="tab" aria-controls="water-2-tab-pane" aria-selected="false">Stable Isotopes</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="water-3-tab" data-bs-toggle="tab" data-bs-target="#water-3-tab-pane" type="button" role="tab" aria-controls="water-3-tab-pane" aria-selected="false">Radioisotopes</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="water-4-tab" data-bs-toggle="tab" data-bs-target="#water-4-tab-pane" type="button" role="tab" aria-controls="water-4-tab-pane" aria-selected="false">Sulfur</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="water-5-tab" data-bs-toggle="tab" data-bs-target="#water-5-tab-pane" type="button" role="tab" aria-controls="water-5-tab-pane" aria-selected="false">Nitrate</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="water-6-tab" data-bs-toggle="tab" data-bs-target="#water-6-tab-pane" type="button" role="tab" aria-controls="water-6-tab-pane" aria-selected="false">Water Chemistry</button>
                </li>
            </ul>

            <div className="tab-content px-3" id="waterTabsContent">
                <DissolvedGasTab/>
                <StableIsotopesTab/>
                <RadioisotopesTab/>
                <SulfurTab/>
                <NitrateTab/>
                <WaterChemistryTab/>
            </div>
        </Subpage>
    );
}