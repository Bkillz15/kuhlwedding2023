import React from "react";
import Navbar from "./navbar";

export default function Home(props) {

  // bg-fixed bg-cover bg-center bg-[url("../public/img/kb_bg.jpg")
    return(
        <div className='bg-red-300 bg-tree bg-fixed bg-contain bg-no-repeat bg-center'>
        <Navbar />
        <main className="mx-auto max-w-[1080px]">
          <section className='sm:flex-row p-6 mt-6 sm:mt-16 items-center mb-12'>
            <article className='sm:mx-[10%] bg-gradient-to-r py-10 from-transparent via-white/80 backdrop-saturate-[0.60] border-t-8 border-b-8 border-double border-amber-400 rounded-xl'>
              <h2 className='text-5xl font-bold text-center sm:text-6xl sm:text-center font-hw text-blue-400'>
                Kylie Denardo
              </h2>
              <h2 className='text-5xl font-bold text-center sm:text-6xl sm:text-center font-hw text-blue-400'>
                &
              </h2>
              <h2 className='text-5xl font-bold text-center sm:text-6xl sm:text-center font-hw text-blue-400'>
                Brandon Uhl
              </h2>
            </article>
            
            <article className='sm:mx-[10%] px-[10%] bg-gradient-to-r mt-20 py-10 from-white/40 via-white/80 to-white-40 backdrop-saturate-[0.60] border-8 border-double border-amber-400 rounded-xl shadow-xl shadow-amber-400/70'>
              <h4 className='text-4xl font-bold mt-4 text-center sm:text-left font-serif text-blue-400'>
                1 Night in Guhlie
              </h4>
              <h4 className='text-2xl mt-4 text-center sm:text-left font-serif text-blue-400'>
                Friday August 11<sup>th</sup>, 2023
              </h4>
              <h4 className="text-xl mt-5 text-center sm:text-left font-serif text-blue-400">
                Ceremony and reception held at<br/><br/><span className="text-2xl font-extrabold">Stokely Creek Lodge</span><br/><br/> Pickard Rd,<br/>Goulais River,ON<br/>P0S 1E0
              </h4>
            </article>
          </section>
           <hr className='mx-auto bg-blue-400 bg w-1/2 h-2 rounded border-none drop-shadow-lg opacity-60'/>
          <section className='flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12'>
            <article className=''>
              <p className='text-2xl mt-4 sm:px-[20%] text-center sm:text-left text-blue-400 '>
                We have decided to host our celebration at Stokely Creek Lodge in gorgeous Goulais River, Ontario
                so that the party will not stop. Be peppered for some serious debauchery!
              </p>
              <p className='text-2xl mt-4 text-center sm:text-left text-blue-400'>
                Many of you are traveling from afar so we have put together this handy website for your convenience
              </p>
            </article>
            {/* <img className="w-1/2"src="img/SR.jpg" alt="HeHe"></img> */}
          
            {/* <article className='sm:w-1/2 bg-white bg-opacity-50 rounded-xl'>
              <h3 className='text-3xl font-bold text-center sm:text-5xl sm:text-left text-blue-400'>
                  What to Expect
              </h3>
              <ul className='list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8'>
                <li className='w-2/3 sm:w-5/6 h-3/4 flex flex-col items-center border-2 border-solid border-blue-300 bg-white py-6 px-2 rounded-3xl shadow-3xl'>
                  <img className="rounded-full object-contain h-24 w-24"src="img/BU.jpg" alt="HeHe"></img>
                  <h3 className='text-3xl text-center text-blue-300'>This is Brandon</h3>
                  <p className='hidden sm:block text-2xl text-center mt-2 text-rose-600'>He is the Groom</p>
                  <p className='sm:hidden text-xl text-center mt-2 text-violet-600'>He is super cool</p>
                </li>
                <li className='w-2/3 sm:w-5/6 h-3/4 flex flex-col items-center border-2 border-solid border-blue-300 bg-white py-6 px-2 rounded-3xl shadow-3xl'>
                  <img className="rounded-full object-contain h-24 w-24"src="img/KD.jpg" alt="HeHe"></img>
                  <h3 className='text-3xl text-center text-blue-300'>This is Kylie</h3>
                  <p className='hidden sm:block text-2xl text-center mt-2 text-rose-600'>She is the Bride</p>
                  <p className='sm:hidden text-xl text-center mt-2 text-violet-600'>She like to party</p>
                </li>
                <li className='w-2/3 sm:w-5/6 flex flex-col items-center border-2 border-solid border-blue-300 bg-white py-6 px-2 rounded-3xl shadow-3xl'>
                  <img className="rounded-full object-contain h-24 w-24"src="img/SR.jpg" alt="HeHe"></img>
                  <h3 className='text-3xl text-center text-blue-300'>This is Sarah</h3>
                  <p className='hidden sm:block text-2xl text-center mt-2 text-rose-600'>She will be there</p>
                  <p className='sm:hidden text-xl text-center mt-2 text-violet-600'>She will be square</p>
                </li>
              </ul>
            </article> */}
            
          </section>
        </main>

        {/* <div>
        {showEmployees ? (
            <>
              <input type='text' onChange={(e) => {
                console.log(e.target.value);
                setRole(e.target.value);
              }}></input>
              <div className="grid grid-flow-rows grid-col-1 gap-4">
                {employees.map((employee) => {
                  console.log(employee);
                  return(<Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />);
    })}
              </div>
            </>
        ) : ( <p>You cannot see empoyees</p>)
          }  
        </div> */}
        </div>
    )

}