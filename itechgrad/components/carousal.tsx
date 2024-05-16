import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from "react";

const Carousal = ({ children }: { children: React.ReactNode[] }) => {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);
    const swiperRef = useRef<SwiperType>();
    return (
        // <div className="relative">
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={20}
                breakpoints={{
                    480: {
                        height: 150,
                        width: 350
                    },
                    768: {
                        height: 200,
                        width: 500
                    },
                    1024: {
                        height: 300,
                        width: 550
                    },
                }}
                // onBeforeInit={(swiper) => {
                //     swiperRef.current = swiper;
                // }}
            >
                {children.map((item, index) => (
                    <SwiperSlide key={index}>{item}</SwiperSlide>
                ))}
            </Swiper>
            // <Button
               // ref={navigationPrevRef}
                // onClick={() => swiperRef.current?.slidePrev()}
                // className="transition ease-in-out delay-150 hover:-translate-x-1 duration-300 
                // bg-[#262626] z-10 absolute -top-[55%] -left-6 rounded-full min-w-unit-12 h-unit-12 px-unit-0"
                // startContent={
                    // <ChevronLeftIcon className="w-7 h-7 text-white" />
                // }
            // ></Button>
            // <Button
                // ref={navigationNextRef}
                // onClick={() => swiperRef.current?.slideNext()}
                // className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 
                // bg-[#262626] z-10 absolute inset-y-[155px] -right-6 rounded-full min-w-unit-12 h-unit-12 px-unit-0"
                // startContent={
                    // <ChevronRightIcon className="w-7 h-7 text-white" />
                // }
            // ></Button>
        // </div>
    );
};

export default Carousal;
