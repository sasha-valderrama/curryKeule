import Button_Principal from '../ui/buttons/Button_Principal'
import MainCSS from './Main.module.css'

export default function Main() {
  return (
    <main className={MainCSS.main}>
      <div className={MainCSS.container}>
        <p>Pass ma uff!</p>
        <h1 className={MainCSS.heading}>
          Dein bester Keule im juten alten Wedding
        </h1>
        <Button_Principal text="Wat jibts heude?" />
      </div>
    </main>
  )
}
