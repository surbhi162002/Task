import Header from "../components/Header";
import SubscriptionPlanContainer from "../components/SubscriptionPlanContainer";
import SubscriptionFeeContainer from "../components/SubscriptionFeeContainer";
import ContainerLockup from "../components/ContainerLockup";
import Button from '@mui/material/Button';


import "./Login.css";
const Login = () => {
  return (
    <div className="coding-assignment">
      <Header />
      <div className="content-container">
        <img className="back-ground-icon" alt="" src="/back-ground@2x.png" />
        <div className="form">
          <div className="progress-bar">
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">1</div>
              </div>
              <Button className="text-1" variant="text">Sign Up</Button>
            </div>
            <div className="stage-1">
              <div className="icon-1">
                <div className="div">2</div>
              </div>
              <Button className="text-1" variant="text">Subscribe</Button>
            </div>
          </div>
          <div className="form-header">
            <div className="text">Select your subcription plan</div>
          </div>
          <SubscriptionPlanContainer />
          <SubscriptionFeeContainer />
          <div className="button-container">
            <div className="secondary-button">
            <Button className="text3" variant="text color:white">Cancel</Button>
            </div>
            <div className="primary-button">
            <Button className="text3" variant="text color:white">Proceed to pay</Button>
            </div>
          </div>
          <div className="icon-container">
            <div className="razorpay-icon">
              <img
                className="razorpay-icon-child"
                alt=""
                src="/frame-12537@2x.png"
              />
            </div>
          </div>
        </div>
        <ContainerLockup />
      </div>
    </div>
  );
};

export default Login;
