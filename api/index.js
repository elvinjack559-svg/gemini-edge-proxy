export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const url = new URL(req.url);
  url.host = "generativelanguage.googleapis.com";
  return fetch(new Request(url, req));
}
