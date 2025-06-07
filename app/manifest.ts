import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Harmony - AI Email Voice Assistant',
    short_name: 'Harmony',
    description: 'AI-powered voice assistant that reads and manages your Gmail emails hands-free',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/opengraph-image.png',
        sizes: '1200x630',
        type: 'image/png',
      },
    ],
  }
} 