import { Table_courses } from "@/components/course_components/table_course";
import Courses_navbar from "@/components/course_components/courses_navbar";
import Strapi, { PaginationByPage } from "strapi-sdk-js";
import { Degree } from "@/types/degree";
import { useLocale } from "next-intl";
import { Course } from "@/types/course";
import { PaginationAttributes } from "@/types/pagination";

type Props = { params: { degree: string }; searchParams?: { [key: string]: string | string[] | undefined }; };
const strapi = new Strapi({url: process.env.NEXT_PUBLIC_BASE_URL})

const Courses = async ({ params, searchParams }: Props) => {
    const { degree } = params;
    const locale = useLocale();
    const page = parseInt(searchParams?.page as string ?? "1");

    const degreeData = await strapi.findOne<Degree>("degrees", `${degree}?locale=${locale}`, {
        fields: ['full_name', 'abbreviation', 'title', 'sub_title', 'general_name'],
    });

    const courses = await strapi.find<Course[]>(`courses`, {
        filters: {
            degree: {
                slug: degree,
            },
        },
        populate: [
            "credit",
            "degree",
        ],
        pagination: {
            page: page,
            pageSize: 10,
            withCount: true
          } as PaginationByPage,
    });
    const meta = courses.meta["pagination"] as PaginationAttributes;
    
    return (
        <section className="bg-gradient-to-r from-[#d1e0d8] to-[#76b9cd] py-12">
            <header className="pt-4 md:pt-8 lg:pt-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9">
                <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl">{degreeData.data.attributes.general_name} Courses</h2>
                <div className="pt-20">
                    <div
                        className="flex flex-col relative overflow-hidden text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2
             shadow-small rounded-large transition-transform-background motion-reduce:transition-none border-none bg-white w-full 
             lg:w-auto p-2"
                    >
                        <div className="flex-grow overflow-y-auto">
                            <Courses_navbar />
                            <div className="p-8">
                                <Table_courses
                                    courses={courses.data}
                                    meta={meta}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Courses;
