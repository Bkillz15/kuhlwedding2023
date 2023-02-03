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
            case "setErrorText":
                return {
                    ...state,
                    errorText : action.errorText
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
                    errorText : "",
                    loading : false,
                    promptText : "",
                    answer : "",
                    myID : "",
                }
            }
            case "question": {
                return {
                    ...state,
                    verified : true,
                    confirmed : false,
                    nameInputText : "",
                    ansInputText : "",
                    errorText : "",
                    promptText : action.promptText,
                    loading : false,
                    answer : "",
                    myID : action.setMyID,
                }
            }
            case "confirmed":
                return {
                    ...state,
                    verified : true,
                    confirmed : true,
                    title : "All Set!",
                    nameInputText : "",
                    errorText : "",
                    promptText : "",
                    loading : false,
                    answer : "",
                }
                
            }   
        throw Error("Unknow Action: " + action.type);
    }


    const [modalControl, dispatch] = useReducer(modalReducer,{
        openModal : false,
        verified : false,
        confirmed : false,
        title : "Look up Your Name",
        nameInputText : "",
        ansInputText : "",
        errorText : "",
        loading : false,
        promptText : "",
        answer : "",
        myID : "",
    })

    const [nameLookupModal, setNameLookupModal] = useState(false);
    const [guestLookupModal, setGuestLookupModal] = useState(false);

    // const [nameLookup, setNameLookup] = useState({});
    const [guestLookup, setGuestLookup] = useState({});
    // const [guestForm, setGuestForm] = useState({});


    useEffect(() => {
        if (modalControl.errorText !== "") {
            const errorTimeout = setTimeout(() => {
                dispatch({type: "setErrorText", errorText: ""})
            }, "3000")
            //clean up finction
            return () => clearTimeout(errorTimeout) 
        }
        
    },[modalControl.errorText])

    async function handleLogin(e) {
        e.preventDefault()

        try {
            dispatch({type: "setLoading", loadingState: true})
            const response = await axios.get("/api/get-name" + "?name=" + modalControl.nameInputText)
            console.log(response.data)
            dispatch({
                type: "question",
                promptText : response.data.skillTestingQ,
                setMyID : response.data.guestID
            })
            // setNameLookup(response.data)
        } catch(error) {
            console.error("Name Check Failed", error);
            if (error.response.data.hasOwnProperty("Bad Request")){
                dispatch({ type: "setErrorText", errorText : (error.response.data["Bad Request"])})
            } else if (error.response.data.hasOwnProperty("Not Found")) {
                dispatch({ type: "setErrorText", errorText : error.response.data["Not Found"]})
            } else {
                dispatch({ type: "setErrorText", errorText : "Something went wrong ..." })
            }
        } finally {
            dispatch({type: "setLoading", loadingState: false})
            console.log("finally")
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

                console.log(response.data)
                dispatch({
                    type: "confirmed"
                })
                console.log(response.data)
                setGuestLookup(response.data)
                setNameLookupModal(false)

            } catch(error) {
                console.error("Name Check Failed", error);
                if (error.response.data.hasOwnProperty("Bad Request")){
                    dispatch({ type: "setErrorText", errorText : (error.response.data["Bad Request"])})
                } else if (error.response.data.hasOwnProperty("Not Found")) {
                    dispatch({ type: "setErrorText", errorText : error.response.data["Not Found"]})
                } else {
                    dispatch({ type: "setErrorText", errorText : "Something went wrong ..." })
                }
            } finally {
                dispatch({type: "setLoading", loadingState: false})
                console.log("finally")
            }
        
        } else {
            dispatch({type:"setErrorText", errorText: "Not Veririfed"})
        }
    }
    // TOMRROW!! UPDATE VIEW TO CHECK VALIDATION FROM DATA AND MAKE SURE ID INPUT IS LOGGED USER NOT THE USER TO BE UPDATED
    async function handleSubmit(guestID) {
        if (modalControl.verified === true) {
            try {
                console.log("SENDING")
                console.log(typeof(guestLookup[guestID]))
                const patchData = guestLookup[guestID]
                patchData.validation = modalControl.ansInputText
                console.log(modalControl.myID)
                console.log(patchData)
                const response = await axios.patch("/api/update-guest" + "?id=" + guestID , patchData)
                console.log("Success")
                console.log(response.data)
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

    function handleGuestForm(itemUpdate, guestID) {
        setGuestLookup(prevState => ({...prevState, [guestID] : itemUpdate}));
        handleSubmit(guestID)
        console.log("HERE!!")
    }

    

    // function guestRequest() {
    //     return (

    //         <div className="flex flex-col items-center bg-sunset bg-no-repeat p-6">
    //             <p className="my-5 p-4 bg-yellow-50 rounded-lg text-blue-700 text-xl">
    //                 We are very excited for you all to join us. You can click below to enter your RSVP for you and those you are coming along with.
    //             </p>
    //             <button
    //                 className="btn-blue" 
    //                 onClick={() => dispatch({type : "nameSearch", visible : true})}>
    //                 RSVP
    //             </button>
    //             <GuestLoginModal 
    //                 props={{modalControl, dispatch}}
    //                 handleSearch={handleLogin}
    //                 />
    //         </div>            
    //     )
    // }

    function showGuests() {
        return(
        <>
            <div className="py-2 px-0">
                {Object.keys(guestLookup).map((key, i) => <Guestform 
                                                                props={guestLookup[key]} 
                                                                updateGuest={handleGuestForm} 
                                                                key={i}/>
                                                                )}
            </div>
        </>
        )
    }

    return(
        <div className="bg-amber-50 bg-tree bg-fixed bg-contain bg-no-repeat bg-center">
            <Navbar />
            <main className='mx-auto max-w-[1080px] min-h-screen'>
                <button
                    className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setNameLookupModal(true)}
                >
                    Start RSVP
                </button>
                {nameLookupModal ? (
                <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    onClick={(e) => {(nameLookupModal ===true && e.currentTarget === e.target) ? setNameLookupModal(false): null}}
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-2xl font-semibold">
                            Look up your name
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setNameLookupModal(false)}
                        >
                            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                            X
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <form id="nameEntry" className="w-full max-w-sm" onSubmit={(e) => handleLogin(e)}>
                            <div className="px-4">
                                <div className="">
                                    <p className='min-h-[30px] m-0'>{modalControl.promptText}</p>
                                </div>
                                <div className="w-2/3">
                                    <input 
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                        id="nameText" 
                                        type="text"
                                        requred="true"
                                        placeholder="Enter Name"
                                        value={modalControl.inputText}
                                        onChange={(e) => dispatch({type: 'setNameInputText', nameInputText : e.target.value})}
                                    />
                                    </div>
                                <p className='min-h-[30px] m-0'>{modalControl.errorText}</p>
                            </div>
                            <button
                            type="submit"
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                            Search
                        </button>
                        </form>
                        <form id="ansEntry" className={"w-full max-w-sm " + (modalControl.verified ? null : 'hidden')} onSubmit={(e) => handleAns(e)}>
                            <div className="px-4">
                                <div className="">
                                    <p className='min-h-[30px] m-0'>{modalControl.promptText}</p>
                                </div>
                                <div className="w-2/3">
                                    <input 
                                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 my-1 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                        id="nameText" 
                                        type="text"
                                        requred="true"
                                        placeholder="Enter Name"
                                        value={modalControl.inputText}
                                        onChange={(e) => dispatch({type: 'setAnsInputText', ansInputText : e.target.value})}
                                    />
                                    </div>
                                <p className='min-h-[30px] m-0'>{modalControl.errorText}</p>
                            </div>
                            <button
                            type="submit"
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        >
                            Submit
                        </button>
                        </form>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setNameLookupModal(false)}
                        >
                            Close
                        </button>
                        
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}
            

                { modalControl.confirmed ?  showGuests() : null }

                
                
            </main>
        </div>
    )

}

{/* <GuestLoginModal 
props={{modalControl, dispatch}}
handleSearch={handleLogin}
/> */}

