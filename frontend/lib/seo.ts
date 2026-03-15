const STATE_MAP: Record<string, string> = {
  california: "CA",
  texas: "TX",
  florida: "FL",
  "new-york": "NY"
};

export function parseSeoSlug(slug: string) {
  if (slug.startsWith("scholarships-in-")) {
    const place = slug.replace("scholarships-in-", "");
    return {
      title: `Scholarships in ${place.replace(/-/g, " ")}`,
      state: STATE_MAP[place],
      q: place.replace(/-/g, " ")
    };
  }

  const topic = slug.replace("scholarships-for-", "").replace(/-/g, " ");
  const major = topic.includes("computer science") ? "computer science" : undefined;

  return {
    title: `Scholarships for ${topic}`,
    major,
    q: topic
  };
}