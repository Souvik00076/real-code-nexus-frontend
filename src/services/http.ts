type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

interface HttpRequestOptions {
  method: HttpMethod;
  url: string;
  queryParams?: Record<string, string | number | boolean | undefined>;
  body?: any;
  headers?: HeadersInit;
}

export async function generateHttpRequest<T>(options: HttpRequestOptions): Promise<T> {
  const { method, url, queryParams, body, headers } = options;
  const queryString = queryParams
    ? '?' + new URLSearchParams(
      Object.entries(queryParams)
        .filter(([_, value]) => value !== undefined)
        .map(([key, value]) => [key, String(value)])
    ).toString()
    : '';
  const fullUrl = url + queryString;

  const response = await fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: method !== 'GET' && body ? JSON.stringify(body) : undefined
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
  }

  return response.json() as Promise<T>;
}
