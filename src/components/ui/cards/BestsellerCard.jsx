import BestsellerCardCSS from './BestsellerCard.module.css'

export default function BestsellerCard({
  heading,
  description,
  imgURL,
  imgALT,
  price,
}) {
  return (
    <div className={BestsellerCardCSS.container}>
      <p className={BestsellerCardCSS.heading}>{heading}</p>
      <p className={BestsellerCardCSS.description}>{description}</p>
      <img className={BestsellerCardCSS.thumbnail} src={imgURL} alt={imgALT} />
      <p className={BestsellerCardCSS.price}>{price}</p>
    </div>
  )
}
