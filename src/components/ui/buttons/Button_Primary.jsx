/* eslint-disable react/prop-types */
import ButtonCSS from './Buttons.module.css'

export default function Button_Primary({ text }) {
  return <button className={ButtonCSS.primary}>{text}</button>
}
