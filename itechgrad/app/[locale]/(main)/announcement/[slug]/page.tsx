"use client"
import React from 'react'
import BackButton from '@/components/announcement_component/back_button';
import AnnounceHeadline from '@/components/announcement_component/announce_headline';
import ImgHeadline from '@/components/announcement_component/img_headline';
import Detail from '@/components/announcement_component/detail';
import ImgTemplate from '@/components/announcement_component/img_template';
import {
  Divider
} from "@nextui-org/react";
import Strapi from 'strapi-sdk-js';
import { Post } from '@/types/posts';
const strapi = new Strapi({url: process.env.NEXT_PUBLIC_BASE_URL})

type Props = {}

const page = async ({ params }: { params: { slug: string } }) => {
  const post = await strapi.findOne<Post>('announcements', params.slug, {
    populate: "*"
  });
  return (
    <div className='bg-[#FFF] mb-20'>
      <div className='bg-[#262626]'>
        <div className='bg-[#262626]'>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
              <div>
                  <BackButton />
              </div>
              <Divider className="mt-3 mb-5 bg-[#515151]"/>
          </div>
        </div>
        <div className='bg-[#262626]'>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
              <AnnounceHeadline category={post.data.attributes.category} headline={post.data.attributes.title} date={post.data.attributes.publishedAt} />
          </div>
        </div>
        <div className="relative" style={{background: 'linear-gradient(to bottom, #262626 80%, #FFF 20%)'}}>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 ">
            <ImgHeadline img_url={post.data.attributes.featured_image.data?.attributes.formats.medium?.url} />
          </div>
        </div>
      </div>

      <div className='bg-[#FFF]'>
        <div className='bg-[#FFF]'>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 text-balance break-words">
              <Detail content={post.data.attributes.content} />
          </div>
        </div>
        { post.data.attributes.other_images !== undefined ? <div className='bg-[#FFF]'>
          <div className="py-3 md:py-4 lg:py-3 md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-8 lg:px-8 text-balance break-words">
              <ImgTemplate other_images={post.data.attributes.other_images} />
          </div>
        </div> : <></> }
      </div>
      
    </div>
        
  );
}
      
export default page