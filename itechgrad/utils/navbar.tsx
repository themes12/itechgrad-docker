import { navbar } from "@/types/navbar";

export const navItems: navbar[] = [
    {
        title: "home",
        type: "button",
        href: "/",
    },
    {
        title: "program",
        type: "dropdown",
        options: [
            {
                title: "mater's degree",
                href: "/program/master-degree",
            },
            {
                title: "PHD",
                href: "/program/phd",
            },
        ],
    },
    {
        title: "courses",
        type: "dropdown",
        options: [
            {
                title: "Master's degree Courses",
                href: "/courses/master-degree",
            },
            {
                title: "PhD's Courses",
                href: "/courses/phd",
            },
        ],
    },
    {
        title: "research",
        type: "button",
        href: "/research",
    },
    {
        title: "announcement",
        type: "button",
        href: "/announcement",
    },
    {
        title: "staff",
        type: "dropdown",
        options: [
            {
                title: "academic staff",
                href: "/staff/academic",
            },
            {
                title: "supporting staff",
                href: "/staff/support",
            },
        ],
    },
    {
        title: "about us",
        type: "button",
        href: "/about"

    },
];
