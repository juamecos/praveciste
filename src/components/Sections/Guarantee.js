import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Guarantee = () => {
  const text = useStaticQuery(getText)
  return (
    <div className="satisfaction">
      <div className="satisfaction__box">
        {text.text.titlesection4 ? (
          <h3 className="satisfaction__title">{text.text.titlesection4}</h3>
        ) : (
          <h3 className="satisfaction__title">
            "PraveCiste jsme už několikrát použili." Po dokončení to vždy vypadá
            skvěle. Doporučil by své služby komukoli! “
          </h3>
        )}
      </div>
    </div>
  )
}

export default Guarantee

export const getText = graphql`
  query {
    text: datoCmsForthsection {
      titlesection4
    }
  }
`
