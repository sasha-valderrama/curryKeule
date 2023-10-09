import MenuCardCSS from './MenuCard.module.css'
import {PiHamburger} from 'react-icons/pi'
import {CiFries} from 'react-icons/ci'
import {LuCupSoda} from 'react-icons/lu'
import {IoBeerOutline} from 'react-icons/io5'

export default function MenuCard({ container }) {
  const iconStyle = MenuCardCSS.container__icon
  let icon = null
  if (container === 'Speisen') {
    icon = <PiHamburger className={iconStyle} />
  }   if (container === 'Beilagen') {
    icon = <CiFries className={iconStyle} />
  } if (container === 'Alkoholfreie Getränke') {
    icon = <LuCupSoda className={iconStyle} />
  } if (container === 'Alkoholische Getränke') {
    icon = <IoBeerOutline className={iconStyle} />
  } 

  return (
    <div className={MenuCardCSS.container}>
      <div className={MenuCardCSS.container__icon}>
        {icon}
      </div>
      <p className={MenuCardCSS.container__name}>{container}</p>
    </div>
  )
}
