import SectionTag from "./SectionTag";

import { EmailCopy, CopyCheck } from "./Icons";
import { useState } from "react";

const EMAIL = "nammy.manikonda@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyHandler = function () {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    });
  };
  return (
    <section id="contact">
      <SectionTag>Contact Me</SectionTag>
      <h2>Let's talk</h2>
      <p className="contact-text">
        I'm looking for full-stack engineering roles in Bangalore. If you're
        hiring, or just want to talk shop, my inbox is open.
      </p>
      <div className="email-row">
        <span className="email">{EMAIL}</span>
        <button
          className={copied ? "copy-btn copied" : "copy-btn"}
          aria-label="copy email"
          onClick={copyHandler}
        >
          <EmailCopy />
          <CopyCheck />
          <span className="copy-label">
            {copied ? "Copied!" : "Copy Email"}
          </span>
        </button>
      </div>
    </section>
  );
}
