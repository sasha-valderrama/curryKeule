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
  return (
    <header id="header" className={HeaderCSS.header}>
      <img
        className={HeaderCSS.logo}
        src= {import.meta.env.BASE_URL + 'assets/images/logo.png'}
      />
      <nav className={HeaderCSS.nav}>
        <ul>
          <li>Unsere Bestseller</li>
          <li>Tageskarte</li>
          <li>Speisekarte</li>
          <li>Kontakt</li>
        </ul>
      </nav>
    </header>
  )
}
