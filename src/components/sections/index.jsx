import { bestseller } from '../../data/bestseller'
import { sections } from '../../data/sections'
import BestsellerCard from '../ui/cards/bestsellerCard'
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
      {sections.map((section) => {
        return (
          <Section
            key={section.id}
            id={section.heading}
            section={section.heading}
            subheading={section.subheading}
            imgURL={section.imgURL}
            imgALT={section.imgALT}
          >
            {section.heading === 'Speisekarte' ? <Menu /> : null}
            {section.heading === 'Bestseller' ? bestsellerCards : null}
            {section.heading === 'Tageskarte' ? (
              <></>
            ) : null}
          </Section>
        )
      })}
    </>
  )
}
