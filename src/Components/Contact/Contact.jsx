import "./Contact.css";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import linkedin from "../../assets/linkedin.png";
import location_icon from "../../assets/location_icon.svg";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "222dc648-0bef-4d2e-ab93-5bc9cc55e714");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success! Email sent.");
      event.target.reset(); // Clears inputs on success
    } else {
      console.log("Error details:", data);
      setResult(data.message || "Error submitting form");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1> Let’s Talk </h1>
          <p>
            {" "}
            I am currently available. Feel free to send me message about
            anything that you want me to work on.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=juweanaoffice@gmail.com"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p> juweanaoffice@gmail.com </p>{" "}
              </a>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="" />
              <a
                href="https://www.linkedin.com/in/mahamudha-sultana"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <p> Let’s Connect </p>
              </a>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>01848384622</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p> Mirpur 10, Dhaka-1216 </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name </label>
          <input type="text" placeholder="Enter Your Name" name="name" />
          <label htmlFor="">Enter Your Email</label>
          <input type="email" placeholder="Enter Your Email" name="email" />
          <label htmlFor=""> Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
