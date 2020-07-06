import React from "react"
import priceServices from "../../constants/prices"
import { useStaticQuery, graphql } from "gatsby"
const PriceTable = ({ path }) => {
  const route = path

  const pricesObject = useStaticQuery(getPrices)
  const pricesArray = Object.entries(pricesObject)
  const services = pricesArray.map(item => item[1].edges[0].node)

  return (
    <div className="prices">
      {services.map((item, index) => {
        return (
          <article className="prices__article" key={index}>
            <h2 className="prices__heading">{item.model.name}</h2>
            <table className="prices__table">
              <tbody className="prices__body">
                {item.items.map((service, index) =>
                  createRow(service, index, route)
                )}
              </tbody>
            </table>
          </article>
        )
      })}
      <article className="prices__disclaimer">
        Všechny ceny jsou uvedeny bez DPH.
      </article>
    </div>
  )
}

export default PriceTable

const createRow = (
  { onetimeprice, priceregular, titleservice },
  index,
  route
) => {
  return (
    <tr className="prices__row" key={index}>
      <td className="prices__cell--name">
        <h3 className="prices__name">{titleservice}</h3>
      </td>
      <td className="prices__cell--price">
        {route === "/pravidelny" ? (
          <h4 className="prices__price">{unitName(priceregular)}</h4>
        ) : (
          <h4 className="prices__price">{unitName(onetimeprice)}</h4>
        )}
      </td>
    </tr>
  )
}

// This function check if unit's last character is a number
//if it is, it makes it superindex

const unitName = price => {
  const lastChar = parseInt(price.slice(-1))
  const beginning = price.slice(0, -1)
  if (!isNaN(lastChar)) {
    return (
      <span>
        {` ${beginning}`}
        <span className="prices__superindex">{lastChar}</span>
      </span>
    )
  } else {
    return <span>{` ${price}`}</span>
  }
}

export const getPrices = graphql`
  query Prices {
    allDatoCmsFloorcleaningservice {
      edges {
        node {
          model {
            name
          }
          items {
            titleservice
            onetimeprice
            priceregular
          }
        }
      }
    }
    allDatoCmsWashingcleaningservice {
      edges {
        node {
          model {
            name
          }
          items {
            titleservice
            onetimeprice
            priceregular
          }
        }
      }
    }
    allDatoCmsCleaningservice {
      edges {
        node {
          model {
            name
          }
          items {
            titleservice
            onetimeprice
            priceregular
          }
        }
      }
    }
    allDatoCmsVacuumservice {
      edges {
        node {
          model {
            name
          }
          items {
            titleservice
            onetimeprice
            priceregular
          }
        }
      }
    }
    allDatoCmsCarpetservice {
      edges {
        node {
          model {
            name
          }
          items {
            titleservice
            onetimeprice
            priceregular
          }
        }
      }
    }
    allDatoCmsUpholsteryservice {
      edges {
        node {
          model {
            name
          }
          items {
            titleservice
            onetimeprice
            priceregular
          }
        }
      }
    }
    allDatoCmsTransportservice {
      edges {
        node {
          model {
            name
            apiKey
          }
          items {
            titleservice
            onetimeprice
            priceregular
          }
        }
      }
    }
  }
`
