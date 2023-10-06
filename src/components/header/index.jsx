import { useEffect, useState } from 'react'
import Divisor from '../ui/divisor'
import HeaderCSS from './header.module.css'

let prevScrollPos = window.scrollY

window.addEventListener('scroll', function () {
  const currentScrollPos = window.scrollY

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.getElementById('header').style.top = '0'
  } else {
    // Scrolling down
    document.getElementById('header').style.top = '-200px'
  }

  prevScrollPos = currentScrollPos
})

export default function Header() {
 const [logoVisible, setLogoVisible] = useState(true)

 const handleScroll = () => {
   const footer = document.querySelector('footer')
   const footerPosition = footer.getBoundingClientRect()

   if (footerPosition.top <= window.innerHeight && footerPosition.bottom >= 0) {
     // The footer is in the viewport
     setLogoVisible(false)
   } else {
     // The footer is not in the viewport
     setLogoVisible(true)
   }
 }

 useEffect(() => {
   // Attach the scroll event listener
   window.addEventListener('scroll', handleScroll)

   // Cleanup the event listener on component unmount
   return () => {
     window.removeEventListener('scroll', handleScroll)
   }
 }, [])

  return (
    <header id="header" className={HeaderCSS.header}>
      <Divisor position="header" />

      <nav className={HeaderCSS.nav}>
        <ul>
          <li>
            <a href="#Bestseller">Bestseller</a>
          </li>
          <li>
            <a href="#Tageskarte">Tageskarte</a>
          </li>
          <li>
            <a href="#Speisekarte">Speisekarte</a>
          </li>
          <li>Kontakt</li>
        </ul>
      </nav>
      <img
        className={
          logoVisible ? HeaderCSS.logo : `${HeaderCSS.logo} ${HeaderCSS.hidden}`
        }
        src={import.meta.env.BASE_URL + 'assets/images/logo.png'}
      />
    </header>
  )
}
