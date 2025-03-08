import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

import { defineConfig } from 'astro/config'

import i18n from '@astrolicious/i18n'
import playformCompress from '@playform/compress'

const targets = browserslistToTargets(browserslist('>= 0.25%'));

// standard unit size in pixels to convert to rem
const STANDARD_UNIT_SIZE = 16

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
        targets,
        drafts: {
          customMedia: true
        },
        // @ts-expect-error - The visitor API of LightningCSS is not exposed by default
        // reference: peek definition of `LightningCSSOptions` above
        visitor: {
          // convert px to rem
          Length({ unit, value }: { unit: string, value: number }) {
            if (unit === 'px') {
              return { unit: 'rem', value: value / STANDARD_UNIT_SIZE }
            }
          }
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
        },
        '/eventos/jsconf-chile': {
          en: '/events/jsconf-chile'
        },
        '/eventos/nerdearla': {
          en: '/events/nerdearla'
        },
        '/eventos/awesome-fest': {
          en: '/events/awesome-fest'
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
