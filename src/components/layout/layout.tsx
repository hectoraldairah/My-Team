import React, { useState } from "react"
import Footer from "../footer/footer"
import Header from "../header/Header"
import Navigation from "../navigation/Navigation"

interface LayoutProps {
  children: object
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="bg-midnight-blue realative">
      {toggleMenu && (
        <div className="absolute bg-black t-0 l-0 h-screen w-screen opacity-50 z-50"></div>
      )}
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
