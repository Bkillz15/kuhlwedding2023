import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { useMediaQuery } from 'react-responsive';

export default function Navbar(props) {
  
  const [showNav, setShowNav] = useState(false);
  const isMed = useMediaQuery({query : '(max-width: 768px)'});
  const pathNow = useLocation();

  console.log(pathNow.pathname);
  
  useEffect(() => {

    isMed ? null : setShowNav(false)

  },[isMed,pathNow])
    

  function navMenu() {
    return(
      <>
        <div className="md:hidden sticky top-[75px] z-20 bg-yellow-100/80 h-[155px] m-0 p-0">
          <nav className="flex flex-col items-end">
          <Link 
            to="/" 
            className={"w-28 pb-2 pt-0 pr-[5%] " +
              "uppercase text-right font-semibold hover:text-amber-600/80 sm:hover:text-amber-500/60 no-underline " + ((pathNow.pathname === "/") ? 'text-amber-500/60' : 'text-amber-600/80' )}
            >
              HOME
          </Link>
          <Link 
            to="/travel" 
            className={"w-28 py-2 pr-[5%] " +
            "border-t border-amber-600/30 " +
            "uppercase text-right font-semibold hover:text-amber-600/80 sm:hover:text-amber-500/60 no-underline " + ((pathNow.pathname === "/travel") ? 'text-amber-500/60' : 'text-amber-600/80' )}
            >
              Travel
          </Link>
          <Link 
            to="/gallery" 
            className={"w-28 py-2 pr-[5%] " +
              "border-t border-amber-600/30 " +
              "uppercase text-right font-semibold hover:text-amber-600/80 sm:hover:text-amber-500/60 no-underline " + ((pathNow.pathname === "/gallery") ? 'text-amber-500/60' : 'text-amber-600/80' )}
            >
              Gallery
          </Link> 
          <Link 
            to="/rsvp" 
            className={"w-28 py-2 pr-[5%] " +
            "border-t border-amber-600/30 " +
            "uppercase text-right font-semibold hover:text-amber-600/80 sm:hover:text-amber-500/60 no-underline " + ((pathNow.pathname === "/rsvp") ? 'text-amber-500/60' : 'text-amber-600/80' )}
            >
              RSVP
          </Link>   
          </nav>
        </div>
        <div className="md:hidden sticky top-[230px] z-20 w-full h-16 bg-gradient-to-b from-yellow-100/80 m-0 p-0"></div>
      </>
    )
  }

  return(
    <>
    <div className={'sticky top-0 z-20 h-[75px] backdrop-blur-xl w-full md:bg-gradient-to-b md:from-yellow-100 md:to-yellow-100/10 p-0 m-0' + (((showNav === true) && (isMed == true))? ' bg-yellow-100/80' : ' bg-gradient-to-b from-yellow-100 to-yellow-100/10')}>
      <div className="flex flex-row justify-between max-w-[1080px] mx-auto px-0 pt-0 pb-0 md:pb-2">
        {/* Flex Container */}
        {/* <a href="/" target='_blank' rel='noreferrer'></a> _blank <= opens in new tab, noreferrer <= hides information from previous page*/} 
        {/* LOGO */}
        <div className="p-1 ml-2">
          <a href="/" rel='noreferrer'>
            <img className="w-[60px] bg-transparent hover:opacity-70 transition duration-500 ease-in-out" src="../.././static/images/golden-tree.png" alt="BKILLZ" />
          </a>
        </div>
        {/* LINKS Browser*/}
        
        <nav className="hidden md:flex md:flex-row md:pr-5">
          <Link 
            to="/" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/") ? 'text-amber-500/60' : 'text-amber-600/80' ) + " text-amber-600/80 hover:text-amber-500/60 " + 
              "hover:translate-y-1 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-amber-200/50 to-amber-50/10 "  +
              "border-l-2 border-r border-amber-200/30 rounded-b-3xl rounded-t-sm"}
            >
              HOME
          </Link>
          <Link 
            to="/travel" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/travel") ? 'text-amber-500/60' : 'text-amber-600/80' ) + " text-amber-600/80 hover:text-amber-500/60 " + 
              "hover:translate-y-1 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-amber-200/50 to-amber-50/10 "  +
              "border-l border-r border-amber-200/30 rounded-b-3xl rounded-t-sm"}
            >
              Travel
            </Link>
          <Link 
            to="/gallery" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/gallery") ? 'text-amber-500/60' : 'text-amber-600/80' ) + " text-amber-600/80 hover:text-amber-500/60 " + 
              "hover:translate-y-1 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-amber-200/50 to-amber-50/10 "  +
              "border-l border-r border-amber-200/30 rounded-b-3xl rounded-t-sm"}
            >
              Gallery
            </Link> 
          <Link 
            to="/rsvp" 
            className={"pt-3 pb-2 px-3 m-0 " + 
              "uppercase text-xl md:text-xl font-semibold no-underline " + ((pathNow.pathname === "/rsvp") ? 'text-amber-500/60' : 'text-amber-600/80' ) + " text-amber-600/80 hover:text-amber-500/60 " + 
              "hover:translate-y-1 transition duration-300 ease-in-out " + 
              "bg-gradient-to-b from-amber-200/50 to-amber-50/10 "  +
              "border-l border-r-2 border-amber-200/30 rounded-b-3xl rounded-t-sm"}
            >
              RSVP
            </Link>
        </nav>
        {/* Links Mobile */}
        
        <div className="md:hidden space-y-2 m-4" onClick={() => setShowNav(!showNav)}>
          <div className="w-8 h-0.5 bg-amber-700/50 rounded-full"></div>
          <div className="w-8 h-0.5 bg-amber-700/50 rounded-full"></div>
          <div className="w-8 h-0.5 bg-amber-700/50 rounded-full"></div>
        </div>

            
      </div>
    </div>
    {(showNav === true) ? navMenu() : null}
    </>
  )
};