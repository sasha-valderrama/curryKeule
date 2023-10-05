/* eslint-disable react/prop-types */
import ButtonCSS from './Buttons.module.css'

export default function Button_Primary({ text }) {
  return (
    <div>
      <button className={ButtonCSS.primary}>
        <a href={`#${text}`}>{text}</a>
      </button>
    </div>
  )
}
