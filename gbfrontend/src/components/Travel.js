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

                    <article className='mx-2 sm:mx-[10%] px-[10%] bg-gradient-to-r mt-20 py-10 from-white/70 via-white to-white/70 backdrop-saturate-[0.60] rounded-xl border-8 border-double border-slate-600/70 shadow-lg shadow-emerald-800'>
                        <p className='text-base sm:text-xl mt-6 text-left text-slate-600'>
                            Stokely has a number of rooms available if you are interested in spending the night. To book a room, please contact Stokely directly at the below contact information. 
                            Bookings for the accomodations will open May 1<sup>st</sup>, 2023 and can be booked for the days before and after the wedding as needed. All rooms will be reserved for wedding guests until 
                            two months prior to the wedding or June 11<sup>th</sup>. After that date, rooms will also be open to the general public for booking.
                        </p>
                        <p className='text-base sm:text-xl mt-6 text-left text-slate-600'>
                            For those spending the night, you may check in starting at noon on the day of the wedding.
                            Other days will have the usual check in time.
                        </p>
                        <div className="grid grid-flow-row grid-cols-12 gap-1 mx-auto px-1 pb-3 text-justify-center items-stretch max-w-[444px] mt-10">
                            <p className="bg-white/70 col-span-full shadow-sm shadow-slate-700 text-slate-600 font-sarif font-bold text-xl text-center py-3 rounded">Accommodations</p>
                            <div className="flex flex-col bg-white/70 row-span-2 col-span-6 shadow-sm shadow-slate-700 rounded">
                                <p className=" text-slate-600 text-center m-auto font-semibold">Room Types</p>
                            </div>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-center font-semibold py-1 rounded">Rates</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center font-semibold py-1 rounded">Sun-Thurs</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center font-semibold py-1 rounded">Fri, Sat & Hol</p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 rounded">Lodge Room (single)</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$104</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$120</p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 rounded">Lodge Room</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$120</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$136</p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 rounded">Chalet Room</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$140</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$156</p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right py-1 pr-3 rounded">Suites</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$156</p>
                            <p className="bg-white/70 col-span-3 shadow-sm shadow-slate-700 text-slate-600 text-center py-1 rounded">$172</p>
                            <p className="bg-white/70 col-span-full shadow-sm shadow-slate-700 text-slate-600 text-left px-3 py-1 mt-2 rounded">
                                * All rates per night based on double occupancy unless stated otherwise.
                            </p>
                        </div>
                        <p className='text-base sm:text-xl mt-6 text-left text-slate-600'>
                            Lodge rooms are located in the main lodge where the reception is held and have shared bathrooms. Chalets and suites are a short walk from the lodge and vary in size and the number of rooms.
                        </p>
                        <div className="grid grid-flow-row grid-cols-12 gap-1 mx-auto px-1 pb-3 text-justify-center items-stretch max-w-[444px] mt-10">
                            <p className="bg-white/70 col-span-full shadow-sm shadow-slate-700 text-slate-600 text-left px-3 py-1 rounded">
                                Meal plans are available at the below rates
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right px-3 py-1 rounded">
                               Breakfast
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-center px-3 py-1 rounded">
                                $15
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right px-3 py-1 rounded">
                               Lunch
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-center px-3 py-1 rounded">
                                $20
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right px-3 py-1 rounded">
                               Dinner (Chef's choice with apps)
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-center px-3 py-1 rounded">
                                $45
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-right px-3 py-1 rounded">
                               Overnight Package (Dinner and Breakfast)
                            </p>
                            <p className="bg-white/70 col-span-6 shadow-sm shadow-slate-700 text-slate-600 text-center px-3 py-1 rounded">
                                $55
                            </p>
                            <p className="bg-white/70 col-span-full shadow-sm shadow-slate-700 text-slate-600 text-left px-3 py-1 mt-2 rounded">
                                * Dinner will be provided the night of the wedding
                            </p>
                        </div>
                        <p className='text-base sm:text-xl mt-10 text-left text-slate-600'>
                            On the RSVP page, you can let us know if you are interested in taking the shuttle into town. We will be organizing rides based on this feedback.
                        </p>                    
                    </article>

                    <article className='col-span-full mx-2 sm:mx-[10%] bg-gradient-to-r mt-20 py-10 from-white/70 via-white to-white/70 backdrop-saturate-[0.60] rounded-xl border-8 border-double border-slate-600/70 shadow-lg shadow-emerald-800'>
                        <h2 className="text-2xl px-[20%] sm:text-3xl mt-4 font-bold text-left font-serif text-slate-600">Stokely Creek Lodge</h2>
                        <a href="https://www.stokelycreek.com" className="text-xl px-[20%] sm:text-2xl mt-4 text-left font-serif text-slate-600" target="_blank">
                            www.stokelycreek.com
                        </a>
                        <h4 className="text-xl px-[20%] sm:text-2xl mt-2 text-left font-serif text-slate-600">
                            705-649-3421
                        </h4>
                        <h4 className="text-xl px-[20%] sm:text-2xl mt-2 text-left font-serif text-slate-600">
                            1-866-786-5359
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