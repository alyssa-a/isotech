import Link from "next/link";
import Subpage from "@/components/Subpage";
import staffData from "@/data/staff.json";

export const metadata = {
    title: "Staff | About | Isotech",
    description: "",
};

export default function Staff() {
    const breadcrumbs = ["About", "Staff"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Staff</h1>

            <div className="row mt-4">

                {staffData.map((person) => (
                    <div key={person.name} className="col-12 col-md-6 col-lg-4 mb-4">
                        <h2 className="fs-5 mb-1">{person.name}</h2>
                        <p>
                            {person.title}<br/>
                            <Link href={`mailto:${person.email}`}>{person.email}</Link>
                        </p>
                    </div>
                ))}

            </div>
        </Subpage>
    );
}