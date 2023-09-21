import SectionCSS from './Section.module.css'

export default function Section({ section, children }) {
  return (
    <section className={SectionCSS.container}>
      <h2 className= {SectionCSS.title}>{section}</h2>
      {children}
    </section>
  )
}
