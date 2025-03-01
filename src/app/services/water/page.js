import Link from 'next/link';
import Subpage from '@/components/Subpage';
import Tabs from '@/components/Tabs';
import DissolvedGasTab from './_tabs/DissolvedGasTab';
import StableIsotopesTab from './_tabs/StableIsotopesTab';
import RadioisotopesTab from './_tabs/RadioisotopesTab';
import SulfurTab from './_tabs/SulfurTab';
import NitrateTab from './_tabs/NitrateTab';
import WaterChemistryTab from './_tabs/WaterChemistryTab';

export const metadata = {
    title: "Water Analyses | Services | Isotech",
    description: "Isotech offers numerous types of isotopic analysis for groundwater and surface samples.",
};

export default function Water() {
    const breadcrumbs = ["Services", "Water Analyses"];

    const tabs = [
        {
            name: "Dissolved Gas",
            id: "DissolvedGasTab",
            target: "DissolvedGas"
        },
        {
            name: "Stable Isotopes",
            id: "StableIsotopesTab",
            target: "StableIsotopes"
        },
        {
            name: "Radioisotopes",
            id: "RadioisotopesTab",
            target: "Radioisotopes"
        },
        {
            name: "Sulfur",
            id: "SulfurTab",
            target: "Sulfur"
        },
        {
            name: "Nitrate",
            id: "NitrateTab",
            target: "Nitrate"
        },
        {
            name: "Water Chemistry",
            id: "WaterChemistryTab",
            target: "WaterChemistry"
        }
    ];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Water Analyses</h1>
            
            <p className="lead">Isotech offers numerous types of isotopic analysis for groundwater and surface samples. We also offer <Link href="/products">sampling products</Link> to assist you in collecting good, representative samples. If you have a specific need not listed, please <Link href="#">contact us</Link>.</p>

            <Tabs tabData={tabs}/>

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