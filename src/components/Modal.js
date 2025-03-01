import { useId } from "react";

export default function Modal({ buttonTxt, modalTitle, children }) {
    const modalId = useId() + 'Modal';
    
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                {buttonTxt}
            </button>

            <div class="modal fade" id={modalId} tabindex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id={`${modalId}Label`}>{modalTitle}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {children}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}