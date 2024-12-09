import type { Preview } from "@storybook/react";

import "@repo/design-system/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "hsl(0 0% 100%)",
        },
        {
          name: "dark",
          value: "hsl(0 0% 3.9%)",
        },
      ],
    },
  },
};

export default preview;
