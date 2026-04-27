import { NextRequest } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const params = Object.fromEntries(searchParams.entries());

  // 1. Call tracking API before redirecting
  try {
    // We use a timeout to ensure tracking doesn't hang the redirect indefinitely
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    await fetch('https://api.anantor.com/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
  } catch (error) {
    console.error('Tracking error:', error);
    // We continue with the redirect even if tracking fails to ensure user experience
  }

  // 2. Construct the Play Store URL with all original query parameters
  const playStoreUrl = new URL('https://play.google.com/store/apps/details');
  playStoreUrl.searchParams.set('id', 'com.yourcompany.anantor');
  
  searchParams.forEach((value, key) => {
    // Append all params, but avoid duplicating 'id' if it was already in the source URL
    if (key !== 'id') {
      playStoreUrl.searchParams.append(key, value);
    }
  });

  // 3. Perform the redirect
  return Response.redirect(playStoreUrl.toString(), 302);
}
