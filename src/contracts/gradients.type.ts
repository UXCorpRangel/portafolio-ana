const colorValues = {
  blue: 'rgba(46, 88, 255, 0.34)',
  purple: 'rgba(148, 82, 255, 0.40)',
  darkPurple: '#1E0D4F',
  darkBlue: '#061962',
  cyan: 'rgba(48, 183, 202, 0.30)',
  pink: 'rgba(248, 128, 214, 0.34)'
};

export type GradientsColors = keyof typeof colorValues;

const BASE_GRADIENT = 'radial-gradient(48.42% 48.42% at 49.41% 51.58%, COLOR_PLACEHOLDER 0%, transparent 100%)';

export const GRADIENTS_COLORS = Object.fromEntries(
  Object.entries(colorValues).map(([name, gradient]) => [name, BASE_GRADIENT.replace('COLOR_PLACEHOLDER', gradient)])
) as Record<GradientsColors, string>;
