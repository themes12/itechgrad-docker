"use client"
import { SettingCourse } from '@/types/setting';
import { dayjsExt } from '@/utils/dayjs';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import React from 'react'

function Header() {
    const pathname = usePathname();
    const locale = useLocale();
    const arrayOfLocale = pathname.split("/");
    return (
        <div className="inline-flex bg-[#3E99ED] lg:text-xl sm:text-base xxs:text-sm text-xs font-normal pt-1.5 pb-1.5 px-20 mb-5 text-[#FFF] rounded-full">
            {
                arrayOfLocale[arrayOfLocale.length - 1] === "all" ? <>All courses</> :
                    locale === "th" ? <>Recent courses {dayjsExt().format('BBBB')}</> : <>Recent courses {dayjsExt().format('YYYY')}</>
            }
        </div>
    )
}

export default Header