import { useState } from 'react'
import TestingCardCSS from './TestingCard.module.css'


export default function TestingCard() {
  const [isOpen, setIsOpen] =useState(false);

const handleShow = () => {
  setIsOpen(!isOpen)
}

const cardTopClass = isOpen
  ? `${TestingCardCSS.card__top} ${TestingCardCSS.small}`
  : TestingCardCSS.card__top


const cardBottomClass = isOpen
  ? `${TestingCardCSS.card__bottom} ${TestingCardCSS.show}`
  : TestingCardCSS.card__bottom;


  return (
    <div className={TestingCardCSS.container__card} onClick={handleShow}>
      <div className={cardTopClass} onClick={handleShow}>
        <h2 className={TestingCardCSS.card__title}>Beilagen</h2>
      </div>
      <div className={cardBottomClass}>
        <p>a123456789df 123456789dbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789 123456789ddfbfb</p>
        <p>123456789dfbfb</p>
        <p>12345   6789dfbf 123456789dfbf b</p>
        <p>123456789dfbfb</p>
        <p>12    3456789dfbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789dfbfb</p>
        <p>12345678            9dfbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789dfbfb</p>
        <p>123456789dfbfb</p>
      </div>
    </div>
  )
}
