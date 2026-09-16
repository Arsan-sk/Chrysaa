export function GET() {
  return new Response('google-site-verification: google82ea3315fdd0abe5.html\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
