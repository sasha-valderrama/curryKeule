import Header from '../header'
import Button from '../ui/button'

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
            <Button text="Speisekarte" type='secondary'/>
            <Button text="Tageskarte" type='primary' />
          </div>
        </div>
      </section>
    </>
  )
}
