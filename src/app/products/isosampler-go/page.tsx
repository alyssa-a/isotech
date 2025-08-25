import Link from "next/link";
import Image from "next/image";
import Subpage from "@/components/Subpage";
import OrderProductsSection from "../OrderProductsSection";
import isosamplerGoImg from '@/public/images/products/IsoSampler_Go.jpg';

export const metadata = {
    title: "IsoSampler™ Go | Products | Isotech",
    description: "Regulator used to collect gas samples from producing wells or separators into IsoTubes®.",
};

export default function IsoSamplerGo() {
    const breadcrumbs = ["Products", "IsoSampler™ Go"];

    return (
        <>
        <Subpage breadcrumbs={breadcrumbs}>
            <h1>IsoSampler™ Go</h1>

            <Image
                priority
                src={isosamplerGoImg}
                alt="IsoSampler Go attached to an IsoTube"
                width={500}
                height={58}
                className="img-fluid float-lg-end ms-lg-3 mb-3"
            />

            <p>The IsoSampler Go is used to collect pressurized gas samples from a well head or separator into an IsoTube®. The IsoSampler Go can reduce gas pressures up to 3000 psi down to 80 psi for gas sample collection. Wellhead pressures greater than 3000 psi will require additional flow controls.</p>

            <p className="mt-4"><Link className="button download" href="/files/IsoSampler_Go_Sampling_Instructions.pdf">IsoSampler Go Sampling Instructions</Link></p>

        </Subpage>

        <OrderProductsSection/>
        </>
    );
}