import { bestseller, menu, sections } from '../../data'
import BestsellerCard from '../ui/cards/BestsellerCard'
import Section from '../ui/section/Section'
import SectionsCSS from './Sections.module.css'

const speisekarte = menu.map((section) => {
  if (section.name === 'Speisen' || section.name === 'Beilagen') {
    return (
      <div key={section.name} className={SectionsCSS.menuDivision}>
        <p className={SectionsCSS.menuHeading}>
          {section.name === 'Beilagen' ? section.name : null}
        </p>
        {section.products.map((product) => {
          return (
            <div key={product.id} className={SectionsCSS.article}>
              <p
                className={
                  product.vegan
                    ? `${SectionsCSS.text} ${SectionsCSS.vegan}`
                    : SectionsCSS.text
                }
              >
                {product.name}{' '}
                <span className={SectionsCSS.smallerText}>
                  {product.extras}
                </span>
              </p>

              <p
                className={
                  product.vegan
                    ? `${SectionsCSS.text} ${SectionsCSS.vegan}`
                    : SectionsCSS.text
                }
              >
                {product.price}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
  if (
    section.name === 'Alkoholfreie Getränke' ||
    section.name === 'Alkoholhaltige Getränke'
  ) {
    return (
      <div key={section.name} className={SectionsCSS.menuDivision}>
        <p className={SectionsCSS.menuHeading}>{section.name}</p>
        {section.products.map((product) => {
          return (
            <div key={product.id} className={SectionsCSS.article}>
              <p className={SectionsCSS.text}>
                {product.name}{' '}
                <span className={SectionsCSS.smallerText}>
                  {product.extras}
                </span>
              </p>
              <div className={SectionsCSS.containerDrinks}>
                <p className={SectionsCSS.text}>{product.size}</p>
                <p className={SectionsCSS.text}>{product.price}</p>
              </div>
            </div>
          )
        })}
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
            {item.order === 0 ? speisekarte : null}
            {item.order === 1 ? bestsellerCards : null}
            {item.order === 2 ? <p>Tageskarte info</p> : null}
          </Section>
        )
      })}
    </>
  )
}
