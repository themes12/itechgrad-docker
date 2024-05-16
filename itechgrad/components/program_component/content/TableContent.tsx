import Section from '@/components/section'
import { TableContentType } from '@/types/content'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import { Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from "remark-breaks";

type Props = { content: TableContentType }

function Icon({ open }: { open: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${open ? "" : "rotate-180"} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const TableContent = ({ content }: Props) => {
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen((prev) => !prev);
    
    const findMaxColumn = () => {
        let maxColumn = 0;
        for (const value of content.rows) {
            if (value.columns.length > maxColumn) {
                maxColumn = value.columns.length;
            }
        }
        return maxColumn;
    }

    const createHeader = () => {
        const max = findMaxColumn();
        return new Array(max).fill(0).map((_, index) => (
            <TableColumn key={index}>{index + 1}</TableColumn>
        ));
    }

    return (
        <Section>
            {
                content.name ? <Accordion open={open} icon={<Icon open={open} />} className="my-2.5">
                    <AccordionHeader
                        onClick={handleOpen}
                        className="bg-[#AFDEF9] h-11 px-5 rounded-md text-xl font-semibold"
                    >
                        <span className="truncate">{content.name}</span>
                    </AccordionHeader>
                    <AccordionBody className="my-3 px-4 py-0 text-[#262626] font-medium">
                        <Table removeWrapper classNames={{
                            "th": `${content.header === null ? 'text-left align-top': 'text-center'} text-sm`,
                            "td": `${content.header === null ? 'text-left align-top': 'text-center'}`,
                            "tbody": "divide-y-1 border-b"
                        }}
                        hideHeader={content.header === null}
                        >
                            {
                             content.header ? <TableHeader>
                                    {content.header.columns.map((value) => <TableColumn key={value.id}>{value.content}</TableColumn>)}
                                </TableHeader> : <TableHeader>
                                    {createHeader()}
                                </TableHeader>
                            }
                            <TableBody>
                                {content.rows.map((row) => <TableRow key={row.id}>
                                    {row.columns.map((column) => <TableCell key={column.id}>
                                            <ReactMarkdown remarkPlugins={[remarkBreaks]} components={{ "a": (props) => <Link href={props.href} showAnchorIcon size="sm" underline="hover" isExternal>{props.children?.toString()}</Link> }}>{column.content?.replace(/\n/gi, "&nbsp; \n")}</ReactMarkdown>
                                        </TableCell>
                                    )}
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </AccordionBody>
                </Accordion> : <Table removeWrapper classNames={{
                    "th": `${content.header === null ? 'text-left align-top': 'text-center'} text-sm`,
                    "td": `${content.header === null ? 'text-left align-top': 'text-center'}`,
                    "tbody": "divide-y-1 border-b"
                }}
                hideHeader={content.header === null}
                >
                    {
                        content.header ? <TableHeader>
                            {content.header.columns.map((value) => <TableColumn key={value.id}>{value.content}</TableColumn>)}
                        </TableHeader> : <TableHeader>
                            {createHeader()}
                        </TableHeader>
                    }
                    <TableBody>
                        {content.rows.map((row) => <TableRow key={row.id}>
                            {row.columns.map((column) => <TableCell key={column.id}>
                                    <ReactMarkdown remarkPlugins={[remarkBreaks]} components={{ "a": (props) => <Link href={props.href} showAnchorIcon size="sm" underline="hover" isExternal>{props.children?.toString()}</Link> }}>{column.content?.replace(/\n/gi, "&nbsp; \n")}</ReactMarkdown>
                                </TableCell>
                            )}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            }
        </Section>
    )
}

export default TableContent