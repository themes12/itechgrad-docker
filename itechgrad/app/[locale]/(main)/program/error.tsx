"use client";
import { Message } from "primereact/message";
import React from "react";

type Props = {};

const Error = ({ error }: any) => {
    return <div className="my-8 flex justify-center mx-auto"><Message severity="error" text="Error!!!" /></div>;
};

export default Error;
