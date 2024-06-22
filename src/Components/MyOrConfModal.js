// MyModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyOrConfModal = ({ show, handleClose, handleConfirm, items }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Action</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to proceed?
                {JSON.stringify(items, null, 2)}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default MyOrConfModal;
