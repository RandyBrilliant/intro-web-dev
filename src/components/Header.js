import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid my-3">
        <Link className="navbar-brand fw-bolder" to="/">
          Intro to Web Development | Chi-Generation
        </Link>
      </div>
    </nav>
  )
}

export default Header
