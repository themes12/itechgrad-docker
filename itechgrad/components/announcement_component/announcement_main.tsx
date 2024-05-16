"use client"
import { Divider, Pagination } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import CategorySelect from "./category_select";
import { Announcement_card } from "@/components/announcement_component/announce_card";
import { Posts, Post } from "@/types/posts";
import { PaginationAttributes } from "@/types/pagination";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "@/navigation";

const AnnoucementMain = ({ announcements, meta }: { announcements: Post[]; meta: PaginationAttributes }) => {
    const t = useTranslations("Annoucement");
    const searchParams = useSearchParams()
    const router = useRouter();
 
    const page = searchParams.get('page')

    const [currentPage, setCurrentPage] = useState(parseInt(page ?? "1"));

    const handleChagePage = (value: number) => {
        const url = new URL(window.location.href);
        url.searchParams.set('page', value.toString());
        router.push(url.toString());
    }

    return (
        <div>
            <h1 className="xxxs:text-[2rem] xxs:text-[2.5rem] md:text-[4rem] font-bold">
                {t("header1")}
            </h1>
            <h6 className="text-lg font-[300] text-[#7D7D7D]">{t("header2")}</h6>
            <Divider className="my-8" />
            <div>
                <div className="flex flex-row gap-4 my-8">
                    <CategorySelect />
                </div>
                {announcements.map((value, index) => <Announcement_card key={index} post={value} />)}
                
            </div>
            <div className="flex justify-end items-end">
            <Pagination total={meta.pageCount} initialPage={currentPage} page={meta.page} size="md" onChange={handleChagePage} />

            </div>
        </div>
    );
};

export default AnnoucementMain;
