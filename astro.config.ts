import i18n from '@astrolicious/i18n'
import playformCompress from '@playform/compress'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://uxanarangel.com',
  image: {
    domains: ['media.licdn.com', 'avatars.githubusercontent.com']
  },
  vite: {
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true
        }
      }
    },
    build: {
      cssMinify: 'lightningcss'
    }
  },
  integrations: [
    i18n({
      defaultLocale: 'es',
      locales: ['es', 'en'],
      pages: {
        '/sobre-mi': {
          en: '/about-me'
        },
        '/eventos': {
          en: '/events'
        }
      }
    }),
    playformCompress({
      HTML: true,
      JavaScript: true,
      CSS: false,
      Image: false,
      SVG: true
    })
  ]
})
