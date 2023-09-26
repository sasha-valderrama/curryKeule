
export default function BestsellerCard({imgURL,imgALT}) {
  return (
    <div className={BestsellerCardCSS.container}>
      <img src={imgURL} alt={imgALT}/>
      
    </div>
  )
}
