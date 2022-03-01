import React from "react";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <section className="flexSpace footer">
      <h2> Start Training Today! </h2>
      <Button
        style={{ backgroundColor: "#ff8c00" }}
        variant="contained"
        size="large"
        onClick={() => location.href= "https://www.amazon.com/Inhale-Respiratory-Trainer-Breathing-Exercise/dp/B091L441KW/ref=sr_1_5?crid=36QXB5CVFJQ2L&keywords=inhale+breather&qid=1646154061&sprefix=inhale+breather%2Caps%2C87&sr=8-5"}
      >
        Buy Now
      </Button>
    </section>
  );
};

export default Footer;
