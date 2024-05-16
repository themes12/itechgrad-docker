import React from 'react'
import Strapi, { StrapiLocale, PaginationByPage } from 'strapi-sdk-js';
import AnnoucementMain from '@/components/announcement_component/announcement_main';
import { Posts, Post } from '@/types/posts';
import { PaginationAttributes } from '@/types/pagination';
import {unstable_setRequestLocale} from 'next-intl/server';
const strapi = new Strapi({url: process.env.NEXT_PUBLIC_BASE_URL})

const Page = async ({
  searchParams,
  params
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
  params: { locale: string };
}) => {
  unstable_setRequestLocale(params.locale);
  const searchParamsFilters = searchParams?.filters as string;
  const filters = searchParamsFilters?.split(',');
  const page = parseInt(searchParams?.page as string ?? "1");

  const notNullParams = {
    filters: {
      category: filters
    },
    populate: "*",
    locale: params.locale as StrapiLocale,
    pagination: {
      page: page,
      pageSize: 10,
      withCount: true
    } as PaginationByPage,
    sort: 'publishedAt:desc',
  };

  const nullParams = {
    populate: "*",
    locale: params.locale as StrapiLocale,
    pagination: {
      page: page,
      pageSize: 10,
      withCount: true
    } as PaginationByPage,
    sort: 'publishedAt:desc',
  };

  const announcements = await strapi.find<Post[]>('announcements', filters?.[0] !== "" && filters?.[0] !== "all" ? notNullParams : nullParams);
  const meta = announcements.meta["pagination"] as PaginationAttributes;
  return (
    <div>
      <section className="py-4 md:py-8 lg:py-10 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-9 lg:px-9 relative">
        <AnnoucementMain announcements={announcements.data} meta={meta} />
      </section>
    </div>

  );
}

export default Page