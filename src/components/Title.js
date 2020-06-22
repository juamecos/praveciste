import React from "react"

const Title = ({ title, message }) => {
  return (
    <div className="title">
      <h2 className="title__title">{title}</h2>
      <h3 className="title__message">{message}</h3>
      <div className="title__underline"></div>
    </div>
  )
}

export default Title
