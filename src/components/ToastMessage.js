import React from 'react'
import { useState } from 'react';
import { Toast, ToastContainer } from "react-bootstrap";

const ToastMessage = ({ bg, title, body }) => {
    const [show, setShow] = useState(true);
  return (
    <ToastContainer position='bottom-right' className="toast-container position-absolute top-0 end-5">
        <Toast bg={bg} onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
                    <strong className='me-auto'>{title}</strong>
                    <small>now</small>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>

        </Toast>

    </ToastContainer>
  )
}

export default ToastMessage