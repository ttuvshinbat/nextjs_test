import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'next/image'
import pic1 from "../public/IMG_3215.JPG"


function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Canvas
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas

                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <Image src={pic1} alt="" />


                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example