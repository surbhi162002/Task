import "./SubscriptionPlanContainer.css";
const SubscriptionPlanContainer = () => {
  return (
    <div className="input-container">
      <div className="text-field-1">
        <img className="radio-button-icon" alt="" src="/radio-button.svg" />
        <div className="text-container">
          <div className="text7">{`12 Months Subscription `}</div>
          <div className="right-text-container">
            <div className="top-text">
              <div className="text8">Total</div>
              <div className="text9">₹99</div>
            </div>
            <div className="bottom-text">
              <div className="text10">₹8</div>
              <div className="text11">/mo</div>
            </div>
          </div>
        </div>
        <div className="tag">
          <div className="offer-expired">Offer expired</div>
        </div>
      </div>
      <div className="text-field-2">
        <img className="radio-button-icon" alt="" src="/radio-button1.svg" />
        <div className="text-container">
          <div className="text7">{`12 Months Subscription `}</div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text13">Total</div>
              <div className="text9">₹179</div>
            </div>
            <div className="bottom-text">
              <div className="text10">₹15</div>
              <div className="text16">/mo</div>
            </div>
          </div>
        </div>
        <div className="tag1">
          <div className="recommended">Recommended</div>
        </div>
      </div>
      <div className="text-field-3">
        <img className="radio-button-icon2" alt="" src="/radio-button2.svg" />
        <div className="text-container2">
          <div className="text7">{`6 Months Subscription `}</div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text13">Total</div>
              <div className="text9">₹149</div>
            </div>
            <div className="bottom-text">
              <div className="text10">₹25</div>
              <div className="text16">/mo</div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-field-3">
        <img className="radio-button-icon2" alt="" src="/radio-button2.svg" />
        <div className="text-container2">
          <div className="text7">{`3 Months Subscription `}</div>
          <div className="left-text-container">
            <div className="top-text">
              <div className="text13">Total</div>
              <div className="text9">₹99</div>
            </div>
            <div className="bottom-text">
              <div className="text10">₹33</div>
              <div className="text16">/mo</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlanContainer;
