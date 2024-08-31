export default function XProfile({userId}: { userId: string }) {
  return (
    <a className="self-stretch flex shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href={`https://x.com/${userId}`} target="_blank" rel="noopener noreferrer">
      X (Twitter)
    </a>
  );
}
