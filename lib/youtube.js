// expects these URLs:
//   * https://www.youtube.com/watch?v=mknMioJ1hMk
//   * https://www.youtube.com/watch?v=mknMioJ1hMk&t=310s
export function parseYouTubeUrl(url) {
  const u = new URL(url);
  const params = u.searchParams;

  const t = params.get("t");
  const start = t ? parseInt(t) : 0;

  return {
    videoId: params.get("v"),
    start,
  };
}

export function buildYouTubeEmbedUrl({ videoId, start }) {
  return `https://www.youtube.com/embed/${videoId}?start=${start}`;
}
