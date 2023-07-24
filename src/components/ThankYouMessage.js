import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import thank_you_message from "../thankyou.json";

const ThankYouMessage = () => {
  return (
    <div className="thank_you_message">
      <Lottie animationData={thank_you_message} />;
    </div>
  );
};

export default ThankYouMessage;
