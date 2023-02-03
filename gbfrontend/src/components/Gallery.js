import React from "react";
import { useState } from "react";
import Navbar from "./navbar";

export default function Gallery(props) {

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>  
            <Navbar />
            <h1>GALLERY</h1>
        </>
    )

}