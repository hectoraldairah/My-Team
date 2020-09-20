import { Link } from "gatsby"
import React from "react"
import iconClose from "../../assets/icon-close.svg"
import { PrimaryButton } from "../button/Buttons"
import sty from "./Navigation.module.css"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationProps {
  toggleMenu: boolean
  setToggleMenu: Function
}
const Navigation: React.FC<NavigationProps> = ({
  toggleMenu,
  setToggleMenu,
}) => {
  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.nav
          initial={{ width: 0 }}
          animate={{ width: "66.6666%" }}
          exit={{ width: 0 }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="fixed top-0 right-0 bg-police-blue h-screen bg-red-100 z-50 "
        >
          <div className="flex flex-col px-5">
            <div
              onClick={() => setToggleMenu(!toggleMenu)}
              className="flex justify-end mt-12 mt-1 mr-3 pointer"
            >
              <img
                alt="close menu"
                src={iconClose}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <nav className="flex flex-col justify-start mt-10 px-1">
              <ul>
                <li className="mt-5">
                  <Link to="/">home</Link>{" "}
                </li>
                <li className="mt-5">
                  <Link to="/about">about</Link>
                </li>
              </ul>
              <motion.div
                initial={{ marginRight: -200 }}
                animate={{ marginRight: 0 }}
                exit={{ marginRight: -200 }}
                className="mt-10"
              >
                <PrimaryButton title="contact us" />
              </motion.div>
            </nav>
          </div>
          <motion.div
            initial={{ marginRight: -200 }}
            animate={{ marginRight: -100 }}
            exit={{ marginRight: -200 }}
            transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
            className={sty.bgPattern}
          ></motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default Navigation
