"use client"
import React, { Key } from 'react'
import Section from '../section'
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Plan, Plans } from '@/types/plans';
import { useLocale } from 'next-intl';
import { useRouter } from '@/navigation';
import PlanDetail from './plan_detail';
import { Degree } from '@/types/degree';

type Props = { plans?: Plans, planId: number, programId: number, degree: string, degreeData: Degree }

const PlanDisplay = ({ plans, planId, programId, degree, degreeData }: Props) => {
    const router = useRouter();
    const setSelected = (key: Key) => {
        router.replace(`/program/${degree}/${programId}/${key}`)
    }
    return (
        <Section>
            <Tabs className="bg-[#262626]" aria-label="Types" items={plans?.data} radius="none" fullWidth
                classNames={{
                    "tabList": "bg-[#262626] p-0 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-9 lg:px-9",
                    "tabContent": "text-white text-base font-medium group-data-[selected=true]:text-white",
                    "cursor": "bg-[#515151]",
                    "tab": "h-12",
                    "panel": "py-0"
                }}
                selectedKey={planId}
                onSelectionChange={setSelected}
            >
                {(item) => (
                    <Tab key={item.id} title={item.attributes.name}>
                        <PlanDetail plan={item} degreeData={degreeData} />
                    </Tab>
                )}
            </Tabs>
        </Section>
    )
}

export default PlanDisplay