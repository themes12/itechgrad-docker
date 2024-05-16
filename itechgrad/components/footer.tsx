"use client"
import { Image } from "@nextui-org/react";

type Props = {};

const Footer = (props: Props) => {
    return (
        <footer className="bg-[#262626] text-[#E9E9E9]">
            <div className="divide-solid divide-y-2 divide-[#BCBCBC] px-12 pt-10">
                <div className="pb-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                    <h5 className="font-semibold text-2xl">
                        Computer Science CMU
                    </h5>
                    <div className="text-base font-normal">
                        <h6 className="text-lg mb-2">
                            Location
                        </h6>
                        <p>ภาควิชาวิทยาการคอมพิวเตอร์คณะวิทยาศาสตร์</p>
                        <p>
                            มหาวิทยาลัยเชียงใหม่239 ถ.ห้วยแก้ว ต.สุเทพ
                            อ.เมือง จ.เชียงใหม่ 50200
                        </p>
                    </div>
                    <div>
                        <h6 className="text-lg mb-2">
                            Contact
                        </h6>
                        <span>
                            โทรศัพท์ :&nbsp;
                            <a href="tel:0-5394-3412-16">0-5394-3412-16</a> ,&nbsp;
                            <a href="tel:063-080-7969">063-080-7969</a>
                        </span>
                        <p>ธุรการ : กด 0 หรือ 101</p>
                        <p>หลักสูตรปริญญาตรี : กด 103</p>
                        <p>หลักสูตรปริญญาโท-เอก : กด 105</p>
                        <a href="mailto:compsci@cmu.ac.th">
                            E-mail : compsci@cmu.ac.th
                        </a>
                        <p>Line ID : cscmu</p>
                    </div>
                </div>
                <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-y-4 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                    <p className="mr-auto">Copyright © 2019 ภาควิชาวิทยาการคอมพิวเตอร์. All rights reserved.</p>
                    <div className="flex flex-row ml-auto">
                        <button>
                            <Image
                                width="32"
                                height="32"
                                src="https://img.icons8.com/color/32/facebook-new.png"
                                alt="facebook-new"
                            />
                        </button>
                        <button>
                            <Image
                                width="32"
                                height="32"
                                src="https://img.icons8.com/color/32/line-me.png"
                                alt="line-me"
                            />
                        </button>
                        <button>
                            <Image
                                width="32"
                                height="32"
                                src="https://img.icons8.com/color/32/instagram-new--v1.png"
                                alt="instagram-new--v1"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
