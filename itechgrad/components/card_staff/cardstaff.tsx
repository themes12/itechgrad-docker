"use client";
import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Chip,
    Button,
    Image,
} from "@nextui-org/react";
import { Staff, JobType } from "@/types/staff";
import Link from "next/link";
import ImageNext from "next/image";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";

export const CardStaff = ({
    type,
    staff,
}: {
    type: JobType;
    staff: Staff;
}) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const enableButton = () => {
        setIsButtonDisabled(false);
    };

    return (
        <div>
            <div className="container mx-auto py-8 px-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center md:justify-items-start">
                    <Image
                    className="rounded-lg"
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}${staff.attributes.picture.data?.attributes.formats.small?.url}`}
                    alt={staff.attributes.name}
                    />

                    <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
                        <div className="">
                            <h6 className="text-xl font-bold">
                                {type === "academic" ? staff.attributes.affiliation : ""} {staff.attributes.title}
                                {staff.attributes.name}
                            </h6>
                            <h6 className="text-xl font-bold">
                                {type === "academic" ? staff.attributes.e_affiliation : ""} {staff.attributes.e_title}{" "}
                                {staff.attributes.e_name}
                            </h6>
                        </div>
                        <div>
                            {staff.attributes.position && staff.attributes.position.map((value, index) => {
                                return (
                                    <p key={index} className="text-lg">
                                        {value.name}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="flex flex-wrap gap-x-2 gap-y-2 justify-center md:justify-start">
                            {type === "academic" ? (
                                staff.attributes.research_interest.map((value, index) =>
                                    <button
                                        onClick={enableButton}
                                        disabled={isButtonDisabled}
                                        key={index}
                                        color="primary"
                                        className="text-[#0E80E9] text-sm gap-8 bg-[#E7F6FD] rounded-2xl px-2 py-2  "
                                    >
                                        {value.name}
                                    </button>
                                )
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-4">
                                <div>
                                    <Image alt="Phone" src="/Phone.svg" radius="none" />
                                </div>
                                {staff.attributes.telephone && staff.attributes.telephone.map((value, index) => (
                                    <div key={index}>{value.number.toString()} with {value.extension}</div>
                                ))}
                            </div>
                            <div className="flex flex-row gap-4 overflow-auto">
                                <div>
                                    <Image alt="Mail" src="/Mail.svg" />
                                </div>
                                {staff.attributes.email && staff.attributes.email.map((value, index) => (
                                    <div key={index}>{value.email}</div>
                                ))}
                            </div>
                        </div>
                        <div>
                            {type === "academic" && staff.attributes.personal_web ? (
                                <Button
                                    as={Link}
                                    href={staff.attributes.personal_web}
                                    target={"_blank"}
                                    className="transition ease-in-out delay-150 hover:translate-x-1 duration-300 
                                    bg-[#0E80E9] text-white text-[15px]"
                                    radius="full"
                                    endContent={
                                        <ArrowRightIcon className="h-4 w-4 text-white" />
                                    }
                                >
                                    Personal Website
                                </Button>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
