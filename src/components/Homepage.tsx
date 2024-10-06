//Hero Page
import Navbar from './Navbar'
import bgimage from '../assets/images/test1.png'
import { Separator } from "@/components/ui/separator"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const Homepage = () => {
    const people = [
        {
            id: 1,
            name: "John Doe",
            designation: "Software Engineer",
            image:
                "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
        },
        {
            id: 2,
            name: "Robert Johnson",
            designation: "Product Manager",
            image:
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 3,
            name: "Jane Smith",
            designation: "Data Scientist",
            image:
                "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 4,
            name: "Emily Davis",
            designation: "UX Designer",
            image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        {
            id: 5,
            name: "Tyler Durden",
            designation: "Soap Developer",
            image:
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        },
        {
            id: 6,
            name: "Dora",
            designation: "The Explorer",
            image:
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        },
    ];
    
    return (
        <div className="w-full bg-black bg-grid-white/[0.1] relative flex flex-col items-center justify-start overflow-hidden text-white">

            {/* Grid background  */}
            <div className="absolute pointer-events-none inset-0 flex items-start justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <Navbar />

            {/* Hero Section  */}
            <section className='lg:w-[75vw] w-full lg:px-0 px-9 flex items-center justify-between relative py-[7rem]'>

                <div className='flex flex-col items-start justify-start gap-9'>
                    <div className='flex flex-col items-start justify-start gap-4 lg:text-7xl text-5xl font-bold tracking-wider'>
                        <p className='lg:text-[1rem] text-xs flex items-center gap-2 text-white main-font tracking-[0.2rem]'>KEEP YOUR MONEY SAFE <span className='text-[#bcfd04] lg:text-3xl text-xl main-font'>!</span></p>
                        <h1 className='bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent main-font'>Best crypto</h1>
                        <h2 className=' main-font text-[#b9fc04]'>investing platform</h2>
                        <h1 className='bg-gradient-to-l from-white to-gray-700 bg-clip-text text-transparent main-font'>for your future.</h1>
                    </div>
                    <Separator className='md:w-[71%] w-full mt-2 bg-gradient-to-r from-zinc-500 to-gray-900' />
                    <div className='flex items-start gap-12'>
                        <div className='flex'>
                            <AnimatedTooltip items={people} />
                        </div>
                        <div className='flex flex-col items-start'>
                            <h1 className='main-font lg:text-3xl text-xl font-semibold'>169K+</h1>
                            <p className='text-zinc-400 lg:text-[1rem] text-xs leading-5'>Realtime Users</p>
                        </div>
                    </div>

                    <Separator className='md:w-[71%] w-full -mt-3 bg-gradient-to-r from-zinc-500 to-gray-900' />

                    <div className='flex items-start gap-6'>
                        
                        <div className='flex items-center group'>
                            <div className='border-2 border-[#bcfd04] h-16 w-16 rounded-full'></div>
                            <div className='flex items-center justify-center text-black h-16 w-16 rounded-full -ml-9 group-hover:-ml-12 bg-[#bcfd04] group-hover:bg-[#c3f53b] group-hover:scale-110 transition-all'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180 group-hover:rotate-[200deg] transition-all cursor-pointer icon icon-tabler icon-tabler-arrow-down-left" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M17 7l-10 10" />
                                    <path d="M16 17l-9 0l0 -9" />
                                </svg>
                            </div>
                        </div>
                        <p className='text-zinc-400 w-1/2 lg:text-[1rem] text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis animi eveniet dolore distinctio iusto corporis.</p>
                    </div>
                </div>

                <div className='md:flex hidden items-center justify-start'>
                    <div className='-mt-12'>
                        <img src={bgimage} className='object-cover w-96' alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage