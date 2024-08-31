import Image from "next/image";

type UpperBodyImageAttributes = {
  memberId: string,
  alt: string,
  variation?: string,
  width?: number,
  height?: number
  replaceClass?: string,
  isDisableMarginTopExpand?: boolean,
}

export default function UpperBodyImage({memberId, alt, variation, width, height, replaceClass, isDisableMarginTopExpand}: UpperBodyImageAttributes) {
  return (
    <Image
      src={`/others/members/${memberId}/upper_body${variation != undefined ? `_variation_${variation}` : ""}.webp`}
      alt={alt}
      className={replaceClass ?? (`object-contain mt-10 ${(isDisableMarginTopExpand ?? false) ? "" : "xl:mt-40 "}mx-auto`)}
      width={width ?? 200}
      height={height ?? 200}
      priority
    />
  );
}
