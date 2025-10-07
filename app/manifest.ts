import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Harmony - Work-Life Harmony Planner',
    short_name: 'Harmony',
    description: 'AI planner that helps you define your mission, plan weeks around your roles, and stay on track daily',
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