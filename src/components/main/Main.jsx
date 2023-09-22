import Button_Principal from '../ui/buttons/Button_Principal'
import MainCSS from './Main.module.css'

export default function Main() {
  return (
    <main className={MainCSS.main}>
      <div className={MainCSS.container}>
        <p>Dit war'n Hamma!</p>
        <h1 className={MainCSS.heading}>
          Bester Currywust im juten alten Wedding
        </h1>
        <Button_Principal text="Wat jibts heude?" />
      </div>
    </main>
  )
}
