import React from "react"
import { PrimaryButton } from "../button/Buttons"
import logo from "../../assets/logo.svg"
import hamburger from "../../assets/icon-hamburger.svg"
import { Link } from "gatsby"

interface HeaderProps {
  toggleMenu: boolean
  setToggleMenu: Function
}

const Header: React.FC<HeaderProps> = ({ toggleMenu, setToggleMenu }) => {
  return (
    <header className="max-w-screen-sm px-5 m-auto py-10 flex justify-between items-center">
      <nav className="">
        <Link to="/">
          <img alt="myteam logo" src={logo}></img>
        </Link>
        <ul className="hidden">
          <li className="hover:text-light-coral  transition duration-200 ease-in-out">
            <Link to="/">home</Link>
          </li>
          <li className="hover:text-light-coral  transition duration-200 ease-in-out">
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        type="button"
        className="w-10 h-10 flex flex-col items-center justify-center"
      >
        <img alt="icon open menu" src={hamburger} className="-mt-1 mr-1" />
      </button>
      <div className="hidden">
        <PrimaryButton title="contact us" />
      </div>
    </header>
  )
}

export default Header
