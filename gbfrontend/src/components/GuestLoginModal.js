import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function GuestLoginModal({props, handleSearch}) {

    function handleInput(e) {
        props.dispatch({
            type: 'setInputText',
            inputText : e
        })
    }

    function handleClose() {
        props.dispatch({
            type: "nameSearch",
            visible: false,
        })
    }



    return (
        <>
        <Modal
        show={props.modalControl.openModal}
        onHide={handleClose}
        // backdrop="static"
        keyboard={true}
        className='bg-yellow-200/30'
        >
        <Modal.Header closeButton className='bg-red-300 border-2 border-red-700 border-b-transparent'>
        <Modal.Title className='px-3'>{props.modalControl.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form id="nameEntry" className="w-full max-w-sm" onSubmit={(e) => handleSearch(e)}>
                <div className="px-4">
                    <div className="">
                        <p className='min-h-[30px] m-0'>{props.modalControl.promptText}</p>
                    </div>
                    <div className="w-2/3">
                        <input 
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="nameText" 
                            type="text"
                            requred="true"
                            placeholder="Enter Name"
                            value={props.modalControl.inputText}
                            onChange={(e)=> handleInput(e.target.value)}
                        />
                    </div>
                    <p className='min-h-[30px] m-0'>{props.modalControl.errorText}</p>
                </div>
            </form>
            </Modal.Body>
        <Modal.Footer>
            <button variant="secondary" onClick={() => handleClose(false)} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Back
            </button>
            <button form="nameEntry" className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Submit
            </button>
        </Modal.Footer>
        </Modal>

        </>  
    )
}
{/* { modalControl.confirmed ?  showGuests() : null } */}