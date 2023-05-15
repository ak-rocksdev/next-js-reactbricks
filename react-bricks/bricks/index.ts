import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import MyCustomHero from './custom/MyCustomHero'
import reactBricksUITheme from './react-bricks-ui'

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
    themeName: 'My Custom Hero',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [MyCustomHero],
      },
    ],
  },
]

export default bricks
