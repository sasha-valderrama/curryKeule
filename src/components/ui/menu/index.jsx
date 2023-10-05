import { menu } from '../../../data/menu'
import MenuCSS from './Menu.module.css'

const speisekarte = menu.map((section) => {
  if (section.name === 'Speisen' || section.name === 'Beilagen') {
    return (
      <div key={section.name} className={MenuCSS.menuDivision}>
        <p
          className={
            section.name === 'Beilagen'
              ? `${MenuCSS.menuHeading} ${MenuCSS.order3}`
              : `${MenuCSS.menuHeading}`
          }
        >
          {section.name === 'Beilagen' ? section.name : null}
        </p>
        {section.products.map((product) => {
          return (
            <div key={product.id} className={MenuCSS.article}>
              <p
                className={
                  product.vegan
                    ? `${MenuCSS.text} ${MenuCSS.vegan}`
                    : MenuCSS.text
                }
              >
                {product.name}{' '}
                <span className={MenuCSS.smallerText}>{product.extras}</span>
              </p>

              <p
                className={
                  product.vegan
                    ? `${MenuCSS.text} ${MenuCSS.vegan}`
                    : MenuCSS.text
                }
              >
                {product.price}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
  if (
    section.name === 'Alkoholfreie Getränke' ||
    section.name === 'Alkoholhaltige Getränke'
  ) {
    return (
      <div key={section.name} className={MenuCSS.menuDivision}>
        <p className={MenuCSS.menuHeading}>{section.name}</p>
        {section.products.map((product) => {
          return (
            <div key={product.id} className={MenuCSS.article}>
              <p className={MenuCSS.text}>
                {product.name}{' '}
                <span className={MenuCSS.smallerText}>{product.extras}</span>
              </p>
              <div className={MenuCSS.containerDrinks}>
                <p className={MenuCSS.text}>{product.size}</p>
                <p className={MenuCSS.text}>{product.price}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
})

export default function Menu() {
  return <div className={MenuCSS.menu_container}>{speisekarte}</div>
}
