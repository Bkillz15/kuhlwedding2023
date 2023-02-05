import React from "react";
import { useState, useEffect, useRef } from "react";
import Navbar from "./navbar";

// Maps API Key AIzaSyCuyWN-bJHO9o5GwW49y8rUCaL3cO9HENk

export default function Travel(props) {
      
      const ref = useRef(null);
      const [map, setMap] = useState();
      
      useEffect(() => {
        if (ref.current && !map) {
          setMap(new window.google.maps.Map(ref.current, {}));
        }
      }, [ref, map]);
      

    return(
        <div className="bg-sunset bg-fixed bg-cover bg-center">
            <Navbar />
            <div className="grid grid-cols-2 mx-auto max-w-[1080px]" >
                
            
            {/* <Wrapper apiKey={"AIzaSyCuyWN-bJHO9o5GwW49y8rUCaL3cO9HENk"} render={render}>
                <Map  center={{lat: -34.397, lng: 150.644}} zoom={8}>
                </Map>
            </Wrapper> */}

                <article className='col-span-full sm:mx-[10%] px-[10%] bg-gradient-to-r mt-20 py-10 from-white/70 via-white to-white/70 backdrop-saturate-[0.60] rounded-xl border-8 border-double border-slate-600/70 shadow-lg shadow-yellow-200'>
                    <p className='text-2xl mt-4 text-center sm:text-left text-slate-600 '>
                        Contact information, address
                    </p>
                    <p className='text-2xl mt-4 text-center sm:text-left text-slate-600'>
                        Accomodations - options, pricing and date to begin booking - soo alternative reccomendation
                    </p>
                    <p className='text-2xl mt-4 text-center sm:text-left text-slate-600'>
                        On the RSVP page, you can let us know if you are interested in taking the shuttle into town. We will be organizing rides base on this feedback
                    </p>
                </article>

                <div className="col-span-full mx-auto my-10 bg-yellow-50/80 rounded-xl border-8 border-double border-slate-600/70 shadow-lg shadow-yellow-200">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2731.874260430879!2d-84.35011948416754!3d46.78708197913881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d37cd7ceadea707%3A0x68480aa041efc24a!2sStokely%20Creek%20Lodge!5e0!3m2!1sen!2sca!4v1674944068711!5m2!1sen!2sca" 
                        width="600" 
                        height="450" 
                        className="m-2"
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <div className="bg-red-700 min-w-full col-span-full max-w-[1080px] mx-auto rounded-xl text-center">
                    <span className="bg-white p-1 max-w-fit">TEST123</span>
                    <span className="bg-white p-1 max-w-fit">TEST123</span>
                    <button>Helo</button>
                </div>
                <div className="bg-red-500 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-orange-700 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-orange-500 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-yellow-700 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-yellow-500 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-green-700 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-green-500 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-blue-700 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-blue-500 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-violet-700 min-w-full min-h-[40px] rounded-xl"></div>
                <div className="bg-violet-500 min-w-full min-h-[40px] rounded-xl"></div>
            </div>
        </div>
    )

}