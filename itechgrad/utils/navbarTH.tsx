import { navbar } from "@/types/navbar";

export const navItems: navbar[] = [
    {
        title: "หน้าหลัก",
        type: "button",
        href: "/",
    },
    {
        title: "หลักสูตร",
        type: "dropdown",
        options: [
            {
                title: "หลักสูตรปริญญาโท",
                href: "/program/master-degree",
            },
            {
                title: "หลักสูตรปริญญาเอก",
                href: "/program/phd",
            },
        ],
    },
    {
        title: "กระบวนวิชา",
        type: "dropdown",
        options: [
            {
                title: "กระบวนวิชาปริญญาโท",
                href: "/courses/master-degree",
            },
            {
                title: "กระบวนวิชาปริญญาเอก",
                href: "/courses/phd",
            },
        ],
    },
    {
        title: "งานวิจัย",
        type: "button",
        href: "/research",
    },
    {
        title: "ประชาสัมพันธ์",
        type: "button",
        href: "/announcement",
    },
    {
        title: "บุคลากร",
        type: "dropdown",
        options: [
            {
                title: "อาจารย์",
                href: "/staff/academic",
            },
            {
                title: "เจ้าหน้าที่",
                href: "/staff/support",
            },
        ],
    },
    {
        title: "เกี่ยวกับเรา",
        type: "button",
        href: "/about"

    },
];
