import React from 'react';
import { useLocation } from 'react-router-dom';

// Images 
import BungaCover1 from "../assets/bunga-vover-1.png"
import BungaCover2 from "../assets/bunga-cover-2.png"
import Slice from "../assets/Slice.png"
import BungaMempelai12 from "../assets/bunga-mempelai-1-2.svg"
import CalendarCheckmarkIcon from "../assets/calendar-checkmark-line-icon.svg"
import LocationPinIcon from "../assets/maps-pin-line-icon.svg"
import GopayLogo from "../assets/gopay.svg"
import DanaLogo from "../assets/dana.svg"
import QrisLogo from "../assets/qris.svg"
import Bungatemple from "../assets/bunga-tempel-1.png"


// Components 
import MobileOnlyPopup from './MobileOnlyPopop';
import BukuTamu from './BukuTamu';
import Countdown from './Countdown';
import Gallery from './Gallery';

const MainPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name') || 'Tamu';
  return (
    <>
    {/* Page 1.  */}
    <section className='flex items-center justify-center flex-col relative h-[80vh] overflow-hidden bg-[#EEE9E1]'>
      <h4 className='text-[#34352F] text-center f-montserrat-medium text-lg z-50 mt-40'>UNDANGAN PERNIKAHAN</h4>
      <h3 className='text-[#34352F] text-center f-arya-bold text-[40px]'>IRVINE & LOREM</h3>
      <p className='text-[#34352F] text-center f-montserrat-medium text-base leading-7'>Sabtu, 3 November 2024</p>
      <p className='text-[#34352F] text-center f-montserrat-medium text-base'>12:00 -1 5:00 WIB</p>


      {/* Cover Images  */}
      <img src={BungaCover1} alt="BungaCover1" className='absolute -left-24 top-0 h-[70vh]' />
      <img src={BungaCover2} alt="BungaCover2" className='absolute top-0 -right-16 h-[70vh]' />
    </section>

    {/* Page 02 */}
    <section className='bg-[#EEE9E1] px-3 py-20'>
      <img src={Slice} alt="Slice" className='border border-dashed border-[#D9D9D9]' />

      <div className='px-3 py-10'>
        <h1 className='text-center text-[#34352F] tracking-[1%] f-gabriela-regular text-4xl mb-2'>MEMPELAI</h1>
        <p className='text-center text-[#34352F] f-montserrat-regular text-xs mb-8'>Every love story is beautiful, but ours is the best one. I loved her since the first time I saw her. True love stories never have endings.</p>
        <h3 className='text-center text-[#34352F] f-gabriela-regular text-2xl tracking-[-1%] mb-2'>Irvine Afri Dwi apalah</h3>
        <p className='text-center text-[#34352F] f-montserrat-medium text-xs'>Putra dari <br /> Bapak lorem ipsum & Ibu lorem ipsum</p>
        <img src={BungaMempelai12} alt="BungaMempelai12" className='mx-auto h-40' />
        <h3 className='text-center text-[#34352F] f-gabriela-regular text-2xl tracking-[-1%] mb-2'>Irvine Afri Dwi apalah</h3>
        <p className='text-center text-[#34352F] f-montserrat-medium text-xs'>Putra dari <br /> Bapak lorem ipsum & Ibu lorem ipsum</p>
      </div>
    </section>

    {/* Page 03 */}
    <Gallery />

    {/* Page 04 */}
    <Countdown />

    {/* Page 05 */}
    <section className='bg-[#E0E8C5] px-3 py-20'>
      <div className='px-3 pb-20'>
        <h1 className='text-center text-[#34352F] f-arya-regular text-5xl mb-2'>LOKASI</h1>
        <div className='mx-auto h-[2px] bg-[#34352F] w-40 mb-16'></div>

        <div className='flex items-center justify-center flex-col mb-10'>
          <img src={CalendarCheckmarkIcon} alt="CalendarCheckmarkIcon" className='w-8 h-8 mb-2' />
          <h3 className='text-center text-[#34352F] f-montserrat-regular text-xl my-2'>RESEPSI</h3>
          <p className='text-center text-[#34352F] f-montserrat-light text-sm'>
            Sabtu, 3 November 2024 <br />12:00 - 15:00 WIB
          </p>
        </div>

        <div className='flex items-center justify-center flex-col'>
          <img src={LocationPinIcon} alt="LocationPinIcon" className='w-8 h-8 mb-2' />
          <h3 className='text-center text-[#34352F] f-montserrat-regular text-xl my-2'>BREBES</h3>
          <p className='text-center text-[#34352F] f-montserrat-light text-sm'>
            Sport Club Goldland Karawaci, Gedung Edelweiss no. 1 dan 2, West Panunggangan, Cibodas,
            Jl. Palem Raja Raya, Bencongan Indah, Kec. Klp. Dua, Tangerang City, Banten 15810
          </p>
        </div>
      </div>

      <div className="w-full h-[700px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31872.444158027936!2d106.58968889215057!3d-6.245163338011025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a1e5431d22cd5%3A0x4b209cf6e3427ffb!2sGoldland%20Karawaci!5e0!3m2!1sen!2sid!4v1693583844379!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>


    {/* Page 06 */}
    <BukuTamu />

    {/* Page 07 */}
    <section className='bg-[#EEE9E1] px-3 py-20 relative flex justify-center overflow-hidden'>

      <div className=' max-w-[500px] w-full flex flex-col justify-center items-center gap-5 mt-[190px] mb-10'>
        <h1 className='text-center text-[#34352F] f-arya-regular text-3xl mb-5'>AMPLOP UNDANGAN</h1>
        <button className='bg-[#C0C6B8] h-14 w-52 rounded-lg flex items-center justify-center'>
          <img src={GopayLogo} alt="GopayLogo" className='h-7' />
        </button>
        <button className='bg-[#C0C6B8] h-14 w-52 rounded-lg flex items-center justify-center'>
          <img src={DanaLogo} alt="DanaLogo" className='h-7' />
        </button>
        <button className='bg-[#C0C6B8] h-14 w-52 rounded-lg flex items-center justify-center'>
          <img src={QrisLogo} alt="QrisLogo" className='h-7' />
        </button>
      </div>

      <img src={Bungatemple} alt="Bungatemple" className='absolute -left-10 top-2' />

    </section>

    <MobileOnlyPopup />
  </>
  )
}

export default MainPage