const FIGMA_API_BASE = 'https://api.figma.com/v1';

export async function fetchFigmaFile(fileKey, token) {
  const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return response.json();
}

export async function fetchFigmaComments(fileKey, token) {
  const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}/comments`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return response.json();
}

export async function fetchFigmaImages(fileKey, nodeIds, { format = 'png', scale = 1 }, token) {
  const params = new URLSearchParams({
    ids: nodeIds.join(','),
    format,
    scale: scale.toString(),
  });
  const response = await fetch(`${FIGMA_API_BASE}/images/${fileKey}?${params}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return response.json();
}

export async function fetchFigmaUser(token) {
  const response = await fetch(`${FIGMA_API_BASE}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return response.json();
}

export async function fetchFigmaComponents(token, teamId) {
  const response = await fetch(`${FIGMA_API_BASE}/teams/${teamId}/components`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return response.json();
}

export async function fetchFigmaStyles(token, teamId) {
  const response = await fetch(`${FIGMA_API_BASE}/teams/${teamId}/styles`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error(`Figma API error: ${response.status}`);
  return response.json();
}

export function getImageUrl(imageKey, { format = 'png', scale = 1 } = {}) {
  return `https://figma-single-store-assets.single-store.figma.com/${imageKey}`;
}