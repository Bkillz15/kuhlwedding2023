import React from "react";
import { useState, useRef, useEffect } from 'react';
import Navbar from "./navbar";
import Footer from "./footer";
// Data
// import imagepaths from './gallery_images';



export default function Gallery(props) {

    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const imagepaths = {  
        img1: {
            title: "Engagement Night",
            imageUrl: "gbfrontend/static/images/GAL_ENGAGE.jpg"
        },
        img2: {
            title: "Couple On the Rocks",
            imageUrl: "gbfrontend/static/images/GAL_KB_ROCK.jpg"
        },
        img3: {
            title: "Couple in the backyard",
            imageUrl: "gbfrontend/static/images/GAL_BACKYARD.jpg"
        },
        img4: {
            title: "Couple in Mexico",
            imageUrl: "gbfrontend/static/images/GAL_KB_MEX.jpg"
        },
        img5: {
            title: "Couple see the Leafs",
            imageUrl: "gbfrontend/static/images/GAL_KB_LEAFS.jpg"
        },
        img6: {
                title: "Couple at the 2's wedding",
                imageUrl: "gbfrontend/static/images/GAL_KB_SK.jpg"
        },
        img7: {
            title: "Couple in the Shaggin Wagon",
            imageUrl: "gbfrontend/static/images/GAL_VAN.jpg"
        },
        img8: {
            title: "Couple Gets Whit!",
            imageUrl: "gbfrontend/static/images/GAL_WHIT.jpg"
        },
        img9: {
            title: "Couple but Bkillz is tuff",
            imageUrl: "gbfrontend/static/images/GAL_TUFF.jpg"
        },
        img10: {
            title: "Super item number the last",
            imageUrl: "gbfrontend/static/images/GAL_KB_MEX.jpg"
        },
        img11: {
            title: "Super item number the last",
            imageUrl: "gbfrontend/static/images/GAL_RB.jpg"
        },
        img12: {
        title: "Super item number the last",
        imageUrl: "gbfrontend/static/images/GAL_RM.jpg"
        },
        img13: {
        title: "Super item number the last",
        imageUrl: "gbfrontend/static/images/GAL_SUPERMOON.jpg"
        },
        img14: {
        title: "Super item number the last",
        imageUrl: "gbfrontend/static/images/GAL_VAN.jpg"
        },
    }
    
    const movePrev = () => {
        if (currentIndex > 0) {
        setCurrentIndex((prevState) => prevState - 1);
        }
    };
    
    const moveNext = () => {
        if (
        carousel.current !== null &&
        carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
        setCurrentIndex((prevState) => prevState + 1);
        }
    };
    
    const isDisabled = (direction) => {
        if (direction === 'prev') {
        return currentIndex <= 0;
        }
    
        if (direction === 'next' && carousel.current !== null) {
        return (
            carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
        );
        }
    
        return false;
    };
    
    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
        carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);
    
    useEffect(() => {
        maxScrollWidth.current = carousel.current
        ? carousel.current.scrollWidth - carousel.current.offsetWidth
        : 0;
    }, []);

    Object.keys(imagepaths).map((resource, index) => {
        console.log(resource)
        console.log(index)
    })
    

    return(
        <div className='bg-sky-200'>  
            <Navbar />
            <main className="mx-auto max-w-[1080px]">
                <article className='flex flex-row sm:mx-[10%] mt-20 p-0 backdrop-saturate-[0.60] border-t-8 border-b-8 border-double border-slate-600/70 rounded-xl shadow-lg shadow-emerald-800'>
                    <div className=" w-[20%] bg-gradient-to-l from-white/90 " />
                        <div className=" w-[60%] bg-white/90">
                            <h2 className='py-10 text-4xl font-bold text-center sm:text-6xl sm:text-center font-hw text-slate-600'>
                                Friends & Family
                            </h2>
                        </div>
                    <div className=" w-[20%] bg-gradient-to-r from-white/90 "/>
                </article>
                <div className="carousel my-32 mx-auto p-4 bg-white/80 rounded-2xl border-double border-8 border-slate-700">
                    <div className="relative bg-slate-900 overflow-x-hidden rounded-xl hover:overflow-x-scroll scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
                        <div className="flex justify-between absolute top left w-full h-full ">
                            <button
                                onClick={movePrev}
                                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                disabled={isDisabled('prev')}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 -ml-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19l-7-7 7-7"
                                />
                                </svg>
                                <span className="sr-only">Prev</span>
                            </button>
                            <button
                                onClick={moveNext}
                                className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                                disabled={isDisabled('next')}
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-20 -ml-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 5l7 7-7 7"
                                />
                                </svg>
                                <span className="sr-only">Next</span>
                            </button>
                        </div>
                        <div
                            ref={carousel}
                            className="carousel-container mx-4 flex gap-1 md:gap-3 w-fit "
                        >
                            {Object.keys(imagepaths).map((resource, index) => {
                                return (
                                <div
                                    key={index}
                                    className="text-center w-[400px] h-[534px] snap-start"
                                >
                                    <img
                                        src={imagepaths[resource].imageUrl || ''}
                                        alt={imagepaths[resource].title}
                                        className="aspect-[3/4]"
                                    />
                                    {/* <h3 className="text-sm text-white py-6 px-3 mx-auto">
                                        {imagepaths[resource].title}
                                    </h3> */}
                                </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )

}