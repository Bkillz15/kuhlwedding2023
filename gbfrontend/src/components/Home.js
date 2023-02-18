import React from "react";
import {useEffect} from "react";
import Countdown from 'react-countdown';
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home(props) {

  const weddingTime = new Date(Date.UTC(2023,7,11,20,20,11)) 

  const Completionist = () => <span>You are good to go!</span>;

  function padTime (timeNum,digits) {
    return('0'.repeat(digits - (timeNum.toString().length)) + timeNum.toString())
  }

  const countdownRenderer = ({ days,hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="grid grid-cols-4 grid-rows-3 gap-x-4 gap-y-2 m-y-auto mx-2 md:mx-4 items-center justify-items-center ">
          <div className="bg-slate-700/80 md:px-3 py-1 m-0 w-full border-x-4 border-double border-amber-300 rounded-xl shadow-md shadow-slate-700">
            <p className="text-sm md:text-base text-slate-100 text-center font-body ">
              DAYS
            </p>
          </div>
          <div className="bg-slate-700/80 md:px-3 py-1 m-0 w-full border-x-4 border-double border-amber-300 rounded-xl shadow-md shadow-slate-700">
            <p className="text-sm md:text-base text-slate-100 text-center font-body ">
              HOURS
            </p>
          </div>
          <div className="bg-slate-700/80 md:px-3 py-1 m-0 w-full border-x-4 border-double border-amber-300 rounded-xl shadow-md shadow-slate-700">
            <p className="text-sm md:text-base text-slate-100 text-center font-body ">
              MINUTES
            </p>
          </div>
          <div className="bg-slate-700/80 md:px-3 py-1 m-0 w-full border-x-4 border-double border-amber-300 rounded-xl shadow-md shadow-slate-700">
            <p className="text-sm md:text-base text-slate-100 text-center font-body ">
              SECONDS
            </p>
          </div>
          <div className="row-span-2 flex flex-col h-[70px] md:h-[80px] w-[80px] md:w-[105px] border-x-2 border-amber-300 rounded-md shadow-md shadow-slate-700">
            <div className="basis-1/6 bg-gradient-to-t from-slate-700/80"/>
            <div className="basis-4/6 flex flex-col justify-center bg-slate-700/80 ">
              <p className="text-nixie text-shadow-glow2 tracking-[0.15em] tabular-nums shadow-red-600 text-2xl md:text-4xl text-center font-count ">
                {padTime(days,3)}
              </p>
            </div>
            <div className="basis-1/6 bg-gradient-to-b from-slate-700/80"/>
          </div>
          <div className="row-span-2 flex flex-col h-[70px] md:h-[80px] w-[80px] md:w-[105px] border-x-2 border-amber-300 rounded-md shadow-md shadow-slate-700">
            <div className="basis-1/6 bg-gradient-to-t from-slate-700/80"/>
            <div className="basis-4/6 flex flex-col justify-center bg-slate-700/80">
              <p className="text-nixie text-shadow-glow2 tracking-[0.15em] tabular-nums shadow-red-600 text-2xl md:text-4xl text-center font-count ">
                {padTime(hours,2)}
              </p>
            </div>
            <div className="basis-1/6 bg-gradient-to-b from-slate-700/80"/>
          </div>
          <div className="row-span-2 flex flex-col h-[70px] md:h-[80px] w-[80px] md:w-[105px] border-x-2 border-amber-300 rounded-md shadow-md shadow-slate-700">
            <div className="basis-1/6 bg-gradient-to-t from-slate-700/80"/>
            <div className="basis-4/6 flex flex-col justify-center bg-slate-700/80">
              <p className="text-nixie text-shadow-glow2 tracking-[0.15em] tabular-nums shadow-red-600 text-2xl md:text-4xl text-center font-count ">
                {padTime(minutes,2)}
              </p>
            </div>
            <div className="basis-1/6 bg-gradient-to-b from-slate-700/80"/>
          </div>
          <div className="row-span-2 flex flex-col h-[70px] md:h-[80px] w-[80px] md:w-[105px] border-x-2 border-amber-300 rounded-md shadow-md shadow-slate-700">
            <div className="basis-1/6 bg-gradient-to-t from-slate-700/80"/>
            <div className="basis-4/6 flex flex-col justify-center bg-slate-700/80">
              <p className="text-nixie text-shadow-glow2 tracking-[0.15em] tabular-nums shadow-red-600 text-2xl md:text-4xl pl-[21px] md:pl-[25px] font-count ">
                {padTime(seconds,2)}
              </p>
            </div>
            <div className="basis-1/6 bg-gradient-to-b from-slate-700/80"/>
          </div>
        </div>
        );
    }
  };

  // bg-fixed bg-cover bg-center bg-[url("../public/img/kb_bg.jpg")
    return(
        <div className='bg-sky-200 bg-tree-light bg-fixed bg-contain bg-no-repeat bg-center'>
        <Navbar />
        <main className="mx-auto max-w-[1080px]">
          <section className='sm:flex-row p-0 mt-6 sm:mt-16 items-center mb-12'>
            <article className='flex flex-row mx-2 sm:mx-[10%] p-0 backdrop-saturate-[0.60] border-t-8 border-b-8 border-double border-slate-600/70 rounded-xl shadow-lg shadow-emerald-800'>
              <div className=" w-[20%] bg-gradient-to-l from-white/90 " />
              <div className=" w-[60%] bg-white/90">
              <h2 className='py-10 text-4xl font-bold text-center sm:text-6xl sm:text-center font-hw text-slate-600'>
                Kylie Denardo <br/> and <br/> Brandon Uhl
              </h2>
              </div>
              <div className=" w-[20%] bg-gradient-to-r from-white/90 "/>
            </article>

            <div className="mt-20 p-3 mx-2 sm:mx-[10%] bg-white/90 rounded-2xl border-8 border-double border-slate-600/70 shadow-lg shadow-emerald-800">
              <img
                src="gbfrontend/static/images/kb_closelier.jpg"
                alt="Kylie and Branodn hanging in the park"
                className=""
                />
            </div>
            <article className='flex flex-row justify-center sm:mx-[10%] mt-20 py-10 px-0 bg-white/90 backdrop-saturate-[0.60] border-t-8 border-b-8 border-double border-slate-600/70 rounded-xl shadow-lg shadow-emerald-800'>
              <Countdown 
                
                date={ weddingTime }
                renderer = {countdownRenderer}
              />
            </article>
            <article className='mx-2 sm:mx-[10%] px-[10%] bg-gradient-to-r mt-20 py-10 from-white/40 via-white/90 to-white-40 backdrop-saturate-[0.60] rounded-2xl border-8 border-double border-slate-600/70 shadow-lg shadow-emerald-800'>
              <h4 className='text-3xl font-bold m-0 text-left font-serif text-slate-600'>
                A magical night in Goulais River
              </h4>
              <h4 className='text-2xl mt-4 text-left font-serif text-slate-600'>
                Friday August 11<sup>th</sup>, 2023
              </h4>
              <h4 className='text-xl mt-4 text-left font-serif text-slate-600'>
                Please arrive for 3:30 PM 
              </h4>
              <h4 className="text-xl mt-3 text-left font-serif text-slate-600">
                Ceremony and reception held at:
              </h4>
              <h4 className="mt-2 text-2xl font-bold text-left font-serif text-slate-600">
                Stokely Creek Lodge
              </h4>
              <h4 className="text-xl mt-2 text-left font-serif text-slate-600">
               194 Pickard Rd,<br/>Goulais River,ON<br/>P0S 1E0
              </h4>
            </article>
          </section>
           <hr className='mx-auto mt-20 bg-slate-600 bg w-1/2 h-2 rounded border-none shadow-lg shadow-emerald-800'/>
          <section className='flex flex-col-reverse justify-center sm:flex-row mt-20 items-center gap-8 mb-12'>
            <article className='mx-2 sm:mx-[10%] px-[10%] py-10 bg-gradient-to-r from-white/40 via-white/90 to-white-40 backdrop-saturate-[0.60] rounded-2xl border-8 border-double border-slate-600/70 shadow-lg shadow-emerald-800'>
              <p className='text-base sm:text-xl mt-4 px-2 sm:px-4 text-left font-serif text-slate-600 '>
                We are thrilled to host our celebration at Stokely Creek Lodge in gorgeous Goulais River, Ontario. Weather permitting, we will be hosting 
                the ceremony outside and will continue to enjoy the beautiful outdoors throughout the night. The reception will be held indoors in the main lodge dining room. Come prepared 
                for some sikh custom beats by our chartered DJ, <span className="relative font-bold font-count text-xl text-shadow-glow2 shadow-fuchsia-700 md:text-2xl text-pink-700">DJ K-Hole</span>. 
                We would kindly ask that all guests use the <a href="/rsvp" className="text-xl sm:text-xl font-serif font-bold underline decoration-red-900 text-sky-700">RSVP Form</a> to
                 let us know if you can make it. <span className="relative font-bold font-serif text-xl md:text-2xl text-sky-700"> The deadline to reserve is June 1<sup>st</sup></span>
              </p>
            </article>            
          </section>
        </main>
        <Footer />
        </div>
    )

}