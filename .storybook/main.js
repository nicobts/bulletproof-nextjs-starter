/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  parameters: {
    backgrounds: { default: 'light' },
  },
}
export default config
