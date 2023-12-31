import { nanoid } from 'nanoid'


const speisen =  {
    name: 'Speisen',
    products: [
      {
        id: nanoid(),
        name: 'Currywurst mit oder ohne Darm',
        price: '2,50€',
        vegan: false,
        extras: '',
        note: 'I-J-10-2-4',
      },
      {
        id: nanoid(),
        name: 'Currywurst mit Brötchen',
        price: '2.70€',
        vegan: false,
        extras: '',
        note: 'A-C-I-J-10-2-4',
      },
      {
        id: nanoid(),
        name: '2 Currywurst mit Pommes',
        price: '7.50€',
        vegan: false,
        extras: 'rot-weiß',
        note: 'I-J-10-2',
      },
      {
        id: nanoid(),
        name: '1 Currywurst mit Pommes und Bouletle',
        price: '7.50€',
        vegan: false,
        extras: '',
        note: 'F-A A-I-J-10-2',
      },
      {
        id: nanoid(),
        name: 'Currywurst Vegan',
        price: '3.00€',
        vegan: true,
        extras: '',
        note: '2-4-A',
      },
      {
        id: nanoid(),
        name: 'Bratwust im Brötchen',
        price: '3.00€',
        vegan: false,
        extras: '',
        note: 'A-C',
      },
      {
        id: nanoid(),
        name: 'Boulette',
        price: '2.50€',
        vegan: false,
        extras: '',
        note: '2-A',
      },
      {
        id: nanoid(),
        name: 'Paniertes Schweineschnitzel mit Beilage',
        price: '8.00€',
        vegan: false,
        extras: '(frisch geklopt)',
        note: 'A-C',
      },
      {
        id: nanoid(),
        name: 'Großes Paniertes Schweineschnitzel mit Beilage',
        price: '9.50€',
        vegan: false,
        extras: '(frisch geklopft)',
        note: 'I-J-A-G-C-1-3',
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
        note: 'G-1',
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
        name: '+ Bacon',
        price: '1.20€',
        vegan: false,
        extras: '',
      },
      {
        id: nanoid(),
        name: '+ Cheddar-Käse',
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
        note: 'I-1-4',
      },
      {
        id: nanoid(),
        name: 'Cevapcici 8 Stück',
        price: '12.50€',
        vegan: false,
        extras: 'mit Pommes oder Djuvecreis',
        note: 'I-1-4',
      },
    ],
  }

const anmerkungen =  {
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
  }

  const beilagen = {
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
        note: 'J-8',
      },
      {
        id: nanoid(),
        name: 'Pommes Groß',
        price: '3.50€',
        vegan: false,
        extras: '',
        note: 'J-8',
      },
      {
        id: nanoid(),
        name: 'Frische Bratkartoffeln',
        price: '3.50€',
        vegan: false,
        extras: '',
        note: 'A',
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
  }

  const allergene ={
    name: 'Allergene',
    products: [
      {
        id: nanoid(),
        name: 'A',
        description: 'Glutenhaltige Getreide',
      },
      {
        id: nanoid(),
        name: 'C',
        description: 'enthält Ei',
      },
      {
        id: nanoid(),
        name: 'F',
        description: 'enthält Soja',
      },
      {
        id: nanoid(),
        name: 'G',
        description: 'Milch',
      },
      {
        id: nanoid(),
        name: 'I',
        description: 'enthält Sellerie',
      },
      {
        id: nanoid(),
        name: 'J',
        description: 'enthält Senf',
      },
      {
        id: nanoid(),
        name: '1',
        description: 'mit Farbstoff',
      },
      {
        id: nanoid(),
        name: '2',
        description: 'mit Konservierungsstoffe',
      },
      {
        id: nanoid(),
        name: '3',
        description: 'mit Antioxidionsmittel',
      },
      {
        id: nanoid(),
        name: '4',
        description: 'mit Geschmacksverstäerker',
      },
      {
        id: nanoid(),
        name: '8',
        description: 'Zuckerart undSüßungsmittel',
      },
      {
        id: nanoid(),
        name: '10',
        description: 'mit Phosphat',
      },
      {
        id: nanoid(),
        name: '11',
        description: 'mit Koffein',
      },
      {
        id: nanoid(),
        name: '14',
        description: 'mit Stabilisatoren',
      },
    ],
  }

  const alkfrGetränke = {
    name: 'Alkfr. Getränke',
    products: [
      {
        id: nanoid(),
        name: 'Coca Cola',
        price: '2.40€',
        size: '0,33l',
        note: '1-8-11-A',
      },
      {
        id: nanoid(),
        name: 'Coca Zero',
        price: '2.40€',
        size: '0,33l',
        note: '1-8-11-A',
      },
      {
        id: nanoid(),
        name: 'Fanta',
        price: '2.40€',
        size: '0,33l',
        note: '1-3-8-14',
      },
      {
        id: nanoid(),
        name: 'Sprite',
        price: '2.40€',
        size: '0,33l',
        note: '8',
      },
      {
        id: nanoid(),
        name: 'Capri Sonne',
        price: '1.00€',
        size: '0,20l',
        note: '1',
      },
      {
        id: nanoid(),
        name: 'Multivitamin',
        price: '2.40€',
        size: '0,33l',
        note: '1',
      },
      {
        id: nanoid(),
        name: 'Apfelschorle',
        price: '2,40€',
        size: '0,33l',
      },
      {
        id: nanoid(),
        name: 'Rubin',
        price: '2.40€',
        size: '0,33l',
        note: '1',
      },
      {
        id: nanoid(),
        name: 'Mineralwasser',
        price: '2,00€',
        size: '0,33l',
      },
      {
        id: nanoid(),
        name: 'Kakao/Vanille',
        price: '2,50€',
        size: '0,50l',
        note: '1-G',
      },
      {
        id: nanoid(),
        name: 'Kaffee',
        price: '2,00€',
        size: '',
        note: '11',
      },
      {
        id: nanoid(),
        name: 'Alkoholfreies Bier',
        price: '2,30€',
        size: '0,33l',
      },
      {
        id: nanoid(),
        name: 'Rixdorfer Fassbrause',
        price: '2,00€',
        size: '0,33l',
      },
      {
        id: nanoid(),
        name: 'Radler alkoholfrei',
        price: '2,50€',
        size: '0,50l',
      },
      {
        id: nanoid(),
        name: 'Kraftmalz',
        price: '2,30€',
        size: '0,33l',
        note: 'A',
      },
    ],
  }

 const alkGetränke = {
    name: 'Alk. Getränke',
    products: [
      {
        id: nanoid(),
        name: 'Berliner Jubiläums Pils',
        price: '2,20€',
        size: '0,33l',
        note: 'A',
      },
      {
        id: nanoid(),
        name: 'Schultheiss',
        price: '2.20€',
        size: '0,33l',
        note: 'A',
      },
      {
        id: nanoid(),
        name: 'Berliner Kindl Radler',
        price: '2.80€',
        size: '0,50l',
        note: 'A',
      },
      {
        id: nanoid(),
        name: 'Helles Bier',
        price: '2.80€',
        size: '0,50l',
        note: 'A',
      },
      {
        id: nanoid(),
        name: 'Weißwein Trocken',
        price: '4,00€',
        size: '0,25l',
      },
      {
        id: nanoid(),
        name: 'Rose Trocken',
        price: '4,00€',
        size: '0,25l',
      },
    ],
  }



  export const menu = [
    speisen,
    anmerkungen,
    beilagen,
    alkfrGetränke,
    alkGetränke,
    allergene,
  ]
