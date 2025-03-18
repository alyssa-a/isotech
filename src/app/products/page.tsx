import { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import productsImg from "@/public/images/pexels-pixabay-248152.jpg";
import OrderProductsSection from "./OrderProductsSection";

export const metadata = {
    title: "Products | Isotech",
    description: "",
};

interface Product {
    name: string;
    link: string;
    description: string | JSX.Element;
}

const products: Product[] = [
    {
        name: "IsoTube",
        link: "/products/isotube",
        description: "The industry standard for mudgas sampling."
    },
    {
        name: "IsoJar",
        link: "/products/isojar",
        description: "Ideal for sampling cuttings and mud from drilling operations."
    },
    {
        name: "IsoBag",
        link: "/products/isobag",
        description: "Ideal for soil gas sampling and any other sampling at atmospheric conditions."
    },
    {
        name: "IsoFlask",
        link: "/products/isoflask",
        description: "The most accurate way of collecting dissolved gas samples."
    },
    {
        name: "Cylinders",
        link: "/products/cylinders",
        description: "For sampling gas at pressures up to 1800 psig."
    },
    {
        name: "IsoTrap",
        link: "/products/isotrap",
        description: <>Provides an elegant solution for determining the sulfur isotopic ratio of H<sub>2</sub>S.</>
    },
    {
        name: "IsoScrubber",
        link: "/products/isoscrubber",
        description: "Designed to scrub sour gas samples for subsequent isotopic analysis."
    },
    {
        name: "IsoPak",
        link: "/products/isopak",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        name: "DIC Kit",
        link: "/products/dic-kit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
        name: "Water Chemistry Kit",
        link: "/products/water-chemistry-kit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
]

export default function Products() {
    const breadcrumbs = ["Products"];
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <Section bgColor="green" className="landing-hero">
            <div className="pe-lg-4">
                <h1>Products</h1>

                <p className="lead mb-0 mb-md-3">Because Isotech understands that providing customers with the best possible data begins with the best possible sampling containers, we developed the IsoTube<sup>®</sup>, IsoJar<sup>®</sup> IsoPak™, IsoTrap<sup>®</sup> and IsoFlask<sup>®</sup>. We also offer other high-quality sampling products to assist our customers with the sampling process.</p>
            </div>

            <Image 
                priority
                src={productsImg}
                alt=""
                className="slanted-left"
            />
        </Section>

        <Section>
            <div className="row">
                {products.map((product) => (
                    <div key={product.name} className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link href={product.link} className="stretched-link">
                                        {product.name}
                                    </Link>
                                </h2>
                                <p className="mb-0">{product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        <OrderProductsSection />
        </>
    );
}