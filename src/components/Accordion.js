import { useId } from "react";

export default function Accordion({ heading, headingLevel = 2, children }) {
    const H = "h" + headingLevel;
    const itemId = useId();

    return (
        <div className="accordion">
            <div className="accordion-item">
                <H className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${itemId}`}aria-expanded="false" aria-controls={itemId}>
                        {heading}
                    </button>
                </H>

                <div id={itemId} className="accordion-collapse collapse">
                    <div className="accordion-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}