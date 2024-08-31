import Link from "next/link";
import UpperBodyImage from "@/components/UpperBodyImage";

type MemberCardAttributes = {
  name: string,
  yomi: string,
  profileId: string,
  imageId: string,
  imageAlt: string,
}

export default function MemberCard({name, yomi, profileId, imageId, imageAlt}: MemberCardAttributes) {
  return (
    <section className="items-center">
      <UpperBodyImage memberId={imageId} alt={imageAlt} isDisableMarginTopExpand={true}/>
      <div className="mb-28 leading-loose text-black">
        <p className="font-slogan text-center text-3xl xl:text-5xl">{name}</p>
        <p className="font-slogan text-center mb-14">{yomi}</p>
        <div className="flex flex-col">
          <Link className="self-stretch rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4 text-center" href={`/talents/${profileId}`} rel="noopener noreferrer">
            紹介ページへ
          </Link>
        </div>
      </div>
    </section>
  )
}
