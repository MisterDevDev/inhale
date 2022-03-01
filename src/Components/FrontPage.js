import React, { useState } from "react";
import { motion } from "framer-motion";
import { content, inputs } from "../design";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ForumIcon from "@mui/icons-material/Forum";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Carousel from "./Carousel";
import Testimonials from "./Testimonials";

const FrontPage = () => {
  const [openModal, setOpenModal] = useState( false )
  const navigate = useNavigate();

  return (
    <section className="mainBody">
      <div className={openModal ? 'open-modal' : 'hidden'}>
        <div><button onClick={() => setOpenModal(false)}>X</button></div>
        <Testimonials />
      </div>
        <div className="fp-left">
          <div className="fp-left-wrapper">
            <div className="fp-title">
              <motion.div
                initial="initial"
                animate="animate"
                variants={content}
              >
                <motion.div variants={inputs}>
                  <div className="titlePNG">
                    <img src="https://inhale-breather.s3.us-east-2.amazonaws.com/Text+PNG+(1).png" />
                  </div>
                </motion.div>
                <motion.div variants={inputs}>
                  <h2>#1 IN BREATHING FITNESS TRAINING</h2>
                </motion.div>
                <motion.div variants={inputs}>
                  <div className="fp-buttons">
                    <div id="fp-button-students">
                      <Button
                        style={{ backgroundColor: "rgb(28, 28, 138)" }}
                        variant="contained"
                        size="large"
                        onClick={() => navigate.push("/students")}
                        endIcon={<MonetizationOnIcon />}
                      >
                        Buy Now
                      </Button>
                    </div>
                    <div id="fp-button-campuses">
                      <Button
                        style={{ backgroundColor: "rgb(28, 28, 138)" }}
                        variant="contained"
                        size="large"
                        onClick={() => setOpenModal(!openModal)}
                        endIcon={<ForumIcon />}
                      >
                        Testimonials
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="fp-right">
          <Carousel />
        </div>
      <div>
        
      </div>
    </section>
  );
};

export default FrontPage;
