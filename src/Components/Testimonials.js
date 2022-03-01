import React from "react";
import { testimonialsData } from "./data/testimonials";

const Testimonials = ({ closeModal }) => {
  return (
    <div className="open-modal-content">
      <button onClick={() => closeModal()} className="close-button">CLOSE</button>
      <div className="scroll">
        {testimonialsData.map((review) => {
          return (
            <div key={review.id} className="review-container">
              <div>
                <span className="stars">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </span>
                <span className="review-title">{review.title}</span>
              </div>
              <div className="review-body">
                <div style={{color:'#865417'}}>Verified Purchase</div>
                <div className="review-text">{review.text}</div>
              </div>
              <div className="review-bottom">
                <span>Reviewed by</span>
                <span className="review-name">: {review.name}</span>
                <span className="review-date"> on {review.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
