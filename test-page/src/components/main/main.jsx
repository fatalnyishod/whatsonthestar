const Main = () => {
  return (
    <div className="main">
      <div className="main__head">
        <div className="crumbs">
          <a href="#" className="crumbs__item">Кепки</a>
          <a href="#" className="crumbs__item">Nike</a>
          <a href="#" className="crumbs__item">Козырек 1</a>
          <a href="#" className="crumbs__item">Белый цвет</a>
          <a href="#" className="crumbs__item">Принт Custom & Принт Nike</a>
        </div>

        <div className="btn btn_blue">• BACKGROUND</div>
      </div>

      <div className="main__content">
        <img src="images/big-hat.png" className="main__content-img" />

        <label className="range__wrap">
          <input type="range" className="range" id='id' />
          <label htmlFor="id" className="range" />
        </label>
      </div>

      <div className="main__foot">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6C12.75 6.41421 12.4142 6.75 12 6.75C11.5858 6.75 11.25 6.41421 11.25 6C11.25 5.58579 11.5858 5.25 12 5.25ZM12 11.25C12.4142 11.25 12.75 11.5858 12.75 12C12.75 12.4142 12.4142 12.75 12 12.75C11.5858 12.75 11.25 12.4142 11.25 12C11.25 11.5858 11.5858 11.25 12 11.25ZM12 17.25C12.4142 17.25 12.75 17.5858 12.75 18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18C11.25 17.5858 11.5858 17.25 12 17.25Z"
            fill="black"
            stroke="black"
            strokeWidth="1.5"
          />
        </svg>

        <div style={{display: `flex`, alignItems: `center`}}>
          <button className="btn btn_round" style={{margin: `0 16px 0 24px`}}>
            <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.8928 18.3048L17 20.1904L18.7758 21.9588C19.7527 22.9316 20.8972 24.0541 20.8972 24.0541C20.8972 24.0541 20.8972 23.2301 20.8972 22.6222V21.5169L23.6325 21.5178C26.7558 21.5187 27.4676 21.7742 28.1161 23.1268C28.7991 24.5519 28.5111 25.89 27.2747 27.0332C26.7703 27.4999 26.4976 27.7446 24.7 27.7446C23.251 27.7446 22.9415 27.8292 22.4634 28.2355C21.9854 28.6418 22.122 29.7109 22.5488 29.9622C22.9756 30.2135 23.6194 30.25 24.9732 30.25C27.2723 30.25 28.2853 29.6911 29.5484 28.2705C32.2533 25.2284 31.0163 20.4968 27.1778 19.2021C26.5028 18.9744 25.3201 18.8643 23.5481 18.8643H20.8972V17.6381V16.25C20.1144 17.0459 19.6756 17.509 18.8928 18.3048Z"
                fill="black"
              />
            </svg>
          </button>
          <span>CTRL + Z</span>
        </div>

        <button className="btn btn_round" style={{marginLeft: `auto`}}>
          ?&#8984;
        </button>
      </div>
    </div>
  )
}

export default Main;