/* eslint-disable react/prop-types */
import ButtonCSS from './Buttons.module.css'

export default function Button_Secondary({ text }) {
  return <button className={ButtonCSS.secondary}>{text}</button>
}
