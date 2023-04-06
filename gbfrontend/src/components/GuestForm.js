import React from "react";
import { useEffect, useState } from "react";

export default function Guestform({props , updateGuest}) {
    
    const [edit, setEdit] = useState(props.rsvpSubmitted);
    const [firstEntry, setFirstEntry] = useState(!props.rsvpSubmitted);
    const [coming, setComing] = useState(props.coming);
    const [dietRes, setDietRes] = useState(props.dietaryRes)
    const [mainCourse, setMainCourse] = useState(props.dinnerChoice);
    const [sleepover, setSleepover] = useState(props.sleepOver);
    const [rickBus, setRickBus] = useState(props.busRide);
    const [songRequestTitle, setSongRequestTitle] = useState(props.songReqTitle);
    const [songRequestArtist, setSongRequestArtist] = useState(props.songReqArtist);
    const [guestComment, setGuestComment] = useState(props.comments)

    useEffect(() => {
        setEdit(!props.rsvpSubmitted)
    },[props.lastModified])

    function handleGuestSubmit() {
        // e.preventDefault();
        //console.log(props)

        if (['Beef', 'Chicken', 'Veggie'].indexOf(mainCourse) >= 0) {
            console.log("Meal was selected")

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
        } else {
            console.log("Meal not selected")
            alert("Please select a meal option!")
        }
        
    }

    function handleNotComing() {
        setComing(false);
        setFirstEntry(false);
    }

    const showOptions = (

            <div className="z-10 grid gap-3 grid-flow-row grid-cols-1 sm:grid-cols-2 my-3 sm:mx-3">
                {/* Dinner Options */}
                <div className="col-span-full" >
                    <h4 className="w-[85%] mx-auto pb-1 mb-2 text-center text-xl text-slate-600 font-serif font-semibold drop-shadow-lg border-b-4 border-double border-slate-600/70 ">
                        Dinner Options
                    </h4>
                    <h5 className="w-[85%] mx-auto mb-2 mt-4 text-left text-base text-slate-600 ">
                        Please select one of the below options. Vegan options are available upon request. Just let us know in the dietary restrictions.
                    </h5>
                </div>
                <div className={"flex flex-col mx-2 sm:mx-0 sm:mr-4 cursor-pointer border-2 border-slate-600/70 rounded-2xl sm:hover:-translate-y-1 ease-linear transition-all duration-150 active:bg-rose-200 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 " + (mainCourse === "Beef" ? "drop-shadow-lg bg-rose-100/70" : "")}
                    onClick={() => setMainCourse("Beef")}
                    >
                    <p className="p-2 mx-3 grow text-slate-600 text-base">
                        6oz beef filet with red wine demi glaze and house made boursin cheese. Side of herbed mashed potatoes and mixed vegetables.
                    </p>
                    <button className={"py-1 mx-auto my-2 w-[60%] border-2 text-lg font-serif rounded-xl border-slate-600/70 " +
                        (mainCourse === "Beef" ? "bg-sky-400 text-slate-800" : "bg-sky-200 text-slate-600")}
                        type="button">
                        Beef Filet
                    </button>
                </div>
                <div className={"flex flex-col mx-2 sm:mx-0 sm:mr-4 cursor-pointer border-2 border-slate-600/70 rounded-2xl sm:hover:-translate-y-1 ease-linear transition-all duration-150 active:bg-rose-200 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 " + (mainCourse === "Chicken" ? "drop-shadow-lg bg-rose-100/70" : "")}
                    onClick={() => setMainCourse("Chicken")}
                    >
                    <p className="p-2 mx-3 grow text-slate-600 text-base">
                        Stuffed 7oz chicken breast with apricots, dates and cranberry. Stuffed with cinnamon cream sauce and served with wild rice pilaf and mixed vegetables.
                    </p>
                    <button className={"py-1 mx-auto my-2 w-[60%] border-2 text-lg font-serif rounded-xl border-slate-600/70 " +
                        (mainCourse === "Chicken" ? "bg-sky-400 text-slate-800" : "bg-sky-200 text-slate-600")}
                        type="button">
                        Chicken Supreme
                    </button>
                </div>
                <div className={"flex flex-col mx-2 sm:mx-0 sm:mr-4 cursor-pointer border-2 border-slate-600/70 rounded-2xl sm:hover:-translate-y-1 ease-linear transition-all duration-150 active:bg-rose-200 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 " + (mainCourse === "Veggie" ? "drop-shadow-lg bg-rose-100/70" : "")}
                    onClick={() => setMainCourse("Veggie")}
                    >
                    <p className="p-2 mx-3 grow text-slate-600 text-base">
                        Vegetarian option. Italian arborio rice with wild mushrooms in a creamy sauce. Served with mixed vegetables. This can be made vegan upon request.
                    </p>
                    <button className={"py-1 mx-auto my-2 w-[60%] border-2 text-lg font-serif rounded-xl border-slate-600/70 " +
                        (mainCourse === "Veggie" ? "bg-sky-400 text-slate-800" : "bg-sky-200 text-slate-600")}
                        type="button">
                        Mushroom Risotto  
                    </button>  
                </div>
                {/* <div className={"flex flex-col mx-2 sm:mx-0 sm:mr-4 border-2 border-slate-600/70 rounded-2xl " + (mainCourse === "Vegan" ? "drop-shadow-lg" : "opacity-70")}>
                    <p className="p-2 mx-3 grow text-slate-600 text-base">
                        OpTiOn 4 DeScRiPtIoN pEnDiNg StOkElY dEtAiLs
                    </p>
                    <button className={"py-1 mx-auto my-2 w-[60%] border-2 text-lg font-serif rounded-xl ease-linear transition-all duration-150 sm:hover:scale-105 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 border-slate-600/70 " +
                        (mainCourse === "Vegan" ? "bg-sky-300 text-slate-600" : "bg-sky-200 text-slate-400")}
                        onClick={() => setMainCourse("Vegan")}
                        type="button">
                        OPTION 4
                    </button>
                </div> */}
                <div className="col-span-full flex flex-col place-items-stretch mt-3 ">
                    <label htmlFor="alergies" className="mt-2 mb-1 mx-[6%] text-sm sm:text-base font-medium text-slate-600">Any neccessary dietary restrictions? Let us know!</label>
                    <input 
                        type="text" 
                        id="alergies"
                        value={dietRes}
                        placeholder="none" 
                        onChange={(e) => setDietRes(e.target.value)} 
                        className="mb-3 mx-[5%] pl-4 py-1 rounded-full bg-slate-600 text-white">
                    </input>
                </div>

                {/* Staying the night and bus?? */}
                <div className="col-span-full" >
                    <h4 className="w-[85%] mx-auto pb-1 mb-2 text-center text-xl text-slate-600 font-serif font-semibold drop-shadow-lg border-b-4 border-double border-slate-600/70 ">
                        Accommodations and Transportation Survey
                    </h4>
                </div>
                <div className="flex flex-col mx-2 sm:mx-0 sm:mr-4 drop-shadow-lg border-2 border-slate-600/70 rounded-2xl" >
                    <p className="p-2 mx-3 grow text-slate-600 text-base">
                        Are you interested in spending the night? Stokely has a number of accommodations available. 
                        See the <a href="/travel" className="text-xl sm:text-xl font-serif font-bold underline decoration-red-900 text-sky-700" target="_blank">travel</a>  page for booking and details.
                    </p>
                    <div className="flex flex-row flex-wrap mb-3 place-items-stretch">
                        <button className=  {"py-1 mx-3 my-1 border-2 grow min-w-[80px] text-lg font-serif rounded-xl ease-linear transition-all duration-150 sm:hover:scale-105 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 border-slate-600/70 " +
                                            (sleepover ? "bg-sky-300 text-slate-600" : "bg-sky-200 text-slate-400")}
                            onClick={() => setSleepover(true)}
                            type="button">
                            YES
                        </button>
                        <button className=  {"py-1 mx-3 my-1 border-2 grow min-w-[80px] text-lg font-serif rounded-xl ease-linear transition-all duration-150 sm:hover:scale-105 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 border-slate-600/70 " +
                                            (!sleepover ? "bg-sky-300 text-slate-600" : "bg-sky-200 text-slate-400")}
                            onClick={() => setSleepover(false)}
                            type="button">
                            NO
                        </button>
                    </div>
                    
                </div>
                <div className="flex flex-col mx-2 sm:mx-0 sm:mr-4 drop-shadow-lg border-2 border-slate-600/70 rounded-2xl" >
                    <p className="p-2 mx-3 grow text-slate-600 text-base">
                        We are plannig to provide transportation back to town. Would you be interested in a ride? We will be organizing transportation based on interest. 
                        We will update the <a href="/travel" className="text-xl sm:text-xl font-serif font-bold underline decoration-red-900 text-sky-700" target="_blank">travel</a> page closer to the date. 
                    </p>
                    <div className="flex flex-row flex-wrap mb-3 place-items-stretch">
                        <button className=  {"py-1 mx-3 my-1 border-2 grow min-w-[80px] text-lg font-serif rounded-xl ease-linear transition-all duration-150 sm:hover:scale-105 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 border-slate-600/70 " +
                                            (rickBus ? "bg-sky-300 text-slate-600" : "bg-sky-200 text-slate-400")}
                            onClick={() => setRickBus(true)}
                            type="button">
                            YES
                        </button>
                        <button className=  {"py-1 mx-3 my-1 border-2 grow min-w-[80px] text-lg font-serif rounded-xl ease-linear transition-all duration-150 sm:hover:scale-105 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 border-slate-600/70 " +
                                            (!rickBus ? "bg-sky-300 text-slate-600" : "bg-sky-200 text-slate-400")}
                            onClick={() => setRickBus(false)}
                            type="button">
                            NO
                        </button>
                    </div>
                    
                </div>

                {/* song request */}
                <div className="flex flex-col drop-shadow-lg">
                    <h4 className="w-[85%] mx-auto pb-1 mb-2 text-center text-xl text-slate-600 font-serif font-semibold drop-shadow-lg border-b-4 border-double border-slate-600/70 ">
                        Song Request
                    </h4>
                    <div className="flex flex-col items-stretch">
                        <label htmlFor="songReqName" className="mb-1 mx-[11%] text-sm font-medium text-slate-700">Song Title</label>
                        <input 
                            type="text" 
                            id="songReqName"
                            value={songRequestTitle}
                            placeholder="Song Name" 
                            onChange={(e) => setSongRequestTitle(e.target.value)} 
                            className="mb-1 mx-[9%] pl-3 py-1 rounded-full bg-slate-600 text-white">
                        </input>
                        <label htmlFor="songReqArtist" className=" mb-1 mx-[11%] text-sm font-medium text-slate-700">Artist</label>
                        <input 
                            type="text" 
                            id="songReqArtist"
                            value={songRequestArtist}
                            placeholder="none" 
                            onChange={(e) => setSongRequestArtist(e.target.value)} 
                            className="mb-3 mx-[9%] pl-3 py-1 rounded-full bg-slate-600 text-white">
                        </input>
                    </div>
                </div>
                <div className="flex flex-col drop-shadow-lg">
                    <h4 className="w-[85%] mx-auto pb-1 mb-2 text-center text-xl text-slate-600 font-serif font-semibold drop-shadow-lg border-b-4 border-double border-slate-600/70 ">
                        Comments or Questions?
                    </h4>
                    <textarea 
                        id="comments"
                        value={guestComment}
                        onChange={(e) => setGuestComment(e.target.value)}
                        className="px-3 py-2 mx-3 mb-3 mt-1 sm:mt-5 min-h-[100px] rounded-2xl grow bg-slate-600 text-white" >

                    </textarea>
                </div>

                {/* mother's mating name */}
            </div>
        )
        // onSubmit={() => handleGuestSubmit()}

    const showNotComing = (
        
        <div>
            <hr className='mx-auto my-5 bg-slate-600/90 w-5/6 h-1.5 rounded border-none shadow-lg shadow-emerald-800'/>
            <h3 className="text-center text-base sm:text-xl font-serif text-slate-600 my-4">
                { firstEntry ? "Welcome to the RSVP form!" : "Regretfully I am unable to attend" }
            </h3>
            <hr className='mx-auto my-5 bg-slate-600/90 w-5/6 h-1.5 rounded border-none shadow-lg shadow-emerald-800'/>
        </div>
    )
    const showGuestForm = (
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-base sm:text-xl font-serif text-slate-600 mb-3 sm:mb-4">
                Let us know if you can join us!
            </h2>
            <div className="grid grid-col-1 sm:grid-cols-2 grid-flow-row gap-2 place-items-stretch w-[90%] mx-auto ">
                <button className={"py-1 sm:mr-2 font-serif font-semibold ease-linear transition-all duration-150 shadow shadow-slate-600 sm:hover:scale-105 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 rounded-xl border-2 " + (coming ? "bg-sky-300 text-slate-600  border-slate-600/70 " : "bg-sky-200 text-slate-400  border-slate-600/70")}
                    onClick={() => setComing(true)}
                    type="button">
                    Humbly, yes
                </button>
                <button className={"py-1 sm:ml-2 font-serif font-semibold ease-linear transition-all duration-150 shadow shadow-slate-600 sm:hover:scale-105 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 rounded-xl border-2 " + ((!coming && !firstEntry) ? "bg-sky-300 text-slate-600  border-slate-600/70 " : "bg-sky-200 text-slate-400  border-slate-600/70")}
                    onClick={() => handleNotComing()}
                    type="button">
                    Regretfully, no 
                </button>
            </div>
            
            {/* {coming ? showOptions : null} */}
            <div className="w-full">
                {coming ? showOptions : showNotComing }
            </div> 
            <button className={"w-[90%] py-1 mx-auto sm:my-3 text-xl font-serif font-semibold ease-linear transition-all sm:hover:-translate-y-0.5 rounded-xl border-2 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 border-slate-600/70 bg-sky-300 text-slate-600"}
                onClick={() => handleGuestSubmit()}>
                Submit
            </button>
        </div>
        
    )

    const showDetails = (

        <>
            <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 px-1 pb-3 text-justify-center">
                {props.coming ? (
                <>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 mt-2 mb-0 ml-3 mr-1 rounded">Dinner Selection:</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-left py-1 pl-3 mt-2 mb-0 mr-3 ml-1 rounded">{props.dinnerChoice}</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 mt-2 mb-0 ml-3 mr-1 rounded">Dietary Restrictions:</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-left py-1 pl-3 mt-2 mb-0 mr-3 ml-1 rounded">{props.dietaryRes}</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 mt-2 mb-0 ml-3 mr-1 rounded">Spending the night:</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-left py-1 pl-3 mt-2 mb-0 mr-3 ml-1 rounded">{props.sleepOver ? "Yes" : "No"}</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 mt-2 mb-0 ml-3 mr-1 rounded">Taking the bus:</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-left py-1 pl-3 mt-2 mb-0 mr-3 ml-1 rounded">{props.busRide ? "Yes" : "No"}</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 mt-2 mb-0 ml-3 mr-1 rounded">Song Request Title:</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-left py-1 pl-3 mt-2 mb-0 mr-3 ml-1 rounded">{props.songReqTitle}</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 mt-2 mb-0 ml-3 mr-1 rounded">Song Request Artist:</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-left py-1 pl-3 mt-2 mb-0 mr-3 ml-1 rounded">{props.songReqArtist}</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 col-span-full md:col-span-1 md:text-right pl-3 py-1 md:pl-1 md:pr-3 mt-2 mb-0 ml-3 mr-3 md:mr-1 rounded">Comments:</p>
                    <p className="bg-white/70 shadow-sm shadow-slate-700 text-slate-600 col-span-full md:col-span-3 md:text-left py-1 pl-3 mt-2 mb-0 mr-3 ml-3 md:ml-1 rounded">{props.comments}</p>
                </> ) :
                     <p className="col-span-full text-xl font-semibold font-serif bg-white/70 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 my-4 mx-3 rounded">Not Coming</p>
                }
                <button
                onClick={() => setEdit(true)} 
                className={"self-center bg-sky-300 text-slate-600 font-serif border-2 py-1 px-6 my-4 ml-3 border-slate-600/70 active:bg-sky-600 focus:outline-offset-1 focus:outline-dashed focus:outline-emerald-400 focus:outline-2 " +
                    "font-semibold text-base rounded-xl shadow shadow-emerald-800 hover:shadow-lg hover:shadow-emerald-800 ease-linear transition-all duration-150 "}
                    >
                    Edit
                </button>
            </div>
            
        </>
        )

    return(
        <div className="my-6 mx-2 sm:mx-6 p-3 border-t-8 border-b-8 border-double border-slate-600/70 rounded-2xl bg-white/80">
            <h3 className="py-1 px-[15%] mb-5 mt-2 mx-auto w-fit text-slate-600 text-2xl sm:text-3xl text-center font-hw font-semibold drop-shadow-lg bg-sky-300 border-2 rounded-xl border-slate-600/70">
                {props.guestName}
            </h3>
            
            {(props.rsvpSubmitted && !edit) ? showDetails : showGuestForm}
            
           
        </div>
    )

}







