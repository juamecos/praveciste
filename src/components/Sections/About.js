import React from "react"

import Section from "../Section"

import aboutServices from "../../constants/aboutServices"
import Card from "../Card"
import uuid from "react-uuid"

import { useStaticQuery, graphql } from "gatsby"

const SectionAbout = () => {
  const {
    firstsection: {
      firstsectiontitle,
      paragraph1section1,
      paragraph2section1,
      icontext1,
      icontext2,
      icontext3,
      icontext4,
    },
  } = useStaticQuery(getSectionText)

  const icontextArray = [icontext1, icontext2, icontext3, icontext4]

  return (
    <Section
      classname="about"
      title={
        firstsectiontitle
          ? firstsectiontitle
          : "Protože si zasloužíte to nejlepší"
      }
    >
      {paragraph1section1 ? (
        <p>{paragraph1section1}</p>
      ) : (
        <p>
          S 20letými zkušenostmi a téměř 100 000 spokojenými zákazníky je
          Perfect Power Wash nejdůvěryhodnější společností na praní v Ohiu.
          Plánování je snadné a vše lze řešit po telefonu.
        </p>
      )}

      {paragraph2section1 ? (
        <p>{paragraph2section1}</p>
      ) : (
        <p>Stačí nám poslat WhatsApp a my se postaráme o zbytek</p>
      )}

      <div className="about__services">
        {aboutServices.map((item, index) => {
          return (
            <Card
              name={icontextArray[index] ? icontextArray[index] : item.name}
              icon={item.icon}
              text=""
              key={uuid()}
              classname="about__card"
            />
          )
        })}
      </div>
    </Section>
  )
}

export default SectionAbout

export const getSectionText = graphql`
  query {
    firstsection: datoCmsFirstsection {
      firstsectiontitle
      paragraph1section1
      paragraph2section1
      icontext1
      icontext2
      icontext3
      icontext4
    }
  }
`
