

// /api/proxy/[...slug].ts
export default async function handler(req: any, res: any) {
  const { slug = [] } = req.query;
  const targetUrl = `http://52.74.26.144:8008/${slug.join("/")}`;

  const response = await fetch(targetUrl, {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      ...req.headers,
    },
    body: req.method !== "GET" ? JSON.stringify(req.body) : undefined,
  });

  const data = await response.json();
  res.status(response.status).json(data);
}

