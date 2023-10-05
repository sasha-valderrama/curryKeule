import { Link } from 'react-router-dom'
import Header from '../header'
import Button_Primary from '../ui/buttons/Button_Primary'
import Button_Secondary from '../ui/buttons/Button_Secondary'
import LandingPageCSS from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <>
      <section className={LandingPageCSS.section}>
        <Header />
        <div className={LandingPageCSS.container}>
          <p className={LandingPageCSS.preHeading}>Dit is jejessen!</p>
          <h1 className={LandingPageCSS.heading}>
            Bester Currywust im juten alten Wedding
          </h1>
          <div className={LandingPageCSS.buttons}>
            <Button_Secondary text="Speisekarte"  />
            <Button_Primary text="Tageskarte" />
          </div>
        </div>
      </section>
    </>
  )
}
