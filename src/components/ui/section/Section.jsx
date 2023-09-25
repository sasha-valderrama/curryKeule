import SectionCSS from './Section.module.css'

export default function Section({ section, children, imgURL, imgALT }) {
  return (
    <section className={SectionCSS.section}>
      <h2 className={SectionCSS.heading}>{section}</h2>
      {children}
      <img className={SectionCSS.imgDivisor} src={imgURL} alt={imgALT}/>
    </section>
  )
}
