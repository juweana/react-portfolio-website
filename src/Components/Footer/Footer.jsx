import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import { useState } from "react";

const Footer = () => {
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
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>
            Passionate Full-Stack Developer experienced in building robust,
            end-to-end web solutions using Django.
          </p>
        </div>
        <form onSubmit={onSubmit} className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <button type="submit" className="footer-subscribe">
            Subscribe
          </button>
          <span>{result}</span>
        </form>
      </div>

      <hr />

      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2026 Mahamudha Sultana. All Rights Reserved.
        </p>
      </div>
    </div> // This closes the main .footer wrapper
  );
};

export default Footer;
