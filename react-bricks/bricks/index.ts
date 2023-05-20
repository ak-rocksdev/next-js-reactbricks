import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import MyCustomHero from './custom/MyCustomHero'
import MyCustomFeatures from './custom/MyCustomFeatures'
import reactBricksUITheme from './react-bricks-ui'
import CustomContactUs from './custom/CustomContactUs'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Custom Theme 1',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
    ],
  },
  {
    themeName: 'My Custom',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [
          MyCustomHero,
        ],
      },
      {
        categoryName: 'Feature sections',
        bricks: [
          MyCustomFeatures
        ],
      },
      {
        categoryName: 'Contact sections',
        bricks: [
          CustomContactUs
        ],
      },
    ],
  },
]

export default bricks
