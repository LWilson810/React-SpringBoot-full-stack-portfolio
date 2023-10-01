import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillSkype } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          // href="https://www.youtube.com/channel/UCzoBz4EKrLOvm3L4DDNc_pg"
          className="contact youtube"
        // target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>My Youtube link</span>
          </h2>
        </a>

        <a
          href="https://wa.link/bywzv3"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>+381621281469</span>
          </h2>
        </a>

        <a
          href="https://skype.com"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiFillSkype className="icon" />
          <h2>
            skype <span>live:.cid.eac9af80b792922c

            </span>
          </h2>
        </a>

        <a href="#" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>......</span>
          </h2>
        </a>
        <a href="#" className="contact instagram">
          <AiOutlineMail className="icon" />
          <h2>
            email <span>L.Wilson810@outlook.com</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
