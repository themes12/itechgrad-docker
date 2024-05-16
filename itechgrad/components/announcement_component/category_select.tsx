"use client"
import React, { useEffect, useState } from "react";
import { Announcement_card } from "@/components/announcement_component/announce_card";
import { Divider } from "@nextui-org/react";
import SelectableChip from "@/components/general/chip";
import { useTranslations } from "next-intl";
// import ShowAnnouncement from "./show_announcement";
import { useRouter } from "@/navigation";

type Props = {}

const CategorySelect = (props: Props) => {
    const [chipStates, setChipStates] = useState([
        { text: "All", isSelected: false },
        { text: "News", isSelected: false },
        { text: "Congratulations", isSelected: false },
        { text: "Events", isSelected: false },
        { text: "Courses", isSelected: false }
    ]);

    const router = useRouter();

    const handleSelect = (index: number) => {
        setChipStates(prevState => {
            if (index === 0) {
              const allSelected = !prevState[0].isSelected;
              return prevState.map((chip, i) => i === 0 ? { ...chip, isSelected: allSelected } : { ...chip, isSelected: allSelected });
            } else {
              if(prevState[0].isSelected) {
                return prevState.map((chip, i) => (i === 0 || i === index) ? { ...chip, isSelected: !chip.isSelected } : chip)
              }else {
                return prevState.map((chip, i) =>
                  i === index ? { ...chip, isSelected: !chip.isSelected } : chip
                )
              }
            }
          }
        );
      };

      useEffect(() => {
        const url = new URL(window.location.href);
        url.searchParams.set('filters', chipStates.filter((chip) => chip.isSelected).map((chip) => chip.text.toLowerCase()).join(','));
        router.push(url.toString());
        const countIsSelected = chipStates.filter((value) => value.isSelected === true).length;
        if(countIsSelected === chipStates.length-1){
          handleSelect(0);
        }
      }, [chipStates]);
  return (
    <div className="flex gap-1">{chipStates.map((chip, index) => (
        <SelectableChip
            key={index}
            text={chip.text}
            isSelected={chip.isSelected}
            handleSelect={() => handleSelect(index)}
        />
    ))}</div>
  )
}

export default CategorySelect