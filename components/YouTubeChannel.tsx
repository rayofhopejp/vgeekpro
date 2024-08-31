export default function YouTubeChannel({channelId, handle, customLink, userId}: { channelId?: string, handle?: string, customLink?: string, userId?: string }) {
  if (channelId !== undefined) {
    return (
      <a className="self-stretch flex shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href={`https://www.youtube.com/channel/${channelId}`} target="_blank" rel="noopener noreferrer">
        YouTube
      </a>
    );
  } else if (handle !== undefined) {
    return (
      <a className="self-stretch flex shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href={`https://www.youtube.com/@${handle}`} target="_blank" rel="noopener noreferrer">
        YouTube
      </a>
    );
  } else if (customLink !== undefined) {
    return (
      <a className="self-stretch flex shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href={`https://www.youtube.com/c/${customLink}`} target="_blank" rel="noopener noreferrer">
        YouTube
      </a>
    );
  } else if (userId !== undefined) {
    return (
      <a className="self-stretch flex shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4" href={`https://www.youtube.com/user/${userId}`} target="_blank" rel="noopener noreferrer">
        YouTube
      </a>
    );
  } else {
    return (
      <a className="self-stretch flex shrink items-center rounded-full bg-rose-500 hover:bg-rose-700 text-white px-8 py-4">
        YouTube (リンク切れ)
      </a>
    );
  }
}
