import { useState, useEffect } from 'react';

export function useFigmaFile(fileKey, token) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fileKey || !token) return;

    const fetchFile = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/figma/files/${fileKey}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFile();
  }, [fileKey, token]);

  return { data, loading, error };
}

export function useFigmaImages(fileKey, nodeIds, options = {}, token) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fileKey || !nodeIds?.length || !token) return;

    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/figma/images/${fileKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ nodeIds, ...options }),
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [fileKey, JSON.stringify(nodeIds), JSON.stringify(options), token]);

  return { data, loading, error };
}

export function useFigmaUser(token) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('/api/figma/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  return { data, loading, error };
}