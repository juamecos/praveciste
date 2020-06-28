import React from "react"
import { FaPhoneAlt } from "react-icons/fa"

const Satisfaction = () => {
  return (
    <div className="satisfaction">
      <div className="satisfaction__box">
        <h3 className="satisfaction__title">100% spokojenost zaručena</h3>
        <a
          href="tel:+420605476520"
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
