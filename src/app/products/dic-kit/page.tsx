import Subpage from "@/components/Subpage";

export const metadata = {
    title: "DIC Kit | Products | Isotech",
    description: "",
};

export default function DICKit() {
    const breadcrumbs= ["Products", "DIC Kit"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>DIC Kit</h1>
        </Subpage>
    );
}