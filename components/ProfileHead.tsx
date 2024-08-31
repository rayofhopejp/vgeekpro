type ProfileHeadAttributes = {
  name: string,
  yomi: string,
  catchphrase: string,
  isDisableCatchphraseBrackets?: boolean,
  children: React.ReactNode
}

export default function ProfileHead({name, yomi, catchphrase, isDisableCatchphraseBrackets, children}: ProfileHeadAttributes) {
  return (
    <div className="mb-28 leading-loose">
      <p className="font-slogan text-center text-3xl xl:text-5xl">{name}</p>
      <p className="font-slogan text-center mb-14">{yomi}</p>
      <p className="font-slogan text-center mb-14 text-xl xl:text-3xl">{`${(isDisableCatchphraseBrackets ?? false) ? "" : "「"}${catchphrase}${(isDisableCatchphraseBrackets ?? false) ? "" : "」"}`}</p>
      <p className="mb-14">{children}</p>
    </div>
  );
}
