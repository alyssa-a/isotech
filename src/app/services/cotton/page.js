import Subpage from "@/components/Subpage";

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

        </Subpage>
    );
}