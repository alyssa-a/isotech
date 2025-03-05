import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import fig9 from "@/public/images/solids-liquids/Fig 9. Inorganic Solids.png"

export const metadata = {
    title: "Solids & Liquids | Services | Isotech",
    description: "",
};

export default function SolidsLiquids() {
    const breadcrumbs = ["Services", "Solids & Liquids"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Solids & Liquids</h1>

            <p className="lead">Carbon, nitrogen, sulfur, oxygen, and hydrogen isotopic analyses.</p>

            <h2>Queries addressed by these analyses</h2>

            <ul className="questions">
                <li>Is a company falsely claiming that their wine is from a certain region?</li>
                <li>Has groundwater migrated through a certain rock type?</li>
                <li>Could a honey sample contain sugar cane and corn syrups, rather than authentic honey derived from C3 plants?</li>
                <li>Could precipitation or dissolution of certain minerals be occurring in a water sample?</li>
                <li>Has dissolution occurred on a carbonate sample?</li>
                <li>Were carbonate rocks from different locations formed by the same geologic process?</li>
                <li>What were the conditions of the geologic past when carbonate rock formed? </li>
            </ul>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={fig9}
                        alt=""
                        width="600"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Description of the image/graph goes here. Give the user some context... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</figcaption>
            </figure>

            <h2>Sampling Guidelines</h2>

            <h3>Sample Container</h3>

            <p>Solid samples can be collected in small vials, pouches, envelops, jars.</p>  

            <p>Liquid samples can be collected in HDPE or plastic bottles.</p> 

            <h3>Holding Time</h3>

            <p>The hold time is dependent on which analyses the client wishes to perform and what the make up is of the sample.</p>  

            <h3>Shipping</h3>

            <p>Do not ship on a Friday as there is no one to receive the sample. Please include a <Link href="/resources/shipping-guidelines">Chain of Custody (COC) form</Link>.</p>
        </Subpage>
    );
}