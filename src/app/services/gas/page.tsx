import Subpage from '@/components/Subpage';
import Tabs from '@/components/Tabs';
import ChemCompTab from './_tabs/ChemCompTab';
import HPStableIsotopesTab from './_tabs/HPStableIsotopesTab';
import SPStableIsotopesTab from './_tabs/SPStableIsotopesTab';
import RadioisotopesTab from './_tabs/RadioIsotopesTab';
import HSIsotopesTab from './_tabs/HSIsotopes';

export const metadata = {
    title: "Gas Analyses | Services | Isotech",
    description: "",
};

export default function Gas() {
    const breadcrumbs = ["Services", "Gas Analyses"];

    const tabs = [
        {
            name: "Chemical Composition",
            id: "ChemicalCompositionTab",
            target: "ChemicalComposition"
        },
        {
            name: "High-Precision Stable Isotopes",
            id: "HighPrecisionStableIsotopesTab",
            target: "HighPrecisionStableIsotopes"
        },
        {
            name: "Standard-Precision Stable Isotopes",
            id: "StandardPrecisionStableIsotopesTab",
            target: "StandardPrecisionStableIsotopes"
        },
        {
            name: "Radioisotopes",
            id: "RadioisotopesTab",
            target: "Radioisotopes"
        },
        {
            name: "Hydrogen Sulfide Isotopes",
            id: "HydrogenSulfideIsotopesTab",
            target: "HydrogenSulfideIsotopes"
        }
    ];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Gas Analyses</h1>

            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <h2 className="fs-5">Questions we can answer</h2>

            <ul className="questions mb-0">
                <li>Is stray natural gas from a leaking pipeline, an underground gas storage reservoir, a swamp, microbial drift gas, coal mining, decomposition of an oil spill, leaking from an abandoned well, or a producing oil or gas well?</li>
                <li>Did storage gas enter a producing well? If so, what proportion of gas is storage gas and native gas in producing well?</li>
                <li>Is gas from the tubing of a well leaking into the annulus spacing of the well? Could gas in the annulus space of a well be from shallower hydrocarbon bearing units or from microbial activity?</li>
                <li>Could hydrocarbon gas be migrating into the soil gas zone and if so, what is the source of that hydrocarbon gas?</li>
                <li>Has stray gas undergone oxidation?</li>
                <li>What geologic unit is gas from in a producing well? If there is a mixture of gas sources, what is the proportion of gas from each source?</li>
                <li>Is microbial methane formed by near surface fermentation or deeper sub-surface carbon dioxide reduction?</li>
                <li>Did I discover economically viable concentrations of hydrogen or helium?</li>
                <li>While drilling a well could I be drilling through other hydrocarbon bearing units suitable for extraction?</li>
                <li>Did gas originate from a landfill or an alternative source?</li>
            </ul>

            <hr className="my-5"/>

            <div className="row">
                <div className="col-12 col-lg-3 pe-lg-4 mb-4">
                    <Tabs tabData={tabs}/>
                </div>

                <div className="col-12 col-lg-9">
                    <div className="tab-content pt-lg-2 mt-lg-1">
                        <ChemCompTab/>
                        <HPStableIsotopesTab/>
                        <SPStableIsotopesTab/>
                        <RadioisotopesTab/>
                        <HSIsotopesTab/>
                    </div>
                </div>
            </div>
        </Subpage>
    );
}