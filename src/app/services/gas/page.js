import Subpage from '@/components/Subpage';
import ChemCompTab from './_tabs/ChemCompTab';
import HPStableIsotopesTab from './_tabs/HPStableIsotopesTab';
import SPStableIsotopesTab from './_tabs/SPStableIsotopesTab';
import RadioisotopesTab from './_tabs/RadioIsotopesTab';

export const metadata = {
    title: "Gas Analyses | Services | Isotech",
    description: "",
};

export default function Gas() {
    const breadcrumbs = ["Services", "Gas Analyses"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Gas Analyses</h1>

            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

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
                <ChemCompTab/>
                <HPStableIsotopesTab/>
                <SPStableIsotopesTab/>
                <RadioisotopesTab/>
            </div>
        </Subpage>
    );
}