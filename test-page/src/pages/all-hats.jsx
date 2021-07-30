import Aside from '../components/aside/aside.jsx'
import Main from '../components/main/main.jsx'
import Nav from '../components/nav/nav.jsx';

const AllHats = () => {
  return (
    <div className="page">
      <Nav />
      <Aside />
      <Main />
    </div>
  )
}

export default AllHats;