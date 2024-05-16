import { useState } from "react";
import {
    Link,
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Progress,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { CardProps } from "@/types/card";

const AnnouncementCard = ({ title, body, href, image }: CardProps) => {
    const router = useRouter();
    return (
        <Card
            isBlurred
            className="border-none bg-background dark:bg-default-100/50 w-auto h-1/4 p-2"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 justify-center items-center space-x-6">
                    <div className="relative col-span-6">
                        <Image
                            alt=""
                            className="object-cover h-full w-auto aspect-video"
                            src={`https://picsum.photos/seed/${image}/750`}
                        />
                    </div>

                    <div className="flex flex-col col-span-6 m">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h6 className="uppercase font-semibold text-transparent text-base bg-clip-text bg-[#0E80E9] my-1">
                                    Announment
                                </h6>
                                <h3 className="font-bold text-2xl xs:text-5xl line-clamp-3 text-[#262626]">
                                    {title}
                                </h3>
                                <p className="text-[#515151] text-base line-clamp-5 mt-5">
                                    {body}
                                </p>
                                <p className="text-[#6E6E6E] text-sm mt-5">
                                    15/09/2566
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
        // <Card
        //     isFooterBlurred
        //     isPressable
        //     onPress={() => router.push(href ?? "#")}
        //     className="w-full h-[370px] col-span-12 sm:col-span-7"
        // >
        //     <Image
        //         removeWrapper
        //         alt="Relaxing app background"
        //         className="z-0 w-full h-full object-cover"
        //         src={`https://picsum.photos/seed/${image}/750`}
        //     />
        //     <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        //         <div className="px-4 text-start">
        //             <h5 className="text-xl text-[#1A202E] font-bold line-clamp-1">
        //                 {title}
        //             </h5>
        //             <h4 className="text-[#1A202E] font-normal text-base line-clamp-3">
        //                 {body}
        //             </h4>
        //         </div>
        //     </CardFooter>
        // </Card>
    );
};

export default AnnouncementCard;
