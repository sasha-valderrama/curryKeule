import React from 'react'
import DivisorCSS from './Divisor.module.css'

export default function Divisor({position}) {
  return (
    <svg
      className={
        position === 'top'
          ? `${DivisorCSS.waveSVG} ${DivisorCSS.top}`
          : `${DivisorCSS.waveSVG} ${DivisorCSS.bottom}`
      }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="rgb(255, 174, 3)" // Change the color as needed
        d="M0,192L34.3,192C68.6,192,137,192,206,186.7C274.3,181,343,171,411,165.3C480,160,549,160,617,154.7C685.7,149,754,139,823,144C891.4,149,960,171,1029,176C1097.1,181,1166,171,1234,176C1302.9,181,1371,192,1406,197.3L1440,202.7L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,685,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,68,320,34,320L0,320Z"
      ></path>
    </svg>
  )
}
