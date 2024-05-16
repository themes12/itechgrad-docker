"use client"
import React from 'react'
import { Spinner } from "@nextui-org/react";
type Props = {}

const Loading = (props: Props) => {
    return (
        <div className="my-8 flex justify-center mx-auto"><Spinner label="Loading..." color="primary" /></div>
    )
}

export default Loading