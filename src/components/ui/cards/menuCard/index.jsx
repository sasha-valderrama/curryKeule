import MenuCardCSS from './MenuCard.module.css'
import { PiHamburger } from 'react-icons/pi'
import { CiFries } from 'react-icons/ci'
import { BsCupStraw } from 'react-icons/bs'
import { IoBeerOutline } from 'react-icons/io5'
import { useState } from 'react'
import { menu } from '../../../../data/menu'

// const speisekarte = menu.map((section) => {
//   if (section.name === 'Speisen' || section.name === 'Beilagen') {
//     return (
//       <div key={section.name} className={MenuCSS.menuDivision}>
//         <p
//           className={
//             section.name === 'Beilagen'
//               ? MenuCSS.menuHeading
//               : `${MenuCSS.menuHeading} ${MenuCSS.displaySection}`
//           }
//         >
//           {section.name}
//         </p>
//         {section.products.map((product) => {
//           return (
//             <div key={product.id} className={MenuCSS.article}>
//               <p
//                 className={
//                   product.vegan
//                     ? `${MenuCSS.text} ${MenuCSS.vegan}`
//                     : MenuCSS.text
//                 }
//               >
//                 {product.name}{' '}
//                 <span className={MenuCSS.smallerText}>{product.extras}</span>
//               </p>

//               <p
//                 className={
//                   product.vegan
//                     ? `${MenuCSS.text} ${MenuCSS.vegan}`
//                     : MenuCSS.text
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
//   if (
//     section.name === 'Alkoholfreie Getränke' ||
//     section.name === 'Alkoholische Getränke'
//   ) {
//     return (
//       <div key={section.name} className={MenuCSS.menuDivision}>
//         <p className={MenuCSS.menuHeading}>{section.name}</p>
//         {section.products.map((product) => {
//           return (
//             <div key={product.id} className={MenuCSS.article}>
//               <p className={MenuCSS.text}>
//                 {product.name}{' '}
//                 <span className={MenuCSS.smallerText}>{product.extras}</span>
//               </p>
//               <div className={MenuCSS.containerDrinks}>
//                 <p className={MenuCSS.text}>{product.size}</p>
//                 <p className={MenuCSS.text}>{product.price}</p>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// })

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

  const iconStyle = MenuCardCSS.container__icon
  let icon = null
  if (container === 'Speisen') {
    icon = <PiHamburger className={iconStyle} />
  }
  if (container === 'Beilagen') {
    icon = <CiFries className={iconStyle} />
  }
  if (container === 'Alkfr. Getränke') {
    icon = <BsCupStraw className={iconStyle} />
  }
  if (container === 'Alk. Getränke') {
    icon = <IoBeerOutline className={iconStyle} />
  }

  return (
    <div className={MenuCardCSS.container__card} onClick={handleShow}>
      <div className={cardTopClass} onClick={handleShow}>
        <div className={MenuCardCSS.container__icon}>{icon}</div>
        <p className={MenuCardCSS.container__name}>{container}</p>
      </div>
      <div className={cardBottomClass}>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
        <p>contedvnkfl fkgmkfdmglfd fkgmfldkgm</p>
      </div>
    </div>
  )
}
