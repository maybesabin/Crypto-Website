//Navbar Component

import { useState } from "react";


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    return (
        <>
            {/* Navbar  */}
            <div className="lg:w-[75vw] w-full lg:px-0 px-4 z-[1000] bg-black">
                <div className="flex items-center justify-between pt-9 opacity-100 relative">
                    <h1 className="main-font text-[#bae626] font-semibold md:text-3xl text-xl">CRYPTO.</h1>

                    <ul className="lg:flex hidden items-center justify-center gap-9 text-[1rem] text-zinc-400">
                        <li className="hover:text-white transition-all"><a href="#">Home</a></li>
                        <li className="hover:text-white transition-all"><a href="#">Services</a></li>
                        <li className="hover:text-white transition-all"><a href="#">About</a></li>
                        <li className="hover:text-white transition-all"><a href="#">What's New?</a></li>
                    </ul>
                    <button className="bg-[#bbfd03] hover:bg-[#ceff46] lg:flex hidden items-center justify-center transition-all text-black font-semibold text-xl h-12 w-auto px-7 rounded-xl">
                        Explore Now
                    </button>

                    <button
                        className={`menu lg:hidden flex items-center justify-center ${showNavbar ? 'opened' : ''}`}
                        onClick={() => setShowNavbar(!showNavbar)}
                        aria-expanded={showNavbar}
                        aria-label="Main Menu"
                    >
                        <svg
                            aria-label="Main Menu"
                            width="34" height="34" viewBox="0 0 100 100">
                            <path
                                className="line line1"
                                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                            />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path
                                className="line line3"
                                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Navbar  */}
            <div className={`h-screen lg:hidden py-[9rem] transition-all duration-500 ease-in-out${showNavbar ? "flex translate-x-0 opacity-100" : "hidden translate-x-[40rem] opacity-75"} flex-col items-start justify-center fixed bg-black text-white z-[999] w-screen px-6`}>
                <ul className="flex flex-col items-start justify-center h-full gap-12 text-3xl text-zinc-400">
                    <li className="hover:text-white transition-all"><a href="#" className="main-font">Home</a></li>
                    <li className="hover:text-white transition-all"><a href="#" className="main-font">Services</a></li>
                    <li className="hover:text-white transition-all"><a href="#" className="main-font">About</a></li>
                    <li className="hover:text-white transition-all"><a href="#" className="main-font">What's New?</a></li>
                </ul>
                <button className="bg-[#bbfd03] main-font hover:bg-[#ceff46] items-center justify-center transition-all text-black font-semibold text-[1rem] h-14 w-auto px-6 -mt-[5rem] rounded-xl">
                    Explore Now
                </button>
            </div>
        </>
    )
}

export default Navbar