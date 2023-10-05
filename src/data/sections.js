import { nanoid } from 'nanoid'

export const sections = [
  {
    id: nanoid(),
    order: 0,
    heading: 'Speisen und Getränke',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__cola.jpg`,
    imgALT: 'Bild von Coca-Cola',
  },
  {
    id: nanoid(),
    order: 1,
    heading: 'Unsere Bestseller!',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__burger.png`,
    imgALT: 'Bild von Burger',
  },
  ,
  {
    id: nanoid(),
    order: 2,
    heading: 'Tageskarte',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__pommes.jpg`,
    imgALT: 'Bild von Pommes',
  },
]
