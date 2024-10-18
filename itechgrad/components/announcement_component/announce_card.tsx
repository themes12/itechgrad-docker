import React, { useState } from "react";
import { Divider, Image } from "@nextui-org/react";
import { Pagination, Button, Input } from "@nextui-org/react";

import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Post } from "@/types/posts";

import ReactMarkdown from 'react-markdown'
import remarkBreaks from "remark-breaks";

export const Announcement_card = ({ post }: { post: Post }) => {
    const t = useTranslations("Annoucement");
    return (
        // <Link href="/announcement/adv">
            <div className="px-8">
                {/* <div className="grid md:grid-cols-12 gap-6 md:gap-4 mb-8 animate-slideB bg-gray-200 hover:bg-gray-300 p-6 rounded-2xl transition ease-in-out duration-500"> */}
                <div className="grid md:grid-cols-12 gap-6 md:gap-4 mb-8 animate-slideB bg-gray-200 p-6 rounded-2xl">
                    <div className="col-span-6 md:col-span-6">
                        <p className="text-[#1C5CFF] text-[16px] font-[500] leading-normal capitalize">
                            {post.attributes.category}
                        </p>
                        <Link href={`/announcement/${post.id}`} className="no-underline hover:underline font-[700] text-[30px] text-[#1E1E1E] leading-normal pt-[20px] pb-[20px]">
                            {post.attributes.title}
                        </Link>
                        <div
                            className="font-[400] text-[15px] text-[#7D7D7D] leading-normal pt-[20px] pb-[20px] max-w-[85%] line-clamp-6"
                        >
                            <ReactMarkdown remarkPlugins={[remarkBreaks]}>{post.attributes.content?.replace(/\n/gi, "&nbsp; \n")}</ReactMarkdown>
                        </div>
                    </div>
                    <div className="col-span-6 md:col-span-6 flex items-center justify-center">
                        <div className="image-container">
                            <Image
                                alt=""
                                className="flex object-scale-down aspect-video h-auto w-auto"
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${post.attributes.featured_image.data?.attributes.formats.medium?.url}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        // </Link>
    );
};
