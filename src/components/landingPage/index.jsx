import Button from '../ui/button'
import Line from '../ui/divisor'

import LandingPageCSS from './LandingPage.module.css'

export default function LandingPage() {
  return (
    <div className={LandingPageCSS.division}>
      <>
        <section className={LandingPageCSS.section}>
          <div className={LandingPageCSS.container}>
            <p className={LandingPageCSS.preHeading}>Dit is jejessen!</p>
            <h1 className={LandingPageCSS.heading}>
              Bester Currywust im juten alten Wedding
            </h1>
            <div className={LandingPageCSS.buttons}>
              <Button text="Speisekarte" type="secondary" />
              <Button text="Tageskarte" type="primary" />
            </div>
          </div>
        </section>
        <Line position="bottom" />
      </>
    </div>
  )
}
