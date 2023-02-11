import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

export default function Navbar() {
  
  const [showNav, setShowNav] = useState(false);
  const isMed = useMediaQuery({query : '(max-width: 768px)'});
  const pathNow = useLocation();
  
  useEffect(() => {

    isMed ? null : setShowNav(false)

  },[isMed,pathNow])
    

  function navMenu() {
    return(
      <>
        <div className="m-0 p-0 md:hidden sticky top-[75px] z-20 bg-slate-700/60 h-[160px] border-b-2 border-dotted border-slate-500/30">
          <nav className="flex flex-col items-end pt-1">
          <Link 
            to="/" 
            className={"w-28 pb-2 pt-0 pr-[5%] " +
              "uppercase text-right font-semibold sm:hover:text-slate-300/70 no-underline " + ((pathNow.pathname === "/") ? 'text-slate-300/70' : 'text-slate-600' )}
            >
              HOME
          </Link>
          <Link 
            to="/travel" 
            className={"w-28 py-2 pr-[5%] " +
            "border-t border-slate-600/90 " +
            "uppercase text-right font-semibold sm:hover:text-slate-300/70 no-underline " + ((pathNow.pathname === "/travel") ? 'text-slate-300/70' : 'text-slate-600' )}
            >
              Travel
          </Link>
          <Link 
            to="/gallery" 
            className={"w-28 py-2 pr-[5%] " +
              "border-t border-slate-600/90 " +
              "uppercase text-right font-semibold sm:hover:text-slate-300/70 no-underline " + ((pathNow.pathname === "/gallery") ? 'text-slate-300/70' : 'text-slate-600' )}
            >
              Gallery
          </Link> 
          <Link 
            to="/rsvp" 
            className={"w-28 py-2 pr-[5%] " +
            "border-t border-slate-600/90 " +
            "uppercase text-right font-semibold sm:hover:text-slate-300/70 no-underline " + ((pathNow.pathname === "/rsvp") ? 'text-slate-300/70' : 'text-slate-600' )}
            >
              RSVP
          </Link>   
          </nav>
        </div>
        <div className="md:hidden sticky top-[235px] z-20 w-full h-20 bg-gradient-to-b from-slate-700/60 m-0 p-0"></div>
      </>
    )
  }

  return(
    <div className="m-0 p-0 sticky top-0 z-20 backdrop-blur">
    <div className={'h-[75px] w-full md:bg-gradient-to-b md:from-slate-700/80 md:to-slate-700/10 p-0 m-0' + (((showNav === true) && (isMed == true))? ' bg-slate-700/60' : ' bg-gradient-to-b from-slate-700/80 to-slate-700/10')}>
      <div className="flex flex-row justify-between max-w-[1080px] mx-auto px-0 pt-0 pb-0">
        {/* Flex Container */}
        {/* <a href="/" target='_blank' rel='noreferrer'></a> _blank <= opens in new tab, noreferrer <= hides information from previous page*/} 
        {/* LOGO */}
        <div className="p-1 ml-2">
          <a href="/" rel='noreferrer'>
            <img className="w-[60px] bg-transparent hover:opacity-70 transition duration-500 ease-in-out" src="gbfrontend/static/images/golden-tree.png" alt="BKILLZ" />
          </a>
        </div>
        {/* LINKS Browser*/}
        
        <nav className="hidden md:flex md:flex-row md:pr-5">
          <Link 
            to="/" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/") ? 'text-slate-600/60' : 'text-slate-600' ) + " hover:text-slate-600/60 " + 
              "hover:shadow-sm hover:shadow-yellow-200 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-slate-300/70 to-slate-30/0 "  +
              "border-l-2 border-r border-slate-600/60 rounded-b-3xl rounded-t-sm"}
            >
              HOME
          </Link>
          <Link 
            to="/travel" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/travel") ? 'text-slate-600/60' : 'text-slate-600' ) + " hover:text-slate-600/60 " + 
              "hover:shadow-sm hover:shadow-yellow-200 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-slate-300/70 to-slate-30/0 "  +
              "border-l-2 border-r border-slate-600/60 rounded-b-3xl rounded-t-sm mx-2"}
            >
              Travel
            </Link>
          <Link 
            to="/gallery" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/gallery") ? 'text-slate-600/60' : 'text-slate-600' ) + " hover:text-slate-600/60 " + 
              "hover:shadow-sm hover:shadow-yellow-200 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-slate-300/70 to-slate-30/0 "  +
              "border-l-2 border-r border-slate-600/60 rounded-b-3xl rounded-t-sm mr-2"}
            >
              Gallery
            </Link> 
          <Link 
            to="/rsvp" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/rsvp") ? 'text-slate-600/60' : 'text-slate-600' ) + " hover:text-slate-600/60 " + 
              "hover:shadow-sm hover:shadow-yellow-200 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-slate-300/70 to-slate-30/0 "  +
              "border-l-2 border-r border-slate-600/60 rounded-b-3xl rounded-t-sm"}
            >
              RSVP
            </Link>
        </nav>
        {/* Links Mobile */}
        
        <div className="flex flex-row my-3 mx-3 md:hidden bg-white/30 rounded-xl" onClick={() => setShowNav(!showNav)}>
          <h3 className="px-3 py-3 text-slate-600 text-base font-serif font-bold">Navigation</h3>
          <div className="flex flex-col m-2 p-1 ">
            <div className="w-8 h-0.5 p-0 my-auto bg-slate-500/50 rounded-full"></div>
            <div className="w-8 h-0.5 p-0 my-auto bg-slate-500/50 rounded-full"></div>
            <div className="w-8 h-0.5 p-0 my-auto bg-slate-500/50 rounded-full"></div>
          </div>
        </div>

            
      </div>
    </div>
    {(showNav === true) ? navMenu() : null}
    </div>
  )
};