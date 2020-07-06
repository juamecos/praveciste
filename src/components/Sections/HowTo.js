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
  const infoObject = useStaticQuery(getInfo)

  const {
    message,
    phone,
    sofa,
    cleaning,
    callcenter,
    thirdSection: {
      titlesection3,
      textimage1,
      textimage2,
      textimage3,
      textimage4,
      textimage5,
      titlesubsection,
      paragraphsection3,
    },
  } = infoObject
  const images = [phone, message, sofa, cleaning, callcenter]
  const textimages = [
    textimage1,
    textimage2,
    textimage3,
    textimage4,
    textimage5,
  ]

  return (
    <Section
      className="howto"
      title={titlesection3 ? titlesection3 : "Jak to funguje"}
      classname="howto"
    >
      <div className="howto__left">
        {images.map((item, index) => (
          <HowToCard
            fluid={item.childImageSharp.fluid}
            text={textimages[index] ? textimages[index] : howToCardText[index]}
            key={index}
          />
        ))}
      </div>
      <div className="howto__right">
        <div className="howto__right--wrapper">
          <Title
            title={
              titlesubsection ? titlesubsection : "Zůstat v klidu a dýchat"
            }
          />
          {paragraphsection3 ? (
            <p className="howto__paragraph">{paragraphsection3}</p>
          ) : (
            <p className="howto__paragraph">
              V PraveCiste je zdraví a bezpečnost našich zákazníků a zaměstnanců
              vždy naší nejvyšší prioritou. Náš proces je 100% přátelský k
              sociální vzdálenosti. Naplánujte si službu telefonicky, při
              příjezdu obdržíte textovou zprávu a relaxujte, zatímco my se
              postaráme o zbytek.
            </p>
          )}
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

export const getInfo = graphql`
  query {
    phone: file(relativePath: { eq: "cellphone.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    message: file(relativePath: { eq: "messagegirl.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    sofa: file(relativePath: { eq: "sofa.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    cleaning: file(relativePath: { eq: "cleaning.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    callcenter: file(relativePath: { eq: "callcenter.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1900) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    thirdSection: datoCmsThirdsection {
      titlesection3
      textimage1
      textimage2
      textimage3
      textimage4
      textimage5
      titlesubsection
      paragraphsection3
    }
  }
`
