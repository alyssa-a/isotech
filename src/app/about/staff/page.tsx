import Subpage from "@/components/Subpage";

export const metadata = {
    title: "Staff | About | Isotech",
    description: "",
};

export default function Staff() {
    const breadcrumbs = ["About", "Staff"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Staff</h1>
        </Subpage>
    );
}