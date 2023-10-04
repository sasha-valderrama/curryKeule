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

export const menu = [
  {
    name: 'Speisen',
    products: [
      {
        id: nanoid(),
        name: 'Currywurst mit oder ohne Darm',
        price: '2,50€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Currywurst mit Brötchen',
        price: '2.70€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: '2 Currywurst mit Pommes',
        price: '7.50€',
        vegan: false,
        extras: 'rot-weiß',
      },
      {
        id: nanoid(),
        name: '1 Currywurst mit Pommes und Bouletle',
        price: '7.50€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Currywurst Vegan',
        price: '3.00€',
        vegan: true,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Bratwust im Brötchen',
        price: '3.00€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Boulette',
        price: '2.50€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Paniertes Schweineschnitzel mit Beilage',
        price: '8.00€',
        vegan: false,
        extras: '(frisch geklopt)',
      },
      {
        id: nanoid(),
        name: 'Großes Paniertes Schweineschnitzel mit Beilage',
        price: '9.50€',
        vegan: false,
        extras: '(frisch geklopft)',
      },
      {
        id: nanoid(),
        name: 'Schnitzel a la Cordon Bleu mit Beilage ',
        price: '11.00€',
        vegan: false,
        extras: '(Schweineschnitzel gefüllt mit Käse und Schinken)',
      },
      {
        id: nanoid(),
        name: 'Hamburger',
        price: '5.00€',
        vegan: false,
        extras: 'mit Soße und Salat',
      },
      {
        id: nanoid(),
        name: 'Double Hamburger',
        price: '3.00€',
        vegan: false,
        extras: 'mit Soße und Salat',
      },
      {
        id: nanoid(),
        name: 'Bacon',
        price: '1.20€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Cheddar-Käse',
        price: '1.00€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Gefüllte Pljeskavica + Beilage',
        price: '12.00€',
        vegan: false,
        extras: '(Hacksteak gefüllt mit Schäfskäse)',
      },
      {
        id: nanoid(),
        name: 'Pljeskavica + Beilage',
        price: '9.00€',
        vegan: false,
        extras: '(Hacksteak)',
      },
      {
        id: nanoid(),
        name: 'Fleischspieß',
        price: '4.00€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Cevapcici 5 Stück',
        price: '9.00€',
        vegan: false,
        extras: 'mit Pommes oder Djuvecreis',
      },
      {
        id: nanoid(),
        name: 'Cevapcici 8 Stück',
        price: '12.50€',
        vegan: false,
        extras: 'mit Pommes oder Djuvecreis',
      },
    ],
  },
  {
    name: 'Anmerkungen',
    items: [
      {
        id: nanoid(),
        description:
          'Cevapcici und Pijekavica werden täglich in hauseigener Produktion hergestellt.',
      },
      {
        id: nanoid(),
        description:
          'Burger Patties werden täglich aus 100% Rindfleisch frisch hergestellt.',
      },
      {
        id: nanoid(),
        description: 'Selbstgemachter Ketchup und Burgersauce',
      },
    ],
  },
  {
    name: 'Beilagen',
    products: [
      {
        id: nanoid(),
        name: 'Krautsalat Essig Öl',
        price: '2.80€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Kartoffelsalat Essig Öl',
        price: '2,80€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Nudelsalat Mayo',
        price: '2,80€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Pommes',
        price: '2.80€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Pommes Groß',
        price: '3.50€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Frische Bratkartoffeln',
        price: '3.50€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Djuvecreis',
        price: '2.80€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Ajvar',
        price: '0.80€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Vegane Mayo',
        price: '0.50€',
        vegan: true,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Ketchup / Mayo',
        price: '0.30€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Zwiebeln Roh oder scharf',
        price: '0.30€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Gedünstete Zwiebel',
        price: '0.50€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: 'Brötchen',
        price: '0.30€',
        vegan: false,
        extras: '',
      },
    ],
  },
  { name: 'Getränke', items: [] },
]

export const bestseller = [
  {
    id: 0,
    heading: 'Der beste Hamburger im ganzen Wedding  (versprochen!)',
    description: 'mit Bacon, Cheddar-Käse, Soße und Salat',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bestseller__1.png`,
    imgALT: 'Bild von Hamburger',
    price: '10.20€',
  },
  {
    id: 1,
    heading: 'Cevapcici nach -geheimer- hauseigener Rezept',
    description: '5 Stück mit Pommes und Djuvecreis',
    imgURL: `${import.meta.env.BASE_URL}assets/images/bestseller__2.png`,
    imgALT: 'Bild von Currywurst',
    price: '7.50€',
  },
]

export const tageskarte = [
  {
    id: 0,
    heading: 'ffgfgdgfdgff',
    description: 'dfsfdsfsfdfsdfffdsfds',
    price: '12.40',
  },
]
