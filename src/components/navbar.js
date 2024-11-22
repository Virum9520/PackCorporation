import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className={`navbar-navbar ${props.rootClassName} `}>
      <span className="navbar-text1">
        {props.text ?? (
          <Fragment>
            <span className="navbar-text4">PackCorporation</span>
          </Fragment>
        )}
      </span>
      <div className="navbar-nav-content">
        <div className="navbar-nav-links1">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started navbar-get-started1">
          <span className="navbar-text2">Get started</span>
        </div>
        <div id="open-mobile-menu" className="navbar-hamburger get-started">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image"
          />
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile-menu">
        <div className="navbar-nav-links2">
          <span className="nav-link">Features</span>
          <span className="nav-link">Why us</span>
          <span className="nav-link">Prices</span>
          <span className="nav-link">Contact</span>
        </div>
        <div className="get-started">
          <span className="navbar-text3">Get started</span>
        </div>
      </div>
      <div className="navbar-container1">
        <div className="navbar-container2">
          <Script
            html={`<script defer>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
          ></Script>
        </div>
      </div>
    </header>
  )
}

Navbar.defaultProps = {
  text: undefined,
  imageAlt: 'image',
  imageSrc: '/Icons/hamburger-200h.png',
  rootClassName: '',
}

Navbar.propTypes = {
  text: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
