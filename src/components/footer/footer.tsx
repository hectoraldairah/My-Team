import { Link } from "gatsby"
import React from "react"
import logo from "../../assets/logo.svg"
import facebookLogo from "../../assets/icon-facebook.svg"
import twitterLogo from "../../assets/icon-twitter.svg"
import pinterestLogo from "../../assets/icon-pinterest.svg"

const Footer = () => {
  return (
    <section className="bg-dark-green px-5 max-w-screen-sm px-5 m-auto pb-10">
      <footer className="flex flex-col pt-12">
        <div className="flex flex-col items-center px-24">
          <i className="py-2">
            <img alt="logo" src={logo} />
          </i>
          <div className="flex justify-between pb-5">
            <Link className="mr-5 text-sm">home</Link>
            <Link className="ml-5 text-sm">about</Link>
          </div>
        </div>
        <div className="flex flex-col justify-center text-sm text-center opacity-50 ">
          <p>987 Hillcrest Lane </p>
          <p> Irvine, CA </p>
          <p>California 92714 </p>
          <p>Call Us: 949-833-7432</p>
        </div>
        <div className="pt-8 flex flex-col items-center justify-center">
          <nav className="flex flex-row gap-4 justify-center  items-center">
            <i>
              <img alt="facebook icon" src={facebookLogo} />
            </i>
            <i>
              <img alt="pinterest icon" src={pinterestLogo}></img>
            </i>
            <i>
              <img alt="twitter icon" src={twitterLogo} />
            </i>
          </nav>
          <p className="opacity-50 text-sm mt-3">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Footer
