import React from "react";

import {Image} from "@nextui-org/react";

type Props = {
    img_url: string | undefined;
};

const ImgHeadline = (props: Props) => {
    return (
    <div className="flex flex-col gap-6">
        {/* img */}
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-center gap-4">
                <div className="w-12/12" >
                    <Image
                        className="rounded h-auto w-max"
                        alt="mock up"
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}${props.img_url}`}
                    />
                </div>
            </div>
        </div>
        
    </div>

    );
};

export default ImgHeadline;