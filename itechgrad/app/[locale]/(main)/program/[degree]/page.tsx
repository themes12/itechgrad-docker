import axios from "axios";
import Display_types from "@/components/program_component/display_types";
import { useLocale } from "next-intl";
import { Degree } from "@/types/degree";
import Strapi from "strapi-sdk-js";

type Props = { params: { degree: string } };
const strapi = new Strapi({url: process.env.NEXT_PUBLIC_BASE_URL})

const Page = async ({ params }: Props) => {
    const { degree } = params;
    const locale = useLocale();
    const programs = await strapi.findOne<Degree>("degrees", `${degree}?locale=${locale}`, {
        fields: ['full_name', 'abbreviation', 'title', 'sub_title'],
        populate: ['programs', 'programs.plans'],
    });
    return <Display_types data={programs.data} params={params} />;
};
export default Page;