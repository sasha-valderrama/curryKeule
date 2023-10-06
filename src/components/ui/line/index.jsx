import React from 'react'
import LineCSS from './Line.module.css'

export default function Line() {
  return (
    <svg
      className={LineCSS.waveSVG}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#fff" // Change the color as needed
        d="M0,96L34.3,112C68.6,128,137,160,206,181.3C274.3,203,343,213,411,218.7C480,224,549,224,617,213.3C685.7,203,754,181,823,176C891.4,171,960,181,1029,192C1097.1,203,1166,213,1234,218.7C1302.9,224,1371,224,1406,224L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,685,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,68,0,34,0L0,0Z"
      ></path>
    </svg>
  )
}
