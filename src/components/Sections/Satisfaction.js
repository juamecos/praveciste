import React from "react"
import { FaPhoneAlt } from "react-icons/fa"

import { useStaticQuery, graphql } from "gatsby"

const Satisfaction = () => {
  const {
    titlesection: { titlesection2 },
  } = useStaticQuery(getTitleSection2)
  return (
    <div className="satisfaction">
      <div className="satisfaction__box">
        <h3 className="satisfaction__title">
          {titlesection2 ? titlesection2 : "100% spokojenost zaručena"}
        </h3>
        <a
          href="tel:+420731112937"
          className="btn btn--cta"
          target="_blank"
          rel="noopener noreferrer"
          alt={`Link to call`}
        >
          <FaPhoneAlt className="satisfaction__icon" />
          <p className="satisfaction__text">Zavolejte</p>
        </a>
      </div>
    </div>
  )
}

export default Satisfaction

export const getTitleSection2 = graphql`
  query {
    titlesection: datoCmsSecondsection {
      titlesection2
    }
  }
`
