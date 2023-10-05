/* eslint-disable react/prop-types */
import ButtonCSS from './Button.module.css'

export default function Button({ text, type}) {
  return (
    <div>
      <button className={type === 'primary'? ButtonCSS.primary: ButtonCSS.secondary}>
        <a href={`#${text}`}>{text}</a>
      </button>
    </div>
  )
}
