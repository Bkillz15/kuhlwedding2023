import React from "react";
import { useState, useEffect, useRef } from "react";
import { useMediaQuery } from 'react-responsive';

import Navbar from "./navbar";
import Footer from "./footer";

// Maps API Key AIzaSyCuyWN-bJHO9o5GwW49y8rUCaL3cO9HENk

export default function Travel(props) {
      
    //   const ref = useRef(null);
    //   const [map, setMap] = useState();
      
      const isMed = useMediaQuery({query : '(max-width: 880px)'});

    //   useEffect(() => {
    //     if (ref.current && !map) {
    //       setMap(new window.google.maps.Map(ref.current, {}));
    //     }
    //   }, [ref, map]);

    return(
        <div className="bg-sunset bg-fixed bg-cover bg-center">
            <Navbar />
            <main className="mx-auto max-w-[1080px]">
                <section className='sm:flex-row p-0 mt-6 sm:mt-16 items-center mb-12'>
                    <article className='flex flex-row mx-2 sm:mx-[10%] p-0 backdrop-saturate-[0.60] border-t-8 border-b-8 border-double border-slate-600/70 rounded-xl shadow-lg shadow-emerald-800'>
                        <div className=" w-[20%] bg-gradient-to-l from-white/90 " />
                            <div className=" w-[60%] bg-white/90">
                                <h2 className='py-10 text-4xl font-bold text-center md:text-5xl font-hw text-slate-600'>
                                    Travel<br/>&<br/>Accommodations
                                </h2>
                            </div>
                        <div className=" w-[20%] bg-gradient-to-r from-white/90 "/>
                    </article>

                    <article className='col-span-full mx-2 sm:mx-[10%] px-[10%] bg-gradient-to-r mt-20 py-10 from-white/70 via-white to-white/70 backdrop-saturate-[0.60] rounded-xl border-8 border-double border-slate-600/70 shadow-lg shadow-emerald-800'>
                        <p className='text-base sm:text-xl mt-4 text-center sm:text-left text-slate-600'>
                            Stokely has a number of rooms available if you are interested in spending the night. Please contact Stokely directly at the below info for booking. 
                            Bookings for the accomodations will open May 1st, 2023. Private cabins are limited so expect to share a room with a few other guests.
                        </p>
                        <p className='text-base sm:text-xl mt-4 text-center sm:text-left text-slate-600'>
                            On the RSVP page, you can let us know if you are interested in taking the shuttle into town. We will be organizing rides base on this feedback
                        </p>                    
                    </article>

                    <article className='col-span-full mx-2 sm:mx-[10%] bg-gradient-to-r mt-20 py-10 from-white/70 via-white to-white/70 backdrop-saturate-[0.60] rounded-xl border-8 border-double border-slate-600/70 shadow-lg shadow-emerald-800'>
                        <h2 className="text-2xl px-[20%] sm:text-3xl mt-4 font-bold text-left font-serif text-slate-600">Stokely Creek Lodge</h2>
                        <h4 className="text-xl px-[20%] sm:text-2xl mt-4 text-left font-serif text-slate-600">
                            (705) 649-3421
                        </h4>
                        <h4 className="text-xl px-[20%] sm:text-2xl mt-2 text-left font-serif text-slate-600">
                            194 Pickard Rd,<br/>Goulais River,ON<br/>P0S 1E0
                        </h4>
                        <div className="col-span-full w-fit mx-auto my-5 bg-yellow-50/80 rounded-xl border-4 border-slate-600/70">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.874260430879!2d-84.35011948416754!3d46.78708197913881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d37cd7ceadea707%3A0x68480aa041efc24a!2sStokely%20Creek%20Lodge!5e0!3m2!1sen!2sca!4v1674944068711!5m2!1sen!2sca" 
                                width={isMed ? "300" : "600" }
                                height={isMed ? "240" : "450" } 
                                className="m-2"
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </article>

                    
                </section>
            </main>
            <Footer />
        </div>
    )

}