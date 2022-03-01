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

  const closeModal = () => {
    setOpenModal(false)
  }

  return (
    <section className="mainBody">
      <div className={openModal ? 'open-modal' : 'hidden'}>
        <Testimonials closeModal = { closeModal } />
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
                        onClick={() => location.href= "https://www.amazon.com/Inhale-Respiratory-Trainer-Breathing-Exercise/dp/B091L441KW/ref=sr_1_5?crid=36QXB5CVFJQ2L&keywords=inhale+breather&qid=1646154061&sprefix=inhale+breather%2Caps%2C87&sr=8-5"}
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
