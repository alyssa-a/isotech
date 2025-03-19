import Image from "next/image";
import Subpage from "@/components/Subpage";
import fig13 from "@/public/images/cotton/Figure 13_3D plot of cotton origin.png";

export const metadata = {
    title: "Cotton Origin | Services | Isotech",
    description: "",
};

export default function Cotton() {
    const breadcrumbs = ["Services", "Cotton Origin"];

    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Cotton Origin</h1>

            <p>Do you know where your cotton is from? Is there a risk that your supply chain could be using yarn or fabric in finished products from prohibited regions that use forced labor?</p>

            <p>Our team has built an extensive library of isotopic compositions of cotton samples from the major cotton producing regions of the world. You can send in raw cotton fiber, unprocessed or processed greige yarn, dyed fabric, or finished products to our facility to confirm your cotton origin.</p>

            <figure className="figure row mt-4">
                <div className="col-12 col-lg-6">
                    <Image 
                        priority
                        src={fig13}
                        alt=""
                        width="500"
                        className="figure-img img-fluid"
                    />
                </div>
                <figcaption className="figure-caption col-12 col-lg-6">Description of the image/graph goes here. Give the user some context... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</figcaption>
            </figure>

        </Subpage>
    );
}