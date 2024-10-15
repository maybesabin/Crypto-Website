import { Separator } from "./ui/separator"

const Footer = () => {
    const socials = [
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="black" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18182 10.3333C5.20406 10.3333 5 10.5252 5 11.4444V13.1111C5 14.0304 5.20406 14.2222 6.18182 14.2222H8.54545V20.8889C8.54545 21.8081 8.74951 22 9.72727 22H12.0909C13.0687 22 13.2727 21.8081 13.2727 20.8889V14.2222H15.9267C16.6683 14.2222 16.8594 14.0867 17.0631 13.4164L17.5696 11.7497C17.9185 10.6014 17.7035 10.3333 16.4332 10.3333H13.2727V7.55556C13.2727 6.94191 13.8018 6.44444 14.4545 6.44444H17.8182C18.7959 6.44444 19 6.25259 19 5.33333V3.11111C19 2.19185 18.7959 2 17.8182 2H14.4545C11.191 2 8.54545 4.48731 8.54545 7.55556V10.3333H6.18182Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="black" fill="none">
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="black" fill="none">
            <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>,
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="black" fill="none">
            <path d="M7 10V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M7.00801 7L6.99902 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        </svg>
    ]
    const products = [
        "Rainbow Wallet",
        "IRISplorer",
        "Endpoints & SDKs",
        "CLI Client"
    ]
    const information = [
        "Market Explore",
        "Ready Token",
        "Main Option",
        "File Checking"
    ]
    const resources = [
        "FAQ",
        "Blog",
        "Docs",
        "Press Kit"
    ]
    return (
        <div className="w-full flex flex-col items-center justify-start bg-black text-white">
            <Separator className="bg-gray-600" />

            <div className="flex md:flex-row flex-col flex-wrap h-full px-9 w-full items-start justify-center gap-[4rem] py-[4rem]">

                <div className="flex flex-col items-start justify-start gap-4 w-64 h-full">
                    <h1 className="main-font text-[#c1ef15] text-4xl font-bold">CRYPTO.</h1>
                    <p className="md:text-[1rem] text-xs text-zinc-400 leading-5 font-extralight">NFT's are transforming the way commerce is transacted.</p>
                    <ul className="flex items-center justify-start flex-wrap gap-4">
                        {socials.map((item, idx) => {
                            return (
                                <div key={idx} className="bg-[#c1ef15] rounded-full p-1">
                                    <div className="border-2 border-black rounded-full p-1">
                                        <a href="#">{item}</a>
                                    </div>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <h1 className="main-font text-2xl">Products</h1>
                    <ul className="flex flex-col gap-3">
                        {products.map((item, idx) => {
                            return (
                                <li key={idx} className="text-zinc-500 hover:text-white transition-all md:text-[1rem] text-xs cursor-pointer">{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <h1 className="main-font text-2xl">Information</h1>
                    <ul className="flex flex-col gap-3">
                        {information.map((item, idx) => {
                            return (
                                <li key={idx} className="text-zinc-500 hover:text-white transition-all md:text-[1rem] text-xs cursor-pointer">{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-4">
                    <h1 className="main-font text-2xl">Resources</h1>
                    <ul className="flex flex-col gap-3">
                        {resources.map((item, idx) => {
                            return (
                                <li key={idx} className="text-zinc-500 hover:text-white transition-all md:text-[1rem] text-xs cursor-pointer">{item}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col items-start justify-start gap-4 w-96">
                    <h1 className="main-font text-2xl">Newsletter</h1>
                    <div className="flex items-center justify-start">
                        <input type="text" className="bg-gradient-to-br md:text-[1rem] xl:leading-5 text-xs from-[#1d2423] to-[#0e1312] outline-none md:px-6 px-4 md:py-4 py-2 rounded-l-lg" placeholder="Enter your email" />
                        <button className="flex md:text-[1rem] xl:leading-5 text-xs items-center justify-center bg-[#c1ef15] text-black md:px-6 px-4 md:py-4 py-2 rounded-lg rounded-l-none font-semibold hover:bg-[#cdff18cf] transition-all">Subscribe</button>
                    </div>
                    <p className="text-zinc-400 font-extralight md:text-[1rem] xl:leading-5 text-xs">NFT's are tranforming the way commerce is being transacted.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer