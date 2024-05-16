// MyModal.js (or MyModal.tsx)
"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Course } from "@/types/course";
import { customSort, formatArray } from "@/utils/course";

export const MyModal = ({ course }: { course: Course }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const size = '4xl'
  return (
    <>
      <a className="px-3 py-2 font-normal text-gray lg:text-base md:text-base sm:text-base xs:text-sm xxs:text-xs xxxs:text-xs" onClick={onOpen}>รายละเอียด</a>
      <Modal size={size} isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} scrollBehavior="outside" placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <div className="pt-10">
                <ModalBody>
                  <Table removeWrapper hideHeader>
                    <TableHeader>
                      <TableColumn><></></TableColumn>
                      <TableColumn><></></TableColumn>
                    </TableHeader>
                    <TableBody>
                      <TableRow key="1">
                        <TableCell className="text-[#262626] font-semibold text-base">รหัสกระบวนการวิชา</TableCell>
                        <TableCell className="text-[#515151] font-normal text-base">{course.attributes.course_id}</TableCell>
                      </TableRow>
                      <TableRow key="2">
                        <TableCell className="text-[#262626] font-semibold text-base">ชื่อกระบวนการวิชา</TableCell>
                        <TableCell>
                          <div className="space-y-2 text-[#515151] font-normal text-base">
                            <p>{course.attributes.name_en}</p>
                            <p>{course.attributes.name_th}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow key="3">
                        <TableCell className="text-[#262626] font-semibold text-base">คำอธิบายลักษณะกระบวนวิชา</TableCell>
                        <TableCell>
                          <div className="space-y-2 text-[#515151] font-normal text-base">
                            <p>{course.attributes.description_en ?? '-'}</p>
                            <p>{course.attributes.description_th ?? '-'}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow key="4">
                        <TableCell className="text-[#262626] font-semibold text-base">หน่วยกิต</TableCell>
                        <TableCell className="text-[#515151] font-normal text-base">{`${course.attributes.credit.total}`}{`${course.attributes.credit.lecture === null && course.attributes.credit.lab === null && course.attributes.credit.independent_study === null ? "" : `(${course.attributes.credit?.lecture}-${course.attributes.credit?.lab}-${course.attributes.credit?.independent_study})`}`}</TableCell>
                      </TableRow>
                      <TableRow key="5">
                        <TableCell className="text-[#262626] font-semibold text-base">เงื่อนไขที่ต้องผ่านก่อนเรียน (Prerequisite)</TableCell>
                        <TableCell className="text-[#515151] font-normal text-base">{formatArray(customSort(course.attributes.prerequisite))}</TableCell>
                      </TableRow>
                      {/* <TableRow className="divide-solid divide-y-1" key="2">
                        <TableCell className="text-[#262626] font-semibold text-base">ชื่อกระบวนการวิชา</TableCell>
                        <TableCell>
                          <div className="space-y-2 text-[#515151] font-normal text-base">
                            <p>{course.attributes.name_en}</p>
                            <p>{course.attributes.name_th}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow key="3" className="divide-solid divide-y-1">
                        <TableCell className="text-[#262626] font-semibold text-base">คำอธิบายลักษณะกระบวนวิชา</TableCell>
                        <TableCell>
                          <div className="space-y-2 text-[#515151] font-normal text-base">
                            <p>{course.attributes.description_en ?? '-'}</p>
                            <p>{course.attributes.description_th ?? '-'}</p>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow key="4" className="divide-solid divide-y-1">
                        <TableCell className="text-[#262626] font-semibold text-base">หน่วยกิต</TableCell>
                        <TableCell className="text-[#515151] font-normal text-base">{`${course.attributes.credit.total}`}{`${course.attributes.credit.lecture === null && course.attributes.credit.lab === null && course.attributes.credit.independent_study === null ? "" : `(${course.attributes.credit?.lecture}-${course.attributes.credit?.lab}-${course.attributes.credit?.independent_study})`}`}</TableCell>
                      </TableRow>
                      <TableRow key="5" className="divide-solid divide-y-1">
                        <TableCell className="text-[#262626] font-semibold text-base">เงื่อนไขที่ต้องผ่านก่อนเรียน (Prerequisite)</TableCell>
                        <TableCell className="text-[#515151] font-normal text-base">{formatArray(customSort(course.attributes.prerequisite))}</TableCell>
                      </TableRow> */}
                    </TableBody>
                  </Table>
                </ModalBody>
                <ModalFooter>
                  <div className="pt-20"></div>
                </ModalFooter>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}






