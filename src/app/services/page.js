import Subpage from "@/components/Subpage";

export default function Services() {
    const breadcrumbs = ["Services"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Services</h1>

            <div>
                <div>
                    <h2>Explore Our Services</h2>
                </div>

                <div>
                    <h2>Discover Our Products</h2>
                </div>
            </div>

            <div className="container">
                <h2>The Largest Commercial Stable Isotope Laboratory in the World</h2>
                <p>Isotech specializes in high-precision carbon, hydrogen, oxygen, nitrogen, and sulfur isotope analysis - isotopic fingerprinting - for a variety of industries. We have built our reputation on providing superior services delivered by expert staff.</p>
                <p><a className="button green-bg" href="#">More About Isotech</a></p>
            </div>
        </Subpage>
    );
}