import React from "react";
import ContentBlock from "../ContentBlock";
import SocialAccounts from "../SocialAccounts";

const styles = {
  content: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    padding: 0,
    margin: 0
  },
  email: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "bold",
    display: "inline-block"
  }
};

const Contact = () => {
  return (
    <ContentBlock backgroundColor="#CFD8DC" color="#004D40" title="Contact">
      <div style={styles.content}>
        <p>
          If you want to work on something together or just connect, please
          reach out!{" "}
          <a
            style={styles.email}
            href="mailto:matthewd.boatman@gmail.com"
            target="_top"
          >
            matthewd.boatman@gmail.com
          </a>
        </p>
      </div>
      <SocialAccounts
          twitter="https://twitter.com/boatmanmd"
          instagram="https://www.instagram.com/mdboatman/"
          linkedin="https://www.linkedin.com/in/mattboatman/"
          github="https://github.com/MattBoatman"
        />
    </ContentBlock>
  );
};

export default Contact;
