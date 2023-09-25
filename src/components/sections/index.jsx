import Section from '../ui/section/Section'
import SectionsCSS from './Sections.module.css'

const sections = [
  {
    id: 0,
    heading: 'Speisen und Getränke',
    imgURL: ' ./src/assets/images/bg__cola.jpg',
    imgALT: 'Bild von Coca-Cola',
  },
  {
    id: 1,
    heading: 'Unsere Bestseller!',
    imgURL: ' ./src/assets/images/bg__burger.png',
    imgALT: 'Bild von Burger',
  },
  ,
  {
    id: 2,
    heading: 'Tageskarte',
    imgURL: './src/assets/images/bg__pommes.jpg',
    imgALT: 'Bild von Pommes',
  },
]

export default function Sections() {
  return (
    <>
      <Section section="Speisen und Getränke">
        <p>dfdfsfdsdfdfdsfdsfdsf</p>
        <img
          className={SectionsCSS.imgDivisor}
          src="./src/assets/images/bg__cola.jpg"
          alt="Bild von Coca-Cola"
        />
      </Section>
      <Section section="Unsere Bestseller!">
        <p>dfdsfdsfdsfdf</p>
        <img
          className={SectionsCSS.imgDivisor}
          src="./src/assets/images/bg__burger.png"
          alt="Bild von Burger"
        />
      </Section>
      <Section section="Tageskarte">
        <p>dfsdf</p>
        <img
          className={SectionsCSS.imgDivisor}
          src="./src/assets/images/bg__pommes.jpg"
          alt="Bild von Pommes"
        />
      </Section>
    </>
  )
}
