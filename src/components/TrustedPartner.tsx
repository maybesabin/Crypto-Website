//Trusted partner page
import globe from '../assets/images/globe.gif'
import Carousel from './Carousel'
const TrustedPartner = () => {
    return (
        <div className="lg:px-0 px-4 h-auto py-[7rem] w-full bg-black bg-grid-white/[0.1] relative flex flex-col items-center justify-start overflow-hidden text-white">

            {/* Grid background  */}
            <div className="absolute overflow-hidden pointer-events-none inset-0 flex items-start justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>


            {/* Hero Section  */}
            <section className='w-[75vw] flex flex-col items-center md:items-start justify-center relative'>

                <div className="flex items-center lg:flex-row flex-col justify-between">

                    <div className="lg:text-6xl text-4xl font-bold flex flex-col lg:items-start items-center md:text-left text-center md:gap-2 gap-0">
                        <h1 className='bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent main-font'>Your <span className="text-[#b9fc04] main-font">trusted</span> partner of</h1>
                        <h2 className="main-font bg-gradient-to-l from-white to-gray-700 bg-clip-text text-transparent">cryptocurrency.</h2>
                    </div>
                    <p className="lg:w-1/4 w-[80%] lg:pt-0 pt-9 text-zinc-400 text-center lg:text-left lg:text-[1rem] text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni quasi, fugiat cumque placeat mollitia molestiae.</p>
                </div>

                <div className="flex md:flex-row flex-col md:items-end items-center md:gap-0 gap-6 justify-center md:pt-[7rem] pt-12">
                    <div className="md:w-1/3 w-full flex flex-col items-start gap-6 font-bold rounded-2xl md:rounded-r-none md:h-80 h-60 bg-gradient-to-b from-zinc-800 to-zinc-900 p-9 lg:text-4xl text-2xl">
                        <h1 className="main-font text-[#c2f043]">01.</h1>
                        <p className="main-font lg:text-3xl text-xl">Service for Any <br /> Level of Expertise.</p>
                    </div>

                    <div className="md:w-1/3 w-full rounded-xl md:rounded-b-none md:h-96 h-72 bg-[#bbfd05] text-black p-9 flex flex-col items-start justify-between lg:text-4xl text-2xl font-bold">
                        <h1 className="main-font">02.</h1>
                        <h3 className="main-font lg:text-3xl text-xl">Industry <br />best practices. </h3>
                        <p className="font-light lg:text-xl text-[0.75rem] leading-5 lg:leading-[1.75rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae eveniet explicabo in sit. Iusto!</p>
                        <button className="text-xl main-font flex items-center gap-2 group">
                            <h1 className="lg:text-2xl text-[1rem] group-hover:scale-105 main-font transition-all duration-300 ease-in-out">Learn More</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:scale-105 icon lg:h-[34px] lg:w-[34px] h-[24px] w-[24px] icon-tabler icon-tabler-arrow-narrow-right"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M15 16l4 -4" />
                                <path d="M15 8l4 4" />
                            </svg>
                        </button>
                    </div>

                    <div className="md:w-1/3 w-full flex flex-col items-start gap-6 font-bold rounded-2xl md:rounded-l-none md:h-80 h-60 bg-gradient-to-b from-zinc-800 to-zinc-900 p-9 lg:text-4xl text-2xl">
                        <h1 className="main-font text-[#c2f043]">03.</h1>
                        <p className="main-font lg:text-3xl text-xl">Protected<br /> by insurance.</p>
                    </div>
                </div>

                <div className="lg:mt-[12rem] mt-0 w-full flex xl:flex-row flex-col items-center md:items-start justify-center gap-[1vw]">

                    <div className='flex items-center flex-col justify-center xl:mb-0 mb-12 '>
                        <img src={globe} className='bg-transparent -mt-[5rem] w-[600px]' alt="" />
                        <div className='lg:-mt-[10rem] -mt-12 md:pb-0 py-12'>
                            <Carousel />
                        </div>
                    </div>

                    <div className='lg:text-6xl text-4xl font-bold flex flex-col items-center xl:items-start md:text-left text-center md:gap-9 gap-12'>
                        <h1 className='flex items-center gap-3 bg-gradient-to-l from-white to-gray-700 bg-clip-text text-transparent main-font'>Trusted <span className="text-[#b9fc04] main-font">platform</span></h1>
                        <h1 className='-mt-6 lg:text-6xl text-2xl lg:text-left text-center bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent main-font'>anytime & anywhere.</h1>

                        <div className='flex items-center xl:justify-start justify-center gap-7 opacity-75 w-full text-2xl'>
                            <i className="fa-solid fa-star hover:text-yellow-300 cursor-pointer transition-all"></i>
                            <i className="fa-solid fa-star hover:text-yellow-300 cursor-pointer transition-all"></i>
                            <i className="fa-solid fa-star hover:text-yellow-300 cursor-pointer transition-all"></i>
                            <i className="fa-solid fa-star hover:text-yellow-300 cursor-pointer transition-all"></i>
                        </div>

                        <p className='md:text-[1rem] text-xs leading-5 md:leading-[1.75rem] font-light text-zinc-400'>We believe in <span className='text-white'>empowering everyone</span> to make informed decisions in the rapidly growing world of digital assets. Whether you’re a seasoned trader or just starting, our platform offers the tools, insights, and resources you need to invest with <span className='text-white'>confidence.</span></p>

                        <p className='md:text-[1rem] text-xs leading-5 md:leading-[1.75rem] font-light text-zinc-400 '>Stay updated with live prices, charts, and trends for top <span className='text-white'>cryptocurrencies.</span></p>

                        <div className='flex flex-wrap items-center md:justify-start justify-center gap-6'>
                            <button className="bg-[#bbfd03] hover:bg-[#ceff46] transition-all flex items-center justify-center gap-2 text-black font-semibold text-xl w-auto px-9 py-3 rounded-xl">
                                <h1 className='main-font'>Explore Now</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" icon icon-tabler icon-tabler-arrow-narrow-right" width="34" height="34" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l14 0" />
                                    <path d="M15 16l4 -4" />
                                    <path d="M15 8l4 4" />
                                </svg>
                            </button>
                            <h3 className='text-xl font-normal cursor-pointer hover:text-zinc-500 text-zinc-400'>Ask question?</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TrustedPartner