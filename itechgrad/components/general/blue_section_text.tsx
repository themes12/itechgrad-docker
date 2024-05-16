import React from 'react'

type Props = {text: string}

const BlueSectionText = ({ text }: Props) => {
  return (
    <div className="bg-[#3E99ED] py-1.5 px-5 rounded-3xl w-fit">
      <h2 className="text-2xl font-semibold text-white">{text}</h2>
    </div>
  )
}

export default BlueSectionText