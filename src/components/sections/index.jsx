import { bestseller, menu, sections } from '../../data'
import BestsellerCard from '../ui/cards/BestsellerCard'
import Section from '../ui/section/Section'
import SectionsCSS from './Sections.module.css'

const speisekarte = menu.map((item) => {
  if (item.vegan) {
    return (
      <div key={item.id} className={SectionsCSS.article}>
        <p className={`${SectionsCSS.text} ${SectionsCSS.vegan}`}>
          {item.name}{' '}
          <span className={SectionsCSS.smallerText}>{item.extras}</span>
        </p>

        <p className={`${SectionsCSS.text} ${SectionsCSS.vegan}`}>
          {item.price}
        </p>
      </div>
    )
  } else {
    return (
      <div key={item.id} className={SectionsCSS.article}>
        <p className={SectionsCSS.text}>
          {item.name}{' '}
          <span className={SectionsCSS.smallerText}>{item.extras}</span>
        </p>
        <p className={SectionsCSS.text}>{item.price}</p>
      </div>
    )
  }
})

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

// console.log(test)

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
            {item.id === 0 ? (
              <div className={SectionsCSS.container}>{speisekarte}</div>
            ) : null}
            {item.id === 1 ? bestsellerCards : null}
            {item.id === 2 ? <p>Tageskarte info</p> : null}
          </Section>
        )
      })}
    </>
  )
}
