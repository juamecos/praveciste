import React from "react"
import priceServices from "../../constants/prices"
const PriceTable = ({ path }) => {
  const route = path
  console.log(route)

  return (
    <div className="prices">
      {priceServices.map((item, index) => {
        return (
          <article className="prices__article" key={index}>
            <h2 className="prices__heading">{item.title}</h2>
            <table className="prices__table">
              <tbody className="prices__body">
                {item.items.map((item, index) => createRow(item, index, route))}
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

const createRow = ({ name, price, priceRegular }, index, route) => {
  return (
    <tr className="prices__row" key={index}>
      <td className="prices__cell--name">
        <h3 className="prices__name">{name}</h3>
      </td>
      <td className="prices__cell--price">
        {route === "/pravidelny" ? (
          <h4 className="prices__price">{unitName(priceRegular)}</h4>
        ) : (
          <h4 className="prices__price">{unitName(price)}</h4>
        )}
      </td>
    </tr>
  )
}

// This function check if unit's last character is a number
//if it is, it makes it superindex

const unitName = (price, route) => {
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

// Set price according to the path as pravidelny prices are dealt ""

// const createPrice = (unit, path) => {
//   path === "/pravidelny" ? (
//     <h4 className="prices__price">"dohodou"</h4>
//   ) : (
//     <h4 className="prices__price">
//       <span>{`${price}`}</span>
//       {unitName(unit)}
//     </h4>
//   )
// }
