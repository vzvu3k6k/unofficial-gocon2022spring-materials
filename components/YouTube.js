import { parseYouTubeUrl, buildYouTubeEmbedUrl } from "../lib/youtube";

export function YouTube({ url }) {
  const { videoId, start } = parseYouTubeUrl(url);
  const embedUrl = buildYouTubeEmbedUrl({ videoId, start });
  return (
    <iframe
      width="560"
      height="315"
      src={embedUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
