/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import WhatsappButton from "./Whatsapp"
import CookieConsent from "react-cookie-consent"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          logo
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className="flex-this-box">
      <Header data={data} />
      <main>
        {children}
        <WhatsappButton />
      </main>
      <CookieConsent
        buttonText="Souhlasím"
        style={{
          background: "#2a777d",
          fontWeight: "700",
          letterSpacing: "2px",
          lineHeight: "1.7",
        }}
        buttonStyle={{
          background: "#e0dfdf",
          color: "#1d428a",
          fontFamily: "Open Sans",
          fontSize: "13px",
          fontWeight: "700",
          borderRadius: "200px",
          padding: "5px 20px",
          textTransform: "uppercase",
        }}
        expires={150}
      >
        Tento web používá cookies k vylepšení uživatelského prostředí.
      </CookieConsent>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
