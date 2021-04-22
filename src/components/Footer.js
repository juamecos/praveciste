import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { graphql, useStaticQuery } from "gatsby"
import { FaMapMarkerAlt, FaSitemap, FaRegEnvelope } from "react-icons/fa"

// const Location = loadable(() => import('./Location'))

const Footer = () => {
  const data = useStaticQuery(queryData)
  const links = data.site.siteMetadata.menuLinks

  return (
    <footer className="section footer">
      <div className="section__container footer__container">
        <div className="footer__content">
          <div className="footer__column footer__logo">
            <AniLink fade to="/" alt="link to úvod">
              FlexiNa.cz
            </AniLink>
          </div>

          <div className="footer__column footer__info">
            <h5 className="footer__title">
              <FaMapMarkerAlt className="footer__icon" />
              Adresa
            </h5>
            <a
              href="https://goo.gl/maps/DPx1HnvRnC82DbCeA"
              className="footer__text"
            >
              <p>Cejl 43/111</p>
              <p>Brno 602 00</p>
            </a>
            <p>Ičo: 0776 4162</p>
          </div>
          <div className="footer__column footer__contact">
            <h5 className="footer__title">
              <FaRegEnvelope className="footer__icon" />
              Kontakty
            </h5>
            <div className="footer__text">
              <p>Email:</p>
              <p>
                <a href="mailto: email@email.cz">kontakt@flexina.cz</a>
              </p>
              <br />
              <p>Telefon:</p>
              <p>
                <a href="tel:+420731112937">+420731112937</a>
              </p>
            </div>
          </div>
          <div className="footer__column footer__nav">
            <h5 className="footer__title">
              <FaSitemap className="footer__icon" />
              Mapa stránek
            </h5>
            <ul className="footer__links">
              {links.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="footer__link"
                    alt={`Link to ${item.name}`}
                  >
                    <p>
                      <AniLink
                        activeClassName="active"
                        fade
                        to={item.link}
                        alt={`Link to ${item.name}`}
                      >
                        {item.name}
                      </AniLink>
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__copyright">
          copyright &copy; FlexiNa.cz {new Date().getFullYear()}
          <div> všechna práva vyhrazena</div>
          <div>Powered by menacosta.website</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
export const queryData = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        menuLinks {
          name
          link
        }
      }
    }
  }
`
