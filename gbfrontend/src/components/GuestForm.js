import React from "react";
import { useEffect, useState } from "react";

export default function Guestform({props , updateGuest}) {
    
    const [edit, setEdit] = useState(props.rsvpSubmitted)
    const [coming, setComing] = useState(props.coming);
    const [dietRes, setDietRes] = useState(props.dietaryRes)
    const [mainCourse, setMainCourse] = useState(props.dinnerChoice);
    const [sleepover, setSleepover] = useState(props.sleepOver);
    const [rickBus, setRickBus] = useState(props.busRide);
    const [songRequestTitle, setSongRequestTitle] = useState(props.songReqTitle);
    const [songRequestArtist, setSongRequestArtist] = useState(props.songReqArtist);
    const [guestComment, setGuestComment] = useState(props.comments)

    // useEffect(() => {
    //     setEdit(!props.rsvpSubmitted)
    // },[props.lastModified])

    function handleGuestSubmit() {
        // e.preventDefault();
        console.log(props)
        let guestVals = props;

        guestVals.coming = coming;
        guestVals.dietaryRes = dietRes;
        guestVals.dinnerChoice = mainCourse;
        guestVals.sleepOver = sleepover;
        guestVals.busRide = rickBus;
        guestVals.songReqTitle = songRequestTitle;
        guestVals.songReqArtist = songRequestArtist;
        guestVals.comments = guestComment;
        
        updateGuest(guestVals,props.guestID)
        
        // setEdit(false)
    }

    const showOptions = (

            <div className="grid gap-3 grid-flow-row grid-cols-1 sm:grid-cols-2 mx-3 my-3">  
            {/* Dinner Options */}
            <h4 className="col-span-full text-center p-2 bg-gradient-to-br from-purple-200 to-rose-200 rounded-3 border-2 border-cyan-300">Dinner Options</h4>
            <div className={"flex flex-col bg-gradient-to-br from-purple-200 to-rose-200 rounded-3 border-2 border-cyan-300  " + (mainCourse === "Pork" ? "drop-shadow-lg" : "opacity-70")}>
                <button className={"transition ease-in-out delay-75 sm:hover:scale-105 py-2 px-10 mx-auto my-3 rounded-2 text-lg " + (mainCourse === "Pork" ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-700")}
                    onClick={() => setMainCourse("Pork")}
                    type="button">
                    PORK 
                </button>
                <p className="bg-slate-200 rounded-3 p-2 mx-3">
                    The pork is a fine roast with many herbs and spices. Served with cherry potatoes and a russet salad
                </p>
            </div>
            <div className={"flex flex-col bg-gradient-to-br from-purple-200 to-rose-200 rounded-3 border-2 border-cyan-300 " + (mainCourse === "Chicken" ? "drop-shadow-lg" : "opacity-70")}>
                <button className={"transition ease-in-out delay-75 sm:hover:scale-105 py-2 px-10 mx-auto my-3 rounded-2 text-lg " + (mainCourse === "Chicken" ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-700")}
                    onClick={() => setMainCourse("Chicken")}
                    type="button">
                    Chicken
                </button>
                <p className="bg-slate-200 rounded-3 p-2 mx-3">
                    Stokely is proud to provide their finest boiled chicken breast with an optional side of salt ($3.00 extra)
                </p>
            </div>
            <div className={"flex flex-col bg-gradient-to-br from-purple-200 to-rose-200 rounded-3 border-2 border-cyan-300 " + (mainCourse === "Veggie" ? "drop-shadow-lg" : "opacity-70")}>
                <button className={"transition ease-in-out delay-75 sm:hover:scale-105 py-2 px-10 mx-auto my-3 rounded-2 text-lg " + (mainCourse === "Veggie" ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-700")}
                    onClick={() => setMainCourse("Veggie")}
                    type="button">
                    VEGITARIAN 
                </button>
                <p className="bg-slate-200 rounded-3 p-2 mx-3">
                    Milk soup with some eggy stuff. No gabagoooooo
                </p>
            </div>
            <div className={"flex flex-col bg-gradient-to-br from-purple-200 to-rose-200 rounded-3 border-2 border-cyan-300 " + (mainCourse === "Vegan" ? "drop-shadow-lg" : "opacity-70")}>
                <button className={"transition ease-in-out delay-75 sm:hover:scale-105 py-2 px-10 mx-auto my-3 rounded-2 text-lg " + (mainCourse === "Vegan" ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-700")}
                    onClick={() => setMainCourse("Vegan")}
                    type="button">
                    VEGAN
                </button>
                <p className="bg-slate-200 rounded-3 p-2 mx-3">
                    Leafs
                </p>
            </div>
            <div className="col-span-full flex flex-col place-items-stretch bg-gradient-to-r from-green-300 to-fuchsia-300 rounded-3 border-2 border-cyan-300">
                <label htmlFor="alergies" className="mt-2 mb-1 mx-[6%] text-sm font-medium text-slate-700">Any neccessary dietary restrictions? Let us know!</label>
                <input 
                    type="text" 
                    id="alergies"
                    value={dietRes}
                    placeholder="none" 
                    onChange={(e) => setDietRes(e.target.value)} 
                    className="mb-3 mx-[5%] pl-3 py-1 rounded-full bg-black text-white">
                </input>
            </div>

            {/* Staying the night and bus?? */}
            <div className="flex flex-col place-items-stretch bg-gradient-to-br from-purple-200 to-rose-200 rounded-3 border-2 border-cyan-300" >
                < p className="bg-slate-200 rounded-3 p-2 mx-3 my-3 grow">
                    Are you interested in spending the night at Stokely? There are a number of beds available. Details will be available closer to the date.
                </p>
                <div className="flex flex-row flex-wrap mb-3 place-items-stretch">
                    <button className={"transition ease-in-out delay-75 sm:hover:scale-105 mx-3 my-1 py-1 grow min-w-[100px] rounded-2 text-lg " + (sleepover ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-700")}
                        onClick={() => setSleepover(true)}
                        type="button">
                        YES
                    </button>
                    <button className={"transition ease-in-out delay-75 sm:hover:scale-105 mx-3 my-1 py-1 grow min-w-[100px] rounded-2 text-lg " + (sleepover ? "bg-slate-200 text-slate-700" : "bg-slate-600 text-slate-200")}
                        onClick={() => setSleepover(false)}
                        type="button">
                        NO
                    </button>
                </div>
                
            </div>
            <div className="flex flex-col bg-gradient-to-br from-purple-200 to-rose-200 rounded-3 border-2 border-cyan-300" >
                <p className="bg-slate-200 rounded-3 p-2 mx-3 my-3">
                    We are looking to book transportation back to town. Would you be interested in a ride? We will set a couple drop off locations around town depending who is on the bus.
                </p>
                <div className="flex flex-row flex-wrap mb-3 place-items-stretch">
                    <button className={"transition ease-in-out delay-75 sm:hover:scale-105 mx-3 my-1 py-1 grow min-w-[100px] rounded-2 text-lg " + (rickBus ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-700")}
                        onClick={() => setRickBus(true)}
                        type="button">
                        YES
                    </button>
                    <button className={"transition ease-in-out delay-75 sm:hover:scale-105 mx-3 my-1 py-1 grow min-w-[100px] rounded-2 text-lg " + (rickBus ? "bg-slate-200 text-slate-700" : "bg-slate-600 text-slate-200")}
                        onClick={() => setRickBus(false)}
                        type="button">
                        NO
                    </button>
                </div>
                
            </div>

            {/* song request */}
            <div className="flex flex-col bg-gradient-to-r from-green-300 to-fuchsia-300 rounded-3 border-2 border-cyan-300 drop-shadow-lg">
                <h4 className="py-2 px-3 mx-3 mt-3 bg-red-200 text-blue-900 text-center rounded-2">Song Request</h4>
                <label htmlFor="songReqName" className="mb-1 mx-[11%] text-sm font-medium text-slate-700">Song Title</label>
                <input 
                    type="text" 
                    id="songReqName"
                    value={songRequestTitle}
                    placeholder="Song Name" 
                    onChange={(e) => setSongRequestTitle(e.target.value)} 
                    className="mb-1 mx-[9%] pl-3 py-1 rounded-full bg-black text-white">
                </input>
                <label htmlFor="songReqArtist" className=" mb-1 mx-[11%] text-sm font-medium text-slate-700">Artist</label>
                <input 
                    type="text" 
                    id="songReqArtist"
                    value={songRequestArtist}
                    placeholder="none" 
                    onChange={(e) => setSongRequestArtist(e.target.value)} 
                    className="mb-3 mx-[9%] pl-3 py-1 rounded-full bg-black text-white">
                </input>
            </div>
            <div className="flex flex-col place-items-stretch bg-gradient-to-r from-green-300 to-fuchsia-300 rounded-3 border-2 border-cyan-300">
                <h4 className="py-2 px-3 mx-3 my-3 bg-red-200 text-blue-900 text-center rounded-2">
                    Comments or Questions? 
                </h4>
                <textarea 
                    id="comments"
                    value={guestComment}
                    onChange={(e) => setGuestComment(e.target.value)}
                    className="px-3 py-2 mx-3 mb-3 mt-1 min-h-[100px] rounded-3 grow bg-black text-white" >

                </textarea>
            </div>

            

            {/* mother's mating name */}
            </div>
        )
        // onSubmit={() => handleGuestSubmit()}
    const showGuestForm = (

        <div action className="flex flex-col max-w-4xl rounded-4 bg-red-500 ">
            <div className="col-span-full flex flex-row flex-wrap bg-orange-400 rounded-t-xl">
                <button className={"transition ease-in-out delay-75 flex-auto basis-1/4 sm:hover:scale-105 text-xl p-1 m-3 rounded-2 border-2 border-white " + (coming ? "bg-slate-200 text-slate-700" : "bg-slate-600 text-slate-200")} 
                    onClick={() => setComing(false)}
                    type="button">
                    Not Interested
                </button>
                <button className={"transition ease-in-out delay-75 flex-auto basis-1/4 sm:hover:scale-105 text-xl p-1 m-3 rounded-2 border-2 border-white " + (coming ? "bg-slate-600 text-slate-200" : "bg-slate-200 text-slate-700")} 
                    onClick={() => setComing(true)}
                    type="button">
                    I'm Coming!
                </button>
            </div>
            
            {coming ? showOptions : null}

            <button 
                className={"transition ease-in-out delay-75 sm:hover:-translate-y-0.5 basis-full text-xl py-1 px-3 mb-3 mx-3 rounded-2 border-2 border-white bg-slate-200 text-slate-700"} 
                onClick={() => handleGuestSubmit()}>
                SUBMIT
            </button>
        </div>
        
    )

    const showDetails = (

        <>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 bg-pink-300 rounded-4 px-1 py-3 text-justify-center">
                <p className="bg-white text-right pr-3 mt-1 mb-0 ml-3 mr-1 rounded-2">Dinner Selection:</p>
                <p className="bg-white text-left pl-3 mt-1 mb-0 mr-3 ml-1 rounded-2">{props.dinnerChoice}</p>
                <p className="bg-white text-right pr-3 mt-1 mb-0 ml-3 mr-1 rounded-2">Dietary Restrictions:</p>
                <p className="bg-white text-left pl-3 mt-1 mb-0 mr-3 ml-1 rounded-2">{props.dietaryRes}</p>
                <p className="bg-white text-right pr-3 mt-1 mb-0 ml-3 mr-1 rounded-2">Spending the night:</p>
                <p className="bg-white text-left pl-3 mt-1 mb-0 mr-3 ml-1 rounded-2">{props.sleepOver ? "Yes" : "No"}</p>
                <p className="bg-white text-right pr-3 mt-1 mb-0 ml-3 mr-1 rounded-2">Taking the bus:</p>
                <p className="bg-white text-left pl-3 mt-1 mb-0 mr-3 ml-1 rounded-2">{props.busRide ? "Yes" : "No"}</p>
                <p className="bg-white text-right pr-3 mt-1 mb-0 ml-3 mr-1 rounded-2">Song Request Title:</p>
                <p className="bg-white text-left pl-3 mt-1 mb-0 mr-3 ml-1 rounded-2">{props.songReqTitle}</p>
                <p className="bg-white text-right pr-3 mt-1 mb-0 ml-3 mr-1 rounded-2">Song Request Artist:</p>
                <p className="bg-white text-left pl-3 mt-1 mb-0 mr-3 ml-1 rounded-2">{props.songReqArtist}</p>
                <p className="bg-white col-span-full md:col-span-1 md:text-right pr-3 mt-1 mb-0 ml-3 mr-1 rounded-2">Comments:</p>
                <p className="bg-white col-span-full md:col-span-3 rounded-2 mt-1 mb-1 mx-[0.75rem]">{props.comments}</p>
            </div>
            <button
                onClick={() => setEdit(true)} 
                className="transition ease-in-out delay-75 sm:hover:scale-105 basis-full text-xl py-1 px-3 mb-3 mx-3 rounded-2 border-2 border-white bg-slate-600 text-slate-200" >
                EDIT
            </button>
        </>
        )

    return(
        <div className="my-3 px-3">
            <h3 className="text-blue-800 text-xl text-center font-semibold py-1 px-3 rounded-2 border-2 border-white bg-gradient-to-r from-purple-200 to-yellow-200">
                {props.guestName}
            </h3>
            <div>
                {showGuestForm}
            </div>
           
        </div>
    )

}

//  {(props.rsvpSubmitted && !edit) ? showDetails : showGuestForm}





