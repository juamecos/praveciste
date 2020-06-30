import React from "react"
import priceServices from "../../constants/prices"
const PriceTable = path => {
  console.log(path)

  return (
    <div className="prices">
      {priceServices.map((price, index, path) => {
        return (
          <article className="prices__article" key={index}>
            <h2 className="prices__heading">{price.title}</h2>
            <table className="prices__table">
              <tbody className="prices__body">
                {price.items.map((price, index) => createRow(price, index))}
              </tbody>
            </table>
          </article>
        )
      })}
    </div>
  )
}

export default PriceTable

const createRow = ({ name, price, unit }, index) => {
  // const unitName = isNaN(parseInt(unit.slice(-1)))
  //   ? unit
  //   : console.log("es numero")
  return (
    <tr className="prices__row" key={index}>
      <td className="prices__cell--name">
        <h3 className="prices__name">{name}</h3>
      </td>
      <td className="prices__cell--price">
        <h4 className="prices__price">
          <span>{`${price}`}</span>
          {unitName(unit)}
        </h4>
      </td>
    </tr>
  )
}

// This function check if unit's last character is a number
//if it is, it makes it superindex

const unitName = unit => {
  const lastChar = parseInt(unit.slice(-1))
  const beginning = unit.slice(0, -1)

  if (isNaN(lastChar)) {
    return <span>{` ${unit}`}</span>
  } else {
    return (
      <span>
        {` ${beginning}`}
        <span className="prices__superindex">{lastChar}</span>
      </span>
    )
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
