import { useId } from "react";

export default function Modal({ buttonTxt, modalTitle, children }) {
    const modalId = useId() + 'Modal';
    
    return (
        <>
            <button type="button" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                {buttonTxt}
            </button>

            <div className="modal fade" id={modalId} tabindex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title fs-5" id={`${modalId}Label`}>{modalTitle}</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}