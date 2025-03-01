import Breadcrumbs from "./Breadcrumbs";

export default function Subpage({ breadcrumbs, children }) {
    return (
        <>
        <Breadcrumbs pageTitles={breadcrumbs}/>

        <div className="container mt-4 mb-5">
            {children}
        </div>
        </>
    );
}