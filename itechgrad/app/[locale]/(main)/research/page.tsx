import React from "react";
import { useTranslations } from "next-intl";

type Props = {};

const Research = (props: Props) => {
    const t = useTranslations("Research");

    return (
        <>
            <section className="pt-4 mb-8 md:pt-8 lg:pt-10 md:pb-8 lg:pb-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                <div className="space-y-4">
                    <h2 className="flex justify-start font-bold text-2xl xxs:text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[64px] text-[#0E80E9] mx-8 mt-8">
                        {t("header1")}&nbsp;
                        <span className="flex text-[#262626] ">
                        {t("header2")}
                        </span>
                    </h2>

                    <h2 className="flex justify-start font-bold text-2xl xxs:text-5xl xs:text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-[64px]  text-[#262626] mx-8 mt-8">
                        {t("header3")}
                    </h2>
                </div>

                <p className="flex justify-start font-normal text-md xxs:text-md xs:text-md sm:text-md md:text-xl lg:text-xl xl:text-xl text-[#515151] mx-8 mt-8">
                    {t("header4")}
                    <br></br>
                    {t("header5")}
                </p>
            </section>

            <section>
                <div className="relative flex overflow-x-hidden md:max-w-2xl lg:max-w-4xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto shadow-[0px_4px_30px_0px_rgba(0,87.97,111.95,0.1)] border-1 border-white rounded-lg -mb-9 xl:-mb-10 z-10 ">
                    <div className="flex flex-row justify-center font-medium text-l xxs:text-l xs:text-l sm:text-l md:text-xl lg:text-xl xl:text-xl text-[#000000] bg-white animate-marquee whitespace-nowrap ">
                        <span className="text-[#262626] mx-8 my-8">
                            Blockchain
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Medical informatics
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Health informatics
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Next generation computer network
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Augmented / Virtual reality
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Bioinformatics
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Computational Astronomy
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Machine learning
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Computer Vision
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Human Computer Interaction
                        </span>
                    </div>

                    <div className="flex flex-row absolute justify-center font-medium text-l xxs:text-l xs:text-l sm:text-l md:text-l lg:text-l xl:text-xl text-[#000000] -ml-1 bg-white animate-marquee2 whitespace-nowrap ">
                        <span className="text-[#262626] mx-8 my-8">
                            Blockchain
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Medical informatics
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Health informatics
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Next generation computer network
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Augmented / Virtual reality
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Bioinformatics
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Computational Astronomy
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Machine learning
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Computer Vision
                        </span>
                        <span className="text-[#262626] mx-8 my-8">
                            Human Computer Interaction
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#262626] px-10 pt-24 pb-10">
                    <img
                        className="rounded object-scale-down"
                        src="/_DSC4254.jpg"
                        alt=""
                    />
                    <div className="font-semibold text-[#FFFFFF] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Medical informatics
                        <p className="xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-light mt-3">
                            Smart medical devices and AI-based medical support
                            systems
                        </p>
                        <button className="xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#3B3B3B] rounded-md py-1 px-3 ">
                            {t("header6")}
                        </button>
                        <br />
                        <button className="xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal transition-all ease-in-out hover:bg-[#FFFFFF] hover:text-[#262626] hover:px-3 rounded-md py-1 text-left">
                            Churee&nbsp;Techawut, Worawut&nbsp;Srisukkham,
                            Suphakit&nbsp;Awipan, Jakarin&nbsp;Chawachat
                        </button>
                        <hr className="h-px mt-3 bg-[#3B3B3B] border-0 " />
                        <div className=" font-semibold text-[#FFFFFF] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto ">
                            Health informatics
                            <p className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-light  mt-3 ">
                                Analysis of biomedical data(patient&apos;s
                                records, images)
                            </p>
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#3B3B3B] rounded-md py-1 px-3">
                                {t("header6")}
                            </button>
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal  transition-all ease-in-out hover:bg-[#FFFFFF] hover:text-[#262626] hover:px-3 rounded-md py-1 text-left ">
                                Churee&nbsp;Techawut, Worawut&nbsp;Srisukkham,
                                Suphakit&nbsp;Awipan, Jakarin&nbsp;Chawachat
                            </button>
                            <hr className="h-px mt-3 bg-[#3B3B3B] border-0" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#ffffff] px-10 pt-14 pb-14">
                    <div className="font-semibold text-[#262626] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Next generation
                        <br />
                        <span>computer network</span>
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#E9E9E9] rounded-md py-1 px-3 ">
                            {t("header6")}
                        </button>
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal transition-all ease-in-out  hover:bg-[#262626] hover:text-[#FFFFFF] hover:px-3 rounded-md py-1 text-left">
                            Suphakit&nbsp;Awipan
                        </button>
                        <hr className="h-px mt-3 bg-[#FFFFFF] border-0 " />
                        <div className=" font-semibold text-[#262626] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                            Blockchain
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#E9E9E9] rounded-md py-1 px-3">
                                {t("header6")}
                            </button>
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal  transition-all ease-in-out hover:bg-[#262626] hover:text-[#FFFFFF] hover:px-3 rounded-md py-1  text-left">
                                Ekkarat&nbsp;Booncheing
                            </button>
                            <hr className="h-px mt-3 bg-[#FFFFFF] border-0" />
                        </div>
                    </div>
                    <img
                        className="rounded object-scale-down"
                        src="/_DSC4369.jpg"
                        alt=""
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#262626] px-10 pt-24 pb-10">
                    <img
                        className="rounded object-scale-down"
                        src="/_DSC4197.jpg"
                        alt=""
                    />
                    <div className="font-semibold text-[#FFFFFF] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Computation Astronomy
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#3B3B3B] rounded-md py-1 px-3 ">
                            {t("header6")}
                        </button>
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal transition-all ease-in-out  hover:bg-[#FFFFFF] hover:text-[#262626] hover:px-3 rounded-md py-1 text-left ">
                            Prapaporn&nbsp;Techa-Angkoon
                        </button>
                        <hr className="h-px mt-3 bg-[#3B3B3B] border-0 " />
                        <div className=" font-semibold text-[#FFFFFF] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                            Machine learning
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#3B3B3B] rounded-md py-1 px-3">
                                {t("header6")}
                            </button>
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal transition-all ease-in-out hover:bg-[#FFFFFF] hover:text-[#262626] hover:px-3 rounded-md py-1 text-left">
                                Chomphol&nbsp;Bunkhumpornpat,
                                Jakramate&nbsp;Bookrajang,
                                Jeerayut&nbsp;Chaijaruwanich
                            </button>
                            <hr className="h-px mt-3 bg-[#3B3B3B] border-0" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#ffffff] px-10 pt-14 pb-14">
                    <div className="font-semibold text-[#262626] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Augmented / Virtual reality
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#E9E9E9] rounded-md py-1 px-3 ">
                            {t("header6")}
                        </button>
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal transition-all ease-in-out  hover:bg-[#262626] hover:text-[#FFFFFF] hover:px-3 rounded-md py-1 text-left">
                            Sutasinee&nbsp;Thovuttikul,
                            Thapanapong&nbsp;Rukkanchanunt
                        </button>
                        <hr className="h-px mt-3 bg-[#FFFFFF] border-0 " />
                        <div className=" font-semibold text-[#262626] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                            Computer Vision
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#E9E9E9] rounded-md py-1 px-3">
                                {t("header6")}
                            </button>
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal  transition-all ease-in-out hover:bg-[#262626] hover:text-[#FFFFFF] hover:px-3 rounded-md py-1 text-left">
                                Wattana&nbsp;Jindaluang, Varin&nbsp;Chouvatut,
                                Thapanapong&nbsp;Rukkanchanunt
                            </button>
                            <hr className="h-px mt-3 bg-[#FFFFFF] border-0" />
                        </div>
                    </div>
                    <img
                        className="rounded object-scale-down"
                        src="/_DSC4704.jpg"
                        alt=""
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#262626] px-10 pt-24 pb-10">
                    <img
                        className="rounded object-scale-down"
                        src="/_DSC2867.jpg"
                        alt=""
                    />
                    <div className="font-semibold text-[#FFFFFF] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Bioinformatics
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#3B3B3B] rounded-md py-1 px-3 ">
                            {t("header6")}
                        </button>
                        <br />
                        <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal transition-all ease-in-out  hover:bg-[#FFFFFF] hover:text-[#262626] hover:px-3 rounded-md py-1 text-left">
                            Ratsaneetip&nbsp;Wita,
                            Areerat&nbsp;Trongratsameethong
                        </button>
                        <hr className="h-px mt-3 bg-[#3B3B3B] border-0 " />
                        <div className=" font-semibold text-[#FFFFFF] text-xl xxs:text-2xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
                            Human Computer
                            <br />
                            Interaction
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal mt-7 bg-transparent border border-[#3B3B3B] rounded-md py-1 px-3">
                                {t("header6")}
                            </button>
                            <br />
                            <button className="text-sm xxxs:text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-base font-normal  transition-all ease-in-out hover:bg-[#FFFFFF] hover:text-[#262626] hover:px-3 rounded-md py-1 text-left">
                                Churee&nbsp;Techawut, Sutasinee&nbsp;Thovuttikul
                            </button>
                            <hr className="h-px mt-3 bg-[#3B3B3B] border-0 " />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Research;
