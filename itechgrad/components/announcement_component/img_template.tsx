import React from "react";

import {Image} from "@nextui-org/react";
import { Pictures } from "@/types/staff";
import Carousal from "@/components/carousal";

type Props = {
    other_images: Pictures;
};

const ImgTemplate = (props: Props) => {
    const images = props.other_images.data ?? [];
    return (
        <div className="md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-9 my-8">
            <Carousal>
                {images.map((value, index) => (
                    <Image
                        key={index}
                        alt={value.attributes.alternativeText ?? ""}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${value.attributes.url}`}
                    />
                ))}
            </Carousal>
        </div>

    );
};

export default ImgTemplate;