import Image from "next/image";
import Link from "next/link";
import Subpage from "@/components/Subpage";
import calgaryImg from "@/public/images/Calgary_Skyline.jpeg";
import dhahranImg from "@/public/images/dammam.jpg";
import houstonImg from "@/public/images/Houston_Skyline.jpg";
import trinidadImg from "@/public/images/Trinidad.jpg";

export const metadata = {
    title: "Satellite Laboratories | About | Isotech",
    description: "Isotech has proven the model of setting up sophisticated equipment in established laboratory locations while using highly experienced and trained chemists to operate them remotely.",
};

export default function SatelliteLaboratories() {
    const breadcrumbs = ["About", "Satellite Laboratories"];
    return (
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>Satellite Laboratories</h1>

            <p>Isotech has proven the model of setting up sophisticated equipment in established laboratory locations while using highly experienced and trained chemists to operate them remotely. This allows you to access our experience and methods in remote locations while saving on shipping, improving turnaround times, and working with local representatives. These GC and GC-IRMS systems provide the same continuous flow quality you have come to expect from Isotech. We currently have equipment in the following locations.</p>

            <h2 className="mt-4">Calgary</h2>

            <Image
                src={calgaryImg}
                alt="Calgary skyline"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Located in the energy capital of Canada, Isotech&lsquo;s facility in Calgary adds to our satellite labs in North America.</p>

            <p className="clearfix">For further information, including pricing for analyses and sampling products, contact <Link href="mailto:bashar.qassim@stratumreservoir.com">Stratum Reservoir - Calgary</Link>.</p>
            
            <hr className="my-4"/>

            <h2>Dhahran, Saudi Arabia</h2>

            <Image
                src={dhahranImg}
                alt="Aerial view of Dhahran, Saudi Arabia"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Our satellite lab in Dhahran, Saudi Arabia, opened in 2012.</p>

            <p className="clearfix">For further information, including pricing for analyses and sampling products, <Link href="mailto:ishtiaq.noor@stratumreservoir.com">contact Stratum Reservoir - Dhahran</Link>.</p>

            <hr className="my-4"/>
            
            <h2>Houston, Texas</h2>

            <Image
                src={houstonImg}
                alt="Houston skyline"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Isotech's satellite laboratory in Houston, Texas opened in the fall of 2011, expanding our capacity to provide mudgas analyses to the southern regions of the United States. Located at Stratum Reservoir headquarters. If you are in the area ask for a tour and what additional solutions Stratum can offer.</p>

            <p className="clearfix">For further information, including pricing for analyses and sampling products, please <Link href="mailto:Paul.Walker@stratumreservoir.com">contact Stratum Reservoir-Houston</Link>.</p>

            <hr className="my-4"/>
            
            <h2>Trinidad</h2>

            <Image
                src={trinidadImg}
                alt="building on the waterfront in Trinidad"
                width={400}
                height={267}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>Isotech's satellite laboratory in Trinidad opened in the fall of 2018. It is positioned to provide service to South America and the Gulf of Mexico.</p>

            <p className="clearfix">For further information, including pricing for analyses and sampling products, please <Link href="mailto:rooplal.sooknanan@stratumreservoir.com">contact Stratum Reservoir-Trinidad</Link>.</p>
        </Subpage>
    );
}