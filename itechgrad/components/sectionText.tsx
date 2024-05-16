import { SectionAttributes as SectionTextProps } from "@/types/section";
import React from "react";

const sectionText = ({ name }: SectionTextProps) => {
    return <h3 className="font-bold	text-4xl text-[#262626]">{name}</h3>;
};

export default sectionText;
