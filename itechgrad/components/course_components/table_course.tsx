// import "@/components/course_components/table_courses.css";
"use client"
import React, { useState } from "react";
import { MyModal } from "@/components/course_components/phdPageInner";
import { Pagination, Button } from "@nextui-org/react";
import { Course } from "@/types/course";
import { SettingCourse } from "@/types/setting";
import { useLocale } from "next-intl";
import { usePathname, useSearchParams } from "next/navigation";
import Header from "./header";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import { PaginationAttributes } from "@/types/pagination";
import { useRouter } from "@/navigation";

export const Table_courses = ({
    courses,
    // setting,
    meta
}: {
    courses: Course[];
    meta: PaginationAttributes;
    // setting: SettingCourse;
}) => {
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
            <Header />
            <Table
                bottomContent={
                    <div className="flex w-full justify-end">
                      <Pagination
                        showShadow
                        initialPage={currentPage}
                        page={meta.page}
                        total={meta.pageCount}
                        onChange={handleChagePage}
                      />
                    </div>
                  }
            >
                <TableHeader>
                    <TableColumn key="1" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]">รหัสวิชา</TableColumn>
                    <TableColumn key="2" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]">ชื่อวิชา</TableColumn>
                    <TableColumn key="3" className="bg-[#DAF0FC] text-center font-normal text-base text-[#6E6E6E]"><></></TableColumn>
                </TableHeader>
                <TableBody>
                    {courses.map((course: Course) =>
                        <TableRow key={course.attributes.course_id}>
                            <TableCell className="text-center">
                                <span className="bg-[#262626] rounded-xl px-4 py-1.5 font-medium xs:text-sm text-white text-xs">
                                    {course.attributes.course_id}
                                </span>
                            </TableCell>
                            <TableCell>
                                <p className="font-semibold text-base">
                                    {course.attributes.name_en}
                                </p>
                                <p className="font-normal text-base">
                                    {course.attributes.name_th}
                                </p>
                            </TableCell>
                            <TableCell>
                                <MyModal course={course} />
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};
