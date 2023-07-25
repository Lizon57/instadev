import React from "react"
import type { Preview } from "@storybook/react"
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { MemoryRouter } from "react-router"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: {
        instadevTiny: {
          name: 'Tiny',
          styles: {
            width: '500px',
            height: '100%'
          }
        },
        instadevSmall: {
          name: 'Small',
          styles: {
            width: '768px',
            height: '100%'
          }
        },
        instadevMedium: {
          name: 'Medium',
          styles: {
            width: '1160px',
            height: '100%'
          }
        },
        instadevLarge: {
          name: 'Large',
          styles: {
            width: '1264px',
            height: '100%'
          }
        },
        instadevWide: {
          name: 'Wide',
          styles: {
            width: '1920px',
            height: '100%'
          }
        },
        
        ...INITIAL_VIEWPORTS,
      },
    }
  },
}

export default preview


export const decorators = [
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
]