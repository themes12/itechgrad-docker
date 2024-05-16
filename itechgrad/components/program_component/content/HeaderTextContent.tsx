import { HeaderTextContentType } from '@/types/content'
import { Divider } from "@nextui-org/react";

type Props = {content: HeaderTextContentType}

const HeaderTextContent = ({content}: Props) => {
  return (
    <>
      <div className="w-full inline-flex justify-between items-center text-[#063662] text-lg font-semibold">
        <p>{content.name}</p>
        <p>{content.text}</p>
      </div>
      <Divider className="my-1" />
    </>
  )
}

export default HeaderTextContent