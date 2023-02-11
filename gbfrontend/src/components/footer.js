import React from "react";

export default function Footer(props) {

    return(
        <div className="m-0 p-0">
            <div className='h-[125px] w-full border-t-4 border-slate-700 bg-sky-700'>
                <div className="flex flex-row justify-center content-center max-w-[1080px] mx-auto mt-7 px-0 pt-0 pb-0">
                    <div>
                        <h3 className="mx-auto text-center text-2xl sm:text-3xl text-slate-300 font-serif text-shadow-glow2 shadow-amber-500">
                            Copyright BkillzCorp 2023
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}