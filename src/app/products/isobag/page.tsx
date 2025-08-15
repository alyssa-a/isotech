import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import isobagImg from "@/public/images/products/IsoBag.jpg";
import filledExample from "@/public/images/products/IsoBag_Filled_Example.png";

export const metadata = {
    title: "IsoBag® | Products | Isotech",
    description: "The Isobag is designed for easy collection of soil gases, low-pressure samples or where cylinders would be difficult to use.",
};

export default function IsoBag() {
    const breadcrumbs= ["Products", "IsoBag®"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoBag®</h1>

            <Image
                priority
                src={isobagImg}
                alt="IsoBag®"
                width={300}
                height={302}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>For easy collection of soil gases, low-pressure samples or where cylinders would be difficult to use, we can provide these evacuated gas bags. Sets of three 0.3 liter bags packed in five-gallon shipping containers (paint cans) are available for shipping flammable gas samples.</p>

            <p>Storage Temperature range: -4°F (-20°C) TO +122°F (+50°C)</p>

            <p><strong>Note:</strong> The provided gas bags are NOT intended for gases containing hydrogen sulfide (H<sub>2</sub>S, sour gas).</p>

            <h2 className="mt-4">Sampling Instructions</h2>

            <ol>
                <li>Remove a gas bag from its shipping container, and using a soft-tip, permanent pen (e.g. Sharpie&reg;), record all pertinent information directly onto the bag. Also record pertinent information on the chain-of-custody form provided.</li>
                <li>Attach the inlet tubing of the hand pump provided (black end) to the monitoring probe or sampling point and pump for a sufficient length of time to purge the system of air. The purge gas may be vented to the atmosphere.</li>
                <li>While pumping slowly, insert the male luer fitting on the outlet of the hand-pump (clear end) into the luer-fit valve on the gas bag with a slight twisting motion. Inserting the male luer fitting depresses the valve stem and opens the valve. The tapered design of this fitting allows for a leak-tight friction fit.</li>
                <li>
                    The bag can be filled with about 10-15 squeezes of the bulb (≤300 ml per bag). To allow space for expansion during shipment, the bag should only be filled to about ⅔ of capacity. The bag is properly filled when it is about 1 inch thick, as shown in the picture below.

                    <Image
                        src={filledExample}
                        alt="An under-filled IsoBag, a correctly filled IsoBag, and an over-filled IsoBag"
                        width={800}
                        height={138}
                        className="img-fluid d-block mx-auto my-3"
                    />
                </li>
                <li>Once the bag is filled, remove the fitting from the bag. Although these bags are durable, they can be damaged if not handled properly. Be careful not to crease or puncture the bags. Sample storage: -4°F (-20°C) TO +122°F (+50°C)</li>
                <li>Return the bags to their individual boxes and then place them into to the gasketed 5-gallon shipping container in which they were received (no more than 3 bags per 5-gallon shipper). Samples should be shipped to the laboratory for analysis as soon as possible.</li>
            </ol>

            <div className="ratio ratio-16x9 w-lg-50 my-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/OnUNlGOFIlg?si=k-IT_zlW0ETHBs-F" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <p className="mt-4">
                <Link className="button download" href="/files/IsoBag_Sampling_Instructions.pdf">IsoBag® Sampling Instructions (PDF)</Link>
            </p>

            <p>
                <Link className="button download" href="/files/IsoBag_Stability.pdf">Stability of the IsoBag® Over Time (PDF)</Link>
            </p>

        </Subpage>
    );
}