import React from "react"

const Card = ({ name, icon, text, classname }) => {
  return (
    <div className={`card ${classname}`}>
      <div className="card__inner">
        <div className="card__container">
          <div className="card__icon">{icon}</div>
          <h3 className="card__title">{name}</h3>
          {text ? <p className="card__text">{text}</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Card
