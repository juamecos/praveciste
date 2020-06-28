import React from "react"

import { graphql, useStaticQuery } from "gatsby"
import Section from "../Section"
import HowToCard from "../HowToCard"
import Title from "../Title"
import { FaPhoneAlt } from "react-icons/fa"

const howToCardText = [
  "Pošlete Whatsapp",
  "Přijměte odpověď",
  "Odpočívat doma",
  "Čistíme a dezinfikujeme",
  "Následná výzva k zajištění vaší spokojenosti",
]

const HowTo = () => {
  const imagesObject = useStaticQuery(getImages)
  const images = Object.values(imagesObject)

  return (
    <Section className="howto" title="Jak to funguje" classname="howto">
      <div className="howto__left">
        {images.map((item, index) => (
          <HowToCard
            fluid={item.childImageSharp.fluid}
            text={howToCardText[index]}
            key={index}
          />
        ))}
      </div>
      <div className="howto__right">
        <div className="howto__right--wrapper">
          <Title title="Zůstat v klidu a dýchat" />
          <p className="howto__paragraph">
            V PraveCiste je zdraví a bezpečnost našich zákazníků a zaměstnanců
            vždy naší nejvyšší prioritou. Náš proces je 100% přátelský k
            sociální vzdálenosti. Naplánujte si službu telefonicky, při příjezdu
            obdržíte textovou zprávu a relaxujte, zatímco my se postaráme o
            zbytek.
          </p>
          <a
            href="tel:+420605476520"
            className="btn btn--cta btn--call"
            target="_blank"
            rel="noopener noreferrer"
            alt={`Link to call`}
          >
            <FaPhoneAlt className="satisfaction__icon" />
            <p className="satisfaction__text">Zavolejte</p>
          </a>
        </div>
      </div>
    </Section>
  )
}

export default HowTo

export const getImages = graphql`
  query {
    phone: file(relativePath: { eq: "cellphone.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    message: file(relativePath: { eq: "messagegirl.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sofa: file(relativePath: { eq: "sofa.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cleaning: file(relativePath: { eq: "cleaning.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    callcenter: file(relativePath: { eq: "callcenter.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
