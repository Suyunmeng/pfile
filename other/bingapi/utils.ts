export function parseQueryParams(searchParams: URLSearchParams): QueryParams {
  return {
    rand: searchParams.has("rand") ? searchParams.get("rand") === "true" : true,
    day: searchParams.has("day") ? parseInt(searchParams.get("day") || "0", 10) : 0,
    size: searchParams.get("size") || "1920x1080",
    info: searchParams.has("info") ? searchParams.get("info") === "true" : false,
    cn: searchParams.has("cn") ? searchParams.get("cn") === "true" : false,
  };
}
