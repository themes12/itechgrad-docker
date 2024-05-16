import React from 'react'
import Section from '../section'
import { Image } from "@nextui-org/react";
import { useTranslations } from 'next-intl';

type Props = {}

const About = (props: Props) => {
    const t = useTranslations("Index");
    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-end space-y-5 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9 my-36">
                <div className="block w-full md:relative md:w-2/3 lg:w-3/4 h-96 my-auto">
                    <div className="block md:absolute -right-5 w-full h-full">
                        <iframe
                            className="w-full h-full rounded-xl shadow-xl"
                            src="https://maps.google.com/maps?q=RX33%2BG26%20%E0%B8%95%E0%B8%B3%E0%B8%9A%E0%B8%A5%E0%B8%AA%E0%B8%B8%E0%B9%80%E0%B8%97%E0%B8%9E%20%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD%E0%B9%80%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%20%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%83%E0%B8%AB%E0%B8%A1%E0%B9%88%2050200&t=m&z=18&output=embed&iwloc=near"
                        ></iframe>
                    </div>
                </div>
                <div className="bg-[#F7FAFF] rounded-md shadow-lg w-full md:w-2/3 lg:w-2/4 px-8 md:pl-16 md:pr-10 space-y-6 py-8">
                    <div>
                        <h5 className="text-[#262626] text-lg font-bold underline underline-offset-2">
                            {t("footer1")}
                        </h5>
                        <p className="text-sm font-normal">
                            {t("footer2")}
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h5 className="text-[#262626] text-lg font-bold underline underline-offset-2">
                            {t("footer3")}
                        </h5>
                        <div className="space-y-1">
                            <p className="font-extrabold text-sm">
                                {t("footer4")}
                            </p>
                            <p className="text-sm font-light">
                                0-5394-3412-16
                            </p>
                            <p className="text-sm font-light">
                                063-080-7969
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-extrabold text-sm">
                                {t("footer5")}
                            </p>
                            <p className="text-sm font-light">
                                {t("footer6")}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-extrabold text-sm">
                                {t("footer7")}
                            </p>
                            <p className="text-sm font-light">
                                {t("footer8")}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="font-extrabold text-sm">
                                {t("footer9")}
                            </p>
                            <p className="text-sm font-light">
                                compsci@cmu.ac.th
                            </p>
                        </div>
                    </div>
                    <div>
                        <h5 className="text-[#262626] text-lg font-bold underline underline-offset-2">
                            {t("footer10")}
                        </h5>
                        <div className="flex gap-3">
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
            </div>
        </Section>
    )
}

export default About