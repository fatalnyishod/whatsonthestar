const AsideItem = ({imgAlt, imgSrc, title}) => {
  return (
    <div className="aside__item">
      <img className='aside__item-img' src={imgSrc} alt={imgAlt} />
      <span className="aside__item-title">{title}</span>
    </div>
  )
}

export default AsideItem;