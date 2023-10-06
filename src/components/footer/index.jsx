import Line from '../ui/line'
import FooterCSS from './Footer.module.css'

export default function Footer() {
  return (
    <div className={FooterCSS.division}>
      <Line />

      <footer className={FooterCSS.footer}>
        <div className={FooterCSS.main_container}>
             <h2 className={FooterCSS.heading1}>Komm vorbei!</h2>
          <div className={FooterCSS.container}>
            <h3 className={FooterCSS.heading2}>Wann?</h3>
            <table className={FooterCSS.schedule}>
              <tbody>
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
              </tbody>
            </table>
          </div>
          <div className={FooterCSS.container}>
            <h3 className={FooterCSS.heading2}>Wo?</h3>
            <p className={FooterCSS.text}>Müllerstraße 47A, 13349 Berlin</p>
          </div>
          {/* <div className={FooterCSS.divisor}></div> */}
          <div className={FooterCSS.container}>
            <h4 className={FooterCSS.heading3}>Noch wat?</h4>
            <ul>
              <li>
                <p className={`${FooterCSS.text} ${FooterCSS.small}`}>
                  Kontakt
                </p>
              </li>
              <li>
                <p className={`${FooterCSS.text} ${FooterCSS.small}`}>
                  Impressum
                </p>
              </li>
              <li>
                <p className={`${FooterCSS.text} ${FooterCSS.small}`}>
                  Datenschutz
                </p>
              </li>
            </ul>
            <img
              className={FooterCSS.logo}
              src={import.meta.env.BASE_URL + 'assets/images/logo.png'}
              alt="logo"
            ></img>
          </div>
          <p className={FooterCSS.copyright}>&copy;2023, Curry Keule</p>
        </div>
      </footer>
    </div>
  )
}
