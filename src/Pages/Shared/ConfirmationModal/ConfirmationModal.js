import React from 'react';

const ConfirmationModal = ({deletingDoctor, title, message, closeModal, handleDoctorDelete }) => {
    return (
        <section>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            htmlFor="confirmation-modal"
                            onClick={() => handleDoctorDelete(deletingDoctor)}
                            className="btn">Delete
                        </label>
                        <label onClick={closeModal} className="btn btn-error text-white">Cancel</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmationModal;