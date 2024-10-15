//Build your crypto portfolio
import appview from "../assets/images/app-view.png";

const Portfolio = () => {
  const features = [
    {
      title: "Advanced Security",
      desc: "We use state-of-art storage technology to protect your assets",
      icon:
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          color="black"
          fill="none"
        >
          <path
            d="M9 13C9 13 10 13 11 15C11 15 14.1765 10 17 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 11.1833V8.28029C21 6.64029 21 5.82028 20.5959 5.28529C20.1918 4.75029 19.2781 4.49056 17.4507 3.9711C16.2022 3.6162 15.1016 3.18863 14.2223 2.79829C13.0234 2.2661 12.424 2 12 2C11.576 2 10.9766 2.2661 9.77771 2.79829C8.89839 3.18863 7.79784 3.61619 6.54933 3.9711C4.72193 4.49056 3.80822 4.75029 3.40411 5.28529C3 5.82028 3 6.64029 3 8.28029V11.1833C3 16.8085 8.06277 20.1835 10.594 21.5194C11.2011 21.8398 11.5046 22 12 22C12.4954 22 12.7989 21.8398 13.406 21.5194C15.9372 20.1835 21 16.8085 21 11.1833Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      ,
    },
    {
      title: "More On-Ramps",
      desc: "It enables a world of NFTs DAOs, and other new business.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="black" fill="none">
        <path d="M22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M22 10C22 11.4001 22 12.1002 21.7275 12.635C21.4878 13.1054 21.1054 13.4878 20.635 13.7275C20.1002 14 19.4001 14 18 14C16.5999 14 15.8998 14 15.365 13.7275C14.8946 13.4878 14.5122 13.1054 14.2725 12.635C14 12.1002 14 11.4001 14 10C14 8.59987 14 7.8998 14.2725 7.36502C14.5122 6.89462 14.8946 6.51217 15.365 6.27248C15.8998 6 16.5999 6 18 6C19.4001 6 20.1002 6 20.635 6.27248C21.1054 6.51217 21.4878 6.89462 21.7275 7.36502C22 7.8998 22 8.59987 22 10Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M14 18C14 19.4001 14 20.1002 13.7275 20.635C13.4878 21.1054 13.1054 21.4878 12.635 21.7275C12.1002 22 11.4001 22 10 22C8.59987 22 7.8998 22 7.36502 21.7275C6.89462 21.4878 6.51217 21.1054 6.27248 20.635C6 20.1002 6 19.4001 6 18C6 16.5999 6 15.8998 6.27248 15.365C6.51217 14.8946 6.89462 14.5122 7.36502 14.2725C7.8998 14 8.59987 14 10 14C11.4001 14 12.1002 14 12.635 14.2725C13.1054 14.5122 13.4878 14.8946 13.7275 15.365C14 15.8998 14 16.5999 14 18Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M10 6C10 7.40013 10 8.1002 9.72752 8.63497C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72751C2.89462 9.48783 2.51217 9.10538 2.27248 8.63497C2 8.10019 2 7.40013 2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6Z" stroke="currentColor" stroke-width="1.5" />
      </svg>
    },
    {
      title: "Global Integration",
      desc: "Provides easy access to international markets and businesses through simplified on-ramp services.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="black" fill="none">
        <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5" />
        <path d="M20 5.69899C19.0653 5.76636 17.8681 6.12824 17.0379 7.20277C15.5385 9.14361 14.039 9.30556 13.0394 8.65861C11.5399 7.6882 12.8 6.11636 11.0401 5.26215C9.89313 4.70542 9.73321 3.19045 10.3716 2" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M2 11C2.7625 11.6621 3.83046 12.2682 5.08874 12.2682C7.68843 12.2682 8.20837 12.7649 8.20837 14.7518C8.20837 16.7387 8.20837 16.7387 8.72831 18.2288C9.06651 19.1981 9.18472 20.1674 8.5106 21" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M22 13.4523C21.1129 12.9411 20 12.7308 18.8734 13.5405C16.7177 15.0898 15.2314 13.806 14.5619 15.0889C13.5765 16.9775 17.0957 17.5711 14 22" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
      </svg>
    },
    {
      title: "Developer-Friendly API",
      desc: "Offers a powerful API for developers to integrate trading functionalities into their applications effortlessly.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="black" fill="none">
        <path d="M4 15.5C2.89543 15.5 2 14.6046 2 13.5C2 12.3954 2.89543 11.5 4 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M20 15.5C21.1046 15.5 22 14.6046 22 13.5C22 12.3954 21.1046 11.5 20 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M7 7L7 4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M17 7L17 4" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <circle cx="7" cy="3" r="1" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <circle cx="17" cy="3" r="1" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M13.5 7H10.5C7.67157 7 6.25736 7 5.37868 7.90898C4.5 8.81796 4.5 10.2809 4.5 13.2069C4.5 16.1329 4.5 17.5958 5.37868 18.5048C6.25736 19.4138 7.67157 19.4138 10.5 19.4138H11.5253C12.3169 19.4138 12.5962 19.5773 13.1417 20.1713C13.745 20.8283 14.6791 21.705 15.5242 21.9091C16.7254 22.1994 16.8599 21.7979 16.5919 20.6531C16.5156 20.327 16.3252 19.8056 16.526 19.5018C16.6385 19.3316 16.8259 19.2898 17.2008 19.2061C17.7922 19.074 18.2798 18.8581 18.6213 18.5048C19.5 17.5958 19.5 16.1329 19.5 13.2069C19.5 10.2809 19.5 8.81796 18.6213 7.90898C17.7426 7 16.3284 7 13.5 7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
        <path d="M9.5 15C10.0701 15.6072 10.9777 16 12 16C13.0223 16 13.9299 15.6072 14.5 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M9.00896 11H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15.009 11H15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    },
    {
      title: "Trading API",
      desc: "It enables a world of Trading your NFTs and other new business.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" color="black" fill="none">
        <path d="M19.9999 17L3.99994 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M17 14C17 14 19.9999 16.2095 19.9999 17C19.9999 17.7906 16.9999 20 16.9999 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M4.99994 7L19.9999 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M6.99991 4C6.99991 4 3.99994 6.20947 3.99994 7.00002C3.99993 7.79058 6.99994 10 6.99994 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    },
    {
      title: "Recurring Buys",
      desc: "It enables a world of NFTs, DAOS, and other new businesses",
      icon:
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          color="black"
          fill="none"
        >
          <path
            d="M16.3884 3L17.3913 3.97574C17.8393 4.41165 18.0633 4.62961 17.9844 4.81481C17.9056 5 17.5888 5 16.9552 5H9.19422C5.22096 5 2 8.13401 2 12C2 13.4872 2.47668 14.8662 3.2895 16"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.61156 21L6.60875 20.0243C6.16074 19.5883 5.93673 19.3704 6.01557 19.1852C6.09441 19 6.4112 19 7.04478 19H14.8058C18.779 19 22 15.866 22 12C22 10.5128 21.5233 9.13383 20.7105 8"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ,
    },
  ];

  return (
    <div id="features" className="w-full bg-black bg-grid-white/[0.1] relative flex flex-col items-center justify-start overflow-hidden text-white">
      {/* Grid background  */}
      <div className="absolute pointer-events-none inset-0 flex items-start justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <section className="lg:w-[75vw] w-full lg:px-0 px-4 flex lg:text-7xl text-4xl items-start flex-col justify-between relative py-[7rem]">

        <div className="flex flex-col items-center w-full gap-1">
          <h1 className="bg-gradient-to-r text-center from-white to-gray-700 bg-clip-text text-transparent main-font">
            What's <span className="text-[#c0f22f] main-font"> new</span> we
          </h1>
          <h1 className="bg-gradient-to-l text-center from-white to-gray-700 bg-clip-text text-transparent main-font">
            provide for you?
          </h1>
          <p className="md:text-[1rem] text-center text-xs leading-5 md:leading-[1.75rem] font-light text-zinc-400 tracking-normal pt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            libero sit sed, placeat natus numquam.
          </p>
        </div>

        <div className="flex lg:flex-row md:flex-row-reverse items-center justify-center gap-6 w-full text-center font-bold tracking-wider md:h-[38rem] md:pt-[7rem] pt-12">

          <div className="lg:flex hidden flex-col lg:items-start justify-around h-full">
            {features.slice(0, 3).map((item, idx) => {
              return (
                <div key={idx} className="flex items-center gap-6 w-[350px]">
                  <div className="bg-[#b9f80a] rounded-full p-2">
                    <div className="border-2 border-black rounded-full p-2">{item.icon}</div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h1 className="main-font text-xl font-normal tracking-normal">{item.title}</h1>
                    <p className="text-left text-xs font-light text-zinc-400 tracking-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:hidden flex flex-col items-start md:w-1/2 w-full md:gap-0 gap-12 md:justify-between md:h-full">
            {features.slice(0, 4).map((item, idx) => {
              return (
                <div key={idx} className="flex items-center gap-6 md:w-[350px] w-full">
                  <div className="bg-[#b9f80a] rounded-full">
                    <div className="rounded-full p-3">{item.icon}</div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h1 className="main-font text-xl font-normal tracking-normal">{item.title}</h1>
                    <p className="text-left text-xs font-light text-zinc-400 tracking-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <img src={appview} className="md:flex xl:w-[300px] w-[250px] hidden" alt="" />

          <div className="lg:flex hidden flex-col items-start justify-around h-full">
            {features.slice(3, 6).map((item, idx) => {
              return (
                <div key={idx} className="flex items-center gap-6 w-[350px]">
                  <div className="bg-[#b9f80a] rounded-full p-2">
                    <div className="border-2 border-black rounded-full p-2">{item.icon}</div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <h1 className="main-font text-xl font-normal tracking-normal">{item.title}</h1>
                    <p className="text-left text-xs font-light text-zinc-400 tracking-normal">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Portfolio;
