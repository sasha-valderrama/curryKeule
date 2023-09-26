import { menu, sections } from '../../data'
import Section from '../ui/section/Section'
import SectionsCSS from './Sections.module.css'

const test = menu[0].name

console.log(test)

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
            {item.id === 0 ? <p>Speisen und Getränke info</p> : null}
            {item.id === 1 ? <p>Bestseller info</p> : null}
            {item.id === 2 ? <p>Tageskarte info</p> : null}
          </Section>
        )
      })}
    </>
  )
}
