"use client";
import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useLocale } from "next-intl";
import { TabMenu } from "primereact/tabmenu";
import { Link } from "@/navigation";
import { useParams, usePathname } from "next/navigation";
import { dayjsExt } from "@/utils/dayjs";

function CourseNavbar() {
    const locale = useLocale();
    const { degree } = useParams();
    const pathname = usePathname().split('/');

    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
            label: `Recent courses ${locale === "th" ? dayjsExt().format('BBBB') : dayjsExt().format('YYYY')}`,
            template: (options: any) => (
                <Button
                    as={Link}
                    href={`/courses/${degree}`}
                    variant="light"
                    radius="sm"
                    className="text-base font-medium"
                    onClick={(e) => setActiveIndex(0)}
                >
                    {options.label}
                </Button>
            ),
        },
        {
            label: "All courses",
            template: (options: any) => (
                <Button
                    as={Link}
                    href={`/courses/${degree}/all`}
                    variant="light"
                    radius="sm"
                    className="text-base font-medium"
                    onClick={(e) => setActiveIndex(1)}
                >
                    {options?.label}
                </Button>
            ),
        },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row">
                {/* <div className="lg:w-1/2"> */}
                    {/* TabMenu */}
                    <TabMenu
                        model={items}
                        activeIndex={activeIndex}
                        onTabChange={(e) => setActiveIndex(e.index)}
                    />
                {/* </div> */}
            </div>
            {/* <div className="border_line"></div> */}
        </>
    );
}

export default CourseNavbar;
