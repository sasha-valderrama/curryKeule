import Button_Primary from '../ui/buttons/Button_Primary'
import Button_Secondary from '../ui/buttons/Button_Secondary'
import MainCSS from './Main.module.css'

export default function Main() {
  return (
    <main className={MainCSS.main}>
      <div className={MainCSS.container}>
        <p className={MainCSS.preHeading}>Dit is jejessen!</p>
        <h1 className={MainCSS.heading}>
          Bester Currywust im juten alten Wedding
        </h1>
        <div className={MainCSS.buttons}>
          <Button_Secondary text="Speisekarte" />
          <Button_Primary text="Tageskarte" />
        </div>
      </div>
    </main>
  )
}
