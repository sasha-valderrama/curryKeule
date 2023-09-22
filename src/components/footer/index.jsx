import FooterCSS from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={FooterCSS.footer}>
      <div className={FooterCSS.main_container}>
        <div className={FooterCSS.divisor}></div>
        <h2 className={FooterCSS.heading}>Komm vorbei!</h2>
        <div className={FooterCSS.container}>
          <h3 className={FooterCSS.subheading}>Wann?</h3>
          <table className={FooterCSS.schedule}>
            <tr>
              <td>
                <p className={FooterCSS.text}>Mo-Fr</p>
              </td>
              <td>
                <p className={FooterCSS.text}>10:00 - 22:00 Uhr</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className={FooterCSS.text}>Sa</p>
              </td>
              <td>
                <p className={FooterCSS.text}>11:00 - 22:00 Uhr</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className={FooterCSS.text}>So</p>
              </td>
              <td>
                <p className={FooterCSS.text}>geschlossen</p>
              </td>
            </tr>
          </table>
        </div>
        <div className={FooterCSS.container}>
          <h3 className={FooterCSS.subheading}>Wo?</h3>
          <p className={FooterCSS.text}>Müllerstraße 47A, 13349 Berlin</p>
        </div>
        <div className={FooterCSS.divisor}></div>
        <div className={FooterCSS.container}>
          <h4 className={FooterCSS.subheading}>Pass ma uff, Keule!</h4>
          <ul>
            <li>
              <p className={FooterCSS.text}>Kontakt</p>
            </li>
            <li>
              <p className={FooterCSS.text}>Impressum</p>
            </li>
            <li>
              <p className={FooterCSS.text}>Datenschutz</p>
            </li>
          </ul>
          <img
            className={FooterCSS.logo}
            src="./src/assets/images/logo.png"
            alt="logo"
          ></img>
        </div>
        <div className={FooterCSS.divisor}></div>
        <p className={FooterCSS.copyright}>&copy;2023, Curry Keule</p>
      </div>
    </footer>
  )
}
