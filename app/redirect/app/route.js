import { NextRequest } from 'next/server';

const PREVIEW_BOT_REGEX = /twitterbot|facebookexternalhit|facebot|whatsapp|linkedinbot|slackbot|telegrambot|discordbot|pinterest|skypeuripreview|redditbot|embedly|applebot/i;

const TITLE = 'Anantor - Astrology App for Daily Predictions & Cosmic Compatibility';
const DESCRIPTION = 'Connect with the planets through Anantor. Get daily free astrology predictions, ask questions about your future and check compatibility with friends.';
const IMAGE = 'https://www.anantor.com/og-image.png';

function previewHtml(url) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${TITLE}</title>
<meta name="description" content="${DESCRIPTION}">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${DESCRIPTION}">
<meta property="og:url" content="${url}">
<meta property="og:site_name" content="Anantor">
<meta property="og:image" content="${IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${TITLE}">
<meta name="twitter:description" content="${DESCRIPTION}">
<meta name="twitter:image" content="${IMAGE}">
</head>
<body></body>
</html>`;
}

const IOS_REGEX = /iphone|ipad|ipod/i;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const params = Object.fromEntries(searchParams.entries());

  // 0. Link-preview crawlers get our own card instead of following the redirect to the Play Store
  if (PREVIEW_BOT_REGEX.test(request.headers.get('user-agent') || '')) {
    return new Response(previewHtml(request.url.replace(/&/g, '&amp;').replace(/"/g, '&quot;')), {
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    });
  }

  // 1. Call tracking API before redirecting
  try {
    // Extract client metadata from headers
    const userAgent = request.headers.get('user-agent') || 'unknown';
    const referrer = request.headers.get('referer') || 'direct';
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

    const trackingPayload = {
      ...params,
      user_agent: userAgent,
      referer: referrer,
      ip: ip,
    };

    // We use a timeout to ensure tracking doesn't hang the redirect indefinitely
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    await fetch('https://api.anantor.com/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackingPayload),
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
  } catch (error) {
    console.error('Tracking error:', error);
    // We continue with the redirect even if tracking fails to ensure user experience
  }

  // 2. The app is Android-only, so iOS users are sent to a message page instead of the Play Store
  if (IOS_REGEX.test(request.headers.get('user-agent') || '')) {
    return Response.redirect(new URL('/android-only', request.url).toString(), 302);
  }

  // 3. Construct the Play Store URL with all original query parameters
  const playStoreUrl = new URL('https://play.google.com/store/apps/details');
  playStoreUrl.searchParams.set('id', 'com.yourcompany.anantor');
  
  searchParams.forEach((value, key) => {
    // Append all params, but avoid duplicating 'id' if it was already in the source URL
    if (key !== 'id') {
      playStoreUrl.searchParams.append(key, value);
    }
  });

  // 4. Perform the redirect
  return Response.redirect(playStoreUrl.toString(), 302);
}
