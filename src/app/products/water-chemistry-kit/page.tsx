import Image from "next/image";
import Subpage from "@/components/Subpage";
import waterChemKitImg from "@/public/images/products/Water Chemistry Kit.jpg";
import fig16b from "@/public/images/products/Figure 16B Tubing connected to filter.png";

export const metadata = {
    title: "Water Chemistry Kit | Products | Isotech",
    description: "Each Water Chemistry Kit comes with an acidified 250 mL bottle (bottle with red tape on it), a non-acidified 250 mL bottle, a 0.45 μm filter, and 1 foot of tubing.",
};

export default function WaterChemistryKit() {
    const breadcrumbs= ["Products", "Water Chemistry Kit"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Water Chemistry Kit</h1>

            <Image
                priority
                src={waterChemKitImg}
                alt="Water chemistry kit with two bottles, a filter, and tubing"
                width={250}
                height={300}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Each Water Chemistry Kit comes with an acidified 250 mL bottle (bottle with red tape on it), a non-acidified 250 mL bottle, a 0.45 μm filter, and 1 foot of tubing.</p>

            <h2 className="mt-4">Sampling Instructions</h2>

            <p>Steps to collect water samples:</p>

            <ol>
                <li>Purge the well. This is performed by flowing produced water out of the oil/gas well or turning the spigot on for a groundwater well until a field probe reads stable values of temperature, pH, and conductivity.
                    <ul>
                        <li>If you do not have a field probe allow water to flow until stagnant water is removed from the well</li>
                    </ul>
                </li>
                <li>Connect the tubing to the filter (on the side that reads “dispos-a-filter”).</li>
                <li>Connect the other side of the tubing to the produced water connection on the oil/gas well or to the spigot for a groundwater well and allow water to flow through tubing and the filter.</li>
                <li>After water has gone through the filter, position the filter above the unacidified bottle for filling (photograph demonstrating this below).
                    <ul>
                        <li>Make sure that flow is low enough that water flows through the tubing, then through the filter into the bottle. High flow rates could cause water to squirt outside the filter.
                            <Image
                                src={fig16b}
                                alt="Tube connected to pump/well showing the flow of water"
                                width={400}
                                height={541}
                                className="img-fluid d-block my-3 mx-auto"
                            />
                        </li>
                    </ul>
                </li>
                <li>Fill the unacidified bottle up to the neck, cap it, and then fill the acidified bottle to the neck and cap it.</li>
                <li>Dry the outside of the bottle and label it with the date, time, and sample ID. Write “CATION” on the acidified bottle.
                    <ul>
                        <li>Record this information on the associated Chain of Custody and which analytical suite you would like performed on each sample (WAB, WAE, WAO, WAFA, or WAC).</li>
                    </ul>
                </li>
                <li>Repeat these steps at each well using a new Water Chemistry Kit (new tubing, filter, and bottle kit).</li>
                <li>Store bottles in a refrigerator overnight if this is a multiple day sampling trip.</li>
                <li>Ship samples on ice and overnighted to the lab. Please do not ship on a Friday as we only receive samples Monday through Friday.</li>
            </ol>
        </Subpage>
    );
}