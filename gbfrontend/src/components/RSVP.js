import React from "react";
import { useState, useEffect, useReducer } from "react";
import Navbar from "./navbar";
import Guestform from "./GuestForm";
import axios from "axios";

export default function RSVP() {
    
    const modalReducer = (state, action) => {
        switch(action.type) {
            case "open":
                return{
                    ...state
                }              
            case "setNameInputText":
                return {
                    ...state,
                    nameInputText : action.nameInputText
                };
            case "setAnsInputText":
                return {
                    ...state,
                    ansInputText : action.ansInputText
                };
            case "setNameErrorText":
                return {
                    ...state,
                    nameErrorText : action.nameErrorText
                };
            case "setAnsErrorText":
                return {
                    ...state,
                    ansErrorText : action.ansErrorText
                };
            case "setLoading":
                return {
                    ...state,
                    loading : action.loadingState
                }
            case "nameSearch": {
                return {
                    verified : false,
                    confirmed : false,
                    nameInputText : "",
                    ansInputText : "",
                    nameErrorText : "",
                    promptText : "",
                    ansErrorText : "",
                    loading : false,
                    promptText : "",
                    myID : "",
                }
            }
            case "question": {
                return {
                    ...state,
                    verified : true,
                    confirmed : false,
                    namePromptText : action.namePromptText,
                    nameInputText : "",
                    ansInputText : "",
                    nameErrorText : "",
                    promptText : action.promptText,
                    ansErrorText : "",
                    loading : false,
                    myID : action.setMyID,
                }
            }
            case "confirmed":
                return {
                    ...state,
                    verified : true,
                    confirmed : true,
                    namePromptText : "Enter Your Name",
                    nameInputText : "",
                    nameErrorText : "",
                    ansErrorText : "",
                    loading : false,
                }
                
            }   
        throw Error("Unknow Action: " + action.type);
    }


    const [modalControl, dispatch] = useReducer(modalReducer,{
        openModal : false,
        verified : false,
        confirmed : false,
        namePromptText : "Enter Your Name",
        nameInputText : "Enter Your Name",
        ansInputText : "",
        nameErrorText : "",
        promptText : "",
        ansErrorText : "",
        loading : false,
        myID : "",
    })

    const [nameLookupModal, setNameLookupModal] = useState(false);
    const [showGuestRequest, setShowGuestRequest] = useState(true);
    const [guestLookup, setGuestLookup] = useState({});


    useEffect(() => {
        if (modalControl.errorText !== "") {
            const errorTimeout = setTimeout(() => {
                dispatch({type: "setNameErrorText", nameErrorText: ""})
                dispatch({type: "setAnsErrorText", ansErrorText: ""})
            }, "3000")
            //clean up finction
            return () => clearTimeout(errorTimeout) 
        }
        
    },[modalControl.nameErrorText,modalControl.ansErrorText])

    async function handleLogin(e) {
        e.preventDefault()

        try {
            dispatch({type: "setLoading", loadingState: true})
            const response = await axios.get("/api/get-name" + "?name=" + modalControl.nameInputText)
            console.log(response.data)
            dispatch({
                type: "question",
                namePromptText : ("Welcome " + response.data.guestName + "!"),
                promptText : response.data.skillTestingQ,
                setMyID : response.data.guestID
            })
            // setNameLookup(response.data)
        } catch(error) {
            console.error("Name Check Failed", error);
            if (error.response.data.hasOwnProperty("Bad Request")){
                dispatch({ type: "setNameErrorText", nameErrorText : (error.response.data["Bad Request"])})
            } else if (error.response.data.hasOwnProperty("Not Found")) {
                dispatch({ type: "setNameErrorText", nameErrorText : error.response.data["Not Found"]})
            } else {
                dispatch({ type: "setNameErrorText", nameErrorText : "Something went wrong ..." })
            }
        } finally {
            dispatch({type: "setLoading", loadingState: false})
        }           
        
    }

    async function handleAns(e) {
        e.preventDefault()
        if ( modalControl.verified === true ) {
            try {
                dispatch({type: "setLoading", loadingState: true})
                console.log(modalControl.inputText)
                const response = await axios.get(("/api/get-guest" + "?id=" + modalControl.myID), { 
                    params: {
                        answer : modalControl.ansInputText
                    }
                })
                dispatch({
                    type: "confirmed"
                })
                setGuestLookup(response.data)
                setNameLookupModal(false)
                setShowGuestRequest(false)

            } catch(error) {
                console.error("Name Check Failed", error);
                if (error.response.data.hasOwnProperty("Bad Request")){
                    dispatch({ type: "setAnsErrorText", ansErrorText : (error.response.data["Bad Request"])})
                } else if (error.response.data.hasOwnProperty("Not Found")) {
                    dispatch({ type: "setAnsErrorText", ansErrorText : error.response.data["Not Found"]})
                } else {
                    dispatch({ type: "setAnsErrorText", ansErrorText : "Something went wrong ..." })
                }
            } finally {
                dispatch({type: "setLoading", loadingState: false})
            }
        
        } else {
            dispatch({type:"setAnsErrorText", ansErrorText: "Not Veririfed"})
        }
    }
    
    async function handleSubmit(guestID,myID) {
        if (modalControl.verified === true) {
            try {
                const patchData = guestLookup[guestID]
                patchData.validation = modalControl.ansInputText
                console.log(myID)
                console.log(patchData)
                const response = await axios.patch("/api/update-guest" + "?id=" + myID , patchData)
                setGuestLookup(prevState => ({...prevState, [guestID] : response.data}))
            } catch(error) {
                if (error.response) {
                  // The request was made and the server responded with a status code
                  // that falls out of the range of 2xx
                  console.log(error.response.data);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                } else if (error.request) {
                  // The request was made but no response was received
                  // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                  // http.ClientRequest in node.js
                  console.log(error.request);
                } else {
                  // Something happened in setting up the request that triggered an Error
                  console.log('Error', error.message);
                }
                console.log(error.config)
            } 
        }
        
    }

    function handleCloseModal() {
        setNameLookupModal(false)
        dispatch({type: "nameSearch"})
    }

    function handleGuestForm(itemUpdate, guestID) {
        setGuestLookup(prevState => ({...prevState, [guestID] : itemUpdate}));
        handleSubmit(guestID,modalControl.myID)
        console.log("HERE!!")
    }

    

    const guestRequest = (
        <>
        <article className='flex flex-row justify-items-stretch w-[90%] md:w-[80%] p-0 mt-20 backdrop-saturate-[0.60] border-t-8 border-b-8 border-double border-slate-600/70 rounded-xl shadow-lg shadow-yellow-200'>
            <div className="grow-0 w-[20%] bg-gradient-to-l from-white/80 " />
            <div className="grow min-w-[60%] bg-white/80">
                <h2 className='py-10 text-5xl grow font-bold text-center md:text-6xl md:text-center font-hw text-slate-600'>
                    Répondez s'il vous plaît
                </h2>
            </div>
            <div className="grow-0 w-[20%] bg-gradient-to-r from-white/80 "/>
        </article>
        <div className="flex flex-col w-[90%] md:w-[80%] mt-20 py-3 px-4 md:px-10 bg-white/80 rounded-2xl border-8 border-double border-slate-600/70 shadow-lg shadow-yellow-200">
            <p className="my-5 p-4 text-slate-600 text-base md:text-xl">
                Welcome to the RSVP section. You may start your RSVP by clicking below. You will be asked to search your name and verify your identity with a special question.
                Once verified, you can eddit your selections and submit your form to us. You will be able to come back any time to edit your choices up unitl the 
                <span className="relative font-bold font-serif text-xl md:text-2xl text-sky-700"> RSVP deadline of June 1<sup>st</sup></span>
            </p>
            <button
                className={"bg-sky-300 text-slate-600 active:bg-sky-600 font-serif font-semibold text-xl py-3 px-6 mb-6 rounded-xl border-2 border-slate-600/70 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 " +
                " shadow shadow-emerald-800 hover:shadow-lg hover:shadow-emerald-800 ease-linear transition-all duration-150 " + 
                " disabled:bg-sky-100/80 disabled:text-slate-300 disabled:hover:shadow-none disabled:shadow-none disabled:border-none"}
                type="button"
                onClick={() => setNameLookupModal(true)}
            >
                Start RSVP
            </button>
        </div>      
        </>      
    )

    const showGuests = (
            <div className="py-2 px-0">
                {Object.keys(guestLookup).map((key, i) => <Guestform 
                                                                props={guestLookup[key]} 
                                                                updateGuest={handleGuestForm} 
                                                                key={i}/>
                                                                )}
            </div>
    )

    return(
        <div className="bg-sky-200 bg-tree-light bg-fixed bg-contain bg-no-repeat bg-center">
            <Navbar />
            <main className='flex flex-col justify-items-center items-center mx-auto px-3 sm:px-4 max-w-[1080px] min-h-screen'>

                { showGuestRequest ? guestRequest : null }  

                {nameLookupModal ? (
                <>
                <div
                    className="justify-center top-20 sm:top-32 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    onClick={(e) => {(nameLookupModal ===true && e.currentTarget === e.target) ? handleCloseModal() : null}}
                >
                    {/* MODAL */}
                    <div className="relative w-auto my-6 mx-auto max-w-[300px] sm:max-w-lg">
                    {/*content*/}
                    <div className="relative flex flex-col w-full h-[435px] outline-none focus:outline-none border-t-8 border-b-8 border-double bg-white/90 border-slate-600/70 rounded-2xl shadow-lg shadow-yellow-100">
                        {/*header*/}
                        <div className="flex items-start justify-between px-8 py-4 border-b-2 border-solid border-slate-600/70 rounded-t">
                        <h3 className="text-2xl pl-3 font-semibold text-slate-600">
                            Guest Lookup
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent float-right leading-none  outline-none focus:outline-double"
                            onClick={() => handleCloseModal()}
                        >       
                            <span className="text-slate-600/70 font-bold h-6 w-6 text-2xl block outline-none focus:outline-none">
                            X
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative px-8 py-4 flex-auto">
                        <form id="nameEntry" className="w-full" onSubmit={(e) => handleLogin(e)}>
                            <div className="">
                                <div className="">
                                    <p className='min-h-[30px] m-0 px-3'>{modalControl.namePromptText}</p>
                                </div>
                                <div className="w-2/3">
                                    <input 
                                        className="bg-sky-100 appearance-none border-2 border-sky-400/30 rounded-xl w-full py-2 px-4 my-1 text-slate-600 leading-tight focus:bg-white focus:border-emerald-400" 
                                        id="nameText" 
                                        type="text"
                                        requred="true"
                                        placeholder="Enter Name"
                                        value={modalControl.inputText}
                                        onChange={(e) => dispatch({type: 'setNameInputText', nameInputText : e.target.value})}
                                    />
                                    </div>
                                <p className='min-h-[30px] m-0 px-3'>{modalControl.nameErrorText}</p>
                            </div>
                            <button
                            type="submit"
                            className={"bg-sky-300 text-slate-600 active:bg-sky-600 font-semibold text-base w-1/3 py-2 rounded-xl border-2 border-slate-600/70 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 " +
                                "shadow shadow-emerald-800 hover:shadow-lg hover:shadow-emerald-800 ease-linear transition-all duration-150 " +
                                " hover:shadow-lg hover:shadow-emerald-800 outline-none focus:outline-none " + 
                                " disabled:bg-sky-100/80 disabled:text-slate-300 disabled:hover:shadow-none disabled:shadow-none disabled:border-none"}
                            disabled={modalControl.verified || modalControl.loading}
                            >
                                Search
                            </button>
                        </form>
                        <form id="ansEntry" className={"w-full mt-4 " + (modalControl.verified ? null : 'hidden')} onSubmit={(e) => handleAns(e)}>
                            <div className="">
                                <div className="">
                                    <p className='min-h-[30px] m-0 px-3'>{modalControl.promptText}</p>
                                </div>
                                <div className="w-2/3">
                                    <input 
                                        className="bg-sky-100 appearance-none border-2 border-sky-400/30 rounded-xl w-full py-2 px-4 my-1 text-gray-700 leading-tight focus:bg-white focus:border-emerald-400" 
                                        id="errorText" 
                                        type="text"
                                        requred="true"
                                        placeholder="Enter Answer"
                                        value={modalControl.inputText}
                                        onChange={(e) => dispatch({type: 'setAnsInputText', ansInputText : e.target.value})}
                                    />
                                    </div>
                                <p className='min-h-[30px] m-0 px-3'>{modalControl.ansErrorText}</p>
                            </div>
                            <button
                            type="submit"
                            className={"bg-sky-300 text-slate-600 active:bg-sky-600 font-semibold text-base w-1/3 py-2 rounded-xl border-2 border-slate-600/70 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 " +
                            "shadow shadow-emerald-800 hover:shadow-lg hover:shadow-emerald-800 ease-linear transition-all duration-150 " +
                            " hover:shadow-lg hover:shadow-emerald-800 outline-none focus:outline-none " + 
                            " disabled:bg-sky-100/80 disabled:text-slate-300 disabled:hover:shadow-none disabled:shadow-none disabled:border-none"}
                            disabled={modalControl.loading}
                            >
                                Submit
                            </button>
                        </form>
                        </div>
                        {/*footer*/}
                        {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-slate-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setNameLookupModal(false)}
                        >
                            Close
                        </button>
                        
                        </div> */}
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}
            
                <div className="py-4 px-2 w-full">     
                { modalControl.confirmed ?  showGuests : null }
                </div>
                
                
            </main>
        </div>
    )

}
