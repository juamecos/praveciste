import React from "react"

const Banner = ({ text, info, children }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{text}</h1>
      <h2 className="banner__info">{info}</h2>
      {children}
    </div>
  )
}

export default Banner
