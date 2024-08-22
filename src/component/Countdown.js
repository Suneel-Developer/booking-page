import React, { useEffect, useState } from 'react'
import BungaImage1 from "../assets/1.png"
import BungaImage2 from "../assets/2.png"
import BungaImage3 from "../assets/3.png"
import Bungatemple1 from "../assets/bunga-temple.png"

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const apiResponse = {
            eventDate: "2024-11-03T00:00:00Z"
        };

        const countdownDate = new Date(apiResponse.eventDate).getTime();

        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = countdownDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='bg-[#D9D9D9] px-2 py-40 relative'>
            <div>
                <h1 className='text-center text-[#34352F] tracking-[1%] f-arya-regular text-4xl mb-2'>MENGHITUNG HARI</h1>
                <div className='flex gap-1 justify-center my-6'>
                    <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
                        <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>{String(timeLeft.days).padStart(2, '0')}</h2>
                        <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>HARI</p>
                    </div>
                    <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
                        <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>{String(timeLeft.hours).padStart(2, '0')}</h2>
                        <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>JAM</p>
                    </div>
                    <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
                        <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>{String(timeLeft.minutes).padStart(2, '0')}</h2>
                        <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>MENIT</p>
                    </div>
                    <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
                        <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>{String(timeLeft.seconds).padStart(2, '0')}</h2>
                        <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>DETIK</p>
                    </div>
                </div>

                <p className='text-center text-[#34352F] tracking-[-5%] f-montserrat-regular text-sm'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
            </div>

            <div>
                <div className='grid grid-cols-3 gap-2 mx-3 border border-dashed border-[#E0E8C5] mt-16 relative'>
                    <img src={BungaImage1} alt="BungaImage1" />
                    <img src={BungaImage2} alt="BungaImage2" />
                    <img src={BungaImage3} alt="BungaImage3" />

                </div>
                {/* date  */}
                <div className='mt-5 w-full flex justify-center'>
                    <p className='text-[#F2B4B3] f-arya-regular text-4xl'>03.11.2024</p>
                </div>
            </div>

            {/* bottom line  */}
            <div className='bg-[#34352F] h-[2px] w-[70%] absolute left-0 bottom-16'></div>
            {/* top line  */}
            <div className='bg-[#34352F] h-[2px] w-[60%] absolute right-0 top-16'></div>
            {/* corner image  */}
            <img src={Bungatemple1} alt="Bungatemple" className='absolute top-0 left-0 h-96' />
        </section>
    );
}

export default Countdown;
