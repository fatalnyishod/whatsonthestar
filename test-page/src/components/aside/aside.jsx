import AsideItem from './aside-item';

const hatsArr = [
  {
    imgSrc: 'images/hat-1.png',
    imgAlt: '#',
    title: 'Vertabrae Velvet'
  },
  {
    imgSrc: 'images/hat-2.png',
    imgAlt: '#',
    title: 'Alex Arigato'
  },
  {
    imgSrc: 'images/hat-3.png',
    imgAlt: '#',
    title: 'Pequs'
  },
  {
    imgSrc: 'images/hat-4.png',
    imgAlt: '#',
    title: 'Ornge'
  },
  {
    imgSrc: 'images/hat-5.png',
    imgAlt: '#',
    title: 'Ornge'
  },
  {
    imgSrc: 'images/hat-6.png',
    imgAlt: '#',
    title: 'Ornge'
  },
  {
    imgSrc: 'images/hat-1.png',
    imgAlt: '#',
    title: 'Vertabrae Velvet'
  },
  {
    imgSrc: 'images/hat-2.png',
    imgAlt: '#',
    title: 'Alex Arigato'
  },
  {
    imgSrc: 'images/hat-3.png',
    imgAlt: '#',
    title: 'Pequs'
  },
  {
    imgSrc: 'images/hat-4.png',
    imgAlt: '#',
    title: 'Ornge'
  },
  {
    imgSrc: 'images/hat-5.png',
    imgAlt: '#',
    title: 'Ornge'
  },
  {
    imgSrc: 'images/hat-6.png',
    imgAlt: '#',
    title: 'Ornge'
  },
]

const Aside = () => {
  return (
    <div className="aside">
      

      <div className="aside__grid">
        {hatsArr.map((item, key) => (
          <AsideItem
            key={key}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Aside;