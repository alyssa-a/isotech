import Breadcrumbs from "./Breadcrumbs";

export default function Subpage({ breadcrumbs, children }) {
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <div className="container mb-5">
            {children}
        </div>
        </>
    );
}