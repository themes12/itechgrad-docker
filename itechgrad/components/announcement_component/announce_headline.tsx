import React from "react";

import {Chip, Image} from "@nextui-org/react";
import { dayjsExt } from "@/utils/dayjs";
import { useLocale } from "next-intl";

type Props = {
    category: string;
    headline: string;
    date: Date;
};

const AnnounceHeadline = (props: Props) => {
    const locale = useLocale();
    return (
    <div className="flex flex-col gap-6">
        {/* headline */}
        <div className="flex flex-col gap-6 bg-[#262626]">
            <div className="flex flex-wrap justify-start gap-4 items-center">
                <Chip size="lg" className="bg-zinc-50 text-blue-500 capitalize">{props.category}</Chip>
                <Chip variant="light" className="text-white">{locale === "th" ? dayjsExt().format('D/M/BBBB') : dayjsExt().format('D/M/YYYY')}</Chip>
            </div>
            <div className="flex flex-wrap justify-start gap-4">
                <div className=" text-4xl font-semibold text-white">
                    {/* ชื่อหัวข้อ */}
                    {props.headline}
                </div>
            </div>
        </div>
        
    </div>

    );
};

export default AnnounceHeadline;