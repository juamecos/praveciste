import React from "react"

import Section from "../Section"

import aboutServices from "../../constants/aboutServices"
import Card from "../Card"
import uuid from "react-uuid"

const SectionAbout = () => {
  return (
    <Section classname="about" title="Protože si zasloužíte to nejlepší">
      <p>
        S 20letými zkušenostmi a téměř 100 000 spokojenými zákazníky je Perfect
        Power Wash nejdůvěryhodnější společností na praní v Ohiu. Plánování je
        snadné a vše lze řešit po telefonu.
      </p>
      <p>Stačí nám poslat WhatsApp a my se postaráme o zbytek</p>
      <div className="about__services">
        {aboutServices.map(item => {
          return (
            <Card
              name={item.name}
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
