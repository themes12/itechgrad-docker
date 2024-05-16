import React from "react";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";
import { useLocale, useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
    const locale = useLocale();
    const t = useTranslations("Aboutus");
    return (
        <>
            <section className=" relative lg:my-10 my-6 xl:pt-4 mb-20 md:pt-8 lg:pt-10 md:pb-8 lg:pb-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 flex xxxs:flex-col lg:flex-row ">
                <div className="z-0 xxxs:block lg:hidden mt-4 mb-4 md:ml-8 md:mr-8 animate-slideR">
                    <img
                        className="mx-auto object-fill rounded-md "
                        src="/_DSC3640.jpg "
                        alt=""
                    />
                </div>

                <div className="rounded-md bg-white z-10 xxxs:mt-4 lg:mt-0 xl:mt-48 lg:mr-[2rem] xl:mr-[12.7rem] xl:pt-2 animate-slideL">
                    <h2 className="flex justify-start font-bold text-[1.9rem] xxs:text-[1.9rem] xs:text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] text-[#0E80E9] md:ml-8  ">
                        {t("header1")}
                    </h2>

                    <p className="flex justify-start font-normal text-base xxs:text-base xs:text-base sm:text-base md:text-base lg:text-base xl:text-base text-[#000000] md:ml-8 mt-4 md:mr-8  ">
                        &quot;{t("body1")}
                        <br />
                        <br />
                        {t("body2")}&quot;
                    </p>

                    <a
                        href={`/program/master-degree`}
                        className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 w-fit
                    flex cursor-pointer md:ml-8 mt-10 bg-[#0E80E9] text-white px-4 py-4 rounded-[2rem] font-normal text-sm items-center justify-between"
                    >
                        <span>{t("button1")}&nbsp;&nbsp;</span>
                        <span>
                            <ArrowRightIcon className="h-4 w-4 text-white" />
                        </span>
                    </a>
                </div>

                <div className="z-0 -ml-80 xxxs:hidden lg:block">
                    <img
                        className="mx-auto object-fill lg:mr-[45rem] rounded-md animate-slideR  "
                        src="/_DSC3640.jpg"
                        alt=""
                    />
                </div>
            </section>

            <section className=" relative pt-4 mb-40 md:pt-8 lg:pt-10 md:pb-8 lg:pb-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 flex xxxs:flex-col lg:flex-row  ">
                <div className="z-0 xxxs:hidden lg:block mb-4">
                    <img
                        className="mx-auto object-fill lg:mr-[43rem] rounded-md  animate-slideR"
                        src="/_DSC3484.jpg"
                        alt=""
                    />
                </div>

                <div className="z-0 xxxs:block lg:hidden mb-4 md:ml-8 md:mr-8">
                    <img
                        className="mx-auto object-fill lg:mr-[45rem] rounded-md  animate-slideR"
                        src="/_DSC3484.jpg"
                        alt=""
                    />
                </div>

                <div className="rounded-md bg-white z-10 xxxs:mt-2 lg:mt-0 xl:mt-[17.5rem] xl:pt-6 animate-slideR">
                    <h2 className="flex justify-start font-bold text-[2rem] xxs:text-[2rem] xs:text-[2rem] sm:text-[2rem] md:text-[2rem] lg:text-[2rem] xl:text-[2rem] text-[#0E80E9] md:ml-8 ">
                        {t("header2")}
                    </h2>

                    <p className="flex justify-start font-normal text-base xxs:text-base xs:text-base sm:text-base md:text-base lg:text-base xl:text-base text-[#000000] md:ml-8 mt-4 md:mr-8 ">
                        &quot;{t("body3")}&quot;
                    </p>

                    <a
                        href={`/program/phd`}
                        className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 w-fit
                    flex cursor-pointer md:ml-8 mt-10 bg-[#AFDEF9] text-[#0E80E9] px-4 py-4 rounded-[2rem] font-normal text-sm items-center justify-between"
                    >
                        <span>{t("button2")}&nbsp;&nbsp;</span>
                        <span>
                            <ArrowRightIcon className="h-4 w-4 text-[#0E80E9]" />
                        </span>
                    </a>
                </div>
            </section>
        </>
    );
};

export default Page;
