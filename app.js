class ApiError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}

async function fetchWithRetry(url, retries = 3) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new ApiError(`HTTP error: ${response.status}`, response.status);
      }
      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) throw error; // don't retry
      if (i === retries - 1) throw error; // max retries exceeded
      await delay(1000 * Math.pow(2, i));
    }
  }
}