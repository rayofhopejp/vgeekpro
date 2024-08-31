import Image from "next/image";

export default function FullBodyImage({memberId, alt, variation, width, height}: { memberId: string, alt: string, variation?: string, width?: number, height?: number }) {
  return (
    <Image
      src={`/others/members/${memberId}/full_body${variation != undefined ? `_variation_${variation}` : ""}.webp`}
      alt={alt}
      className="object-contain mt-10 xl:mt-40 mx-auto"
      width={width ?? 300}
      height={height ?? 600}
      priority
    />
  );
}
