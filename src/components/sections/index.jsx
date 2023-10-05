import { bestseller } from '../../data/bestseller'
import { sections } from '../../data/sections'
import BestsellerCard from '../ui/cards/BestsellerCard'
import Menu from '../ui/menu'
import Section from '../ui/section/Section'

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
            section={item.heading}
            imgURL={item.imgURL}
            imgALT={item.imgALT}
          >
            {item.order === 0 ? <Menu /> : null}
            {item.order === 1 ? bestsellerCards : null}
            {item.order === 2 ? <p>Kommt bald ...</p> : null}
          </Section>
        )
      })}
    </>
  )
}
