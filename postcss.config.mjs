import OpenProps from 'open-props'
import postcssCustomMedia from 'postcss-custom-media'
import postcssJitProps from 'postcss-jit-props'

export default {
  syntax: 'postcss-scss',
  plugins: {
    'postcss-html': {},
    autoprefixer: {},
    'postcss-jit-props': postcssJitProps(OpenProps),
    'postcss-custom-media': postcssCustomMedia()
  }
}
