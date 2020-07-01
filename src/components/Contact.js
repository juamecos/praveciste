import React from "react"
import Title from "./Title"
const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__center">
        <Title title="Kontaktujte" message="nás" />
        <form action="" method="POST" className="contact__form">
          <div>
            <label htmlFor="name">jméno</label>
            <input
              type="text"
              name="name"
              id="name"
              className="contact__form__control"
            />
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="contact__form__control"
            />
          </div>
          <div>
            <label htmlFor="message">zpráva</label>
            <textarea
              name="message"
              id="message"
              className="contact__form__control"
              rows="10"
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              value="Odeslat"
              className="btn btn--cta btn--submit"
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
