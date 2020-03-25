const baseUrl = 'https://qiita.com/api/v2';

const headers = {
  Authorization: `Bearer ${process.env.REACT_APP_QIITA_ACCESS_TOKEN}`,
  'Content-Type': 'application/json',
};

const itemId = '7c780fc2e98952562fe4';

export async function getComments() {
  const res = await fetch(`${baseUrl}/items/${itemId}/comments`, { headers });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}

export async function postComment({ comment }) {
  const res = await fetch(`${baseUrl}/items/${itemId}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ body: comment }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message);
  return json;
}
