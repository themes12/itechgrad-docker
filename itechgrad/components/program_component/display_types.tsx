"use client";
import React, { useState } from "react";
import Program_navbar from "@/components/program_component/program_navbar";
import Program_button from "@/components/program_component/program_button";
import degreeJson from "@/utils/degree.json";
import { Degree } from "@/types/degree";
import { Program } from "@/types/program";

type Props = { params: { degree: string }; data: Degree };

const Display_types = ({ params, data }: Props) => {
    const { degree } = params;
    const [selectedProgram, setSelectedProgram] = useState<number>(0);
    return (
        <div>
            <section className="bg-whaite py-12 pt-0 relative">
                <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12 max-w-full max-h-300px  relative">
                    <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
                        <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold">
                            {data.attributes.title}
                        </h1>
                        <h5 className="text-md xxs:text-lg xs:text-xl lg:text-2xl font-[300] text-[#7D7D7D] pt-5 pb-10">
                            {data.attributes.sub_title}
                        </h5>
                    </header>
                </section>
                <div className="pt-10 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
                    <div
                        className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2
            shadow-small rounded-large transition-transform-background motion-reduce:transition-none border-none bg-white w-full pb-10
            lg:w-auto transform translate-y-[-10%]"
                    >
                        <div className="flex-grow overflow-y-auto pt-5 py-5 px-10">
                            <Program_navbar
                                data={data.attributes.programs?.data as Program[]}
                                setSelectedProgram={setSelectedProgram}
                                selectedProgram={selectedProgram}
                            />
                            <div className="p-0 lg:p-8">
                                <Program_button
                                    selectedProgram={selectedProgram}
                                    data={data.attributes.programs?.data as Program[]}
                                    degree={degree}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Display_types;
