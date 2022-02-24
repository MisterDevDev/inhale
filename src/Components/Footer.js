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
        onClick={() => navigate.push("/students")}
      >
        Buy Now
      </Button>
    </section>
  );
};

export default Footer;
