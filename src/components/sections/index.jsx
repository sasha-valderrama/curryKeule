import { bestseller } from '../../data/bestseller'
import { sections } from '../../data/sections'
import BestsellerCard from '../ui/cards/BestsellerCard'
import SectionsCSS from './Sections.module.css'
import Menu from '../ui/menu'
import Section from '../ui/section'

const bestsellerCards = bestseller.map((item) => {
  return (
    <BestsellerCard
      key={item.id}
      heading={item.heading}
      description={item.description}
      imgURL={item.imgURL}
      imgALT={item.imgALT}
      price={item.price}
    ></BestsellerCard>
  )
})

export default function Sections() {
  return (
    <>
      {sections.map((item) => {
        return (
          <Section
            key={item.id}
            id={item.function}
            section={item.heading}
            imgURL={item.imgURL}
            imgALT={item.imgALT}
          >
            {item.function === 'Speisekarte' ? <Menu /> : null}
            {item.function === 'Bestseller' ? bestsellerCards : null}
            {item.function === 'Tageskarte' ? <p>Kommt bald ...</p> : null}
          </Section>
        )
      })}
    </>
  )
}
