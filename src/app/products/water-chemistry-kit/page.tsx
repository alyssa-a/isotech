import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Water Chemistry Kit | Products | Isotech",
    description: "",
};

export default function WaterChemistryKit() {
    const breadcrumbs= ["Products", "Water Chemistry Kit"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Water Chemistry Kit</h1>
        </Subpage>
    );
}