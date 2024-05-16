import React from 'react'
import Section from '../section'
import { Plan } from '@/types/plans'
import { Degree } from '@/types/degree'
import { Divider, Tab, Tabs } from '@nextui-org/react'
import BlueSectionText from '../general/blue_section_text'
import { ContentType, HeaderTextContentType, TableContentType } from '@/types/content'
import HeaderTextContent from './content/HeaderTextContent'
import TableContent from './content/TableContent'

type Props = { plan: Plan, degreeData: Degree }

const PlanDetail = ({ plan, degreeData }: Props) => {
    return (
        <Section className="pt-4 md:pt-8 lg:pt-10 md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-9 lg:px-9 py-8 shadow-lg">
            <div>
                <h2 className="text-[#0E80E9] text-lg font-bold">
                    {plan.attributes.name}
                </h2>
                <div>
                    <h2 className="text-black text-lg font-bold">
                        Name of the degree 
                    </h2>
                    <div>
                        <h3><span className="text-base font-semibold text-black">Full : </span><span className="text-base font-normal text-black">{degreeData.attributes.full_name}</span></h3>
                        <h3><span className="text-base font-semibold text-black">Abbreviation : </span><span className="text-base font-normal text-black">{degreeData.attributes.abbreviation}</span></h3>
                    </div>
                </div>
            </div>
            {plan.attributes.sections &&
                <Section className="mt-8">
                    <Tabs variant="light" items={plan.attributes.sections.data} className="w-full" 
                        classNames={{
                            "base": "border-b",
                            "cursor": "bg-gray-200 shadow-none",
                            "tabContent": "font-medium",
                            "panel": "pt-0"
                        }}
                        defaultSelectedKey="0"
                    >
                        {(item) => (
                            item.attributes.link ? <Tab key={item.id} title={item.attributes.name} href={item.attributes.link} target="_blank">
                                <Section className="mt-7">
                                    <BlueSectionText text={item.attributes.name} />
                                    <div className="mt-6">
                                    {
                                        item.attributes.content?.map((item, index) => {
                                            if(item.__component === ContentType.HeaderTextContent){
                                                return <HeaderTextContent key={item.id} content={item as HeaderTextContentType} />
                                            } else if (item.__component === ContentType.TableContent) {
                                                return <TableContent key={item.id} content={item as TableContentType} />
                                            }
                                        }) 
                                    }
                                    </div>
                                </Section>
                            </Tab> : <Tab key={item.id} title={item.attributes.name}>
                                <Section className="mt-7">
                                    <BlueSectionText text={item.attributes.name} />
                                    <div className="mt-6">
                                    {
                                        item.attributes.content?.map((item, index) => {
                                            if(item.__component === ContentType.HeaderTextContent){
                                                return <HeaderTextContent key={item.id} content={item as HeaderTextContentType} />
                                            } else if (item.__component === ContentType.TableContent) {
                                                return <TableContent key={item.id} content={item as TableContentType} />
                                            }
                                        }) 
                                    }
                                    </div>
                                </Section>
                            </Tab> 
                        )}
                    </Tabs>
                </Section>
            }
        </Section>
    )
}

export default PlanDetail