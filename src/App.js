import React, { useState } from 'react';
import './App.css';

// Images 
import BungaCover1 from "./assets/bunga-vover-1.png"
import BungaCover2 from "./assets/bunga-cover-2.png"
import Slice from "./assets/Slice.png"
import BungaMempelai12 from "./assets/bunga-mempelai-1-2.svg"
import BungaImage1 from "./assets/1.png"
import BungaImage2 from "./assets/2.png"
import BungaImage3 from "./assets/3.png"
import Carouselbg1 from "./assets/carousel-bg-1.jfif"
import CarouselArrow from "./assets/navigatio-icon.png"
import Bungatemple1 from "./assets/bunga-temple.png"
import Lokashimap from "./assets/map.jpg"
import CalendarCheckmarkIcon from "./assets/calendar-checkmark-line-icon.svg"
import LocationPinIcon from "./assets/maps-pin-line-icon.svg"
import HistoryIcon from "./assets/history-icon.svg"
import messageIcon from "./assets/Rectangle 14.png"
import BungaBukuTumu1 from "./assets/bunga-buku-tamu-1.png"
import BungaBukuTumu2 from "./assets/bunga-buku-tamu-2.png"
import GopayLogo from "./assets/gopay.svg"
import DanaLogo from "./assets/dana.svg"
import QrisLogo from "./assets/qris.svg"
import Bungatemple from "./assets/bunga-tempel-1.png"

// Swiper Styles & modules 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';



// carousel Data
const slidesData = [
  {
    bgImage: `url(${Carouselbg1})`,
    heading: 'OUR GALLERY',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  },
  {
    bgImage: `url(${Carouselbg1})`,
    heading: 'OUR GALLERY',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  },
  {
    bgImage: `url(${Carouselbg1})`,
    heading: 'OUR GALLERY',
    disc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  },
];




function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

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
      <section className='h-[50vh] relative'>
        <Swiper
          spaceBetween={5}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            10: {
              slidesPerView: 1,
            },
          }}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.custom-swiper-button-next',
            prevEl: '.custom-swiper-button-prev',
          }}
          className="mySwiper h-full"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className='w-full h-full flex items-end text-white bg-cover p-5 bg-center'
                style={{ backgroundImage: slide.bgImage }}
              >
                <div className='max-w-[250px] w-full'>
                  <h2 className='text-4xl text-white f-arya-regular mb-2 text-center'>{slide.heading}</h2>
                  <div className='bg-[#D9D9D999] rounded-lg p-2 f-montserrat-regular text-black text-[10px]'>
                    {slide.disc}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-swiper-button-prev absolute top-1/2 left-1 transform -translate-y-1/2 z-50 w-7 h-7 flex items-center justify-center rounded-full">
          <img src={CarouselArrow} alt="CarouselArrow" />
        </button>

        <button className="custom-swiper-button-next absolute top-1/2 right-1 transform -translate-y-1/2 z-50 w-7 h-7 rotate-180 flex items-center justify-center">
          <img src={CarouselArrow} alt="CarouselArrow" />
        </button>
      </section>

      {/* Page 04 */}
      <section className='bg-[#D9D9D9] px-2 py-40 relative'>
        <div>
          <h1 className='text-center text-[#34352F] tracking-[1%] f-arya-regular text-4xl mb-2'>MENGHITUNG HARI</h1>
          <div className='flex gap-1 justify-center my-6'>
            <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
              <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>00</h2>
              <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>HARI</p>
            </div>
            <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
              <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>00</h2>
              <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>JAM</p>
            </div>
            <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
              <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>00</h2>
              <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>MENIT</p>
            </div>
            <div className='w-20 h-20 bg-cover bg-center countdown-image flex flex-col justify-center items-center'>
              <h2 className='text-[#34352F] text-center f-bebasNeue-regular text-3xl mr-[10px] leading-6'>00</h2>
              <p className='text-[#34352F] text-center f-montserrat-regular text-xs uppercase mr-[10px]'>DETIK</p>
            </div>

          </div>

          <p className='text-center text-[#34352F] tracking-[-5%] f-montserrat-regular text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
        </div>

        <div className='grid grid-cols-3 gap-2 mx-3 border border-dashed border-[#E0E8C5] mt-16 relative'>
          <img src={BungaImage1} alt="BungaImage1" className='' />
          <img src={BungaImage2} alt="BungaImage2" className='' />
          <img src={BungaImage3} alt="BungaImage3" className='' />

          {/* date  */}
          <div className='absolute bottom-2 w-full flex justify-center'>
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

      {/* Page 05 */}
      <section className='bg-[#E0E8C5] px-3 py-20'>

        <div className='px-3 pb-20'>
          <h1 className='text-center text-[#34352F] f-arya-regular text-5xl mb-2'>LOKASI</h1>
          <div className='mx-auto h-[2px] bg-[#34352F] w-40 mb-16'></div>

          <div className='flex items-center justify-center flex-col mb-10'>
            <img src={CalendarCheckmarkIcon} alt="CalendarCheckmarkIcon" className='w-8 h-8 mb-2' />
            <h3 className='text-center text-[#34352F] f-montserrat-regular text-xl my-2'>RESEPSI</h3>
            <p className='text-center text-[#34352F] f-montserrat-light text-sm'>Sabtu, 3 November 2024 <br />12:00 -1 5:00 WIB</p>
          </div>

          <div className='flex items-center justify-center flex-col'>
            <img src={LocationPinIcon} alt="LocationPinIcon" className='w-8 h-8 mb-2' />
            <h3 className='text-center text-[#34352F] f-montserrat-regular text-xl my-2'>BREBES</h3>
            <p className='text-center text-[#34352F] f-montserrat-light text-sm'>Sport Club Goldland Karawaci, Gedung Edelweiss no. 1 dan 2, West Panunggangan, Cibodas, Jl. Palem Raja Raya, Bencongan Indah, Kec. Klp. Dua, Tangerang City, Banten 15810</p>
          </div>
        </div>

        <img src={Lokashimap} alt="Lokashimap" />

      </section>

      {/* Page 06 */}
      <section className='bg-[#C0C6B8] px-2 py-40 relative overflow-hidden'>
        <div className='my-10'>
          <h1 className='text-center text-[#34352F] f-arya-regular text-5xl mb-2'>BUKU TAMU</h1>
          <div className='mx-auto h-[2px] bg-[#34352F] w-40 mb-16'></div>

          <div className='flex flex-col gap-8 h-[400px] pr-3 overflow-y-auto boxscrollbar'>
            <div className='flex items-start gap-3'>
              <div className='bg-[#626D6B] w-16 h-16 rounded-full'></div>
              <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                  <h2 className='text-[#34352F] f-montserrat-medium text-xl truncate line-clamp-1 text-balance'>Lorem Ipsum</h2>
                  <div className='bg-[#626D6B] rounded-[3px] px-3 text-center leading-1 h-6 text-white flex items-center justify-center f-montserrat-medium text-xs'>Hadir</div>
                </div>
                <div className='flex items-center gap-1 mt-1'>
                  <img src={HistoryIcon} alt="HistoryIcon" />
                  <p className='text-[#34352F] f-montserrat-medium text-sm'>1 minggu, 4 hari lalu</p>
                </div>
                <div className='bg-[#626D6B] rounded-lg p-4 relative w-full mt-2 text-white f-montserrat-medium text-base'>
                  Uhuyy Uhuyy  =
                  <img src={messageIcon} alt="messageIcon" className='absolute -left-[14px] top-0 h-14' />
                </div>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <div className='bg-[#626D6B] w-16 h-16 rounded-full'></div>
              <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                  <h2 className='text-[#34352F] f-montserrat-medium text-xl truncate line-clamp-1 text-balance'>Lorem Ipsum</h2>
                  <div className='bg-[#626D6B] rounded-[3px] px-3 text-center leading-1 h-6 text-white flex items-center justify-center f-montserrat-medium text-xs'>Hadir</div>
                </div>
                <div className='flex items-center gap-1 mt-1'>
                  <img src={HistoryIcon} alt="HistoryIcon" />
                  <p className='text-[#34352F] f-montserrat-medium text-sm'>1 minggu, 4 hari lalu</p>
                </div>
                <div className='bg-[#626D6B] rounded-lg p-4 relative w-full mt-2 text-white f-montserrat-medium text-base'>
                  Uhuyy Uhuyy  =
                  <img src={messageIcon} alt="messageIcon" className='absolute -left-[14px] top-0 h-14' />
                </div>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <div className='bg-[#626D6B] w-16 h-16 rounded-full'></div>
              <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                  <h2 className='text-[#34352F] f-montserrat-medium text-xl truncate line-clamp-1 text-balance'>Lorem Ipsum</h2>
                  <div className='bg-[#626D6B] rounded-[3px] px-3 text-center leading-1 h-6 text-white flex items-center justify-center f-montserrat-medium text-xs'>Hadir</div>
                </div>
                <div className='flex items-center gap-1 mt-1'>
                  <img src={HistoryIcon} alt="HistoryIcon" />
                  <p className='text-[#34352F] f-montserrat-medium text-sm'>1 minggu, 4 hari lalu</p>
                </div>
                <div className='bg-[#626D6B] rounded-lg p-4 relative w-full mt-2 text-white f-montserrat-medium text-base'>
                  Uhuyy Uhuyy  =
                  <img src={messageIcon} alt="messageIcon" className='absolute -left-[14px] top-0 h-14' />
                </div>
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <div className='bg-[#626D6B] w-16 h-16 rounded-full'></div>
              <div className='flex-1'>
                <div className='flex gap-2 items-center'>
                  <h2 className='text-[#34352F] f-montserrat-medium text-xl truncate line-clamp-1 text-balance'>Lorem Ipsum</h2>
                  <div className='bg-[#626D6B] rounded-[3px] px-3 text-center leading-1 h-6 text-white flex items-center justify-center f-montserrat-medium text-xs'>Hadir</div>
                </div>
                <div className='flex items-center gap-1 mt-1'>
                  <img src={HistoryIcon} alt="HistoryIcon" />
                  <p className='text-[#34352F] f-montserrat-medium text-sm'>1 minggu, 4 hari lalu</p>
                </div>
                <div className='bg-[#626D6B] rounded-lg p-4 relative w-full mt-2 text-white f-montserrat-medium text-base'>
                  Uhuyy Uhuyy  =
                  <img src={messageIcon} alt="messageIcon" className='absolute -left-[14px] top-0 h-14' />
                </div>
              </div>

            </div>
          </div>


          {/* Button to open the form */}
          <div className='flex justify-center w-full mt-10'>
            <button onClick={openForm} className='w-fit bg-[#626D6B] text-white f-montserrat-medium text-lg rounded-[100px] px-6 py-2'>
              ISI BUKU TAMU
            </button>
          </div>

          <img src={BungaBukuTumu1} alt="BungaBukuTumu1" className='absolute top-2 -right-10 h-56' />
          <img src={BungaBukuTumu2} alt="BungaBukuTumu2" className='absolute bottom-2 -left-12 h-56' />

          {/* Form Modal */}
          {isFormOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center p-3 justify-center z-50'>
              <div className='bg-white p-8 rounded-lg relative mx-w-[400px] w-full'>
                <button onClick={closeForm} className='absolute top-2 right-4 font-bold text-black'>✕</button>
                <h2 className='text-2xl mb-4 f-montserrat-medium'>Isi Buku Tamu</h2>
                <form>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2 f-montserrat-medium' htmlFor='name'>
                      Nama
                    </label>
                    <input className='border rounded-lg w-full p-3 text-gray-700 f-montserrat-medium' id='name' type='text' placeholder='Masukkan nama Anda' />
                  </div>
                  <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2 f-montserrat-medium' htmlFor='message'>
                      Pesan
                    </label>
                    <textarea className='border rounded-lg w-full p-3 text-gray-700 f-montserrat-medium' id='message' placeholder='Masukkan pesan Anda' />
                  </div>
                  <button type='submit' className='bg-[#626D6B] text-white px-6 py-2 rounded-[100px] f-montserrat-medium'>Kirim</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Page 07 */}
      <section className='bg-[#EEE9E1] px-3 py-20 relative flex justify-center overflow-hidden'>

        <div className=' max-w-[500px] w-full flex flex-col justify-center items-center gap-5 mt-40 mb-10'>
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
    </>
  );
}

export default App;
