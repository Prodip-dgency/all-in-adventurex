const TitleSeparator=(props)=>{

    return(

        <div className="sep-title text-center">
            <div className="sep-container inline-block mx-auto"> 
            <h2 className={props.color+' py-2 text-2xl uppercase md:text-[40px] lg:text-[44px] font-os '+props.weight}>{props.title}</h2>
            <div className="max-w-[72%] md:max-w-[80%] flex sep items-center mx-auto mt-1 md:mt-3 justify-between space-x-2">
                <div className="bg-golden w-2/5 h-0.5"></div>
                <div className=" w-auto hidden md:block">
                           <svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M36.2529 14.9289L30.0224 1.39594C29.8716 1.07493 29.54 0.864258 29.1883 0.864258H8.89882C8.53704 0.864258 8.21547 1.07493 8.06473 1.39594L1.68344 15.1496C1.47241 15.601 1.65329 16.1327 2.10551 16.3534L18.5361 24.7199C18.6667 24.7902 18.8074 24.8202 18.9581 24.8202C19.1089 24.8202 19.2496 24.7801 19.3802 24.7199L35.851 16.1427C36.2831 15.902 36.464 15.3803 36.2529 14.9289Z" fill="#1A171B"/>
                            <path d="M35.841 15.1192L29.6104 1.58629C29.53 1.42578 29.3692 1.31543 29.1884 1.31543H8.89888C8.718 1.31543 8.55721 1.41575 8.47681 1.58629L2.09553 15.3399C1.99504 15.5706 2.08548 15.8315 2.30656 15.9418L18.7371 24.3084C18.8075 24.3385 18.8778 24.3585 18.9482 24.3585C19.0185 24.3585 19.0989 24.3385 19.1592 24.3084L35.6299 15.7312C35.851 15.6108 35.9415 15.3499 35.841 15.1192Z" fill="#1A171B"/>
                            <path d="M18.9488 25.4524C18.7076 25.4524 18.4564 25.3922 18.2453 25.2819L1.81477 16.9153C1.07113 16.5341 0.759601 15.6413 1.11133 14.8789L7.49261 1.13529C7.74384 0.593567 8.29655 0.232422 8.89951 0.232422H29.189C29.7919 0.232422 30.3446 0.583536 30.5959 1.13529L36.8264 14.6682C37.1681 15.4206 36.8666 16.3034 36.133 16.6946L19.6623 25.2718C19.4412 25.3822 19.2 25.4524 18.9488 25.4524ZM3.34226 15.2501L18.9387 23.1953L34.5955 15.0394L28.787 2.40933H9.30148L3.34226 15.2501Z" fill="#1A171B"/>
                            <path d="M2.57031 15.5218L8.92145 1.81836H29.1607L35.3711 15.3011L18.9506 23.8583L2.57031 15.5218Z" fill="#B78612"/>
                            <path d="M29.14 1.85831L35.3203 15.2809L18.9501 23.8079L2.62002 15.5016L8.95106 1.85831H29.14V1.85831ZM29.1903 1.78809H8.90082L2.51953 15.5317L18.9501 23.8982L35.4208 15.321L29.1903 1.78809Z" fill="#EFE285"/>
                            <path d="M3.12109 15.3305L18.9487 23.376L34.8165 15.1098L28.8874 2.24902H9.19085L3.12109 15.3305Z" fill="url(#paint0_linear_1668_1324)"/>
                            <path d="M2.56836 15.5209L8.9195 1.81738H29.1587L35.3692 15.3002L18.9487 23.8573L2.56836 15.5209Z" fill="#B78612"/>
                            <path d="M29.1381 1.85733L35.3184 15.2799L18.9481 23.807L2.61807 15.5006L8.94911 1.85733H29.1381V1.85733ZM29.1883 1.78711H8.89886L2.51758 15.5307L18.9481 23.8972L35.4189 15.32L29.1883 1.78711Z" fill="#EFE285"/>
                            <path d="M3.46289 15.2703L18.9488 23.1553L34.4749 15.0597L28.6765 2.46973H9.40201L3.46289 15.2703Z" fill="#E1001A"/>
                            <defs>
                            <linearGradient id="paint0_linear_1668_1324" x1="18.9705" y1="23.3771" x2="18.9705" y2="2.24681" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8A0E13"/>
                            <stop offset="0.9729" stopColor="#E1001A"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1668_1324" x1="18.9707" y1="23.1513" x2="18.9707" y2="2.47264" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#8A0E13"/>
                            <stop offset="0.9729" stopColor="#E1001A"/>
                            </linearGradient>
                            </defs>
                            </svg>

                </div>
                <div className=" w-auto md:hidden">
                <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.4718 10.4358L21.145 1.04004C21.0404 0.817163 20.8101 0.670898 20.5658 0.670898H6.4759C6.22467 0.670898 6.00135 0.817163 5.89667 1.04004L1.46523 10.5891C1.31867 10.9025 1.44429 11.2716 1.75833 11.4249L13.1684 17.2337C13.2592 17.2824 13.3569 17.3033 13.4615 17.3033C13.5662 17.3033 13.6639 17.2755 13.7546 17.2337L25.1927 11.2786C25.4927 11.1114 25.6184 10.7492 25.4718 10.4358Z" fill="#1A171B"/>
                    <path d="M25.1854 10.5682L20.8586 1.17243C20.8028 1.06099 20.6911 0.984375 20.5655 0.984375H6.47557C6.34995 0.984375 6.2383 1.05403 6.18247 1.17243L1.75102 10.7214C1.68123 10.8816 1.74404 11.0627 1.89757 11.1393L13.3077 16.9481C13.3565 16.969 13.4054 16.983 13.4542 16.983C13.5031 16.983 13.5589 16.969 13.6008 16.9481L25.0388 10.9931C25.1923 10.9095 25.2551 10.7284 25.1854 10.5682Z" fill="#1A171B"/>
                    <path d="M13.4543 17.7424C13.2868 17.7424 13.1123 17.7006 12.9658 17.624L1.55567 11.8152C1.03925 11.5505 0.822911 10.9307 1.06716 10.4013L5.49861 0.859272C5.67308 0.483162 6.0569 0.232422 6.47562 0.232422H20.5655C20.9843 0.232422 21.3681 0.476197 21.5425 0.859272L25.8693 10.2551C26.1066 10.7774 25.8972 11.3903 25.3878 11.662L13.9498 17.6171C13.7962 17.6937 13.6287 17.7424 13.4543 17.7424ZM2.61643 10.659L13.4473 16.1753L24.3201 10.5128L20.2864 1.74383H6.75477L2.61643 10.659Z" fill="#1A171B"/>
                    <path d="M2.08008 10.8482L6.49059 1.33398H20.5456L24.8584 10.6949L13.4553 16.6361L2.08008 10.8482Z" fill="#B78612"/>
                    <path d="M20.5314 1.36125L24.8233 10.6804L13.455 16.6007L2.11471 10.8336L6.51126 1.36125H20.5314V1.36125ZM20.5663 1.3125H6.47637L2.04492 10.8545L13.455 16.6634L24.8931 10.7083L20.5663 1.3125Z" fill="#EFE285"/>
                    <path d="M2.46289 10.7152L13.4543 16.3011L24.4736 10.5619L20.3562 1.63281H6.678L2.46289 10.7152Z" fill="url(#paint0_linear_2579_2)"/>
                    <path d="M2.07812 10.8472L6.48864 1.33301H20.5437L24.8565 10.694L13.4533 16.6351L2.07812 10.8472Z" fill="#B78612"/>
                    <path d="M20.5294 1.36028L24.8213 10.6794L13.4531 16.5997L2.11276 10.8327L6.50931 1.36028H20.5294V1.36028ZM20.5643 1.31152H6.47442L2.04297 10.8536L13.4531 16.6624L24.8911 10.7073L20.5643 1.31152Z" fill="#EFE285"/>
                    <path d="M2.69922 10.6735L13.4533 16.148L24.2354 10.5272L20.2087 1.78613H6.82361L2.69922 10.6735Z" fill="#E1001A"/>
                    <defs>
                    <linearGradient id="paint0_linear_2579_2" x1="13.4694" y1="16.3018" x2="13.4694" y2="1.63127" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8A0E13"/>
                    <stop offset="0.9729" stopColor="#E1001A"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_2579_2" x1="13.4685" y1="16.1451" x2="13.4685" y2="1.78815" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8A0E13"/>
                    <stop offset="0.9729" stopColor="#E1001A"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>
                <div className="bg-golden w-2/5 h-0.5"></div>

            </div>
            </div>
        </div>
    );

}
export default TitleSeparator;