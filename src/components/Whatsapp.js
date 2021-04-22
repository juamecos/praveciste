import React from "react"
import { FaWhatsapp } from "react-icons/fa"

const WhatsappButton = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=420731112937&text=Cht%C4%9Bl%20bych%20po%C5%BE%C3%A1dat%20o%20%C3%BAklidovou%20slu%C5%BEbu"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        alt={`Link to Whatsapp`}
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  )
}

export default WhatsappButton
