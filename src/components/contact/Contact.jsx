import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../footer/Footer";
import "./contact.css";
import { GrMail } from "react-icons/gr";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";

const links = {
  leetcode: "https://leetcode.com/adityawaskar03/",
  github: "https://github.com/AdityaWaskar",
  linkedin: "https://www.linkedin.com/in/aditya-waskar-56682b205/",
  gmail: "adityawaskar03@gmail.com",
  hackerrank: "https://www.hackerrank.com/adityawaskar05?hr_r=1",
};

const onclickedEvent = (id) => {
  window.open(links[id], "_blank");
};
const Contact = () => {
  const [message, setMessage] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  const copiedMessage = () => {
    setCopied(true);
    toast.success("copied", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  return (
    <div className="contact" id="contact">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <div className="subsection">
          <div className="form">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email" />
              <textarea
                name=""
                placeholder="Message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Send</button>
              {message && <span>Thanks, I'll replay ASAP :)</span>}
            </form>
          </div>
          <div className="links">
            <CopyToClipboard text={links["gmail"]} onCopy={copiedMessage}>
              <GrMail size={20} />
            </CopyToClipboard>
            <BsLinkedin size={20} onClick={() => onclickedEvent("linkedin")} />
            <SiLeetcode size={20} onClick={() => onclickedEvent("leetcode")} />
            <FaGithubSquare
              size={20}
              onClick={() => onclickedEvent("github")}
            />
            <FaHackerrank
              size={20}
              onClick={() => onclickedEvent("hackerrank")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
