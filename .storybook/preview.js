import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  viewport: { viewports: INITIAL_VIEWPORTS },
  docs: {
    transformSource: (src) => {
      const match = /^\(\) => [`'"](.*)['`"]$/sm.exec(src);
      return match ? match[1] : src;
    }
  }
}