import Subpage from "@/components/Subpage";

export const metadata = {
    title: "IsoPak | Products | Isotech",
    description: "",
};

export default function IsoPak() {
    const breadcrumbs= ["Products", "IsoPak"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoPak</h1>
        </Subpage>
    );
}