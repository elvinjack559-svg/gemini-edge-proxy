export const config = { runtime: 'edge' }; // 强制开启边缘模式，不限时
export default async function handler(req) {
  const url = new URL(req.url);
  url.host = "generativelanguage.googleapis.com";
  return fetch(new Request(url, req));
}
