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
      <div className="aside__head">
        <button className="btn btn_empty">AR mode</button>
        <span className="title title_h3">Выберите кепку</span>
        <button className="btn btn_empty">Profile</button>
      </div>
      <div className="aside__nav">
        <button className="aside__nav-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.01018 4.12868L9.61259 4.75736L7.57468 6.89312L5.53677 9.02888H11.7684H18V9.95036V10.8718H11.7684H5.53677L7.5791 13.0122L9.62164 15.1528L8.94793 15.8264L8.274 16.5L5.137 13.2262L2 9.95243L5.08535 6.72633C6.78243 4.95179 8.22411 3.5 8.28923 3.5C8.35435 3.5 8.67884 3.78289 9.01018 4.12868Z"
              fill="#101010"
            />
          </svg>

        </button>
        <button className="aside__nav-arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.9898 4.12868L10.3874 4.75736L12.4253 6.89312L14.4632 9.02888H8.23162H2V9.95036V10.8718H8.23162H14.4632L12.4209 13.0122L10.3784 15.1528L11.0521 15.8264L11.726 16.5L14.863 13.2262L18 9.95243L14.9147 6.72633C13.2176 4.95179 11.7759 3.5 11.7108 3.5C11.6456 3.5 11.3212 3.78289 10.9898 4.12868Z"
              fill="#101010"
            />
          </svg>

        </button>
      </div>
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