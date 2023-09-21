import Button_Principal from '../ui/buttons/Button_Principal'
import MainCSS from './Main.module.css'

export default function Main({ subtitle, title }) {
  return (
    <main className={MainCSS.container}>
      <div className={MainCSS.banner}>
        <p>{subtitle}</p>
        <h1 className={MainCSS.title}>{title}</h1>
        <Button_Principal text="Wat jibts heude?" />
  
      </div>
    </main>
  )
}
