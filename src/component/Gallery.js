import { useEffect, useState } from 'react';
import CarouselArrow from "../assets/navigatio-icon.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Carouselbg1 from "../assets/carousel-bg-1.jfif"

function Gallery() {

    const [slidesData, setSlidesData] = useState([]);

    // Function to fetch data from the dummy API
    const fetchSlidesData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // Transform the data into the format needed for Swiper
        const slides = data.map((item) => ({
          heading: item.title,
          disc: item.body,
          bgImage: `url('https://via.placeholder.com/150/0000FF/808080?text=${item.id}')`, // Example placeholder image
        }));
  
        setSlidesData(slides);
      } catch (error) {
        console.error('Error fetching data:', error);
        setSlidesData([]);
      }
    };
  
    // Fetch data when the component mounts
    useEffect(() => {
      fetchSlidesData();
    }, []);



    // carousel Data for now 
    const carouseldata = [
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


    return (
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
                {carouseldata.map((slide, index) => (
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
    );
}

export default Gallery;
