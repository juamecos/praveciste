import React from "react"
import Title from "./Title"

const Section = ({ children, classname, title, message }) => {
  return (
    <section className={`section ${classname}`}>
      <div className="section__container">
        <div className="section__inner">
          <Title title={title} message={message} />
          {children}
        </div>
      </div>
    </section>
  )
}

export default Section
