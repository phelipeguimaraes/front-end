import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      {/*
      <Link to="/">Home</Link>
      <Link to="/contact">Contatos</Link>
      */}
      <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Home</NavLink>
      <NavLink to="/contact" className={({isActive}) => (isActive ? "active" : "")}>Contatos</NavLink>
      <NavLink to="/back" className={({isActive}) => (isActive ? "active" : "")}>Back</NavLink>
    </div>
  )
}

export default Navbar