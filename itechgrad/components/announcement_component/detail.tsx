import React from "react";

import {Chip, Image, Link} from "@nextui-org/react";
import ReactMarkdown from 'react-markdown'
import remarkBreaks from "remark-breaks";

type Props = {
    content: string;
};

const Detail = (props: Props) => {
    return (
    <div className="flex flex-col gap-6 bg-[#FFF]">
        <div className="flex flex-col gap-6 bg-[#FFF] lg:px-10 md:px-8 px-4">
            {/* <div className="flex flex-wrap justify-end gap-8 items-center py-6"> */}
            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{props.content}</ReactMarkdown>
            {/* </div> */}
        </div>
        
    </div>

    );
};

export default Detail;