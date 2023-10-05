import { nanoid } from 'nanoid'

export const sections = [
  {
    id: nanoid(),
    function: 'Speisekarte',
    heading: 'Speisen und Getränke',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__cola.jpg`,
    imgALT: 'Bild von Coca-Cola',
  },
  {
    id: nanoid(),
    function: 'Bestseller',
    heading: 'Unsere Bestseller!',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__burger.png`,
    imgALT: 'Bild von Burger',
  },
  ,
  {
    id: nanoid(),
    function: 'Tageskarte',
    heading: 'Tageskarte',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bg__pommes.jpg`,
    imgALT: 'Bild von Pommes',
  },
]
