import MenuCardCSS from './MenuCard.module.css'
import { PiHamburger } from 'react-icons/pi'
import { CiFries } from 'react-icons/ci'
import { BsCupStraw } from 'react-icons/bs'
import { IoBeerOutline } from 'react-icons/io5'
import { useState } from 'react'
import { menu } from '../../../../data/menu'

// const format0 = menu.map((section) => {
//   if (section.name === 'Speisen') {
//     return (
//       <div key={section.name} className={MenuCardCSS.menuDivision}>
//         {section.products.map((product) => {
//           return (
//             <div key={product.id} className={MenuCardCSS.article}>
//               <p
//                 className={
//                   product.vegan
//                     ? `${MenuCardCSS.text} ${MenuCardCSS.vegan}`
//                     : MenuCardCSS.text
//                 }
//               >
//                 {product.name}{' '}
//                 <span className={MenuCardCSS.smallerText}>
//                   {product.extras}
//                 </span>
//               </p>
//               <p
//                 className={
//                   product.vegan
//                     ? `${MenuCardCSS.text} ${MenuCardCSS.vegan}`
//                     : MenuCardCSS.text
//                 }
//               >
//                 {product.price}
//               </p>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// })

// const format1 = menu.map((section) => {
//   if (section.name === 'Beilagen') {
//     return (
//       <div key={section.name} className={MenuCardCSS.menuDivision}>
//         {section.products.map((product) => {
//           return (
//             <div key={product.id} className={MenuCardCSS.article}>
//               <p
//                 className={
//                   product.vegan
//                     ? `${MenuCardCSS.text} ${MenuCardCSS.vegan}`
//                     : MenuCardCSS.text
//                 }
//               >
//                 {product.name}{' '}
//                 <span className={MenuCardCSS.smallerText}>
//                   {product.extras}
//                 </span>
//               </p>
//               <p
//                 className={
//                   product.vegan
//                     ? `${MenuCardCSS.text} ${MenuCardCSS.vegan}`
//                     : MenuCardCSS.text
//                 }
//               >
//                 {product.price}
//               </p>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }});

//   const format2 = menu.map((section) => {
//     if (section.name === 'Alkfr. Getränke') {
//       return (
//         <div key={section.name} className={MenuCardCSS.menuDivision}>
//           {section.products.map((product) => {
//             return (
//               <div key={product.id} className={MenuCardCSS.article}>
//                 <p className={MenuCardCSS.text}>
//                   {product.name}{' '}
//                   <span className={MenuCardCSS.smallerText}>
//                     {product.extras}
//                   </span>
//                 </p>
//                 <div className={MenuCardCSS.containerDrinks}>
//                   <p className={MenuCardCSS.text}>{product.size}</p>
//                   <p className={MenuCardCSS.text}>{product.price}</p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       )
//     }})

//   const format3 = menu.map((section) => {
//     if (section.name === 'Alk. Getränke') {
//       return (
//         <div key={section.name} className={MenuCardCSS.menuDivision}>
//           {section.products.map((product) => {
//             return (
//               <div key={product.id} className={MenuCardCSS.article}>
//                 <p className={MenuCardCSS.text}>
//                   {product.name}{' '}
//                   <span className={MenuCardCSS.smallerText}>
//                     {product.extras}
//                   </span>
//                 </p>
//                 <div className={MenuCardCSS.containerDrinks}>
//                   <p className={MenuCardCSS.text}>{product.size}</p>
//                   <p className={MenuCardCSS.text}>{product.price}</p>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       )
//     }
//   })

const MenuFormat = ({ section, icon }) => {
  return (
    <div key={section.name} className={MenuCardCSS.menuDivision}>
      {section.products.map((product) => (
        <div key={product.id} className={MenuCardCSS.article}>
          <p
            className={
              product.vegan
                ? `${MenuCardCSS.text} ${MenuCardCSS.vegan}`
                : MenuCardCSS.text
            }
          >
            {product.name}{' '}
            <span className={MenuCardCSS.smallerText}>{product.extras}</span>
          </p>
          {icon && (
            <div className={MenuCardCSS.containerDrinks}>
              <p className={MenuCardCSS.text}>
                {product.size || product.price}
              </p>
              {product.size && (
                <p className={MenuCardCSS.text}>{product.price}</p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function MenuCard({ container }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleShow = () => {
    setIsOpen(!isOpen)
  }

  const cardTopClass = isOpen
    ? `${MenuCardCSS.card__top} ${MenuCardCSS.small}`
    : MenuCardCSS.card__top

  const cardBottomClass = isOpen
    ? `${MenuCardCSS.card__bottom} ${MenuCardCSS.show}`
    : MenuCardCSS.card__bottom

  let icon = null
  if (container === 'Speisen') {
    icon = <PiHamburger className={MenuCardCSS.container__icon} />
  } else if (container === 'Beilagen') {
    icon = <CiFries className={MenuCardCSS.container__icon} />
  } else if (container === 'Alkfr. Getränke') {
    icon = <BsCupStraw className={MenuCardCSS.container__icon} />
  } else if (container === 'Alk. Getränke') {
    icon = <IoBeerOutline className={MenuCardCSS.container__icon} />
  }

  const products =
    container && menu ? (
      <MenuFormat
        section={menu.find((section) => section.name === container)}
        icon={icon}
      />
    ) : null

  return (
    <div className={MenuCardCSS.container__card} onClick={handleShow}>
      <div className={cardTopClass} onClick={handleShow}>
        <div className={MenuCardCSS.container__icon}>{icon}</div>
        <p className={MenuCardCSS.container__name}>{container}</p>
      </div>
      <div className={cardBottomClass}>{products}</div>
    </div>
  )
}
