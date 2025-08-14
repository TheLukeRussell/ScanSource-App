export async function searchObjects(keyword) {
  const url = `https://api.restful-api.dev/objects?search=${encodeURIComponent(keyword)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const json = await res.json();
  return Array.isArray(json) ? json : json ? [json] : [];
}
