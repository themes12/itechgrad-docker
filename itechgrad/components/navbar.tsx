"use client";
import { useState, useReducer } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Switch,
    Listbox,
    ListboxItem,
} from "@nextui-org/react";
import {
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { navItems } from "@/utils/navbar";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from '../navigation';
import { useParams } from "next/navigation";

type Props = {programId?: number, planId?: number};

const NavbarHeader = ({ programId, planId }: Props) => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();
    const params = useParams();

    const [localeSwitch, setLocaleSwitch] = useState(locale === "th");
    const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

    return (
        <>
            <Navbar
                position="static"
                className="md:py-5"
                maxWidth="xl"
                aria-label="navbar"
                height="3.5rem"
                isMenuOpen={isMenuOpen}
                onMenuOpenChange={setIsMenuOpen}
            >
                <NavbarContent
                    className="gap-4 w-full md:w-fit"
                    justify="center"
                >
                    <NavbarMenuToggle
                        className="md:hidden"
                    />
                    <NavbarBrand className="justify-center text-black" as={Link} href="/">
                        <Image
                            className="hidden xxxs:block w-14 h-14 md:w-20 md:h-20"
                            src="/logo.svg"
                            alt="Logo CSCMU"
                            width="100"
                            height="100"
                        />
                        <h2 className="font-semibold text-base md:text-xl">
                            Computer Science CMU
                        </h2>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden xxs:flex" justify="end">
                    <Switch
                        classNames={{
                            wrapper:
                                "w-16 h-8 mr-2 bg-[#262626] group-data-[selected=true]:bg-[#262626]",
                            thumb: [
                                "w-8 h-6 text-xs font-semibold",
                                "group-data-[selected=true]:ml-6",
                            ],
                            startContent:
                                "ml-0.5 text-xs font-semibold text-[#BCBCBC]",
                            endContent:
                                "mr-0.5 text-xs font-semibold text-[#BCBCBC]",
                        }}
                        isSelected={localeSwitch}
                        thumbIcon={({ isSelected, className }) =>
                            isSelected ? (
                                <span className="text-[#E8A721]">TH</span>
                            ) : (
                                <span className="text-[#E8A721]">EN</span>
                            )
                        }
                        onValueChange={(value) => {
                            setLocaleSwitch((prev) => !prev);
                            if(programId && planId) {
                                router.replace(`/program/${params.degree}/${programId}/${planId}`, { locale: value ? "th" : "en" });
                            }else {
                                router.replace(pathname, { locale: value ? "th" : "en" });
                            }
                        }}
                        size="lg"
                        color="default"
                        startContent={<span>EN</span>}
                        endContent={<span>TH</span>}
                    ></Switch>
                </NavbarContent>
                <NavbarMenu className="uppercase bg-[#F4F4F4] gap-0">
                    {navItems.map((item, index) =>
                        item.type === "dropdown" ? (
                            <NavbarMenuItem
                                className="text-primary"
                                key={item.title}
                            >
                                <h4 className="text-black">{item.title}</h4>
                                <Listbox
                                    aria-label={`${item.title} list`}
                                    color="primary"
                                    variant="flat"
                                >
                                    {item.options ? (
                                        item.options.map((value, index) => (
                                            <ListboxItem
                                                className="p-1"
                                                key={value.title}
                                                onPress={() => {
                                                    router.replace(
                                                        value.href ?? "#",
                                                        {
                                                            locale: localeSwitch
                                                                ? "th"
                                                                : "en",
                                                        }
                                                    )
                                                    setIsMenuOpen()
                                                }}
                                            >
                                                {value.title}
                                            </ListboxItem>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </Listbox>
                            </NavbarMenuItem>
                        ) : (
                            <NavbarMenuItem key={item.title}>
                                <Link
                                    className="w-full text-black"
                                    href={item.href ?? "#"}
                                    size="lg"
                                    onPress={() => setIsMenuOpen()}
                                >
                                    {item.title}
                                </Link>
                            </NavbarMenuItem>
                        )
                    )}
                    <Switch
                        className="block xxs:hidden"
                        classNames={{
                            wrapper:
                                "w-16 h-8 mr-2 bg-[#262626] group-data-[selected=true]:bg-[#262626]",
                            thumb: [
                                "w-8 h-6 text-xs font-semibold",
                                "group-data-[selected=true]:ml-6",
                            ],
                            startContent:
                                "ml-0.5 text-xs font-semibold text-[#BCBCBC]",
                            endContent:
                                "mr-0.5 text-xs font-semibold text-[#BCBCBC]",
                        }}
                        isSelected={localeSwitch}
                        thumbIcon={({ isSelected, className }) =>
                            isSelected ? (
                                <span className="text-[#E8A721]">TH</span>
                            ) : (
                                <span className="text-[#E8A721]">EN</span>
                            )
                        }
                        onValueChange={(value) => {
                            setLocaleSwitch((prev) => !prev);
                            if(programId && planId) {
                                router.replace(`/program/${params.degree}/${programId}/${planId}`, { locale: value ? "th" : "en" });
                            }else {
                                router.replace(pathname, { locale: value ? "th" : "en" });
                            }
                        }}
                        size="lg"
                        color="default"
                        startContent={<span>EN</span>}
                        endContent={<span>TH</span>}
                    ></Switch>
                </NavbarMenu>
            </Navbar >
            <Navbar
                position="static"
                className="hidden md:flex bg-[#F4F4F4] py-2"
                height="2.5rem"
                maxWidth="xl"
                aria-label="navbar"
            >
                <NavbarContent className="hidden md:flex gap-0 px-3">
                    {navItems.map((item, index) =>
                        item.type === "dropdown" ? (
                            <Dropdown key={item.title}>
                                <NavbarItem>
                                    <DropdownTrigger>
                                        <Button
                                            // disableRipple
                                            className="px-2 py-0.5 bg-transparent data-[hover=true]:bg-[#e8e8e8] text-sm font-medium uppercase"
                                            endContent={
                                                <ChevronDownIcon className="w-5 h-5" />
                                            }
                                            radius="sm"
                                            variant="light"
                                        >
                                            {item.title}
                                        </Button>
                                    </DropdownTrigger>
                                </NavbarItem>
                                <DropdownMenu
                                    className="w-full"
                                    itemClasses={{
                                        base: "gap-4",
                                    }}
                                >
                                    {item.options ? (
                                        item.options?.map((value, index) => (
                                            <DropdownItem
                                                className="capitalize"
                                                key={value.title}
                                                aria-label={value.title}
                                                onPress={() => router.replace(
                                                    value.href ?? "#",
                                                    {
                                                        locale: localeSwitch
                                                            ? "th"
                                                            : "en",
                                                    }
                                                )}
                                            >
                                                {value.title}
                                            </DropdownItem>
                                        ))
                                    ) : (
                                        <></>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <NavbarItem key={item.title}>
                                <Link
                                    className="text-sm font-medium uppercase"
                                    color="foreground"
                                    href={item.href ?? "#"}
                                    aria-label={item.title}
                                >
                                    <Button
                                        className="px-2 py-0.5 bg-transparent data-[hover=true]:bg-[#e8e8e8] text-sm font-medium uppercase"
                                        radius="sm"
                                        variant="light"
                                    >
                                        {item.title}
                                    </Button>
                                </Link>
                            </NavbarItem>
                        )
                    )}
                </NavbarContent>
            </Navbar>
        </>
    );
};

export default NavbarHeader;
