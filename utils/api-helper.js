export function getHost(ctx) {
  if (ctx.req) return "http://" + ctx.req.headers.host
  return location.origin
}

export const fetcher = (url) => fetch(url).then((res) => res.json())
