import { nanoid } from 'nanoid'

export const sections = [
  {
    id: nanoid(),
    heading: 'Speisekarte',
    subheading: 'Dit hamm wa imma',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__cola.png`,
    imgALT: 'Bild von Coca-Cola',
  },
  {
    id: nanoid(),
    heading: 'Bestseller',
    subheading: 'Dit hamm wa janz jerne',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__burger.png`,
    imgALT: 'Bild von Burger',
  },
  {
    id: nanoid(),
    heading: 'Tageskarte',
    subheading: 'Dit hamm wa heude',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__pommes.png`,
    imgALT: 'Bild von Pommes',
  },
]
