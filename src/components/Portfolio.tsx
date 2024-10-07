//Build your crypto portfolio

const Portfolio = () => {
    return (
        <div className="w-full bg-black bg-grid-white/[0.1] relative flex flex-col items-center justify-start overflow-hidden text-white">

            {/* Grid background  */}
            <div className="absolute pointer-events-none inset-0 flex items-start justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

            <section className='lg:w-[75vw] w-full lg:px-0 px-4 flex items-center justify-between relative py-[7rem]'>
                <div className='flex flex-col items-center justify-center w-full gap-4 lg:text-7xl text-4xl text-center font-bold tracking-wider'>

                    <h1 className='bg-gradient-to-r flex gap-3 flex-wrap text-center from-white to-gray-700 bg-clip-text text-transparent main-font'>
                        Build your <span className="main-font text-[#bcfd04]">crypto</span> portfolio.
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default Portfolio