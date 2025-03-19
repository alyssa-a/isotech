import Subpage from "@/components/Subpage";

export const metadata = {
    title: "News | About | Isotech",
    description: "",
};

export default function News() {
    const breadcrumbs = ["About", "News"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>News</h1>
        </Subpage>
    );
}