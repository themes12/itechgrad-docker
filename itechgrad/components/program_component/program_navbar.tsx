"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { TabMenu } from "primereact/tabmenu";
import { Program } from "@/types/program";

function ProgramNavbar({
    data,
    setSelectedProgram,
    selectedProgram
}: {
    data: Program[];
    setSelectedProgram: React.Dispatch<React.SetStateAction<number>>;
    selectedProgram: number;
}) {
    
    const items = data.map(
        (value,index) => {
            return {
                label: value.attributes.name,
                template: (options: any) => 
                    <Button
                        onClick={() => setSelectedProgram(index)}
                        key={index}
                        className="xxs:text-base font-medium rounded-md text-sm"
                        variant="light"
                    >
                        {options.label}
                    </Button>
            }
        }
    )

    return (
        <div>
            <TabMenu
                model={items}
                activeIndex={selectedProgram}
                onTabChange={(e) => setSelectedProgram(e.index)}
            />
            <div
                style={{
                    width: "100%",
                    height: "0.0625rem",
                    margin: "0.1rem",
                    backgroundColor: "#ccc",
                    display: "block",
                }}
            />
        </div>
    );
}

export default ProgramNavbar;
