import React from "react";
import { useState } from "react";
import Navbar from "./navbar";
import Modal from "./NameSearchModal";

export default function Gallery(props) {

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
            <Modal />
        </>
    )

}