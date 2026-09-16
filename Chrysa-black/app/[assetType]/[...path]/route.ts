import { readFile } from 'node:fs/promises'
import path from 'node:path'

const contentTypes: Record<string, string> = {
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
}

const assetRoots = new Set(['black', 'common', 'white', 'work'])

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ assetType: string; path: string[] }> },
) {
  const { assetType, path: assetPath } = await params
  if (!assetRoots.has(assetType) || assetPath.length === 0) {
    return new Response('Not found', { status: 404 })
  }

  const publicRoot = path.resolve(process.cwd(), '..', 'public')
  const requestedPath = path.resolve(publicRoot, assetType, ...assetPath)
  const allowedRoot = `${publicRoot}${path.sep}`

  if (!requestedPath.startsWith(allowedRoot)) {
    return new Response('Not found', { status: 404 })
  }

  try {
    const file = await readFile(requestedPath)
    const extension = path.extname(requestedPath).toLowerCase()

    return new Response(file, {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Type': contentTypes[extension] ?? 'application/octet-stream',
      },
    })
  } catch {
    return new Response('Not found', { status: 404 })
  }
}
