import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


function WhatsApp() {
  return (
    <div>
        <a href="https://wa.me/917845518010" title="Chat with us on Whatsapp" className="float d-flex justify-content-center align-items-center" target="_blank">
            <span className="d-flex"><FontAwesomeIcon icon={ faWhatsapp } className="fa-brands fa-whatsapp"></FontAwesomeIcon></span>
        </a>
    </div>
  )
}

export default WhatsApp