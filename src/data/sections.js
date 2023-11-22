import { nanoid } from 'nanoid'

export const sections = [
  {
    id: nanoid(),
    heading: 'Speisekarte',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__cola.png`,
    imgALT: 'Bild von Coca-Cola',
  },
  {
    id: nanoid(),
    heading: 'Bestseller',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__burger.png`,
    imgALT: 'Bild von Burger',
  },
  // {
  //   id: nanoid(),
  //   heading: 'Tageskarte',
  //   imgURL: `${import.meta.env.BASE_URL}assets/images/bg__pommes.png`,
  //   imgALT: 'Bild von Pommes',
  // },
]
